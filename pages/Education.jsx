import React from "react";

export default function Education() {
  const educationData = [
    {
      id: 1,
      institution: "Mount Zion College of Engineering and Technology",
      degree: "Bachelor of Engineering",
      duration: "2023 — 2027",
      status: "Pursuing",
      dot: "bg-sky-500",
      score: "CGPA: 8.2", // Added CGPA
    },
    {
      id: 2,
      institution: "Shanthi Rani Matric Higher Secondary School",
      degree: "Higher Secondary Education",
      duration: "2021 — 2023",
      status: "Completed",
      dot: "bg-slate-400",
      score: "Percentage: 85%", // Added Percentage
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Soft Background Blurs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200/60 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/60 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Education
          </h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 text-base">
            My academic journey so far
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-14">
          {/* Left Image */}
          <div className="md:w-1/3 w-full">
            <img
              src="me1.jpg"
              alt="Education"
              className="rounded-3xl shadow-lg object-cover w-full"
            />
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 w-full relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200"></div>

            {educationData.map((item) => (
              <div key={item.id} className="relative pl-14 mb-14">
                {/* Dot */}
                <span
                  className={`absolute left-4 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow ${item.dot}`}
                ></span>

                {/* Card */}
                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative">
                  {/* Score in corner */}
                  <span className="absolute bottom-2 right-4 text-sm font-semibold text-slate-600 ">
                    {item.score}
                  </span>

                  <span className="text-xs text-slate-400 font-medium">
                    {item.duration}
                  </span>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mt-2">
                    {item.institution}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.degree} ·{" "}
                    <span className="font-medium">{item.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
