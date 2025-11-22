import React from 'react'
import './User.scss'
const User = () => {
  return (
    <div className="page-body user-management">
          <div className="container-fluid">
              <div className="page-header-custom">
                  <h2 className="page-title mb-1">User Management</h2>
                  <div className="breadcrumb-custom">Home {'>'} Users</div>
              </div>

              <div className="stats-row">
                  <div className="stat-card">
                      <div className="stat-header">
                          <div className="stat-icon total"><i className="ti ti-users"></i></div>
                          <div>
                              <div className="stat-label">Total Users</div>
                              <div className="stat-value">1,245</div>
                          </div>
                      </div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-header">
                          <div className="stat-icon active"><i className="ti ti-user-check"></i></div>
                          <div>
                              <div className="stat-label">Active Users</div>
                              <div className="stat-value">1,189</div>
                          </div>
                      </div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-header">
                          <div className="stat-icon banned"><i className="ti ti-user-x"></i></div>
                          <div>
                              <div className="stat-label">Banned Users</div>
                              <div className="stat-value">56</div>
                          </div>
                      </div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-header">
                          <div className="stat-icon new"><i className="ti ti-user-plus"></i></div>
                          <div>
                              <div className="stat-label">New This Month</div>
                              <div className="stat-value">48</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="table-card">
                  <div className="table-header">
                      <div className="table-title">User List</div>
                      <div className="search-box">
                          <input type="text" className="search-input" placeholder="Search users..."/>
                          <button className="btn-add">
                              <i className="ti ti-plus"></i>
                              Add User
                          </button>
                      </div>
                  </div>

                  <table className="users-table">
                      <thead>
                          <tr>
                              <th><input type="checkbox"/></th>
                              <th>User</th>
                              <th>Phone</th>
                              <th>Role</th>
                              <th>Registered</th>
                              <th>Status</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td><input type="checkbox"/></td>
                              <td>
                                  <div className="user-info">
                                      <img src="https://i.pravatar.cc/150?img=1" className="user-avatar" alt="User"/>
                                      <div>
                                          <div className="user-name">John Smith</div>
                                          <div className="user-email">john.smith@email.com</div>
                                      </div>
                                  </div>
                              </td>
                              <td>+1 234 567 8900</td>
                              <td><span className="role-badge role-admin">Admin</span></td>
                              <td>Nov 10, 2025</td>
                              <td><span className="status-badge status-active">Active</span></td>
                              <td>
                                  <div className="action-btns">
                                      <button className="btn-icon edit">
                                          <i className="ti ti-edit"></i>
                                      </button>
                                      <button className="btn-icon ban">
                                          <i className="ti ti-ban"></i>
                                      </button>
                                      <button className="btn-icon delete">
                                          <i className="ti ti-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td><input type="checkbox"/></td>
                              <td>
                                  <div className="user-info">
                                      <img src="https://i.pravatar.cc/150?img=2" className="user-avatar" alt="User"/>
                                      <div>
                                          <div className="user-name">Sarah Johnson</div>
                                          <div className="user-email">sarah.j@email.com</div>
                                      </div>
                                  </div>
                              </td>
                              <td>+1 234 567 8901</td>
                              <td><span className="role-badge role-user">User</span></td>
                              <td>Nov 12, 2025</td>
                              <td><span className="status-badge status-active">Active</span></td>
                              <td>
                                  <div className="action-btns">
                                      <button className="btn-icon edit">
                                          <i className="ti ti-edit"></i>
                                      </button>
                                      <button className="btn-icon ban">
                                          <i className="ti ti-ban"></i>
                                      </button>
                                      <button className="btn-icon delete">
                                          <i className="ti ti-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td><input type="checkbox"/></td>
                              <td>
                                  <div className="user-info">
                                      <img src="https://i.pravatar.cc/150?img=3" className="user-avatar" alt="User"/>
                                      <div>
                                          <div className="user-name">Michael Brown</div>
                                          <div className="user-email">m.brown@email.com</div>
                                      </div>
                                  </div>
                              </td>
                              <td>+1 234 567 8902</td>
                              <td><span className="role-badge role-user">User</span></td>
                              <td>Nov 08, 2025</td>
                              <td><span className="status-badge status-banned">Banned</span></td>
                              <td>
                                  <div className="action-btns">
                                      <button className="btn-icon edit">
                                          <i className="ti ti-edit"></i>
                                      </button>
                                      <button className="btn-icon ban">
                                          <i className="ti ti-ban"></i>
                                      </button>
                                      <button className="btn-icon delete">
                                          <i className="ti ti-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td><input type="checkbox"/></td>
                              <td>
                                  <div className="user-info">
                                      <img src="https://i.pravatar.cc/150?img=4" className="user-avatar" alt="User"/>
                                      <div>
                                          <div className="user-name">Emily Davis</div>
                                          <div className="user-email">emily.d@email.com</div>
                                      </div>
                                  </div>
                              </td>
                              <td>+1 234 567 8903</td>
                              <td><span className="role-badge role-user">User</span></td>
                              <td>Nov 15, 2025</td>
                              <td><span className="status-badge status-active">Active</span></td>
                              <td>
                                  <div className="action-btns">
                                      <button className="btn-icon edit">
                                          <i className="ti ti-edit"></i>
                                      </button>
                                      <button className="btn-icon ban">
                                          <i className="ti ti-ban"></i>
                                      </button>
                                      <button className="btn-icon delete">
                                          <i className="ti ti-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td><input type="checkbox"/></td>
                              <td>
                                  <div className="user-info">
                                      <img src="https://i.pravatar.cc/150?img=5" className="user-avatar" alt="User"/>
                                      <div>
                                          <div className="user-name">David Wilson</div>
                                          <div className="user-email">d.wilson@email.com</div>
                                      </div>
                                  </div>
                              </td>
                              <td>+1 234 567 8904</td>
                              <td><span className="role-badge role-user">User</span></td>
                              <td>Nov 14, 2025</td>
                              <td><span className="status-badge status-active">Active</span></td>
                              <td>
                                  <div className="action-btns">
                                      <button className="btn-icon edit">
                                          <i className="ti ti-edit"></i>
                                      </button>
                                      <button className="btn-icon ban">
                                          <i className="ti ti-ban"></i>
                                      </button>
                                      <button className="btn-icon delete">
                                          <i className="ti ti-trash"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default User