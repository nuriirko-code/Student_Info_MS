import React from "react";

function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Login to System",
      description: "Use admin credentials to securely access your SIMS dashboard.",
    },
    {
      step: "2",
      title: "Manage Student Data",
      description: "Add, edit, or search student records with instant local updates.",
    },
    {
      step: "3",
      title: "Track Performance",
      description: "Monitor school stats and student distribution effortlessly.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 text-center" id="how-it-works">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">How It Works</h2>
        <p className="text-lg mb-12 text-gray-600">
          Get started with SIMS in three simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;