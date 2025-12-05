import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { orderService } from "../../../services/orderService";
import { productService } from "../../../services/productService";
import { userService } from "../../../services/userService";
import { contactService } from "../../../services/contactService";
import { blogService } from "../../../services/blogService";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    totalRevenue: 0,
    todaySales: 0,
    growthRate: 0,
    completedOrders: 0,
    pendingOrders: 0,
    processingOrders: 0,
    shippedOrders: 0,
    cancelledOrders: 0,
    totalContacts: 0,
    unreadContacts: 0,
    activeUsers: 0,
    bannedUsers: 0,
    featuredProducts: 0,
    lowStockProducts: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();

    return () => {
      if (chartInstanceRef.current) {
        try {
          chartInstanceRef.current.destroy();
        } catch (e) {
          console.error("Chart cleanup error:", e);
        }
      }
    };
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Load all data in parallel for better performance
      const [
        ordersRes,
        productsRes,
        usersRes,
        featuredProductsRes,
        allProductsRes,
        contactsRes,
        blogsRes,
      ] = await Promise.all([
        orderService.getOrders({ per_page: 50, page: 1 }),
        productService.getProducts({ per_page: 1 }),
        userService.getUsers({ per_page: 20 }),
        productService.getFeaturedProducts(6),
        productService.getProducts({ per_page: 100 }),
        contactService.getContacts({ per_page: 5 }),
        blogService.getBlogs({ per_page: 5 }),
      ]);

      // Process Orders Data
      if (ordersRes.success) {
        const orders = ordersRes.data || [];
        setRecentOrders(orders.slice(0, 5));

        // Calculate revenue
        const totalRevenue = orders.reduce(
          (sum, order) => sum + parseFloat(order.total_price || 0),
          0
        );

        // Count orders by status
        const statusCounts = {
          completed: orders.filter(
            (o) => o.status === "completed" || o.status === "delivered"
          ).length,
          pending: orders.filter((o) => o.status === "pending").length,
          processing: orders.filter((o) => o.status === "processing").length,
          shipped: orders.filter((o) => o.status === "shipped").length,
          cancelled: orders.filter((o) => o.status === "cancelled").length,
        };

        // Calculate today's sales
        const today = new Date().toISOString().split("T")[0];
        const todayOrders = orders.filter((o) =>
          o.created_at?.startsWith(today)
        );
        const todaySales = todayOrders.reduce(
          (sum, order) => sum + parseFloat(order.total_price || 0),
          0
        );

        // Calculate growth rate (mock calculation based on revenue)
        const avgOrderValue = totalRevenue / (orders.length || 1);
        const growthRate = Math.min(
          Math.round((avgOrderValue / 100) * 10) / 10,
          15
        );

        setStats((prev) => ({
          ...prev,
          totalOrders: ordersRes.pagination?.total || orders.length,
          totalRevenue: totalRevenue,
          todaySales: todaySales,
          growthRate: growthRate,
          ...statusCounts,
          completedOrders: statusCounts.completed,
          pendingOrders: statusCounts.pending,
          processingOrders: statusCounts.processing,
          shippedOrders: statusCounts.shipped,
          cancelledOrders: statusCounts.cancelled,
        }));
      }

      // Process Products Data
      if (productsRes.success) {
        setStats((prev) => ({
          ...prev,
          totalProducts: productsRes.pagination?.total || 0,
        }));
      }

      // Process All Products for stock analysis
      if (allProductsRes.success) {
        const products = allProductsRes.data || [];
        const lowStock = products.filter((p) => (p.stock || 0) < 10).length;
        const featured = products.filter(
          (p) => p.feature === 1 || p.feature === true
        ).length;

        setStats((prev) => ({
          ...prev,
          lowStockProducts: lowStock,
          featuredProducts: featured,
        }));
      }

      // Process Featured Products
      if (featuredProductsRes.success) {
        setFeaturedProducts(featuredProductsRes.data || []);
      }

      // Process Users Data
      if (usersRes.success) {
        const users = usersRes.data || [];
        setTopUsers(users.slice(0, 5));

        const activeUsers = users.filter((u) => u.status === "active").length;
        const bannedUsers = users.filter((u) => u.status === "banned").length;

        setStats((prev) => ({
          ...prev,
          totalUsers: usersRes.pagination?.total || users.length,
          activeUsers: activeUsers,
          bannedUsers: bannedUsers,
        }));
      }

      // Process Contacts Data
      if (contactsRes.success) {
        const contacts = contactsRes.data || [];
        setRecentContacts(contacts);

        const unread = contacts.filter((c) => c.status === "unread").length;

        setStats((prev) => ({
          ...prev,
          totalContacts: contactsRes.pagination?.total || contacts.length,
          unreadContacts: unread,
        }));
      }

      // Process Blogs Data
      if (blogsRes.success) {
        setRecentBlogs(blogsRes.data || []);
      }
    } catch (error) {
      console.error("Error loading dashboard:", error);
    } finally {
      setLoading(false);
      loadChart();
    }
  };

  const loadChart = () => {
    const canvas = chartRef.current;
    if (!canvas) return;

    // Destroy previous chart instance
    if (chartInstanceRef.current) {
      try {
        chartInstanceRef.current.destroy();
      } catch (e) {
        console.error("Chart destroy error:", e);
      }
      chartInstanceRef.current = null;
    }

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(93, 95, 239, 0.3)");
    gradient.addColorStop(1, "rgba(93, 95, 239, 0)");

    // Create monthly sales data
    const monthlyData = [
      stats.totalRevenue * 0.1,
      stats.totalRevenue * 0.12,
      stats.totalRevenue * 0.15,
      stats.totalRevenue * 0.18,
      stats.totalRevenue * 0.22,
      stats.totalRevenue * 0.23,
    ];

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            data: monthlyData,
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
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                return "$" + context.parsed.y.toFixed(2);
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "$" + value.toFixed(0);
              },
            },
          },
        },
      },
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: "badge bg-warning text-dark",
      processing: "badge bg-info text-white",
      shipped: "badge bg-primary text-white",
      completed: "badge bg-success text-white",
      delivered: "badge bg-success text-white",
      cancelled: "badge bg-danger text-white",
    };
    return badges[status] || "badge bg-secondary text-white";
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-fluid">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading dashboard data...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header d-print-none">
        <div className="container-fluid">
          <div className="row g-2 align-items-center">
            <div className="col">
              <div className="page-pretitle">Overview</div>
              <h2 className="page-title">Dashboard</h2>
            </div>
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <Link to="/admin/orders" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-sm me-1"
                  >
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  View All Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Body */}
      <div className="page-body">
        <div className="container-fluid">
          <div className="row row-deck row-cards">
            {/* Stats Cards */}
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Total Revenue</div>
                    <div className="ms-auto lh-1">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        {stats.growthRate}%
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon ms-1"
                        >
                          <path d="M3 17l6 -6l4 4l8 -8" />
                          <path d="M14 7l7 0l0 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <div className="h1 mb-0 me-2">
                      {formatCurrency(stats.totalRevenue)}
                    </div>
                  </div>
                  <div className="text-muted mt-1">
                    {stats.totalOrders} total orders
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="subheader">Total Orders</div>
                  <div className="d-flex align-items-baseline">
                    <div className="h1 mb-3 me-2">{stats.totalOrders}</div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <span className="badge bg-success-lt">
                        ✓ {stats.completedOrders}
                      </span>
                    </div>
                    <div className="col-6">
                      <span className="badge bg-warning-lt">
                        ⏳ {stats.pendingOrders}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="subheader">Products</div>
                  <div className="h1 mb-2">{stats.totalProducts}</div>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-primary-lt">
                      ★ {stats.featuredProducts} featured
                    </span>
                    {stats.lowStockProducts > 0 && (
                      <span className="badge bg-danger-lt">
                        ⚠ {stats.lowStockProducts} low stock
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="subheader">Users & Contacts</div>
                  <div className="h1 mb-2">{stats.totalUsers}</div>
                  <div className="row g-2">
                    <div className="col-6">
                      <small className="text-muted">
                        Active: {stats.activeUsers}
                      </small>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">
                        Contacts: {stats.unreadContacts}/{stats.totalContacts}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Sales Overview</h3>
                </div>
                <div className="card-body" style={{ height: "300px" }}>
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Order Status</h3>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Completed</span>
                      <span className="text-success fw-bold">
                        {stats.completedOrders}
                      </span>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-success"
                        style={{
                          width: `${
                            (stats.completedOrders / stats.totalOrders) * 100 ||
                            0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Processing</span>
                      <span className="text-info fw-bold">
                        {stats.processingOrders}
                      </span>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-info"
                        style={{
                          width: `${
                            (stats.processingOrders / stats.totalOrders) *
                              100 || 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Shipped</span>
                      <span className="text-primary fw-bold">
                        {stats.shippedOrders}
                      </span>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-primary"
                        style={{
                          width: `${
                            (stats.shippedOrders / stats.totalOrders) * 100 || 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Pending</span>
                      <span className="text-warning fw-bold">
                        {stats.pendingOrders}
                      </span>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-warning"
                        style={{
                          width: `${
                            (stats.pendingOrders / stats.totalOrders) * 100 || 0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-muted">Cancelled</span>
                      <span className="text-danger fw-bold">
                        {stats.cancelledOrders}
                      </span>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-danger"
                        style={{
                          width: `${
                            (stats.cancelledOrders / stats.totalOrders) * 100 ||
                            0
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Orders</h3>
                  <div className="ms-auto">
                    <Link to="/admin/orders" className="btn btn-primary btn-sm">
                      View All
                    </Link>
                  </div>
                </div>
                {recentOrders.length === 0 ? (
                  <div className="card-body text-center py-5">
                    <p className="text-muted mb-0">No orders yet</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-vcenter card-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th className="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr key={order.id}>
                            <td>
                              <Link
                                to={`/admin/orders/${order.id}`}
                                className="text-reset"
                              >
                                #{order.id}
                              </Link>
                            </td>
                            <td>User #{order.user_id}</td>
                            <td className="text-muted">
                              {formatDate(order.created_at)}
                            </td>
                            <td className="fw-bold">
                              {formatCurrency(order.total_price)}
                            </td>
                            <td>
                              <span className={getStatusBadge(order.status)}>
                                {order.status}
                              </span>
                            </td>
                            <td>
                              <Link
                                to={`/admin/orders/${order.id}`}
                                className="btn btn-sm btn-ghost-primary"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Products */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Featured Products</h3>
                  <div className="ms-auto">
                    <Link
                      to="/admin/products"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  {featuredProducts.length === 0 ? (
                    <p className="text-muted text-center py-3">
                      No featured products
                    </p>
                  ) : (
                    <div className="row g-3">
                      {featuredProducts.map((product) => (
                        <div key={product.id} className="col-6">
                          <div className="d-flex gap-2">
                            {product.image_url && (
                              <img
                                src={product.image_url}
                                alt={product.name}
                                className="rounded"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                              />
                            )}
                            <div className="flex-fill">
                              <div className="fw-bold text-truncate">
                                {product.name}
                              </div>
                              <div className="text-primary fw-bold">
                                {formatCurrency(product.price)}
                              </div>
                              <small className="text-muted">
                                Stock: {product.stock || 0}
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Contacts */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Contacts</h3>
                  <div className="ms-auto">
                    {stats.unreadContacts > 0 && (
                      <span className="badge bg-danger">
                        {stats.unreadContacts} new
                      </span>
                    )}
                  </div>
                </div>
                <div className="list-group list-group-flush">
                  {recentContacts.length === 0 ? (
                    <div className="list-group-item text-center text-muted py-4">
                      No contacts yet
                    </div>
                  ) : (
                    recentContacts.map((contact) => (
                      <Link
                        key={contact.id}
                        to={`/admin/contacts/${contact.id}`}
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex align-items-center">
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between">
                              <strong>{contact.name}</strong>
                              {contact.status === "unread" && (
                                <span className="badge bg-primary">New</span>
                              )}
                            </div>
                            <small className="text-muted">
                              {contact.email}
                            </small>
                            <div className="text-truncate small">
                              {contact.message}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Recent Blogs */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Blogs</h3>
                  <div className="ms-auto">
                    <Link
                      to="/admin/blogs"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="list-group list-group-flush">
                  {recentBlogs.length === 0 ? (
                    <div className="list-group-item text-center text-muted py-4">
                      No blogs yet
                    </div>
                  ) : (
                    recentBlogs.map((blog) => (
                      <Link
                        key={blog.id}
                        to={`/admin/blogs/${blog.id}`}
                        className="list-group-item list-group-item-action"
                      >
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>{blog.title}</strong>
                            <div className="text-muted small">
                              {formatDate(blog.created_at)}
                            </div>
                          </div>
                          <span
                            className={`badge ${
                              blog.status === "publish"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {blog.status}
                          </span>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Top Users */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recent Users</h3>
                  <div className="ms-auto">
                    <Link
                      to="/admin/users"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-vcenter card-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topUsers.length === 0 ? (
                        <tr>
                          <td
                            colSpan="4"
                            className="text-center text-muted py-3"
                          >
                            No users yet
                          </td>
                        </tr>
                      ) : (
                        topUsers.map((user) => (
                          <tr key={user.id}>
                            <td>
                              <Link
                                to={`/admin/users/${user.id}`}
                                className="text-reset"
                              >
                                {user.first_name} {user.last_name}
                              </Link>
                            </td>
                            <td className="text-muted">{user.email}</td>
                            <td>
                              <span
                                className={`badge ${
                                  user.role === "admin"
                                    ? "bg-primary"
                                    : "bg-secondary"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  user.status === "active"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
