import { useMemo, useState } from "react";
import "./App.css";

const opportunities = [
  {
    id: 1,
    company: "Infosys",
    role: "Software Engineer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹4.5–7 LPA",
    skills: ["Java", "Python", "SQL", "OOP"],
    deadline: "30 Oct 2026",
    description:
      "Work on software development, application maintenance and enterprise technology solutions.",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Graduate Engineer Trainee",
    location: "Hyderabad, Telangana",
    mode: "On-site",
    type: "Full-time",
    salary: "₹4–6 LPA",
    skills: ["Java", "SQL", "Python"],
    deadline: "5 Nov 2026",
    description:
      "Entry-level engineering opportunity for fresh graduates interested in software development.",
  },
  {
    id: 3,
    company: "Infosys",
    role: "AI/ML Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹15,000/month",
    skills: ["Python", "Machine Learning", "SQL"],
    deadline: "15 Nov 2026",
    description:
      "Internship opportunity focused on Python, data processing and machine learning projects.",
  },

  {
    id: 4,
    company: "Wipro",
    role: "Python Developer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹4–6 LPA",
    skills: ["Python", "SQL", "APIs"],
    deadline: "10 Nov 2026",
    description:
      "Develop and maintain Python-based applications and APIs.",
  },
  {
    id: 5,
    company: "Wipro",
    role: "Graduate Engineer",
    location: "Hyderabad, Telangana",
    mode: "On-site",
    type: "Full-time",
    salary: "₹4.2–6 LPA",
    skills: ["Java", "Python", "SQL"],
    deadline: "18 Nov 2026",
    description:
      "Graduate role for candidates interested in enterprise software development.",
  },

  {
    id: 6,
    company: "Tata Consultancy Services (TCS)",
    role: "Software Developer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹4.5–7 LPA",
    skills: ["Java", "Python", "SQL"],
    deadline: "20 Nov 2026",
    description:
      "Software development opportunity for graduates interested in enterprise technology.",
  },
  {
    id: 7,
    company: "Tata Consultancy Services (TCS)",
    role: "Data Analyst Intern",
    location: "Hyderabad, Telangana",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹15,000/month",
    skills: ["Python", "SQL", "Excel"],
    deadline: "25 Nov 2026",
    description:
      "Data analytics internship involving SQL, Python and business data.",
  },

  {
    id: 8,
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹5–8 LPA",
    skills: ["Java", "Python", "SQL", "Cloud"],
    deadline: "28 Nov 2026",
    description:
      "Entry-level software engineering opportunity working on technology solutions.",
  },

  {
    id: 9,
    company: "IBM",
    role: "AI/ML Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹20,000/month",
    skills: ["Python", "Machine Learning", "AI"],
    deadline: "30 Nov 2026",
    description:
      "AI and machine learning internship for students and recent graduates.",
  },

  {
    id: 10,
    company: "Microsoft",
    role: "Software Engineering Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹40,000/month",
    skills: ["C++", "Python", "DSA"],
    deadline: "5 Dec 2026",
    description:
      "Software engineering internship focused on programming and problem solving.",
  },

  {
    id: 11,
    company: "Google",
    role: "Software Engineering Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹50,000/month",
    skills: ["Python", "Java", "DSA"],
    deadline: "10 Dec 2026",
    description:
      "Software engineering internship opportunity for students with strong programming skills.",
  },

  {
    id: 12,
    company: "Oracle",
    role: "Java Developer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹6–9 LPA",
    skills: ["Java", "SQL", "OOP"],
    deadline: "12 Dec 2026",
    description:
      "Java development role involving enterprise applications and databases.",
  },

  {
    id: 13,
    company: "SAP",
    role: "Software Developer",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Full-time",
    salary: "₹6–10 LPA",
    skills: ["Java", "SQL", "Cloud"],
    deadline: "15 Dec 2026",
    description:
      "Software development opportunity working with enterprise business solutions.",
  },

  {
    id: 14,
    company: "TechNova Solutions",
    role: "AI/ML Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹15,000/month",
    skills: ["Python", "ML", "SQL"],
    deadline: "30 Oct 2026",
    description:
      "AI/ML internship for students interested in practical machine learning projects.",
  },

  {
    id: 15,
    company: "CodeCraft Technologies",
    role: "React Developer Intern",
    location: "Remote",
    mode: "Remote",
    type: "Internship",
    salary: "₹12,000/month",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    deadline: "5 Nov 2026",
    description:
      "Frontend internship working with React and modern JavaScript.",
  },

  {
    id: 16,
    company: "DataBridge Systems",
    role: "Python Developer",
    location: "Bengaluru, Karnataka",
    mode: "On-site",
    type: "Full-time",
    salary: "₹4.5–6 LPA",
    skills: ["Python", "SQL", "APIs"],
    deadline: "12 Nov 2026",
    description:
      "Python development role involving APIs, databases and application development.",
  },

  {
    id: 17,
    company: "NextGen Software",
    role: "Java Developer Intern",
    location: "Mysuru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹10,000/month",
    skills: ["Java", "OOP", "SQL"],
    deadline: "20 Nov 2026",
    description:
      "Java internship for students interested in object-oriented programming.",
  },

  {
    id: 18,
    company: "InnovateAI Labs",
    role: "Data Science Intern",
    location: "Bengaluru, Karnataka",
    mode: "Hybrid",
    type: "Internship",
    salary: "₹18,000/month",
    skills: ["Python", "Pandas", "ML"],
    deadline: "25 Nov 2026",
    description:
      "Data science internship involving Python, data analysis and machine learning.",
  },

  {
    id: 19,
    company: "WebWorks India",
    role: "Frontend Developer",
    location: "Remote",
    mode: "Remote",
    type: "Full-time",
    salary: "₹5–7 LPA",
    skills: ["React", "JavaScript", "CSS"],
    deadline: "30 Nov 2026",
    description:
      "Frontend development role using React and modern web technologies.",
  },
];

