import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialStudents = [
  { id: "S001", name: "Amina Yusuf", class: "Form 1", status: "Present", score: 88 },
  { id: "S002", name: "Kofi Mensah", class: "Form 2", status: "Absent", score: 74 },
  { id: "S003", name: "Nina Adamu", class: "Form 3", status: "Present", score: 91 },
  { id: "S004", name: "Josephine Doe", class: "Form 1", status: "Present", score: 82 },
  { id: "S005", name: "David Okoro", class: "Form 2", status: "Absent", score: 69 },
];

function Dashboard() {
  const [students] = useState(initialStudents);

  const metrics = useMemo(() => {
    const total = students.length;
    const present = students.filter((student) => student.status === "Present").length;
    const absent = total - present;
    const classes = new Set(students.map((student) => student.class)).size;

    return { total, present, absent, classes };
  }, [students]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-xl sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Admin dashboard</p>
            <h1 className="text-3xl font-semibold tracking-tight">Student Information Management</h1>
            <p className="mt-2 text-slate-600">Review student stats, attendance, and recent records.</p>
          </div>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Sign out
          </Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Total students</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{metrics.total}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Classes</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{metrics.classes}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Present today</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{metrics.present}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Absent today</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{metrics.absent}</p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Recent students</h2>
              <p className="mt-1 text-sm text-slate-500">This table shows the latest student records in the system.</p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
              Add student
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Class</th>
                  <th className="px-4 py-3 font-medium">Attendance</th>
                  <th className="px-4 py-3 font-medium">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50">
                    <td className="px-4 py-4 text-slate-700">{student.id}</td>
                    <td className="px-4 py-4 text-slate-700">{student.name}</td>
                    <td className="px-4 py-4 text-slate-700">{student.class}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          student.status === "Present"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-700">{student.score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;