

function Dashboard() {
  return (
    <div className="dashboard-page">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2><i className="fas fa-graduation-cap"></i> SIMS</h2>
        </div>
        <ul className="sidebar-menu">
          <li><a href="#dash-home"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
          <li><a href="#dash-add"><i className="fas fa-user-plus"></i> Add Student</a></li>
          <li><a href="#dash-view"><i className="fas fa-users"></i> View Students</a></li>
        </ul>
      </nav>

      <div className="dashboard-wrapper">
        <header className="dash-header">
          <h1>Admin Dashboard</h1>
        </header>

        <main className="dash-main">
          <section id="dash-home" className="dash-section">
            <h2 className="dash-title">Overview</h2>
            <div className="stats-grid">
              <div className="stat-card blue">
                <i className="fas fa-users"></i>
                <h3>Total Students</h3>
                <p>0</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;