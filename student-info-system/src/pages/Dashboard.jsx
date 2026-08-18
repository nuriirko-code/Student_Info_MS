import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  // 1. Minimum state data required to calculate numbers
  const [students, setStudents] = useState([
    
  ]);

   //  Individual Input Field State Handlers
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //useEffect alarm clock block to connect your browser port to your Express server port.
  
  React.useEffect(() => {
  // 1. Call your Express server endpoint across port 3000
  fetch('http://localhost:3000/api/students')
    .then((response) => response.json()) // 2. Translate raw text stream into a JSON array object
    .then((realDataFromMongo) => {
      // 3. Fire your state gun to save the real database items into memory!
      setStudents(realDataFromMongo);
    })
    .catch((err) => {
      console.log("Error loading database records:", err);
    });
}, []);

  // The calculations
  const totalStudents = students.length;
  const maleCount = students.filter((s) => s.gender === "Male").length;
  const femaleCount = students.filter((s) => s.gender === "Female").length;

  // 🧮 1. Extract all CGPA text strings, convert them into real floating decimals, and filter out any invalid numbers
const validCgpas = students
  .map((s) => parseFloat(s.cgpa))
  .filter((gpa) => !isNaN(gpa));

// 🧮 2. Calculate the dynamic average
const averageCgpa = validCgpas.length > 0
  ? (validCgpas.reduce((sum, gpa) => sum + gpa, 0) / validCgpas.length).toFixed(2)
  : "N/A";

  // 3. The card configuration array
 const stats = [
  { bg: "bg-emerald-500", icon: "fa-users", label: "Total Students", value: totalStudents },
  { bg: "bg-orange-500", icon: "fa-male", label: "Male Students", value: maleCount },
  { bg: "bg-pink-500", icon: "fa-female", label: "Female Students", value: femaleCount },
  { bg: "bg-amber-500", icon: "fa-chart-line", label: "Average CGPA", value: averageCgpa },
];

