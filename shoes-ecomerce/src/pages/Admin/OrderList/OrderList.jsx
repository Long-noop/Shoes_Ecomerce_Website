import React, { useEffect, useState } from 'react'
import './OrderList.scss'
import { orderService } from '../../../services/orderService';
import { Link } from 'react-router-dom';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [filters, setFilters] = useState({
        status: '',
        page: 1,
        per_page: 15,
    });
    const [stats, setStats] = useState({
        totalOrders: 0,
        completedOrders: 0,
        pendingOrders: 0,
        cancelledOrders: 0
    });

    useEffect(() => {
        loadOrders();
    }, [filters]);

    useEffect(()=>{
        loadStatisticsData();
    },[])

    const loadStatisticsData = async () => {
        setLoading(true);
        try {
            const response = await orderService.getStatistics();
            if (response.success) {
                const s = response.data;
                setStats({
                    totalOrders: s.total_orders,
                    completedOrders: s.completed_orders,
                    pendingOrders: s.pending_orders,
                    cancelledOrders: s.cancelled_orders
                })
            }
        } catch (error) {
            console.error('Error loading statistics data :', error);
        } finally {
            setLoading(false);
        }
    };

    const loadOrders = async () => {
        setLoading(true);
        try {
            const params = {};
            Object.keys(filters).forEach(key =>{
                if (filters[key]) params[key] = filters[key];
            })
            const response = await orderService.getOrders(params);
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

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await orderService.updateOrderStatus(orderId, newStatus);
            setLoading(true)
            if (response.success) {
                alert('Order status updated successfully');
                loadOrders();
                loadStatisticsData();
            }
        } catch (error) {
            alert(error.message || 'Failed to update order status');
        } finally{
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const badges = {
        pending: 'bg-warning',
        processing: 'bg-info',
        shipped: 'bg-primary',
        completed: 'bg-success',
        cancelled: 'bg-danger',
        };
        return badges[status] || 'bg-secondary';
    };
  return (
    <div className="page-body admin-orders">
        <div className="container-fluid">
            <div className="page-header-custom">
                <h2 className="page-title">Orders List</h2>
                <div className="breadcrumb-custom">Home {'>'} Order List</div>
            </div>

            <div className="stats-row">
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon total"><i className="ti ti-shopping-bag"></i></div>
                        <div>
                            <div className="stat-label">Total Orders</div>
                            <div className="stat-value">{stats.totalOrders}</div>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon active"><i className="ti ti-circle-check"></i></div>
                        <div>
                            <div className="stat-label">Completed Orders</div>
                            <div className="stat-value">{stats.completedOrders}</div>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon banned"><i className="ti ti-circle-x"></i></div>
                        <div>
                            <div className="stat-label">Cancelled Orders</div>
                            <div className="stat-value">{stats.cancelledOrders}</div>
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon new"><i className="ti ti-hourglass"></i></div>
                        <div>
                            <div className="stat-label">Pendding Orders</div>
                            <div className="stat-value">{stats.pendingOrders}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <div className="row g-3">
                    <div className="col-md-9">
                        <select
                        className="form-select"
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
                        >
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button
                        className="btn btn-secondary w-100"
                        onClick={() => setFilters({ status: '', page: 1, per_page: 20 })}
                        >
                        Clear Filters
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="table-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="chart-title">Recent Orders</h3>
                </div>
                {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No orders found</p>
              </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-vcenter">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                {/* <th>Items</th> */}
                                <th>Total</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>
                                        <Link to={`/admin/orders/details/${order.id}`}>
                                        #{order.id}
                                        </Link>
                                    </td>
                                    <td>User #{order.user_id}</td>
                                    <td>
                                        {new Date(order.created_at).toLocaleDateString()}
                                        <br />
                                        <small className="text-muted">
                                        {new Date(order.created_at).toLocaleTimeString()}
                                        </small>
                                    </td>
                                    {/* <td>
                                        {console.log(order)} items
                                    </td> */}
                                    <td>
                                        <strong>${parseFloat(order.total_price).toFixed(2)}</strong>
                                    </td>
                                    <td>
                                        <span className={`badge ${getStatusBadge(order.status)}`} style={{color:"white"}}>
                                        ● {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="btn-list flex-nowrap">
                                        <Link
                                            to={`/admin/orders/details/${order.id}`}
                                            className="btn btn-sm btn-ghost-primary"
                                        >
                                            <i className="ti ti-eye"></i> View
                                        </Link>
                                        {order.status === 'pending' && (
                                            <button
                                            onClick={() => handleStatusChange(order.id, 'processing')}
                                            className="btn btn-sm btn-ghost-info"
                                            >
                                            Process
                                            </button>
                                        )}
                                        {order.status === 'processing' && (
                                            <button
                                            onClick={() => handleStatusChange(order.id, 'completed')}
                                            className="btn btn-sm btn-ghost-primary"
                                            >
                                            Completed
                                            </button>
                                        )}
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
                    <li >
                        <button
                        className={`page-btn ${filters.page === 1 ? 'disabled' : ''}`}
                        onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
                        >
                            <i className="fas fa-chevron-left"></i>Previous
                        </button>
                    </li>
                    {[...Array(pagination.last_page)].map((_, i) => (
                        <li
                        key={i + 1}
                        
                        >
                        <button
                            className={`page-btn ${filters.page === i + 1 ? 'active' : ''}`}
                            onClick={() => setFilters({ ...filters, page: i + 1 })}
                        >
                            {i + 1}
                        </button>
                        </li>
                    ))}
                    <li >
                        <button
                        className={`page-btn ${filters.page === pagination.last_page ? 'disabled' : ''}`}
                        onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
                        >
                        Next<i className="fas fa-chevron-right"></i>
                        </button>
                    </li>
                    </ul>
                </nav>
                )}
            </div>
        </div>
    </div>
  )
}

export default OrderList