// src/App.js
import React, { useState, useEffect } from "react";
import "./index.css";
const App = () => {
  const [activeTab, setActiveTab] = useState("final");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate app loading
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // DAILY DIARY REPORTS

  const diaryDates = [
    "June 23",
    "June 25",
    "June 26",
    "June 30",
    "July 01",
    "July 02",
    "July 04",
    "July 07",
    "July 08",
    "July 09",
    "July 10",
    "July 11",
    "July 14",
    "July 15",
    "July 16",
    "July 17",
  ];
  const diaryDays = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Day ${i + 1} Report`,

    link: `/assets/day${i + 1}.pdf`,

    date: diaryDates[i],
  }));
  // Loader Component
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin animation-delay-150"></div>
            <div className="absolute inset-4 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin animation-delay-300"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Loading Training Report
          </h2>
          <p className="text-slate-400 mb-4">
            Abhishek Singh CRN-2315272 URN-2435222
          </p>
          <p className="text-slate-400 mb-4">Preparing your dashboard...</p>
          <div className="w-64 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-slate-500 text-sm mt-2">{progress}%</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans">
      {/* Hero Section */}
      <div className="relative py-16 px-4 md:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Training{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  TR-102 Report
                </span>{" "}
                2025
              </h1>
              <p className="text-slate-300 text-lg mb-6 max-w-lg">
                Comprehensive documentation of my MERN Stack industrial training
                including final report, daily diaries, and project showcase.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* FINAL REPORT PDF LINK - INSERT HERE */}

                <a
                  href="/assets/final-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                >
                  <i className="fas fa-file-pdf mr-2"></i> View Final Report
                </a>

                {/* PROJECT REPOSITORY LINK - INSERT HERE */}

                <a
                  href="https://github.com/yourusername/yourproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                >
                  <i className="fab fa-github mr-2"></i> Project Repository
                </a>

                <a
                  href="https://github.com/yourusername/yourproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center"
                >
                  <i class="fa-solid fa-globe mr-2"></i> Live
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-80 animate-float"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-60 animate-float animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-60 md:h-60 bg-gradient-to-tl from-blue-300 to-cyan-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-2">16</div>
              <div className="text-slate-300">Daily Reports</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-slate-300">Final Report</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-slate-300">Completion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="text-3xl font-bold text-purple-400 mb-2">42</div>
              <div className="text-slate-300">Hours Trained</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b border-slate-700 mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab("final")}
            className={`px-6 py-3 font-medium text-lg whitespace-nowrap ${
              activeTab === "final"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <i className="fas fa-file-alt mr-2"></i> Final Report
          </button>
          <button
            onClick={() => setActiveTab("diary")}
            className={`px-6 py-3 font-medium text-lg whitespace-nowrap ${
              activeTab === "diary"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <i className="fas fa-calendar-alt mr-2"></i> Daily Diary
          </button>
          <button
            onClick={() => setActiveTab("project")}
            className={`px-6 py-3 font-medium text-lg whitespace-nowrap ${
              activeTab === "project"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <i className="fas fa-code-branch mr-2"></i> Project
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === "final" && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">
                    Final Training Report
                  </h2>
                  <p className="text-slate-300 mb-6">
                    Comprehensive documentation of my 6-week MERN Stack
                    industrial training. This report includes project overview,
                    technical implementation, challenges faced, and learning
                    outcomes.
                  </p>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* FINAL REPORT PDF LINKS */}
                    <a
                      href="/assets/final-report.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium flex items-center transition"
                    >
                      <i className="fas fa-eye mr-2"></i> View PDF
                    </a>
                    <a
                      href="/assets/final-report.pdf"
                      download
                      className="bg-slate-700 hover:bg-slate-600 px-5 py-2.5 rounded-lg font-medium flex items-center transition"
                    >
                      <i className="fas fa-download mr-2"></i> Download
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-slate-800 rounded-xl p-4 h-full">
                    {/* FINAL REPORT PDF PREVIEW - INSERT HERE */}
                    <iframe
                      src="/assets/final-report.pdf"
                      className="w-full h-80 md:h-96 rounded-lg"
                      title="Final Report Preview"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "diary" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">16-Day Training Diary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {diaryDays.map((day) => (
                  <div
                    key={day.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg">{day.name}</h3>
                      <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                        {day.date}
                      </span>
                    </div>
                    <div className="bg-slate-800 rounded-lg mb-4 overflow-hidden">
                      {/* DAILY DIARY PDF PREVIEW */}
                      <iframe
                        src={day.link}
                        className="w-full h-40"
                        title={`Day ${day.id} Report Preview`}
                      ></iframe>
                    </div>
                    <div className="flex gap-2">
                      {/* DAILY DIARY PDF LINKS */}
                      {/* Links are set in the diaryDays array above */}
                      <a
                        href={day.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-center py-2 rounded-lg text-sm transition"
                      >
                        View
                      </a>
                      <a
                        href={day.link}
                        download
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg text-sm transition"
                      >
                        <i className="fas fa-download"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "project" && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">
                    Project Repository
                  </h2>
                  <p className="text-slate-300 mb-4">
                    Explore the complete source code, documentation, and project
                    resources on GitHub.
                  </p>

                  <div className="mb-6 p-4 bg-slate-800 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                      <div className="text-sm text-slate-400">
                        github.com/yourusername/project
                      </div>
                    </div>
                    <div className="text-sm font-mono bg-slate-900 p-3 rounded">
                      <div className="text-green-400">
                        $ git clone https://github.com/yourusername/project.git
                      </div>
                      <div className="text-slate-400">
                        # Cloning into 'project'...
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* PROJECT REPOSITORY LINK*/}
                    <a
                      href="https://github.com/yourusername/yourproject"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-lg font-medium flex items-center transition"
                    >
                      <i className="fab fa-github mr-2"></i> GitHub Repository
                    </a>
                    <a
                      href="#"
                      className="bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-lg font-medium flex items-center transition"
                    >
                      <i className="fas fa-book mr-2"></i> Documentation
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-slate-900 rounded-xl p-5 h-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">Project Overview</h3>
                      <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Frontend</span>
                          <span>100%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Backend</span>
                          <span>50%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Database</span>
                          <span>50%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>

                      {/* <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Testing</span>
                          <span>20%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <h4 className="font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                          React
                        </span>
                        <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">
                          Node.js
                        </span>
                        <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                          MongoDB
                        </span>
                        <span className="bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full text-sm">
                          Express
                        </span>
                        <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Training Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-blue-400"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Full Stack Development</h3>
              <p className="text-slate-300">
                Hands-on experience with React, Node.js, Express, and MongoDB
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-purple-400"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Team Collaboration</h3>
              <p className="text-slate-300">
                Agile methodologies and version control with Git
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
              <div className="w-14 h-14 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl text-green-400"></i>
              </div>
              <h3 className="font-bold text-xl mb-2">Project Management</h3>
              <p className="text-slate-300">
                Planning, execution, and documentation of real-world projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Training TR-102 Report 2025
              </h3>
              <p className="text-slate-400">MERN Stack Industrial Training</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Abhishek Singh CRN-2315272
              URN-2435222. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
