import React from 'react'

const Orders = () => {
  return (
    <section id="orders" class="content-section">
                    <h2 class="section-title">My Orders</h2>
                    <p class="section-subtitle">View and manage your order history</p>

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
                            <tr>
                                <td>#ORD-2024-001</td>
                                <td>Oct 25, 2024</td>
                                <td>3 items</td>
                                <td>$250.00</td>
                                <td><span class="order-status status-completed">Completed</span></td>
                                <td><button class="btn-view">View Details</button></td>
                            </tr>
                            <tr>
                                <td>#ORD-2024-002</td>
                                <td>Oct 20, 2024</td>
                                <td>2 items</td>
                                <td>$180.00</td>
                                <td><span class="order-status status-processing">Processing</span></td>
                                <td><button class="btn-view">Track Order</button></td>
                            </tr>
                            <tr>
                                <td>#ORD-2024-003</td>
                                <td>Oct 15, 2024</td>
                                <td>1 item</td>
                                <td>$130.00</td>
                                <td><span class="order-status status-completed">Completed</span></td>
                                <td><button class="btn-view">View Details</button></td>
                            </tr>
                            <tr>
                                <td>#ORD-2024-004</td>
                                <td>Oct 10, 2024</td>
                                <td>4 items</td>
                                <td>$420.00</td>
                                <td><span class="order-status status-cancelled">Cancelled</span></td>
                                <td><button class="btn-view">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
  )
}

export default Orders