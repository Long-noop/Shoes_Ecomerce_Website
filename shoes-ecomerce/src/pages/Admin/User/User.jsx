import React, { useEffect, useState } from "react";
import "./User.scss";
import { userService } from "../../../services/userService";
import { Link } from "react-router-dom";
const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [filters, setFilters] = useState({
    keyword: "",
    status: "",
    page: 1,
    per_page: 10,
  });
  const [range, setRange] = useState({
    start: 0,
    end: 0,
    showing: 0,
  });

  useEffect(() => {
    if (!pagination) return;

    const total = pagination.total;
    const start = total === 0 ? 0 : filters.per_page * (filters.page - 1) + 1;
    const end = Math.min(filters.page * filters.per_page, total);
    const showing = total === 0 ? 0 : end - start + 1;
    setRange({ start, end, showing });
  }, [filters, pagination]);

  useEffect(() => {
    loadUsers();
  }, [filters]);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params[key] = filters[key];
      });
      const response = await userService.getUsers(params);
      if (response.success) {
        setUsers(response.data);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBanUser = async (userId) => {
    if (!confirm("Are you sure you want to ban this user?")) return;

    try {
      const response = await userService.banUser(userId);
      if (response.success) {
        alert("User banned successfully");
        loadUsers();
      }
    } catch (error) {
      alert(error.message || "Failed to ban user");
    }
  };

  const handleActivateUser = async (userId) => {
    try {
      const response = await userService.activateUser(userId);
      if (response.success) {
        alert("User activated successfully");
        loadUsers();
      }
    } catch (error) {
      alert(error.message || "Failed to activate user");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (
      !confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    )
      return;

    try {
      const response = await userService.deleteUser(userId);
      if (response.success) {
        alert("User deleted successfully");
        loadUsers();
      }
    } catch (error) {
      alert(error.message || "Failed to delete user");
    }
  };

  const getStatusBadge = (status) => {
    return status === "active" ? "active" : "banned";
  };

  const getRoleBadge = (role) => {
    return role === "admin" ? "admin" : "user";
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 1,
    }));
  };

  return (
    <>
      <div class="page-header d-print-none" aria-label="Page header">
        <div class="container-fluid">
          <div className="row g-2 align-items-center">
            <div className="col">
              <div className="page-pretitle">User Management,</div>
              <h2 className="page-title">Admin Dashborad {">"} User List</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body user-management">
        <div className="container-fluid">
          <div className="stats-row">
            <button
              className="btn-link p-0 text-decoration-none"
              onClick={() => handleFilterChange("status", "")}
              style={{ background: "none" }}
            >
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon total">
                    <i className="ti ti-users"></i>
                  </div>
                  <div>
                    <div className="stat-label">Total Users</div>
                    <div className="stat-value">1,245</div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="btn-link p-0 text-decoration-none"
              onClick={() => handleFilterChange("status", "active")}
              style={{ background: "none" }}
            >
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon active">
                    <i className="ti ti-user-check"></i>
                  </div>
                  <div>
                    <div className="stat-label">Active Users</div>
                    <div className="stat-value">1,189</div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="btn-link p-0 text-decoration-none"
              onClick={() => handleFilterChange("status", "banned")}
              style={{ background: "none" }}
            >
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon banned">
                    <i className="ti ti-user-x"></i>
                  </div>
                  <div>
                    <div className="stat-label">Banned Users</div>
                    <div className="stat-value">56</div>
                  </div>
                </div>
              </div>
            </button>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon new">
                  <i className="ti ti-user-plus"></i>
                </div>
                <div>
                  <div className="stat-label">New This Month</div>
                  <div className="stat-value">48</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or email..."
                    value={filters.keyword}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        keyword: e.target.value,
                        page: 1,
                      })
                    }
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={() =>
                      setFilters({ keyword: "", page: 1, per_page: 20 })
                    }
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">User List</h3>
            </div>
            <div className="table-card">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>Registered</th>
                    <th>Status</th>
                    <th colSpan={2} className="text-end">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>#{user.id}</td>
                      <td>
                        <div className="user-info">
                          <img
                            src="https://i.pravatar.cc/150?img=1"
                            className="user-avatar"
                            alt="User"
                          />
                          <div>
                            <div className="user-name">
                              {user.first_name} {user.last_name}
                            </div>
                            <div className="user-email">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`role-badge role-${getRoleBadge(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td>
                        {new Date(user.created_at).toLocaleDateString()}
                        <br />
                        <small>
                          {new Date(user.created_at).toLocaleTimeString()}
                        </small>
                      </td>
                      <td>
                        <span
                          className={`status-badge status-${getStatusBadge(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="d-flex justify-content-end">
                        {user.role !== "admin" && (
                          <div className="action-btns">
                            <button className="btn-icon edit">
                              <i className="ti ti-edit"></i>
                            </button>

                            {user.status === "active" ? (
                              <button
                                className="btn-icon ban"
                                onClick={() => handleBanUser(user.id)}
                              >
                                <i className="ti ti-ban"></i>
                              </button>
                            ) : (
                              <button
                                className="btn-icon ban"
                                onClick={() => handleActivateUser(user.id)}
                              >
                                <i className="ti ti-checkbox"></i>
                              </button>
                            )}

                            <button
                              className="btn-icon delete"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <i className="ti ti-trash"></i>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card-footer">
              <div className="row g-2 justify-content-center justify-content-sm-between">
                {pagination && (
                  <>
                    <div className="col-auto d-flex align-items-center">
                      <p className="m-0 text-secondary">
                        Showing{" "}
                        <strong>
                          {range.start} to {range.end}
                        </strong>{" "}
                        of <strong>{pagination.total} entries</strong>
                      </p>
                    </div>
                    <div className="col-auto">
                      <ul className="pagination m-0 ms-auto">
                        <li className="page-item">
                          <button
                            tabIndex="-1"
                            aria-disabled="true"
                            className={`page-link ${
                              filters.page === 1 ? "disabled" : ""
                            }`}
                            onClick={() =>
                              setFilters({
                                ...filters,
                                page: filters.page - 1,
                              })
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-1"
                            >
                              <path d="M15 6l-6 6l6 6" />
                            </svg>
                          </button>
                        </li>
                        {[...Array(pagination.last_page)].map((_, i) => (
                          <li key={i + 1} className="page-item">
                            <button
                              className={`page-link ${
                                filters.page === i + 1 ? "active" : ""
                              }`}
                              onClick={() =>
                                setFilters({ ...filters, page: i + 1 })
                              }
                            >
                              {i + 1}
                            </button>
                          </li>
                        ))}
                        <li className="page-item">
                          <a
                            className={`page-link ${
                              filters.page === pagination.last_page
                                ? "disabled"
                                : ""
                            }`}
                            onClick={() =>
                              setFilters({
                                ...filters,
                                page: filters.page + 1,
                              })
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-1"
                            >
                              <path d="M9 6l6 6l-6 6" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
