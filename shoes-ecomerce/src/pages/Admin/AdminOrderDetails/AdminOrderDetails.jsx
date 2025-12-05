import React, { useEffect, useState } from "react";
// import './AdminOrderDetails.scss'
import { useNavigate, useParams } from "react-router-dom";
import { orderService } from "../../../services/orderService";

const AdminOrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrder();
  }, [id]);

  const loadOrder = async () => {
    setLoading(true);
    try {
      const response = await orderService.getOrder(id);
      if (response.success) {
        setOrder(response.data);
      }
    } catch (error) {
      alert("Failed to load order");
      navigate("/admin/orders");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await orderService.updateOrderStatus(id, newStatus);
      if (response.success) {
        alert("Order status updated successfully");
        loadOrder();
      }
    } catch (error) {
      alert(error.message || "Failed to update order status");
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: "bg-warning",
      processing: "bg-info",
      shipped: "bg-primary",
      completed: "bg-success",
      cancelled: "bg-danger",
    };
    return badges[status] || "bg-secondary";
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };

  if (loading) {
    return (
      <div className="page-body">
        <div className="container-xl">
          <div className="text-center py-5">
            <div className="spinner-border" role="status"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) return null;

  const items = order.items || [];
  const user = order.user || [];

  return (
    <>
      <div class="page-header d-print-none" aria-label="Page header">
        <div class="container-fluid">
          <div className="row g-2 align-items-center">
            <div className="col">
              <div className="page-pretitle">Order Management,</div>
              <h2 className="page-title">
                Admin Dashborad {">"} Order Details
              </h2>
            </div>
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <a
                    onClick={() => navigate("/admin/orders")}
                    className="btn btn-1 btn-dark"
                  >
                    {" "}
                    <i className="ti ti-arrow-left me-3"></i> Back to Orders{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-body admin-order-details">
        <div className="container-fluid">
          <div className="order-header row row-cards">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="order-title">
                      <div className="card-title">
                        Orders ID: #{order.id}
                        <span
                          className={`ms-3 badge ${getStatusBadge(
                            order.status
                          )}`}
                          style={{ color: "white" }}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="ms-auto order-actions">
                      <select
                        className="btn me-3"
                        value={order.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                      >
                        <option selected disabled hidden>
                          Change Status
                        </option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button className="btn btn-primary">
                        <i className="ti ti-printer me-1"></i>
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                  <div className="order-date">
                    <i className="ti ti-calendar"></i>{" "}
                    {new Date(order.created_at).toLocaleDateString()}
                    <br />
                    <small className="text-muted">
                      {new Date(order.created_at).toLocaleTimeString()}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div class="card-body">
                  <div class="card-title">
                    <i className="ti ti-user me-3"></i>Basic Tnfo
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6l0 13"></path>
                      <path d="M12 6l0 13"></path>
                      <path d="M21 6l0 13"></path>
                    </svg>
                    Name:{" "}
                    <strong>
                      {user?.first_name}
                      {user?.last_name}
                    </strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                      <path d="M12 12l0 .01"></path>
                      <path d="M3 13a20 20 0 0 0 18 0"></path>
                    </svg>
                    Phone: <strong>{user?.phone ?? "Not provided"}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    Email: <strong>{user?.email}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                    Joined:{" "}
                    <strong>
                      {new Date(user?.created_at).toLocaleDateString()}
                    </strong>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    Time zone:{" "}
                    <strong>
                      {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div class="card-body">
                  <div class="card-title">
                    <i className="ti ti-shopping-cart me-3"></i>Order Info
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6l0 13"></path>
                      <path d="M12 6l0 13"></path>
                      <path d="M21 6l0 13"></path>
                    </svg>
                    Order ID: <strong>{order?.id}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    Status: <strong className={``}>{order?.status}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                    Payment: <strong>{order?.payment_method ?? "COD"}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                      <path d="M16 3v4"></path>
                      <path d="M8 3v4"></path>
                      <path d="M4 11h16"></path>
                      <path d="M11 15h1"></path>
                      <path d="M12 15v3"></path>
                    </svg>
                    Items: <strong>{order?.items?.length} products</strong>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    Created at:{" "}
                    <strong>
                      {new Date(order?.created_at).toLocaleDateString()}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div class="card-body">
                  <div class="card-title">
                    <i className="ti ti-shopping-cart me-3"></i>Deliver To
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6l0 13"></path>
                      <path d="M12 6l0 13"></path>
                      <path d="M21 6l0 13"></path>
                    </svg>
                    Order ID: <strong>{order?.id}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    Status: <strong className={``}>{order?.status}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                    Payment: <strong>{order?.payment_method ?? "COD"}</strong>
                  </div>
                  <div class="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                      <path d="M16 3v4"></path>
                      <path d="M8 3v4"></path>
                      <path d="M4 11h16"></path>
                      <path d="M11 15h1"></path>
                      <path d="M12 15v3"></path>
                    </svg>
                    Items: <strong>{order?.items?.length} products</strong>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon me-2 text-secondary icon-2"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    Created at:{" "}
                    <strong>
                      {new Date(order?.created_at).toLocaleDateString()}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div class="card-body">
                  <div class="card-title">
                    <i className="ti ti-shopping-bag me-3"></i>Payment Info
                  </div>
                  <div class="form-selectgroup form-selectgroup-boxes d-flex flex-column">
                    <label class="form-selectgroup-item flex-fill">
                      <input
                        type="radio"
                        name="form-payment"
                        value="visa"
                        class="form-selectgroup-input"
                      />
                      <div class="form-selectgroup-label d-flex align-items-center p-3">
                        <div class="me-3">
                          <span class="form-selectgroup-check"></span>
                        </div>
                        <div>
                          <span class="payment payment-provider-visa payment-xs me-2"></span>
                          ending in <strong>7998</strong>
                        </div>
                      </div>
                    </label>
                    <label class="form-selectgroup-item flex-fill">
                      <input
                        type="radio"
                        name="form-payment"
                        value="mastercard"
                        class="form-selectgroup-input"
                        checked="true"
                      />
                      <div class="form-selectgroup-label d-flex align-items-center p-3">
                        <div class="me-3">
                          <span class="form-selectgroup-check"></span>
                        </div>
                        <div>
                          <span class="payment payment-provider-mastercard payment-xs me-2"></span>
                          ending in <strong>1000</strong>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card">
                <div class="card-body">
                  <div class="card-title">
                    <i className="ti ti-shopping-bag me-3"></i>Note
                  </div>
                  <div class="placeholder col-9 mb-3"></div>
                  <div class="placeholder placeholder-xs col-10"></div>
                  <div class="placeholder placeholder-xs col-11"></div>
                  <div class="placeholder placeholder-xs col-10"></div>
                  <div class="placeholder placeholder-xs col-11"></div>
                  <div class="placeholder placeholder-xs col-11"></div>
                  {/* <div class="placeholder placeholder-xs col-11"></div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="col-12">
                    <h1>Order Items</h1>
                  </div>
                  <table class="table table-transparent table-responsive">
                    <thead>
                      <tr>
                        <th class="text-center" style={{ width: "10%" }}>
                          ID
                        </th>
                        <th>Product</th>
                        <th class="text-center" style={{ width: "15%" }}>
                          Qnt
                        </th>
                        <th class="text-end" style={{ width: "15%" }}>
                          Unit
                        </th>
                        <th class="text-end" style={{ width: "15%" }}>
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td class="text-center">{item.product_id}</td>
                          <td class="form-selectgroup-label-content d-flex align-items-center">
                            <img
                              class="avatar me-3"
                              alt="Product"
                              src={item.image_url}
                            />
                            <div>
                              <div class="font-weight-medium">
                                {item.product_name}
                              </div>
                              <div class="text-secondary">
                                {item.category_name}
                              </div>
                            </div>
                          </td>
                          <td class="text-center">{item.quantity}</td>
                          <td class="text-end">{formatCurrency(item.price)}</td>
                          <td class="text-end">{formatCurrency(item.total)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colspan="4" class="strong text-end">
                          Subtotal
                        </td>
                        <td class="text-end">
                          {formatCurrency(order.total_price)}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="4" class="strong text-end">
                          Vat Rate
                        </td>
                        <td class="text-end">{formatCurrency(0)}</td>
                      </tr>
                      <tr>
                        <td colspan="4" class="strong text-end">
                          Vat Due
                        </td>
                        <td class="text-end">{formatCurrency(0)}</td>
                      </tr>
                      <tr>
                        <td
                          colspan="4"
                          class="font-weight-bold text-uppercase text-end"
                        >
                          Total Due
                        </td>
                        <td class="font-weight-bold text-end">
                          {formatCurrency(order.total_price)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="text-secondary text-center mt-5">
                    Thank you very much for doing business with us. We look
                    forward to working with you again!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrderDetails;
