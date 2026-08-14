import React, { useEffect, useMemo, useState } from "react";
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
  const [githubStreak, setGithubStreak] = useState({ current: 0, lastUpdated: "" });
  const [streakLoading, setStreakLoading] = useState(true);
  const [streakError, setStreakError] = useState(null);

  // Fetch GitHub streak data
  useEffect(() => {
    const fetchGithubStreak = async () => {
      try {
        setStreakLoading(true);
        // Replace with your actual GitHub username
        const username = "your-github-username";
        
        // Using GitHub GraphQL API to get contribution streak
        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Note: For production, use environment variables for token
            "Authorization": "Bearer YOUR_GITHUB_TOKEN",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.data?.user) {
          setGithubStreak({
            current: data.data.user.contributionsCollection.contributionCalendar.totalContributions || 0,
            lastUpdated: new Date().toLocaleDateString(),
          });
        }
      } catch (error) {
        console.error("Error fetching GitHub streak:", error);
        setStreakError("Failed to load streak data");
        // Set default values on error
        setGithubStreak({ current: 0, lastUpdated: new Date().toLocaleDateString() });
      } finally {
        setStreakLoading(false);
      }
    };

    fetchGithubStreak();
  }, []);

  const metrics = useMemo(() => {
    const total = students.length;
    const present = students.filter((student) => student.status === "Present").length;
    const absent = total - present;
    const classes = new Set(students.map((student) => student.class)).size;

    return { total, present, absent, classes };
  }, [students]);

  const navItems = [
    "Overview",
    "Students",
    "Attendance",
    "Results",
    "Reports",
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 p-6">
      <div className="mx-auto flex max-w-7xl gap-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl bg-slate-900 p-5 text-white shadow-xl md:block">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">SIMS</p>
            <h2 className="mt-2 text-2xl font-semibold">Dashboard</h2>
          </div>

          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-800/70 text-slate-200 hover:bg-slate-800"
                }`}
              >
                <span>{item}</span>
                <span className="text-xs text-slate-300">0{index + 1}</span>
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl bg-slate-800/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick note</p>
            <p className="mt-2 text-sm text-slate-200">Attendance is trending well this week.</p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
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

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-5">
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
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">GitHub Streak 🔥</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">
                {streakLoading ? "..." : githubStreak.current}
              </p>
              {streakError && <p className="mt-2 text-xs text-rose-600">{streakError}</p>}
              {!streakError && <p className="mt-2 text-xs text-slate-400">Updated: {githubStreak.lastUpdated}</p>}
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
        </main>
      </div>
    </div>
  );
}

export default Dashboard;