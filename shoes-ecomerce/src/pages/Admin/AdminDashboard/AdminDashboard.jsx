import React, { useEffect, useRef } from 'react'
import './AdminDashboard.css'
import Chart from 'chart.js/auto'

const AdminDashboard = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(()=>{
        const canvas = chartRef.current;
        if (!canvas) return;

        // If a previous chart exists, destroy it first
        if (chartInstanceRef.current) {
            try { chartInstanceRef.current.destroy(); } catch(e) { /* ignore */ }
            chartInstanceRef.current = null;
        }

        const ctx = canvas.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(93, 95, 239, 0.3)");
        gradient.addColorStop(1, "rgba(93, 95, 239, 0)");

        // Create and store the chart instance so we can destroy it on cleanup
        chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [
            {
                data: [50, 50, 70, 90, 70, 400],
                borderColor: "#5D5FEF",
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: "#5D5FEF",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
            },
            ],
        },
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
        },
        });

        return () => {
            if (chartInstanceRef.current) {
                try { chartInstanceRef.current.destroy(); } catch(e) { /* ignore */ }
                chartInstanceRef.current = null;
            }
        };
    },[])
  return (
    <div className="page-wrapper">
        <div className="page-body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between mb-3">
                    <div className="page-header">
                        <h2 className="page-title">Dashboard</h2>
                        <div className="text-muted">Home {'>'} Dashboard</div>
                    </div>

                    <div className="me-3">
                        <i className="ti ti-calendar"></i>
                        <span>Feb 16,2022 - Feb 20,2022</span>
                    </div>
                </div>
                
                <div className="row g-3 mb-3">
                    <div className="col-md-4">
                        <div className="stat-card">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="stat-label">Total Oders</div>
                                    <div className="stat-value">$126.500</div>
                                    <div className="stat-change">
                                        <i className="ti ti-trending-up"></i>
                                        <span>34.7%</span>
                                    </div>
                                    <div className="text-muted small mt-1">Compared to Jan 2022</div>
                                </div>
                                <div className="stat-icon">
                                    <i className="ti ti-shopping-cart" style={{ fontSize: "24px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-card">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="stat-label">Active Orders</div>
                                    <div className="stat-value">$126.500</div>
                                    <div className="stat-change">
                                        <i className="ti ti-trending-up"></i>
                                        <span>34.7%</span>
                                    </div>
                                    <div className="text-muted small mt-1">Compared to Jan 2022</div>
                                </div>
                                <div className="stat-icon">
                                    <i className="ti ti-shopping-cart" style={{ fontSize: "24px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-card">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="stat-label">Shipped Orders</div>
                                    <div className="stat-value">$126.500</div>
                                    <div className="stat-change">
                                        <i className="ti ti-trending-up"></i>
                                        <span>34.7%</span>
                                    </div>
                                    <div className="text-muted small mt-1">Compared to Jan 2022</div>
                                </div>
                                <div className="stat-icon">
                                    <i className="ti ti-shopping-cart" style={{ fontSize: "24px" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-lg-8">
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Sale Graph</h3>
                                <div className="chart-tabs">
                                    <button className="chart-tab">WEEKLY</button>
                                    <button className="chart-tab active">MONTHLY</button>
                                    <button className="chart-tab">YEARLY</button>
                                </div>
                            </div>
                            <canvas id="salesChart" ref={chartRef}></canvas>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Best Sellers</h3>
                            </div>
                            <div className="bestsellers-list">
                                <div className="bestseller-item">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" alt="Shoe" className="bestseller-img"/>
                                    <div className="bestseller-info">
                                        <div className="bestseller-name">Adidas Ultra boost</div>
                                        <div className="bestseller-sales">$126.500<br/>999 sales</div>
                                    </div>
                                    <div className="bestseller-price">$126.50</div>
                                </div>
                                <div className="bestseller-item">
                                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100" alt="Shoe" className="bestseller-img"/>
                                    <div className="bestseller-info">
                                        <div className="bestseller-name">Adidas Ultra boost</div>
                                        <div className="bestseller-sales">$126.500<br/>999 sales</div>
                                    </div>
                                    <div className="bestseller-price">$126.50</div>
                                </div>
                                <div className="bestseller-item">
                                    <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100" alt="Shoe" className="bestseller-img"/>
                                    <div className="bestseller-info">
                                        <div className="bestseller-name">Adidas Ultra boost</div>
                                        <div className="bestseller-sales">$126.500<br/>999 sales</div>
                                    </div>
                                    <div className="bestseller-price">$126.50</div>
                                </div>
                            </div>
                            <button className="btn-report w-100 mt-3">REPORT</button>
                        </div>
                    </div>
                </div>

                <div className="table-card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="chart-title">Recent Orders</h3>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-vcenter">
                            <thead>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th>Product</th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Customer Name</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25426</td>
                                    <td>Jan 8th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=1" className="customer-avatar" alt="Avatar"/>
                                            Leo Gouse
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-delivered">● Delivered</span></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25425</td>
                                    <td>Jan 7th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=2" className="customer-avatar" alt="Avatar"/>
                                            Jaxson Korsgaard
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-cancelled">● Cancelled</span></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25424</td>
                                    <td>Jan 6th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=3" className="customer-avatar" alt="Avatar"/>
                                            Talan Botosh
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-delivered">● Delivered</span></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25423</td>
                                    <td>Jan 5th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=4" className="customer-avatar" alt="Avatar"/>
                                            Ryan Philips
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-cancelled">● Cancelled</span></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25422</td>
                                    <td>Jan 4th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=5" className="customer-avatar" alt="Avatar"/>
                                            Emerson Baptista
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-delivered">● Delivered</span></td>
                                    <td>$200.00</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>Adidas Ultra boost</td>
                                    <td>#25421</td>
                                    <td>Jan 2th,2022</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/150?img=6" className="customer-avatar" alt="Avatar"/>
                                            Jaxson Calzoni
                                        </div>
                                    </td>
                                    <td><span className="status-badge status-delivered">● Delivered</span></td>
                                    <td>$200.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default AdminDashboard