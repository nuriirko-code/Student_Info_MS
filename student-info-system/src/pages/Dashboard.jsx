
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [students, setStudents] = useState([]);
  
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const menuItems = [
  { link: "#dash-home", icon: "fa-tachometer-alt", label: "Dashboard" },
  { link: "#dash-add", icon: "fa-user-plus", label: "Add Student" },
  { link: "#dash-view", icon: "fa-users", label: "View Students" },
];


const totalStudents = students.length;
  const maleCount = students.filter((s) => s.gender === "Male").length;
  const femaleCount = students.filter((s) => s.gender === "Female").length;
  const avgCgpa =
    totalStudents > 0
      ? (
          students.reduce((acc, curr) => acc + parseFloat(curr.cgpa || 0), 0) /
          totalStudents
        ).toFixed(2)
      : "0.00";

  const stats = [
    { color: "blue", icon: "fa-users", label: "Total Students", value: totalStudents },
    { color: "green", icon: "fa-male", label: "Male", value: maleCount },
    { color: "pink", icon: "fa-female", label: "Female", value: femaleCount },
    { color: "orange", icon: "fa-chart-line", label: "Avg CGPA", value: avgCgpa },
  ];
  // Fetch student data from Express backend on initial load
  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch('http://localhost:5001/students');
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);
   
   
  const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
async function handleDelete(id) {
    await fetch(`http://localhost:5001/students/${id}`, { method: 'DELETE' });
    setStudents(students.filter((s) => s.id !== id));
  }

  function handleEditClick(id) {
    const student = students.find((s) => s.id === id);

    if (!student) return;
    setStudentId(student.id);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setGender(student.gender);
    setDepartment(student.dept);
    setLevel(student.level);
    setCgpa(student.cgpa);
    setEditIndex(id);
  }

 async function handleAddStudent(e) {
    e.preventDefault();

    const studentData = {
      id: studentId,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dept: department,
      level: level,
      cgpa: cgpa
    };

    if (editIndex === null) {
      // Send POST request to Express backend
      const response = await fetch('http://localhost:5001/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData)
      });
      const saved = await response.json();
      setStudents([...students, saved]);
    } else {
      // PUT: Update existing student on backend
      const response = await fetch(`http://localhost:5001/students/${editIndex}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData)
      });
      const updated = await response.json();

      setStudents(students.map((s) => (s.id === editIndex ? updated : s)));
      setEditIndex(null);
    }

    setStudentId("");
    setFirstName("");
    setLastName("");
    setGender("");
    setDepartment("");
    setLevel("");
    setCgpa("");
  }
   
  const filteredStudents = students.filter((s) =>
  s.firstName.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="dashboard-page">
     <nav className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
  <div className="sidebar-header">
    <h2><i className="fas fa-graduation-cap"></i> SIMS</h2>
  </div>
  <ul className="sidebar-menu">
     {menuItems.map((items, index) => (
      <li key={index}>
        <a href={items.link} onClick={() => setIsSidebarOpen(false)}>
          <i className={`fas ${items.icon}`}></i> {items.label}
        </a>
      </li>
    ) ) }

    {/* Logout Button */}
    <li className="logout-item">
      <Link to="/" onClick={() => setIsSidebarOpen(false)}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </Link>
    </li>
  </ul>
</nav>

{/* Overlay backdrop when sidebar is open on mobile */}
{isSidebarOpen && (
  <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
)}

<div className="dashboard-wrapper">
  <header className="dash-header">
    {/* Mobile Sidebar Toggle Button */}
    <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Navigation">
      <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"}`}></i>
    </button>
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

    <section id="dash-add" className="dash-section">
  <h2 className="dash-title">Add New Student</h2>
  <div className="form-card">
    <form  onSubmit={handleAddStudent}>
<div className="form-row">
  <div className="form-group">
    <label>Student ID</label>
    <input
     type="text"
     placeholder="SIMS-001" 
     value = {studentId}
     onChange= {(e) => setStudentId(e.target.value)}
     required 
     /> 
  </div>
  <div className="form-group">
    <label>First Name</label>
    <input 
    type="text"
    value = {firstName}
     onChange= {(e) => setFirstName(e.target.value)}
    required />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input 
    type="text"
     value = {lastName}
     onChange= {(e) => setLastName(e.target.value)} 
    required />
  </div>
</div>

<div className="form-row">
  <div className="form-group">
    <label>Gender</label>
    <select 
    value={gender}
    onChange= {(e) => setGender(e.target.value)}
    required>
      <option value="">Select</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div className="form-group">
    <label>Department</label>
    <select 
     value = {department}
     onChange= {(e) => setDepartment(e.target.value)}
    required>
      <option value="">Select</option>
      <option>Computer Science</option>
      <option>Information Technology</option>
      <option>Business Administration</option>
    </select>
  </div>
  <div className="form-group">
    <label>Level</label>
    <select 
     value = {level}
     onChange= {(e) => setLevel(e.target.value)}
     required>
      <option value="">Select</option>
      <option>100</option>
      <option>200</option>
      <option>300</option>
      <option>400</option>
    </select>
  </div>
</div>
<div className="form-row">
  <div className="form-group">
    <label>CGPA</label>
    <input type="number"
     step="0.01"
      min="0" 
      max="4"
       value = {cgpa}
     onChange= {(e) => setCgpa(e.target.value)}
       required 
       />
  </div>
</div>

<div className="form-buttons">
 

   <button type="submit" className="btn-save">
  <i className={`fas ${editIndex === null ? "fa-plus" : "fa-check"}`}></i>{" "}
  {editIndex === null ? "Add Student" : "Update Student"}
</button>
  <button type="reset" className="btn-reset">
    <i className="fas fa-redo"></i> Reset
  </button>
</div>
    </form>
  </div>
</section>

    <section id="dash-view" className="dash-section">
  <h2 className="dash-title">Student Records</h2>

   <input
  type="text"
  placeholder="Search by name..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="search-input"
/>
  <div className="table-card">
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Level</th>
          <th>CGPA</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredStudents.map((s) => (
    <tr key={s.id}>
      <td>{s.id}</td>
      <td>{s.firstName}</td>
      <td>{s.lastName}</td>
      <td>{s.gender}</td>
      <td>{s.dept}</td>
      <td>{s.level}</td>
      <td>{s.cgpa}</td>
      <td>
  <button onClick={() => handleEditClick(s.id)} className="icon-btn-edit">
    <i className="fas fa-edit"></i>
  </button>
  <button onClick={() => handleDelete(s.id)} className="icon-btn-delete">
    <i className="fas fa-trash"></i>
  </button>
</td>
    </tr>
  ))}
      </tbody>
    </table>
  </div>
</section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;