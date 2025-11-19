import React from 'react'

const Addresses = () => {
  return (
    <section id="addresses" className="content-section">
      <h2 className="section-title">My Addresses</h2>
      <p className="section-subtitle">Manage your shipping addresses</p>

      <button className="btn-primary mb-4">
        <i className="fas fa-plus"></i> Add New Address
      </button>

      <div className="row">
        {/* Address 1 */}
        <div className="col-md-6 mb-3">
          <div
            style={{
              backgroundColor: '#f8f8f8',
              borderRadius: '12px',
              padding: '1.5rem',
              position: 'relative'
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#4169e1',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}
            >
              Default
            </span>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Home Address</h4>
            <p style={{ marginBottom: '0.5rem', color: '#666' }}>
              <i className="fas fa-map-marker-alt" style={{ width: '20px' }}></i>
              123 Sneaker Street, District 1
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#666' }}>
              <i className="fas fa-city" style={{ width: '20px' }}></i>
              Ho Chi Minh City, Vietnam
            </p>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              <i className="fas fa-phone" style={{ width: '20px' }}></i>
              +84 123 456 789
            </p>
            <button className="btn-primary" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>
              <i className="fas fa-edit"></i> Edit
            </button>
            <button className="btn-danger" style={{ padding: '0.5rem 1rem' }}>
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>
        </div>

        {/* Address 2 */}
        <div className="col-md-6 mb-3">
          <div
            style={{
              backgroundColor: '#f8f8f8',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Office Address</h4>
            <p style={{ marginBottom: '0.5rem', color: '#666' }}>
              <i className="fas fa-map-marker-alt" style={{ width: '20px' }}></i>
              456 Business Ave, District 7
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#666' }}>
              <i className="fas fa-city" style={{ width: '20px' }}></i>
              Ho Chi Minh City, Vietnam
            </p>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              <i className="fas fa-phone" style={{ width: '20px' }}></i>
              +84 987 654 321
            </p>
            <button className="btn-primary" style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>
              <i className="fas fa-edit"></i> Edit
            </button>
            <button className="btn-danger" style={{ padding: '0.5rem 1rem' }}>
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Addresses