const filteredStudents = students.filter((student) => {
  const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
  return fullName.includes(searchTerm.toLowerCase()) || student.id.toLowerCase().includes(searchTerm.toLowerCase())
});


      // 4. Form Submission Machine Function
  function handleAddStudent(e) {
    e.preventDefault(); // Prevents page reload!

    // Package the states into a new single student object
    const packagedStudent = {
      id: studentId,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dept: department,
      level: level,
      cgpa: cgpa
    };

    if(editIndex !== null) {
      // EDIT MODE: Update existing student in database
      const studentId_mongo = students[editIndex]._id;
      fetch(`http://localhost:3000/api/students/${studentId_mongo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(packagedStudent)
      })
      .then(res => res.json())
      .then(() => {
        // Refresh student list from database
        fetch('http://localhost:3000/api/students')
          .then(res => res.json())
          .then(data => setStudents(data));
        setEditIndex(null);
        // Clear form
        setStudentId("");
        setFirstName("");
        setLastName("");
        setGender("");
        setDepartment("");
        setLevel("");
        setCgpa("");
      })
      .catch(err => console.log("Error updating student:", err));
    } else {
      // CREATE MODE: Send new student to database
      fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(packagedStudent)
      })
      .then(res => res.json())
      .then(() => {
        // Refresh student list from database
        fetch('http://localhost:3000/api/students')
          .then(res => res.json())
          .then(data => setStudents(data));
        // Clear form
        setStudentId("");
        setFirstName("");
        setLastName("");
        setGender("");
        setDepartment("");
        setLevel("");
        setCgpa("");
      })
      .catch(err => console.log("Error creating student:", err));
    }
  }

  function handleEditClick(index) {
  const target = students[index];
  setStudentId(target.id);
  setFirstName(target.firstName);
  setLastName(target.lastName);
  setGender(target.gender);
  setDepartment(target.dept);
  setLevel(target.level);
  setCgpa(target.cgpa);
  setEditIndex(index); // Turns edit mode ON
}
    function handleDelete(indexToRemove) {
    const studentId_mongo = students[indexToRemove]._id;
    fetch(`http://localhost:3000/api/students/${studentId_mongo}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      // Refresh student list from database
      fetch('http://localhost:3000/api/students')
        .then(res => res.json())
        .then(data => setStudents(data));
    })
    .catch(err => console.log("Error deleting student:", err));
  }

  // Menu items configuration
  const menuItems = [
    { label: "Dashboard", icon: "fa-home" },
    { label: "Add Student", icon: "fa-user-plus" },
    { label: "View Students", icon: "fa-users" },
    { label: "Logout", icon: "fa-sign-out-alt", isLogout: true }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 🧭 LEFT SIDEBAR COMPONENT */}
      <nav className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white flex flex-col p-4 shadow-xl overflow-y-auto">
        {/* Branding Logo */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 mb-4">
          <i className="fas fa-graduation-cap text-blue-400 text-2xl"></i>
          <span className="text-xl font-bold tracking-wider">SIMS</span>
        </div>
        
        {/* Menu Items */}
        <ul className="space-y-2 flex-1">
          {menuItems.map((item, index) => {
            const sectionId = item.label === "Dashboard" ? "dashboard-section" : item.label === "Add Student" ? "add-section" : "view-section";
            return (
            <li key={index}>
              <button 
                type="button"
                onClick={() => {
                  if (item.isLogout) {
                    // Navigate to homepage on logout
                    navigate('/');
                  } else {
                    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  item.isLogout 
                    ? "text-red-400 hover:bg-red-900/30" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <i className={`fas ${item.icon} w-5 text-center`}></i> 
                <span>{item.label}</span>
              </button>
            </li>
          );
          })}
        </ul>
      </nav>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-8 overflow-auto ml-64">

      {/* DASHBOARD SECTION */}
      <div id="dashboard-section">
      {/* Title */}
      <h2 className="text-xl font-bold text-slate-800 mb-6">Overview Dashboard</h2>
      
      {/* The 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {stats.map((item, index) => (
    <div key={index} className={`${item.bg} rounded-2xl shadow-md p-6 flex items-center justify-between text-white`}>

      <div>
        <p className="text-3xl font-bold">{item.value}</p>
        <h3 className="text-sm font-medium mt-1 opacity-90">{item.label}</h3>
      </div>

      <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center text-xl">
        <i className={`fa ${item.icon}`}></i>
      </div>

    </div>
  ))}
</div>
      </div>

      {/* ADD STUDENT SECTION */}
      <div id="add-section" className="mt-10">
      <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
  <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
    <i className="fas fa-user-plus text-blue-500"></i> Add New Student Profile
  </h2>

  <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-2 gap-5">
    
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">Student ID</label>
      <input type="text" placeholder="SIMS-001" required
       value = {studentId}
       onChange={(e => setStudentId(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
      <input type="text" required
       value = {firstName}
       onChange={(e => setFirstName(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
      <input type="text" required
       value = {lastName}
       onChange={(e => setLastName(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
      <select required
       value = {gender}
       onChange={(e => setGender(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
      <select required
       value = {department}
       onChange={(e => setDepartment(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
        <option value="">Select</option>
        <option>Computer Science</option>
        <option>Information Technology</option>
        <option>Software Engineering</option>
        <option>Business Administration</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
      <select required
       value = {level}
       onChange={(e => setLevel(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
        <option value="">Select</option>
        <option>100</option>
        <option>200</option>
        <option>300</option>
        <option>400</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">CGPA</label>
      <input type="number" step="0.01" min="0" max="4" required
       value = {cgpa}
       onChange={(e => setCgpa(e.target.value))}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>

    <div className="md:col-span-2 flex gap-3 mt-2">
      <button type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md text-sm transition flex items-center gap-2">
        <i className= {editIndex !== null ? "fas-fa-check" : "fas fa-plus"}></i> 
        {editIndex !== null ? "Update student detail" : "Add student"}
      </button>
      <button type="reset"
        className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium px-5 py-2.5 rounded-md text-sm transition flex items-center gap-2">
        <i className="fas fa-redo"></i> Reset
      </button>
    </div>

  </form>
      </section>
      </div>

      {/* VIEW STUDENTS SECTION */}
      <div id="view-section" className="mt-10 overflow-x-auto">
   
   <section className="bg-white rounded-xl border border-slate-200 shadow-sm max-w-6xl overflow-hidden">
  
  {/* 1. This is your existing header block */}
  <div className="p-6 border-b border-slate-100">
    <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
      <i className="fas fa-users text-blue-500"></i> Student Database Records
    </h2>
  </div>

  {/* 📍 PLACE THE SEARCH BAR EXACTLY HERE! */}
  <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
    <div className="relative flex-1 max-w-md">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
        <i className="fas fa-search text-sm"></i>
      </span>
      <input 
        type="text"
        placeholder="Search by student name or identification ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  </div>

 

  <table className="w-full text-left border-collapse">
    
    {/* 1. THE STATIC COLUMN LABELS BAR */}
    <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
      <tr>
        <th className="px-6 py-4">Student ID</th>
        <th className="px-6 py-4">Full Name</th>
        <th className="px-6 py-4">Department & Level</th>
        <th className="px-6 py-4">CGPA</th>
        <th className="px-6 py-4">Actions</th>
      </tr>
    </thead>

    {/* 2. THE DYNAMIC BODY CONTROLLER BOX */}
    <tbody className="divide-y divide-slate-100">
      {filteredStudents.map((student, index) => (
  <tr key={index} className="hover:bg-slate-50 text-sm text-slate-700 transition duration-150">
    <td className="px-6 py-4 font-semibold text-slate-900">{student.id}</td>
    <td className="px-6 py-4 font-medium text-slate-800">{student.firstName} {student.lastName}</td>
    <td className="px-6 py-4 text-slate-600">{student.dept} <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-2 font-medium">Lvl {student.level}</span></td>
    <td className="px-6 py-4 font-bold text-slate-800">{student.cgpa}</td>
    <td className="px-6 py-4">
      
      <div className="flex items-center gap-3">
  
  {/*  BUTTON 1: THE UPDATE CONTROL */}
  <button 
    type="button"
    onClick={() => {
      const actualIndex = students.findIndex(s => s.id === student.id);
      handleEditClick(actualIndex);
    }}
    className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-150"
    title="Update Student Details"
  >
    <i className="fas fa-edit text-sm"></i>
  </button>

  {/* 🗑 BUTTON 2: THE DELETE CONTROL */}
  <button 
    type="button"
    onClick={() => {
      const actualIndex = students.findIndex(s => s.id === student.id);
      handleDelete(actualIndex);
    }}
    className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-md transition-colors duration-150"
    title="Delete Student Profile"
  >
    <i className="fas fa-trash-alt text-sm"></i>
  </button>

</div>
    </td>
  </tr>
))}
    </tbody>

  </table>

  </section>
      </div>

      </div>
    </div>
  );
}

export default Dashboard;