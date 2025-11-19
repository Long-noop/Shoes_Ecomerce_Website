import React from 'react'

const Security = () => {
  return (
    <section id="security" className="content-section">
      <h2 className="section-title">Security Settings</h2>
      <p className="section-subtitle">Manage your password and security preferences</p>

      <div className="alert alert-success mb-4">
        <strong><i className="fas fa-shield-alt"></i> Account Security:</strong> Your account is protected with a strong password. Last changed 30 days ago.
      </div>

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Change Password</h3>
      <form>
        <div className="form-group">
          <label className="form-label">Current Password</label>
          <input type="password" className="form-control" placeholder="Enter current password" />
        </div>

        <div className="form-group">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" placeholder="Enter new password" />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm New Password</label>
          <input type="password" className="form-control" placeholder="Confirm new password" />
        </div>

        <div style={{ backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Password Requirements:</strong>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Contains at least one number</li>
            <li>Contains at least one special character</li>
          </ul>
        </div>

        <button type="submit" className="btn-primary">Update Password</button>
        <button type="button" className="btn-secondary">Cancel</button>
      </form>

      <hr style={{ margin: '3rem 0', border: '1px solid #f0f0f0' }} />

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Two-Factor Authentication</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8f8f8',
          padding: '1.5rem',
          borderRadius: '12px'
        }}
      >
        <div>
          <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Enable 2FA</h4>
          <p style={{ color: '#666', margin: 0 }}>Add an extra layer of security to your account</p>
        </div>

        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
          <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
          <span
            style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#ccc',
              transition: '.4s',
              borderRadius: '34px'
            }}
          ></span>
        </label>
      </div>

      <hr style={{ margin: '3rem 0', border: '1px solid #f0f0f0' }} />

      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Login History</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Device</th>
            <th>Location</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oct 28, 2024 - 10:30 AM</td>
            <td>Chrome on Windows</td>
            <td>Ho Chi Minh City, VN</td>
            <td>192.168.1.1</td>
          </tr>
          <tr>
            <td>Oct 27, 2024 - 3:15 PM</td>
            <td>Safari on iPhone</td>
            <td>Ho Chi Minh City, VN</td>
            <td>192.168.1.50</td>
          </tr>
          <tr>
            <td>Oct 26, 2024 - 9:00 AM</td>
            <td>Chrome on Windows</td>
            <td>Ho Chi Minh City, VN</td>
            <td>192.168.1.1</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Security