const companies = [
  {
    name: "Infosys",
    industry: "IT Services",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Global technology and consulting company.",
  },
  {
    name: "Wipro",
    industry: "IT Services",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Global information technology and consulting company.",
  },
  {
    name: "Tata Consultancy Services (TCS)",
    industry: "IT Services",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Major technology services and consulting company.",
  },
  {
    name: "Accenture",
    industry: "Technology & Consulting",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Global professional services and technology company.",
  },
  {
    name: "IBM",
    industry: "Technology",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Technology company focused on cloud, AI and enterprise solutions.",
  },
  {
    name: "Microsoft",
    industry: "Technology",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Global technology company building software, cloud and AI products.",
  },
  {
    name: "Google",
    industry: "Technology",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Technology company focused on search, cloud, AI and software.",
  },
  {
    name: "Oracle",
    industry: "Enterprise Technology",
    location: "Bengaluru, Karnataka / Hyderabad, Telangana",
    description:
      "Enterprise software and cloud technology company.",
  },
  {
    name: "SAP",
    industry: "Enterprise Software",
    location: "Bengaluru, Karnataka",
    description:
      "Enterprise software company providing business technology solutions.",
  },
  {
    name: "TechNova Solutions",
    industry: "Software",
    location: "Bengaluru, Karnataka",
    description:
      "Software company focused on modern digital solutions.",
  },
  {
    name: "CodeCraft Technologies",
    industry: "Software",
    location: "Remote",
    description:
      "Software development company focused on web technologies.",
  },
  {
    name: "InnovateAI Labs",
    industry: "Artificial Intelligence",
    location: "Bengaluru, Karnataka",
    description:
      "AI-focused company working on data and machine learning solutions.",
  },
  {
    name: "DataBridge Systems",
    industry: "Software",
    location: "Bengaluru, Karnataka",
    description:
      "Technology company focused on data and software solutions.",
  },
];

const skillQuestions = [
  {
    question: "Which language is commonly used for AI and data science?",
    options: ["HTML", "Python", "CSS", "SQL"],
    answer: "Python",
  },
  {
    question: "Which command is used to retrieve data from a SQL database?",
    options: ["GET", "SELECT", "FETCHALL", "READ"],
    answer: "SELECT",
  },
  {
    question: "Which technology is used to build React interfaces?",
    options: ["JavaScript", "MySQL", "C", "Oracle"],
    answer: "JavaScript",
  },
];

const interviewQuestions = [
  "Tell me about yourself.",
  "Why should we hire you?",
  "What are your strengths?",
];

const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

function App() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: "Gunda",
    email: "gunda@example.com",
  });

  const [jobSearch, setJobSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [modeFilter, setModeFilter] = useState("All Modes");

  const [companySearch, setCompanySearch] = useState("");

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [savedJobs, setSavedJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to JOB SEEKER AI",
      message: "Find opportunities and become job ready.",
      read: false,
    },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  const [showApplyForm, setShowApplyForm] = useState(false);

  const [applicationForm, setApplicationForm] = useState({
    name: "Gunda",
    email: "gunda@example.com",
    phone: "",
    education: "B.E / B.Tech",
    skills: "",
    resume: "",
  });

  const [selectedApplication, setSelectedApplication] = useState(null);

  const [hrStatus, setHrStatus] = useState("Under Review");
  const [hrMessage, setHrMessage] = useState("");

  const [skillAnswers, setSkillAnswers] = useState({});
  const [skillScore, setSkillScore] = useState(0);

  const [communicationText, setCommunicationText] = useState("");
  const [communicationScore, setCommunicationScore] = useState(0);

  const [interviewAnswers, setInterviewAnswers] = useState({});
  const [interviewScore, setInterviewScore] = useState(0);

  const [resume, setResume] = useState(null);

  const addNotification = (title, message) => {
    setNotifications((prev) => [
      {
        id: Date.now(),
        title,
        message,
        read: false,
      },
      ...prev,
    ]);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredJobs = useMemo(() => {
    const q = normalize(jobSearch);

    return opportunities.filter((job) => {
      const role = normalize(job.role);
      const company = normalize(job.company);
      const location = normalize(job.location);
      const type = normalize(job.type);
      const mode = normalize(job.mode);
      const salary = normalize(job.salary);
      const skills = (job.skills || []).map(normalize).join(" ");

      const matchesSearch =
        !q ||
        role.includes(q) ||
        company.includes(q) ||
        location.includes(q) ||
        type.includes(q) ||
        mode.includes(q) ||
        salary.includes(q) ||
        skills.includes(q);

      const matchesLocation =
        locationFilter === "All Locations" ||
        location.includes(normalize(locationFilter));

      const matchesType =
        typeFilter === "All Types" ||
        type === normalize(typeFilter);

      const matchesMode =
        modeFilter === "All Modes" ||
        mode === normalize(modeFilter);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesMode
      );
    });
  }, [jobSearch, locationFilter, typeFilter, modeFilter]);

  const filteredCompanies = companies.filter((company) =>
    normalize(
      `${company.name} ${company.industry} ${company.location}`
    ).includes(normalize(companySearch))
  );

  const readinessScore = Math.round(
    (skillScore + communicationScore + interviewScore + (resume ? 100 : 0)) /
      4
  );

  const openJob = (job) => {
    setSelectedJob(job);
  };

  const saveJob = (job) => {
    setSavedJobs((prev) =>
      prev.includes(job.id)
        ? prev.filter((id) => id !== job.id)
        : [...prev, job.id]
    );
  };

  const openApplyForm = (job) => {
    if (!loggedIn) {
      setPage("login");
      return;
    }

    setSelectedJob(job);
    setShowApplyForm(true);
  };

  const submitApplication = (e) => {
    e.preventDefault();

    if (
      !applicationForm.name ||
      !applicationForm.email ||
      !applicationForm.phone
    ) {
      alert("Please fill Name, Email and Phone.");
      return;
    }

    const applicationId =
      "APP-" + Math.floor(100000 + Math.random() * 900000);

    const newApplication = {
      id: applicationId,
      jobId: selectedJob.id,
      jobTitle: selectedJob.role,
      company: selectedJob.company,
      location: selectedJob.location,
      appliedDate: new Date().toLocaleDateString("en-IN"),
      status: "Applied",
      message: "Application submitted successfully.",
      student: {
        ...applicationForm,
      },
    };

    setApplications((prev) => [newApplication, ...prev]);

    addNotification(
      "Application Submitted",
      `Your application for ${selectedJob.role} at ${selectedJob.company} has been submitted.`
    );

    setShowApplyForm(false);
    setSelectedJob(null);
    setPage("applications");
  };

  const updateApplicationFromHR = () => {
    if (!selectedApplication) return;

    setApplications((prev) =>
      prev.map((application) =>
        application.id === selectedApplication.id
          ? {
              ...application,
              status: hrStatus,
              message:
                hrMessage ||
                `Your application status has been updated to ${hrStatus}.`,
            }
          : application
      )
    );

    addNotification(
      `Application Update - ${hrStatus}`,
      `${selectedApplication.company} updated your application for ${selectedApplication.jobTitle} to "${hrStatus}". ${
        hrMessage || ""
      }`
    );

    setHrMessage("");

    alert(
      `Student notification created successfully.\n\nStatus: ${hrStatus}`
    );
  };

  const markNotificationsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const calculateSkillScore = () => {
    let correct = 0;

    skillQuestions.forEach((question, index) => {
      if (skillAnswers[index] === question.answer) {
        correct++;
      }
    });

    const score = Math.round(
      (correct / skillQuestions.length) * 100
    );

    setSkillScore(score);

    addNotification(
      "Skill Assessment Completed",
      `Your skill assessment score is ${score}%.`
    );
  };

  const calculateCommunication = () => {
    const words = communicationText.trim().split(/\s+/).filter(Boolean);

    let score = 20;

    if (words.length >= 30) score += 30;
    if (words.length >= 60) score += 20;
    if (communicationText.includes(".")) score += 10;
    if (communicationText.toLowerCase().includes("because")) score += 10;
    if (communicationText.toLowerCase().includes("experience")) score += 10;

    const finalScore = Math.min(score, 100);

    setCommunicationScore(finalScore);

    addNotification(
      "Communication Assessment Completed",
      `Your communication score is ${finalScore}%.`
    );
  };

  const calculateInterview = () => {
    const answered = Object.values(interviewAnswers).filter(
      (answer) => answer && answer.trim()
    ).length;

    const score = Math.round(
      (answered / interviewQuestions.length) * 100
    );

    setInterviewScore(score);

    addNotification(
      "Mock Interview Completed",
      `Your mock interview score is ${score}%.`
    );
  };

  const companyJobs = selectedCompany
    ? opportunities.filter(
        (job) =>
          normalize(job.company) === normalize(selectedCompany.name)
      )
    : [];

  if (page === "login") {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="brand">
            <span className="brand-mark">JS</span>
            <span>JOB SEEKER AI</span>
          </div>

          <h1>Welcome Back 👋</h1>
          <p>Find opportunities. Build skills. Become job ready.</p>

          <input
            className="form-input"
            placeholder="Your name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            className="form-input"
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <button
            className="primary-btn"
            onClick={() => {
              setLoggedIn(true);
              setPage("home");
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <div
          className="brand"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="brand-mark">JS</span>
          <span>JOB SEEKER AI</span>
        </div>

        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("jobs")}>Jobs</button>
          <button onClick={() => setPage("companies")}>
            Companies
          </button>
          <button onClick={() => setPage("applications")}>
            Applications
          </button>
          <button onClick={() => setPage("skills")}>
            Build Skills
          </button>
          <button onClick={() => setPage("coding")}>
            Coding
          </button>
          <button onClick={() => setPage("communication")}>
            Communication
          </button>
          <button onClick={() => setPage("interview")}>
            Mock Interview
          </button>
          <button onClick={() => setPage("resume")}>
            Resume
          </button>
          <button onClick={() => setPage("readiness")}>
            Job Readiness
          </button>
        </nav>

        <div className="nav-actions">
          <button
            className="notification-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              markNotificationsRead();
            }}
          >
            🔔
            {unreadCount > 0 && (
              <span className="notification-count">
                {unreadCount}
              </span>
            )}
          </button>

          <span className="user-name">👤 {user.name}</span>

          <button
            className="logout-btn"
            onClick={() => {
              setLoggedIn(false);
              setPage("login");
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {showNotifications && (
        <div className="notification-panel">
          <div className="notification-header">
            <h3>🔔 Notifications</h3>
            <button onClick={() => setShowNotifications(false)}>
              ✕
            </button>
          </div>

          {notifications.length === 0 ? (
            <p>No notifications.</p>
          ) : (
            notifications.map((notification) => (
              <div
                className="notification-item"
                key={notification.id}
              >
                <strong>{notification.title}</strong>
                <p>{notification.message}</p>
              </div>
            ))
          )}
        </div>
      )}

      <main className="main-content">
        {page === "home" && (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <span className="eyebrow">
                  ✨ AI CAREER PLATFORM
                </span>

                <h1>
                  Find the right opportunity.
                  <br />
                  <span>Become job ready.</span>
                </h1>

                <p>
                  Discover jobs, build skills, practice coding,
                  prepare for interviews and track your career
                  journey in one platform.
                </p>

                <div className="hero-search">
                  <input
                    placeholder="Search opportunities..."
                    value={jobSearch}
                    onChange={(e) => {
                      setJobSearch(e.target.value);
                      setPage("jobs");
                    }}
                  />

                  <button
                    className="primary-btn"
                    onClick={() => setPage("jobs")}
                  >
                    Search Jobs
                  </button>
                </div>

                <div className="hero-buttons">
                  <button
                    className="primary-btn"
                    onClick={() => setPage("jobs")}
                  >
                    Explore Jobs →
                  </button>

                  <button
                    className="secondary-btn"
                    onClick={() => setPage("readiness")}
                  >
                    Check Job Readiness
                  </button>
                </div>
              </div>

              <div className="readiness-hero-card">
                <div className="floating-circle">
                  {readinessScore}%
                </div>

                <h3>Job Readiness</h3>

                <p>
                  Your current career preparation score
                </p>

                <div className="progress-bar">
                  <span
                    style={{
                      width: `${readinessScore}%`,
                    }}
                  />
                </div>

                <small>
                  Improve your skills and interview performance.
                </small>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <strong>{opportunities.length}+</strong>
                <span>Opportunities</span>
              </div>

              <div className="stat-card">
                <strong>{companies.length}+</strong>
                <span>Companies</span>
              </div>

              <div className="stat-card">
                <strong>10+</strong>
                <span>Career Tools</span>
              </div>

              <div className="stat-card">
                <strong>{applications.length}</strong>
                <span>My Applications</span>
              </div>
            </section>

            <section>
              <div className="section-heading">
                <span className="eyebrow">CAREER TOOLS</span>
                <h2>Everything you need to become job ready</h2>
              </div>

              <div className="feature-grid">
                <FeatureCard
                  icon="🎯"
                  title="Build Skills"
                  text="Assess your skills and identify weak areas."
                  onClick={() => setPage("skills")}
                />

                <FeatureCard
                  icon="💻"
                  title="Coding Practice"
                  text="Practice programming and problem solving."
                  onClick={() => setPage("coding")}
                />

                <FeatureCard
                  icon="🗣️"
                  title="Communication"
                  text="Improve your professional communication."
                  onClick={() => setPage("communication")}
                />

                <FeatureCard
                  icon="🤖"
                  title="AI Mock Interview"
                  text="Practice common interview questions."
                  onClick={() => setPage("interview")}
                />

                <FeatureCard
                  icon="📄"
                  title="Resume Builder"
                  text="Upload and manage your resume."
                  onClick={() => setPage("resume")}
                />

                <FeatureCard
                  icon="🚀"
                  title="Job Readiness"
                  text="Track your overall career preparation."
                  onClick={() => setPage("readiness")}
                />
              </div>
            </section>
          </>
        )}

        {page === "jobs" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">OPPORTUNITIES</span>
              <h1>Find Your Next Opportunity</h1>
              <p>
                Search by role, skill, company or location.
              </p>
            </div>

            <div className="job-search-box">
              <input
                placeholder="Search job title, skill, company..."
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
              />

              <select
                value={locationFilter}
                onChange={(e) =>
                  setLocationFilter(e.target.value)
                }
              >
                <option>All Locations</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Mysuru</option>
                <option>Remote</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) =>
                  setTypeFilter(e.target.value)
                }
              >
                <option>All Types</option>
                <option>Internship</option>
                <option>Full-time</option>
              </select>

              <select
                value={modeFilter}
                onChange={(e) =>
                  setModeFilter(e.target.value)
                }
              >
                <option>All Modes</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>

            <div className="results-row">
              <strong>
                {filteredJobs.length} opportunities found
              </strong>

              <button
                className="secondary-btn"
                onClick={() => {
                  setJobSearch("");
                  setLocationFilter("All Locations");
                  setTypeFilter("All Types");
                  setModeFilter("All Modes");
                }}
              >
                Clear Filters
              </button>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="empty-state">
                <div>🔎</div>
                <h2>No jobs found</h2>
                <p>
                  Try another role, skill, company or location.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => {
                    setJobSearch("");
                    setLocationFilter("All Locations");
                    setTypeFilter("All Types");
                    setModeFilter("All Modes");
                  }}
                >
                  Show All Jobs
                </button>
              </div>
            ) : (
              <div className="job-grid">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    saved={savedJobs.includes(job.id)}
                    onSave={() => saveJob(job)}
                    onView={() => openJob(job)}
                    onApply={() => openApplyForm(job)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {page === "companies" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">COMPANIES</span>
              <h1>Explore Companies</h1>
              <p>
                Search companies and discover their available
                opportunities.
              </p>
            </div>

            <div className="job-search-box">
              <input
                placeholder="Search company..."
                value={companySearch}
                onChange={(e) =>
                  setCompanySearch(e.target.value)
                }
              />
            </div>

            <div className="company-grid">
              {filteredCompanies.map((company) => (
                <div className="company-card" key={company.name}>
                  <div className="company-logo">
                    {company.name.charAt(0)}
                  </div>

                  <h3>{company.name}</h3>

                  <span>{company.industry}</span>

                  <p>📍 {company.location}</p>

                  <p>{company.description}</p>

                  <button
                    className="primary-btn"
                    onClick={() => setSelectedCompany(company)}
                  >
                    View Company →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "applications" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">MY CAREER</span>
              <h1>My Applications</h1>
              <p>Track all your job applications.</p>
            </div>

            {applications.length === 0 ? (
              <div className="empty-state">
                <div>📄</div>
                <h2>No applications yet</h2>
                <p>
                  Apply for a job and your application will appear
                  here.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setPage("jobs")}
                >
                  Explore Jobs
                </button>
              </div>
            ) : (
              <div className="application-list">
                {applications.map((application) => (
                  <div
                    className="application-card"
                    key={application.id}
                  >
                    <div>
                      <span className="eyebrow">
                        {application.company}
                      </span>

                      <h2>{application.jobTitle}</h2>

                      <p>📍 {application.location}</p>

                      <p>
                        Application ID:{" "}
                        <strong>{application.id}</strong>
                      </p>

                      <p>
                        Applied: {application.appliedDate}
                      </p>
                    </div>

                    <div className="application-status">
                      <strong>{application.status}</strong>

                      <p>{application.message}</p>

                      <button
                        className="secondary-btn"
                        onClick={() =>
                          setSelectedApplication(application)
                        }
                      >
                        View Application
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {page === "hr" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">RECRUITER PORTAL</span>
              <h1>HR Dashboard</h1>
              <p>
                Review applications and update candidate status.
              </p>
            </div>

            {applications.length === 0 ? (
              <div className="empty-state">
                <h2>No applications received</h2>
                <p>
                  Student applications will appear here after
                  applying for jobs.
                </p>
              </div>
            ) : (
              <div className="hr-layout">
                <div>
                  {applications.map((application) => (
                    <div
                      className="application-card"
                      key={application.id}
                    >
                      <div>
                        <h2>{application.student.name}</h2>

                        <p>
                          {application.jobTitle} —{" "}
                          {application.company}
                        </p>

                        <p>
                          📧 {application.student.email}
                        </p>

                        <p>
                          📱 {application.student.phone}
                        </p>

                        <p>
                          🎓 {application.student.education}
                        </p>

                        <p>
                          🛠️{" "}
                          {application.student.skills ||
                            "Not provided"}
                        </p>
                      </div>

                      <div>
                        <button
                          className="primary-btn"
                          onClick={() =>
                            setSelectedApplication(application)
                          }
                        >
                          Manage Application
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedApplication && (
                  <div className="assessment-card">
                    <h2>Update Application</h2>

                    <p>
                      <strong>
                        {selectedApplication.student.name}
                      </strong>
                    </p>

                    <p>
                      {selectedApplication.jobTitle} —{" "}
                      {selectedApplication.company}
                    </p>

                    <select
                      className="form-input"
                      value={hrStatus}
                      onChange={(e) =>
                        setHrStatus(e.target.value)
                      }
                    >
                      <option>Under Review</option>
                      <option>Shortlisted</option>
                      <option>Interview Scheduled</option>
                      <option>Selected</option>
                      <option>Rejected</option>
                    </select>

                    <textarea
                      className="form-input"
                      rows="5"
                      placeholder="Message to student..."
                      value={hrMessage}
                      onChange={(e) =>
                        setHrMessage(e.target.value)
                      }
                    />

                    <button
                      className="primary-btn"
                      onClick={updateApplicationFromHR}
                    >
                      Update & Notify Student
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {page === "skills" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">BUILD SKILLS</span>
              <h1>Skill Assessment</h1>
              <p>
                Test your technical knowledge and identify weak
                areas.
              </p>
            </div>

            <div className="assessment-card">
              {skillQuestions.map((question, index) => (
                <div className="question-card" key={index}>
                  <h3>
                    {index + 1}. {question.question}
                  </h3>

                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={
                          skillAnswers[index] === option
                        }
                        onChange={() =>
                          setSkillAnswers({
                            ...skillAnswers,
                            [index]: option,
                          })
                        }
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}

              <button
                className="primary-btn"
                onClick={calculateSkillScore}
              >
                Submit Assessment
              </button>

              <div className="score-display">
                Skill Score: <strong>{skillScore}%</strong>
              </div>
            </div>
          </section>
        )}

        {page === "coding" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">CODING PRACTICE</span>
              <h1>Practice Coding</h1>
              <p>
                Improve your programming problem-solving skills.
              </p>
            </div>

            <div className="coding-card">
              <h2>Problem: Reverse a String</h2>

              <p>
                Write a program that reverses the given string.
              </p>

              <textarea
                className="code-editor"
                defaultValue={`function reverseString(str) {
  // Write your code here
}`}
              />

              <button
                className="primary-btn"
                onClick={() =>
                  addNotification(
                    "Coding Practice",
                    "Your coding practice session has been recorded."
                  )
                }
              >
                Submit Code
              </button>

              <div className="code-result">
                Practice mode is active. Backend code execution
                can be connected later.
              </div>
            </div>
          </section>
        )}

        {page === "communication" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">COMMUNICATION</span>
              <h1>Communication Practice</h1>
              <p>
                Practice writing clear professional answers.
              </p>
            </div>

            <div className="assessment-card">
              <h2>
                Tell us about yourself as a job candidate.
              </h2>

              <textarea
                className="form-input"
                rows="10"
                placeholder="Write your answer..."
                value={communicationText}
                onChange={(e) =>
                  setCommunicationText(e.target.value)
                }
              />

              <button
                className="primary-btn"
                onClick={calculateCommunication}
              >
                Evaluate Communication
              </button>

              <div className="score-display">
                Communication Score:{" "}
                <strong>{communicationScore}%</strong>
              </div>
            </div>
          </section>
        )}

        {page === "interview" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">AI MOCK INTERVIEW</span>
              <h1>Mock Interview</h1>
              <p>
                Practice common interview questions before your
                real interview.
              </p>
            </div>

            <div className="assessment-card">
              {interviewQuestions.map((question, index) => (
                <div className="question-card" key={question}>
                  <h3>
                    {index + 1}. {question}
                  </h3>

                  <textarea
                    className="form-input"
                    rows="5"
                    placeholder="Your answer..."
                    value={interviewAnswers[index] || ""}
                    onChange={(e) =>
                      setInterviewAnswers({
                        ...interviewAnswers,
                        [index]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}

              <button
                className="primary-btn"
                onClick={calculateInterview}
              >
                Finish Interview
              </button>

              <div className="score-display">
                Interview Score:{" "}
                <strong>{interviewScore}%</strong>
              </div>
            </div>
          </section>
        )}

        {page === "resume" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">RESUME</span>
              <h1>Resume Builder</h1>
              <p>
                Upload your resume and keep it ready for
                applications.
              </p>
            </div>

            <div className="assessment-card">
              <h2>+ Add Resume</h2>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setResume(file);

                    addNotification(
                      "Resume Added",
                      `${file.name} has been added to your profile.`
                    );
                  }
                }}
              />

              {resume && (
                <div className="resume-preview">
                  📄 <strong>{resume.name}</strong>
                  <p>Resume added successfully.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {page === "readiness" && (
          <section>
            <div className="page-heading">
              <span className="eyebrow">JOB READINESS</span>
              <h1>Your Job Readiness</h1>
              <p>
                Track how prepared you are for your next
                opportunity.
              </p>
            </div>

            <div className="readiness-layout">
              <div className="readiness-score-card">
                <div className="big-score">
                  {readinessScore}%
                </div>

                <h2>Overall Readiness</h2>

                <p>
                  Keep improving your skills and interview
                  preparation.
                </p>
              </div>

              <div className="readiness-items">
                <ReadinessItem
                  title="Technical Skills"
                  score={skillScore}
                />

                <ReadinessItem
                  title="Communication"
                  score={communicationScore}
                />

                <ReadinessItem
                  title="Mock Interview"
                  score={interviewScore}
                />

                <ReadinessItem
                  title="Resume"
                  score={resume ? 100 : 0}
                />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div>
          <strong>JOB SEEKER AI</strong>
          <p>
            Find Opportunities. Build Skills. Become Job Ready.
          </p>
        </div>

        <button
          className="recruiter-link"
          onClick={() => setPage("hr")}
        >
          Recruiter / HR Dashboard
        </button>

        <p>© 2026 JOB SEEKER AI</p>
      </footer>

      {selectedJob && !showApplyForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>

            <span className="eyebrow">
              {selectedJob.company}
            </span>

            <h1>{selectedJob.role}</h1>

            <p>📍 {selectedJob.location}</p>
            <p>💼 {selectedJob.type}</p>
            <p>🏠 {selectedJob.mode}</p>
            <p>💰 {selectedJob.salary}</p>
            <p>⏰ Deadline: {selectedJob.deadline}</p>

            <h3>Required Skills</h3>

            <div className="skill-tags">
              {selectedJob.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <h3>About Opportunity</h3>
            <p>{selectedJob.description}</p>

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={() => saveJob(selectedJob)}
              >
                {savedJobs.includes(selectedJob.id)
                  ? "★ Saved"
                  : "☆ Save Job"}
              </button>

              <button
                className="primary-btn"
                onClick={() => openApplyForm(selectedJob)}
              >
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      )}

      {showApplyForm && selectedJob && (
        <div className="modal-overlay">
          <form className="modal" onSubmit={submitApplication}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowApplyForm(false)}
            >
              ✕
            </button>

            <span className="eyebrow">
              APPLYING TO {selectedJob.company.toUpperCase()}
            </span>

            <h1>{selectedJob.role}</h1>

            <input
              className="form-input"
              placeholder="Full Name"
              value={applicationForm.name}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  name: e.target.value,
                })
              }
            />

            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={applicationForm.email}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  email: e.target.value,
                })
              }
            />

            <input
              className="form-input"
              placeholder="Phone Number"
              value={applicationForm.phone}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  phone: e.target.value,
                })
              }
            />

            <input
              className="form-input"
              placeholder="Education"
              value={applicationForm.education}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  education: e.target.value,
                })
              }
            />

            <input
              className="form-input"
              placeholder="Skills e.g. Python, React, SQL"
              value={applicationForm.skills}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  skills: e.target.value,
                })
              }
            />

            <input
              className="form-input"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  resume:
                    e.target.files?.[0]?.name || "",
                })
              }
            />

            <button className="primary-btn" type="submit">
              Submit Application 🚀
            </button>
          </form>
        </div>
      )}

      {selectedCompany && (
        <div className="modal-overlay">
          <div className="modal company-modal">
            <button
              className="modal-close"
              onClick={() => setSelectedCompany(null)}
            >
              ✕
            </button>

            <div className="company-logo large">
              {selectedCompany.name.charAt(0)}
            </div>

            <h1>{selectedCompany.name}</h1>

            <p>
              <strong>{selectedCompany.industry}</strong>
            </p>

            <p>📍 {selectedCompany.location}</p>

            <p>{selectedCompany.description}</p>

            <h2>Available Opportunities</h2>

            {companyJobs.length === 0 ? (
              <div className="empty-state small">
                <p>
                  No opportunities currently listed for this
                  company.
                </p>
              </div>
            ) : (
              <div className="company-job-list">
                {companyJobs.map((job) => (
                  <div className="mini-job-card" key={job.id}>
                    <div>
                      <h3>{job.role}</h3>

                      <p>
                        📍 {job.location} · {job.mode}
                      </p>

                      <p>💰 {job.salary}</p>

                      <div className="skill-tags">
                        {job.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>

                    <button
                      className="primary-btn"
                      onClick={() => {
                        setSelectedCompany(null);
                        openApplyForm(job);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {selectedApplication && page !== "hr" && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setSelectedApplication(null)}
            >
              ✕
            </button>

            <span className="eyebrow">
              APPLICATION DETAILS
            </span>

            <h1>{selectedApplication.jobTitle}</h1>

            <h3>{selectedApplication.company}</h3>

            <p>
              Application ID:{" "}
              <strong>{selectedApplication.id}</strong>
            </p>

            <p>
              Status:{" "}
              <strong>{selectedApplication.status}</strong>
            </p>

            <p>{selectedApplication.message}</p>

            <hr />

            <h3>Student Details</h3>

            <p>
              Name: {selectedApplication.student.name}
            </p>

            <p>
              Email: {selectedApplication.student.email}
            </p>

            <p>
              Phone: {selectedApplication.student.phone}
            </p>

            <p>
              Education:{" "}
              {selectedApplication.student.education}
            </p>

            <p>
              Skills:{" "}
              {selectedApplication.student.skills ||
                "Not provided"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, text, onClick }) {
  return (
    <button className="feature-card" onClick={onClick}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Explore →</span>
    </button>
  );
}

function JobCard({ job, saved, onSave, onView, onApply }) {
  return (
    <div className="job-card">
      <div className="job-card-top">
        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <button
          className="save-btn"
          onClick={onSave}
          title="Save Job"
        >
          {saved ? "★" : "☆"}
        </button>
      </div>

      <span className="eyebrow">{job.company}</span>

      <h2>{job.role}</h2>

      <p>📍 {job.location}</p>

      <div className="job-meta">
        <span>{job.type}</span>
        <span>{job.mode}</span>
      </div>

      <p>💰 {job.salary}</p>

      <div className="skill-tags">
        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <p className="deadline">
        Apply before: {job.deadline}
      </p>

      <div className="job-actions">
        <button className="secondary-btn" onClick={onView}>
          View Details
        </button>

        <button className="primary-btn" onClick={onApply}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

function ReadinessItem({ title, score }) {
  return (
    <div className="readiness-item">
      <div className="readiness-item-header">
        <strong>{title}</strong>
        <span>{score}%</span>
      </div>

      <div className="progress-bar">
        <span style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}

export default App;