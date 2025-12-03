import React, { useEffect, useState } from 'react'
import { orderService } from '../../services/orderService';
import { Link, useParams } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadOrders();
    }, [currentPage]);

    const loadOrders = async () => {
        setLoading(true);
        try {
        const response = await orderService.getOrders({
            page: currentPage,
            per_page: 10,
        });
        if (response.success) {
            setOrders(response.data);
            setPagination(response.pagination);
        }
        } catch (error) {
        console.error('Error loading orders:', error);
        } finally {
        setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const badges = {
        pending: 'warning',
        processing: 'info',
        shipped: 'primary',
        completed: 'success',
        cancelled: 'danger',
        };
        return (
        <span className={`badge bg-${badges[status] || 'secondary'}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        );
    };

    if (loading) {
        return (
        <div className="text-center py-5">
            <div className="spinner-border" role="status"></div>
        </div>
        );
    }

  if(id) {
    return ( <OrderDetails id={id} /> )  
  } else    
    return (
      <section id="orders" class="content-section">
          <h2 class="section-title">My Orders</h2>
          <p class="section-subtitle">View and manage your order history</p>

          {orders.length === 0 ? (
              <div className="card">
                  <div className="card-body text-center py-5">
                      <i className="fas fa-shopping-bag fa-4x text-muted mb-3"></i>
                      <h4>No orders yet</h4>
                      <p className="text-muted">Start shopping to see your orders here</p>
                      <a href="/products" className="btn btn-dark">
                      Browse Products
                      </a>
                  </div>
              </div>
          ) : (
          <table class="orders-table">
              <thead>
                  <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {orders.map(order => (
                      <tr key={order.id}>
                      <td><strong>#{order.id}</strong></td>
                      <td>{new Date(order.created_at).toLocaleDateString()}</td>
                      <td>
                          {order.items ? JSON.parse(order.items).length : 0} items
                      </td>
                      <td>${parseFloat(order.total_price).toFixed(2)}</td>
                      <td>{getStatusBadge(order.status)}</td>
                      <td>
                          <Link to={`details/${order.id}`}
                          className="btn btn-sm btn-outline-dark"
                          >
                            <i className="fas fa-eye"></i>
                          </Link>
                      </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          )}

          {pagination && pagination.last_page > 1 && (
              <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(pagination.last_page)].map((_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === pagination.last_page ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
          )}
      </section>
    )
}

export default Orders