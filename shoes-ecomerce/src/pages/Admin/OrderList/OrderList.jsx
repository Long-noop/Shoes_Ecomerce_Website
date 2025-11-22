import React from 'react'
import './OrderList.scss'
const OrderList = () => {
  return (
    <div className="page-body admin-orders">
        <div className="container-fluid">
            <div className="page-header-custom">
                <h2 className="page-title">Orders List</h2>
                <div className="breadcrumb-custom">Home {'>'} Order List</div>
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
                
                <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <button className="page-btn">...</button>
                    <button className="page-btn">10</button>
                    <button className="page-btn page-btn-next">
                        NEXT
                        <i className="ti ti-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList