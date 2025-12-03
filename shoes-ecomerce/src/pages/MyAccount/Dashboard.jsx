import React, { useEffect, useState } from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { orderService } from '../../services/orderService';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useAuth();
    const [recentOrders, setRecentOrders] = useState([]);
    const [stats, setStats] = useState({
        totalOrders: 0,
        pendingOrders: 0,
        cancelledOrders: 0,
        completedOrders: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadDashBoardData();
    },[]);

    const loadDashBoardData = async () => {
        setLoading(true);
        try {
            const response = await orderService.getOrders();
            setRecentOrders(response.data.slice(0,5));
            const total = response.pagination.total;
            const pending = response.data.filter(o => o.status === 'pending').length;
            const cancelled = response.data.filter(o => o.status === 'cancelled').length;
            const completed = response.data.filter(o => o.status === 'completed').length;
            setStats({ totalOrders: total, pendingOrders: pending, completedOrders: completed, cancelledOrders: cancelled });
        } catch (error) {
            console.error("Error loading dashboard:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
        <div className="text-center py-5">
            <div className="spinner-border" role="status"></div>
        </div>
        );
    }

    const getStatusColor = (status) => {
        const colors = {
            pending: 'warning',
            processing: 'info',
            shipped: 'primary',
            completed: 'success',
            cancelled: 'danger',
        };
        return colors[status] || 'secondary';
    };

  return (
    <section id="dashboard" className="content-section active">
        <h2 className="section-title">Welcome back, {user.last_name}</h2>
        <p className="section-subtitle">Here's what's happening with your account today</p>

        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-shopping-bag"></i></div>
                <div className="stat-number">{stats.totalOrders}</div>
                <div className="stat-label">Total Orders</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-star"></i></div>
                <div className="stat-number">{stats.pendingOrders}</div>
                <div className="stat-label">Pendding Orders</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-gift"></i></div>
                <div className="stat-number">{stats.completedOrders}</div>
                <div className="stat-label">Completed Order</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-ban"></i></div>
                <div className="stat-number">{stats.cancelledOrders}</div>
                <div className="stat-label">Cancelled Orders</div>
            </div>
        </div>

        <div className="alert alert-info">
            <strong>🎉 Member Benefits:</strong> You're a KICKS Plus member! Enjoy free shipping on all orders and exclusive early access to new drops.
        </div>

        <h3 style={{marginTop: "2rem" , marginBottom: "1rem"}}>Recent Orders</h3>
        {recentOrders.length === 0 ? (
            <div className="text-center py-4">
                <p className="text-muted">No orders yet</p>
                <Link to="/products" className="btn btn-dark">
                    Start Shopping
                </Link>
            </div>
        ) : (
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map(order => (
                    <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{new Date(order.created_at).toLocaleDateString()}</td>
                        <td>${parseFloat(order.total_price).toFixed(2)}</td>
                        <td><span className={`order-status bg-${getStatusColor(order.status)}`} style={{color: 'white'}}>{order.status}</span></td>
                        <td><button className="btn btn-sm btn-outline-dark"><i class="far fa-eye"></i></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )}
        
    </section>
  )
}

export default Dashboard