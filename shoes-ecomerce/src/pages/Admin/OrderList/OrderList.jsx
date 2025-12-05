import React, { useEffect, useState } from "react";
// import './OrderList.scss'
import { orderService } from "../../../services/orderService";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    page: 1,
    per_page: 8,
  });
  const [stats, setStats] = useState({
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    cancelledOrders: 0,
  });
  const [range, setRange] = useState({
    start: 0,
    end: 0,
    showing: 0,
  });

  useEffect(() => {
    loadOrders();
  }, [filters]);

  useEffect(() => {
    if (!pagination) return;

    const total = pagination.total;
    const start = total === 0 ? 0 : filters.per_page * (filters.page - 1) + 1;
    const end = Math.min(filters.page * filters.per_page, total);
    const showing = total === 0 ? 0 : end - start + 1;
    setRange({ start, end, showing });
  }, [filters, pagination]);

  useEffect(() => {
    loadStatisticsData();
  }, []);

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
          cancelledOrders: s.cancelled_orders,
        });
      }
    } catch (error) {
      console.error("Error loading statistics data :", error);
    } finally {
      setLoading(false);
    }
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params[key] = filters[key];
      });
      const response = await orderService.getOrders(params);
      if (response.success) {
        setOrders(response.data);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    } finally {
      setLoading(false);
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
  return (
    <>
      <div class="page-header d-print-none" aria-label="Page header">
        <div class="container-fluid">
          <div class="row g-2 align-items-center">
            <div class="col">
              <div className="page-pretitle">Order Management</div>
              <h2 className="page-title">Admin Dashborad {">"} Orders List</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-fluid">
          <div className="row row-cards">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src="https://cdn.dribbble.com/users/844826/screenshots/14553706/media/2be9a4847b939e02702648d058cf2df8.png"
                        alt="Food Deliver UI dashboards"
                        className="rounded"
                      />
                    </div>
                    <div className="col">
                      <h3 className="card-title mb-1">
                        <div class="placeholder placeholder-xs col-11"></div>
                        <div class="placeholder placeholder-xs col-11"></div>
                      </h3>
                      <div class="placeholder placeholder-xs col-11"></div>
                      <div className="mt-3">
                        <div className="row g-2 align-items-center">
                          <div className="col-auto">25%</div>
                          <div className="col">
                            <div className="progress progress-sm">
                              <div class="progress progress-2">
                                <div class="progress-bar progress-bar-indeterminate bg-green"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn-action"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
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
                            className="icon icon-1"
                          >
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src="https://cdn.dribbble.com/users/844826/screenshots/14553706/media/2be9a4847b939e02702648d058cf2df8.png"
                        alt="Food Deliver UI dashboards"
                        className="rounded"
                      />
                    </div>
                    <div className="col">
                      <h3 className="card-title mb-1">
                        <div class="placeholder placeholder-xs col-11"></div>
                        <div class="placeholder placeholder-xs col-11"></div>
                      </h3>
                      <div class="placeholder placeholder-xs col-11"></div>
                      <div className="mt-3">
                        <div className="row g-2 align-items-center">
                          <div className="col-auto">25%</div>
                          <div className="col">
                            <div className="progress progress-sm">
                              <div class="progress progress-2">
                                <div class="progress-bar progress-bar-indeterminate bg-blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn-action"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
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
                            className="icon icon-1"
                          >
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-blue text-white avatar">
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
                          className="icon icon-1"
                        >
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Total Orders</div>
                      <div className="text-secondary">{stats.totalOrders}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-green text-white avatar">
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
                          className="icon icon-1"
                        >
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Completed Orders</div>
                      <div className="text-secondary">
                        {stats.completedOrders}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-red text-white avatar">
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
                          className="icon icon-1"
                        >
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Cancelled Orders</div>
                      <div className="text-secondary">
                        {stats.cancelledOrders}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-yellow text-white avatar">
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
                          className="icon icon-1"
                        >
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Pendding Orders</div>
                      <div className="text-secondary">
                        {stats.pendingOrders}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Orders List</h3>
                </div>
                <div className="card-body border-bottom py-3">
                  <div className="d-flex">
                    <div className="text-secondary">
                      Show
                      <div className="mx-2 d-inline-block">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          value={range.showing}
                          size="3"
                          aria-label="Invoices count"
                        />
                      </div>
                      entries
                    </div>
                    <div className="ms-auto text-secondary">
                      <div className="ms-2 d-inline-block">
                        <select
                          className="form-select"
                          value={filters.status}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              status: e.target.value,
                              page: 1,
                              per_page: 8,
                            })
                          }
                        >
                          <option value="">All Status</option>
                          <option value="pending">Pending</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
                    <table className="table table-selectable card-table table-vcenter text-nowrap datatable">
                      <thead>
                        <tr>
                          <th className="w-1">
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select all invoices"
                            />
                          </th>
                          <th className="w-1">ORDER ID</th>
                          <th>Customer ID</th>
                          <th>Customer </th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Created</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle table-selectable-check"
                                type="checkbox"
                                aria-label="Select invoice"
                              />
                            </td>
                            <td>
                              <span className="text-secondary">
                                #{order.id}
                              </span>
                            </td>
                            <td>
                              <span className="text-secondary">
                                #{order.user_id}
                              </span>
                            </td>
                            <td className="form-selectgroup-label-content d-flex align-items-center">
                              <img
                                src="https://i.pravatar.cc/150?img=1"
                                className="avatar me-3"
                                alt="User"
                              />
                              <div>
                                <div className="font-weight-medium">
                                  {order.first_name}
                                  {order.last_name}
                                </div>
                                <div className="text-secondary">
                                  {order.email}
                                </div>
                              </div>
                            </td>
                            <td>{formatCurrency(order.total_price)}</td>
                            <td>
                              <span
                                className={`badge ${getStatusBadge(
                                  order.status
                                )} me-1`}
                              ></span>{" "}
                              {order.status}
                            </td>
                            <td>
                              {new Date(order.created_at).toLocaleDateString()}
                              <br />
                              <small className="text-muted">
                                {new Date(
                                  order.created_at
                                ).toLocaleTimeString()}
                              </small>
                            </td>
                            <td className="text-start">
                              <span className="dropdown">
                                <button
                                  className="btn dropdown-toggle align-text-top"
                                  data-bs-boundary="viewport"
                                  data-bs-toggle="dropdown"
                                >
                                  Actions
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    to={`/admin/orders/details/${order.id}`}
                                    className="dropdown-item"
                                  >
                                    <i className="ti ti-eye"></i> View
                                  </Link>
                                  <Link
                                    to={`/admin/orders/details/${order.id}`}
                                    className="dropdown-item"
                                  >
                                    <i className="ti ti-square"></i> Update
                                    Status
                                  </Link>
                                </div>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="card-footer">
                  <div className="row g-2 justify-content-center justify-content-sm-between">
                    {pagination && (
                      <>
                        <div className="col-auto d-flex align-items-center">
                          <p className="m-0 text-secondary">
                            Showing{" "}
                            <strong>
                              {range.start} to {range.end}
                            </strong>{" "}
                            of <strong>{pagination.total} entries</strong>
                          </p>
                        </div>
                        <div className="col-auto">
                          <ul className="pagination m-0 ms-auto">
                            <li className="page-item">
                              <button
                                tabIndex="-1"
                                aria-disabled="true"
                                className={`page-link ${
                                  filters.page === 1 ? "disabled" : ""
                                }`}
                                onClick={() =>
                                  setFilters({
                                    ...filters,
                                    page: filters.page - 1,
                                  })
                                }
                              >
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
                                  className="icon icon-1"
                                >
                                  <path d="M15 6l-6 6l6 6" />
                                </svg>
                              </button>
                            </li>
                            {[...Array(pagination.last_page)].map((_, i) => (
                              <li key={i + 1} className="page-item">
                                <button
                                  className={`page-link ${
                                    filters.page === i + 1 ? "active" : ""
                                  }`}
                                  onClick={() =>
                                    setFilters({ ...filters, page: i + 1 })
                                  }
                                >
                                  {i + 1}
                                </button>
                              </li>
                            ))}
                            <li className="page-item">
                              <a
                                className={`page-link ${
                                  filters.page === pagination.last_page
                                    ? "disabled"
                                    : ""
                                }`}
                                onClick={() =>
                                  setFilters({
                                    ...filters,
                                    page: filters.page + 1,
                                  })
                                }
                              >
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
                                  className="icon icon-1"
                                >
                                  <path d="M9 6l6 6l-6 6" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
