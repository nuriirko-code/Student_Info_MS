import React from "react";

function About() {
  const features = [
    { title: "Add Student", description: "Admin can register new students.", icon: "fas fa-user-plus" },
    { title: "View Records", description: "Search and find student data anytime.", icon: "fas fa-users" },
    { title: "Statistics", description: "View student statistics and reports.", icon: "fas fa-chart-bar" }
  ];

  return (
    <>
      <section className="py-16 px-8 text-center" id="about">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl mb-4 text-slate-800">About Us</h2>
          <p className="text-lg mb-12 text-gray-600">
            SIMS helps schools manage student information efficiently.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {features.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded shadow-md">
                <i className={`${item.icon} text-3xl text-blue-500 mb-4`}></i>
                <h3 className="text-xl mb-2 text-slate-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;