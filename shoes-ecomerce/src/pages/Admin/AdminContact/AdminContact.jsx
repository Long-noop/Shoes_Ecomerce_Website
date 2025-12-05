import React, { useEffect, useState } from "react";
import "./AdminContact.scss";
import { contactService } from "../../../services/contactService";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    page: 1,
    per_page: 20,
  });
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadContacts();
  }, [filters]);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params[key] = filters[key];
      });
      const response = await contactService.getContacts(params);
      if (response.success) {
        setContacts(response.data);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewContact = async (contactId) => {
    try {
      const response = await contactService.getContact(contactId);
      if (response.success) {
        setSelectedContact(response.data);
        setShowModal(true);
      }
    } catch (error) {
      alert("Failed to load contact details");
    }
  };

  const handleUpdateStatus = async (contactId, status) => {
    try {
      const response = await contactService.updateStatus(contactId, status);
      if (response.success) {
        alert("Status updated successfully");
        loadContacts();
        if (selectedContact?.id === contactId) {
          setShowModal(false);
        }
      }
    } catch (error) {
      alert(error.message || "Failed to update status");
    }
  };

  const handleDelete = async (contactId) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      const response = await contactService.deleteContact(contactId);
      if (response.success) {
        alert("Contact deleted successfully");
        loadContacts();
      }
    } catch (error) {
      alert(error.message || "Failed to delete contact");
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      unread: "unread",
      pending: "pending",
      responded: "replied",
    };
    return badges[status] || "bg-secondary";
  };

  return (
    <div className="page-body admin-contact">
      <div className="container-fluid">
        <div className="page-header-custom">
          <h2 className="page-title mb-1">Contact Management</h2>
          <div className="breadcrumb-custom">Home {">"} Contacts</div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-7">
                <select
                  className="form-select"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value, page: 1 })
                  }
                >
                  <option value="">All Status</option>
                  <option value="unread">Unread</option>
                  <option value="pending">Read</option>
                  <option value="responded">Responded</option>
                </select>
              </div>
              <div className="filter-group col-lg-4">
                <input type="date" className="filter-input" />
              </div>
              <div className="col-md-1">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() =>
                    setFilters({ status: "", page: 1, per_page: 20 })
                  }
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <button
            className="btn-link p-0 text-decoration-none"
            onClick={() => setFilters({ status: "", page: 1, per_page: 20 })}
            style={{ background: "none" }}
          >
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon total">
                  <i className="ti ti-message"></i>
                </div>
                <div>
                  <div className="stat-label">Total Contacts</div>
                  <div className="stat-value">248</div>
                </div>
              </div>
            </div>
          </button>
          <button
            className="btn-link p-0 text-decoration-none"
            onClick={() =>
              setFilters({ status: "unread", page: 1, per_page: 20 })
            }
            style={{ background: "none" }}
          >
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon unread">
                  <i className="ti ti-mail"></i>
                </div>
                <div>
                  <div className="stat-label">Unread</div>
                  <div className="stat-value">52</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="btn-link p-0 text-decoration-none"
            onClick={() =>
              setFilters({ status: "responded", page: 1, per_page: 20 })
            }
            style={{ background: "none" }}
          >
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon replied">
                  <i className="ti ti-check"></i>
                </div>
                <div>
                  <div className="stat-label">Responded</div>
                  <div className="stat-value">156</div>
                </div>
              </div>
            </div>
          </button>

          <button
            className="btn-link p-0 text-decoration-none"
            onClick={() =>
              setFilters({ status: "pending", page: 1, per_page: 20 })
            }
            style={{ background: "none" }}
          >
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon pending">
                  <i className="ti ti-clock"></i>
                </div>
                <div>
                  <div className="stat-label">Pending</div>
                  <div className="stat-value">40</div>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="table-card">
          <div className="table-header">
            <div className="table-title">Contact List</div>
            <div className="table-actions">
              <button className="btn-action">
                <i className="ti ti-download"></i>
                Export
              </button>
              <button className="btn-action danger">
                <i className="ti ti-trash"></i>
                Delete Selected
              </button>
            </div>
          </div>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : contacts.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No contact messages found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="contacts-table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="selectAll" />
                    </th>
                    <th>Contacting User</th>
                    {/* <th>Subject</th> */}
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>
                        <input type="checkbox" className="row-checkbox" />
                      </td>
                      <td>
                        <div className="contact-name">{contact.name}</div>
                        <div className="contact-email">{contact.email}</div>
                      </td>
                      <td>
                        <div className="contact-message">{contact.message}</div>
                      </td>
                      <td>
                        {new Date(contact.created_at).toLocaleDateString()}
                        <br />
                        <small className="text-muted">
                          {new Date(contact.created_at).toLocaleTimeString()}
                        </small>
                      </td>
                      <td>
                        <span
                          className={`status-badge status-${getStatusBadge(
                            contact.status
                          )}`}
                        >
                          {contact.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-btns">
                          <button
                            className="btn-icon view"
                            onClick={() => handleViewContact(contact.id)}
                          >
                            <i className="ti ti-eye"></i>
                          </button>
                          <button
                            className="btn-icon delete"
                            onClick={() => handleDelete(contact.id)}
                          >
                            <i className="ti ti-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {pagination && pagination.last_page > 1 && (
            <nav className="mt-3">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${
                    filters.page === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setFilters({ ...filters, page: filters.page - 1 })
                    }
                  >
                    Previous
                  </button>
                </li>
                {[...Array(pagination.last_page)].map((_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${
                      filters.page === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setFilters({ ...filters, page: i + 1 })}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    filters.page === pagination.last_page ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setFilters({ ...filters, page: filters.page + 1 })
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {/* Contact Detail Modal */}
          {showModal && selectedContact && (
            <div
              className="modal modal-blur fade show"
              style={{ display: "block" }}
              tabIndex="-1"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <div>{selectedContact.name}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <div>{selectedContact.email}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <div>{selectedContact.subject || "No subject"}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <div className="border p-3 rounded">
                        {selectedContact.message}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Date</label>
                      <div>
                        {new Date(selectedContact.created_at).toLocaleString()}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <div>
                        <span
                          className={`badge ${getStatusBadge(
                            selectedContact.status
                          )}`}
                        >
                          {selectedContact.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => setShowModal(false)}
                      className="btn btn-secondary"
                    >
                      Close
                    </button>
                    {selectedContact.status !== "responded" && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(selectedContact.id, "responded")
                        }
                        className="btn btn-primary"
                      >
                        Mark as Responded
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
