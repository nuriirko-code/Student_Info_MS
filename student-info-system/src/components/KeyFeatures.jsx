import React from "react";

function KeyFeatures() {
  const highlights = [
    {
      icon: "fas fa-bolt",
      title: "Fast & Lightweight",
      description: "Built with React and Tailwind CSS for instant page loads and seamless updates.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure Access",
      description: "Role-based controls ensuring only authorized admins manage student records.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Fully Responsive",
      description: "Designed to look and work perfectly across desktop, tablet, and mobile devices.",
    },
    {
      icon: "fas fa-database",
      title: "Data Integrity",
      description: "Structured state management guaranteeing clean, organized data storage.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-white text-center" id="key-features">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">Key Features</h2>
        <p className="text-lg mb-12 text-gray-600">
          Everything you need to manage your institution's records efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left bg-slate-50"
            >
              <i className={`${item.icon} text-3xl text-blue-500 mb-4 inline-block`}></i>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;