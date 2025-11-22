import React from 'react'
import './AdminContact.scss'
const AdminContact = () => {
  return (
    <div className="page-body admin-contact">
        <div className="container-fluid">
            <div className="page-header-custom">
                <h2 className="page-title mb-1">Contact Management</h2>
                <div className="breadcrumb-custom">Home {'>'} Contacts</div>
            </div>

            <div className="filter-section">
                <div className="filter-row">
                    <div className="filter-group">
                        <label className="filter-label">Search</label>
                        <input type="text" className="filter-input" placeholder="Search by name, email..."/>
                    </div>
                    <div className="filter-group">
                        <label className="filter-label">Status</label>
                        <select className="filter-select">
                            <option value="">All Status</option>
                            <option value="unread">Unread</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label className="filter-label">Date Range</label>
                        <input type="date" className="filter-input"/>
                    </div>
                    <button className="btn-filter">
                        <i className="ti ti-search"></i>
                        Filter
                    </button>
                </div>
            </div>

            <div className="stats-row">
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
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon replied">
                            <i className="ti ti-check"></i>
                        </div>
                        <div>
                            <div className="stat-label">Replied</div>
                            <div className="stat-value">156</div>
                        </div>
                    </div>
                </div>
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

                <div className="table-responsive">
                    <table className="contacts-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" id="selectAll"/></th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" className="row-checkbox"/></td>
                                <td>
                                    <div className="contact-name">John Smith</div>
                                    <div className="contact-email">john.smith@email.com</div>
                                </td>
                                <td>Product Inquiry</td>
                                <td><div className="contact-message">I'm interested in your Adidas Ultra Boost shoes. Can you provide more information about...</div></td>
                                <td>Nov 18, 2025</td>
                                <td><span className="status-badge status-unread">Unread</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon view" onclick="viewContact(1)">
                                            <i className="ti ti-eye"></i>
                                        </button>
                                        <button className="btn-icon delete" onclick="deleteContact(1)">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="row-checkbox"/></td>
                                <td>
                                    <div className="contact-name">Sarah Johnson</div>
                                    <div className="contact-email">sarah.j@email.com</div>
                                </td>
                                <td>Order Status</td>
                                <td><div className="contact-message">Hello, I would like to check the status of my order #25421. It's been 5 days since...</div></td>
                                <td>Nov 17, 2025</td>
                                <td><span className="status-badge status-read">Read</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon view" onclick="viewContact(2)">
                                            <i className="ti ti-eye"></i>
                                        </button>
                                        <button className="btn-icon delete" onclick="deleteContact(2)">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="row-checkbox"/></td>
                                <td>
                                    <div className="contact-name">Michael Brown</div>
                                    <div className="contact-email">m.brown@email.com</div>
                                </td>
                                <td>Return Request</td>
                                <td><div className="contact-message">I need to return the shoes I purchased last week. The size doesn't fit properly...</div></td>
                                <td>Nov 16, 2025</td>
                                <td><span className="status-badge status-replied">Replied</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon view" onclick="viewContact(3)">
                                            <i className="ti ti-eye"></i>
                                        </button>
                                        <button className="btn-icon delete" onclick="deleteContact(3)">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="row-checkbox"/></td>
                                <td>
                                    <div className="contact-name">Emily Davis</div>
                                    <div className="contact-email">emily.d@email.com</div>
                                </td>
                                <td>Partnership Inquiry</td>
                                <td><div className="contact-message">Our company is interested in establishing a partnership for bulk orders. Could we...</div></td>
                                <td>Nov 15, 2025</td>
                                <td><span className="status-badge status-unread">Unread</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon view" onclick="viewContact(4)">
                                            <i className="ti ti-eye"></i>
                                        </button>
                                        <button className="btn-icon delete" onclick="deleteContact(4)">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="row-checkbox"/></td>
                                <td>
                                    <div className="contact-name">David Wilson</div>
                                    <div className="contact-email">d.wilson@email.com</div>
                                </td>
                                <td>Technical Support</td>
                                <td><div className="contact-message">I'm having trouble with the payment process on your website. Every time I try to...</div></td>
                                <td>Nov 14, 2025</td>
                                <td><span className="status-badge status-read">Read</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon view" onclick="viewContact(5)">
                                            <i className="ti ti-eye"></i>
                                        </button>
                                        <button className="btn-icon delete" onclick="deleteContact(5)">
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <button className="page-btn">5</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminContact