import React, { useState } from "react";

function Dashboard() {
  // 1. Minimum state data required to calculate numbers
  const [students, setStudents] = useState([
    { id: "SIMS-001", firstName: "John", lastName: "Doe", gender: "Male", dept: "Computer Science", level: "300", cgpa: "3.50" },
    { id: "SIMS-002", firstName: "Jane", lastName: "Smith", gender: "Female", dept: "Business Admin", level: "200", cgpa: "3.80" }
  ]);

   //  Individual Input Field State Handlers
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [cgpa, setCgpa] = useState("");

    
  // The calculations
  const totalStudents = students.length;
  const maleCount = students.filter((s) => s.gender === "Male").length;
  const femaleCount = students.filter((s) => s.gender === "Female").length;

  // 3. The card configuration array
  const stats = [
    { color: "text-blue-600 bg-blue-50", icon: "fa-users", label: "Total Students", value: totalStudents },
    { color: "text-green-600 bg-green-50", icon: "fa-male", label: "Male Students", value: maleCount },
    { color: "text-pink-600 bg-pink-50", icon: "fa-female", label: "Female Students", value: femaleCount },
    { color: "text-amber-600 bg-amber-50", icon: "fa-chart-line", label: "Average CGPA", value: "3.65" },
  ];


      // 4. Form Submission Machine Function
  function handleAddStudent(e) {
    e.preventDefault(); // Prevents page reload!

    // Package the states into a new single student object
    const newStudent = {
      id: studentId,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dept: department,
      level: level,
      cgpa: cgpa
    };


       // Update students array with the new student object
    setStudents([...students, newStudent]);

    // Clear out input text boxes on the screen
    setStudentId("");
    setFirstName("");
    setLastName("");
    setGender("");
    setDepartment("");
    setLevel("");
    setCgpa("");
  }

  return (
    // Clean background layout with padding so cards don't touch the screen edges
    <div className="min-h-screen bg-slate-50 p-8">
      
      {/* Title */}
      <h2 className="text-xl font-bold text-slate-800 mb-6">Overview Dashboard</h2>
      
      {/* The 4-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center gap-4">
            
            {/* The Icon Box wrapper */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${item.color}`}>
              <i className={`fas ${item.icon}`}></i>
            </div>
            
            {/* The Text Box items wrapper */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</h3>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">{item.value}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;