


function Dashboard() {

  const menuItems = [
  { link: "#dash-home", icon: "fa-tachometer-alt", label: "Dashboard" },
  { link: "#dash-add", icon: "fa-user-plus", label: "Add Student" },
  { link: "#dash-view", icon: "fa-users", label: "View Students" },
];


const stats = [
  { color: "blue", icon: "fa-users", label: "Total Students", value: "0" },
  { color: "green", icon: "fa-male", label: "Male", value: "0" },
  { color: "pink", icon: "fa-female", label: "Female", value: "0" },
  { color: "orange", icon: "fa-chart-line", label: "CGPA", value: "0.00" },
];

  return (
    <div className="dashboard-page">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2><i className="fas fa-graduation-cap"></i> SIMS</h2>
        </div>
        <ul className="sidebar-menu">
         
           {menuItems.map((items, index) => (
            <li key={index}>
              <a href={items.link}>
                <i className={`fas ${items.icon}`}></i> {items.label}
              </a>
            </li>
          ) ) }
        
          

          
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
           {stats.map((item, index) => (
    <div key={index} className={`stat-card ${item.color}`}>
      <i className={`fas ${item.icon}`}></i>
      <h3>{item.label}</h3>
      <p>{item.value}</p>
    </div>
  ))}
</div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;