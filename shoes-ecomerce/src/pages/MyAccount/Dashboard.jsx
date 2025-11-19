import React from 'react'

const Dashboard = () => {
  return (
    <section id="dashboard" class="content-section active">
                    <h2 class="section-title">Welcome back, John!</h2>
                    <p class="section-subtitle">Here's what's happening with your account today</p>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon"><i class="fas fa-shopping-bag"></i></div>
                            <div class="stat-number">24</div>
                            <div class="stat-label">Total Orders</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon"><i class="fas fa-heart"></i></div>
                            <div class="stat-number">12</div>
                            <div class="stat-label">Wishlist Items</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon"><i class="fas fa-star"></i></div>
                            <div class="stat-number">8</div>
                            <div class="stat-label">Reviews</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon"><i class="fas fa-gift"></i></div>
                            <div class="stat-number">450</div>
                            <div class="stat-label">Points</div>
                        </div>
                    </div>

                    <div class="alert alert-info">
                        <strong>🎉 Member Benefits:</strong> You're a KICKS Plus member! Enjoy free shipping on all orders and exclusive early access to new drops.
                    </div>

                    <h3 style={{marginTop: "2rem" , marginBottom: "1rem"}}>Recent Orders</h3>
                    <table class="orders-table">
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
                            <tr>
                                <td>#ORD-2024-001</td>
                                <td>Oct 25, 2024</td>
                                <td>$250.00</td>
                                <td><span class="order-status status-completed">Completed</span></td>
                                <td><button class="btn-view">View</button></td>
                            </tr>
                            <tr>
                                <td>#ORD-2024-002</td>
                                <td>Oct 20, 2024</td>
                                <td>$180.00</td>
                                <td><span class="order-status status-processing">Processing</span></td>
                                <td><button class="btn-view">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
  )
}

export default Dashboard