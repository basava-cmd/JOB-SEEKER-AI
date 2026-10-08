import { useState } from "react";
import "./App.css";

const skillQuestions = [
  {
    q: "Which keyword defines a function in Python?",
    options: ["func", "def", "function", "define"],
    answer: "def",
  },
  {
    q: "What is the output of print(2 + 3)?",
    options: ["23", "5", "6", "Error"],
    answer: "5",
  },
  {
    q: "Which data type stores True or False?",
    options: ["String", "Integer", "Boolean", "List"],
    answer: "Boolean",
  },
  {
    q: "Which symbol starts a Python comment?",
    options: ["//", "#", "/*", "--"],
    answer: "#",
  },
  {
    q: "Which one is a Python list?",
    options: ["(1,2)", "[1,2]", "{1,2}", "<1,2>"],
    answer: "[1,2]",
  },
];

const interviewQuestions = [
  "Tell me about yourself.",
  "What are your strengths?",
  "Explain one project you have worked on.",
];

const opportunities = [
  {
    id: 1,
    company: "TechNova Solutions",
    role: "AI/ML Intern",
    location: "Bengaluru / Hybrid",
    type: "Internship",
    stipend: "₹15,000 / month",
    skills: "Python, Machine Learning, SQL",
    eligibility: "CSE / AIML / IT students",
    deadline: "30 October 2026",
  },
  {
    id: 2,
    company: "CodeCraft Technologies",
    role: "React Developer Intern",
    location: "Remote",
    type: "Internship",
    stipend: "₹12,000 / month",
    skills: "React, JavaScript, HTML, CSS",
    eligibility: "Students with basic web development",
    deadline: "5 November 2026",
  },
  {
    id: 3,
    company: "DataBridge Systems",
    role: "Python Developer",
    location: "Bengaluru",
    type: "Full Time",
    stipend: "₹4.5 - ₹6 LPA",
    skills: "Python, SQL, APIs",
    eligibility: "Freshers / Entry Level",
    deadline: "12 November 2026",
  },
  {
    id: 4,
    company: "NextGen Software",
    role: "Java Developer Intern",
    location: "Mysuru / Hybrid",
    type: "Internship",
    stipend: "₹10,000 / month",
    skills: "Java, OOP, SQL",
    eligibility: "CSE / IT students",
    deadline: "20 November 2026",
  },
];

function App() {
  // ================= AUTH =================
  const [authPage, setAuthPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [authMessage, setAuthMessage] = useState("");

  // ================= PROFILE =================
  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "",
    phone: "",
    college: "",
    degree: "",
    branch: "",
    skills: "",
    bio: "",
    photo: null,
  });

  const [editingProfile, setEditingProfile] = useState(false);

  // ================= PAGE =================
  const [page, setPage] = useState("home");

  // ================= SKILLS =================
  const [skillQuestion, setSkillQuestion] = useState(0);
  const [skillAnswers, setSkillAnswers] = useState([]);
  const [skillScore, setSkillScore] = useState(null);

  // ================= COMMUNICATION =================
  const [communicationAnswer, setCommunicationAnswer] = useState("");
  const [communicationScore, setCommunicationScore] = useState(null);

  // ================= INTERVIEW =================
  const [interviewQuestion, setInterviewQuestion] = useState(0);
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [interviewScore, setInterviewScore] = useState(null);
  const [currentInterviewAnswer, setCurrentInterviewAnswer] = useState("");

  // ================= RESUME =================
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeCreated, setResumeCreated] = useState(false);

  // ================= CODING =================
  const [code, setCode] = useState("");
  const [codeResult, setCodeResult] = useState("");

  // ================= OPPORTUNITIES =================
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [applications, setApplications] = useState([]);

  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    skills: "",
    why: "",
  });

  // =====================================================
  // LOGIN
  // =====================================================

  function handleLogin() {
    if (!loginData.email || !loginData.password) {
      setAuthMessage("Please enter email and password.");
      return;
    }

    setProfile((prev) => ({
      ...prev,
      email: loginData.email,
    }));

    setIsLoggedIn(true);
    setPage("home");
    setAuthMessage("");
  }

  // =====================================================
  // REGISTER
  // =====================================================

  function handleRegister() {
    const { name, email, password, confirmPassword } = registerData;

    if (!name || !email || !password || !confirmPassword) {
      setAuthMessage("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setAuthMessage("Passwords do not match.");
      return;
    }

    setProfile({
      ...profile,
      name,
      email,
    });

    setLoginData({
      email,
      password,
    });

    setAuthMessage("Account created successfully. Please login.");

    setAuthPage("login");
  }

  // =====================================================
  // LOGOUT
  // =====================================================

  function logout() {
    setIsLoggedIn(false);
    setPage("home");
    setLoginData({
      email: "",
      password: "",
    });
  }

  // =====================================================
  // HOME
  // =====================================================

  function home() {
    setPage("home");
  }

  // =====================================================
  // SKILLS
  // =====================================================

  function startSkillTest() {
    setSkillQuestion(0);
    setSkillAnswers([]);
    setSkillScore(null);
    setPage("skills-test");
  }

  function chooseSkillAnswer(answer) {
    const updated = [...skillAnswers];
    updated[skillQuestion] = answer;
    setSkillAnswers(updated);
  }

  function nextSkillQuestion() {
    if (skillQuestion < skillQuestions.length - 1) {
      setSkillQuestion(skillQuestion + 1);
    }
  }

  function submitSkillTest() {
    let correct = 0;

    skillQuestions.forEach((question, index) => {
      if (skillAnswers[index] === question.answer) {
        correct++;
      }
    });

    const percentage = Math.round(
      (correct / skillQuestions.length) * 100
    );

    setSkillScore(percentage);
    setPage("skills-result");
  }

  // =====================================================
  // COMMUNICATION
  // =====================================================

  function analyzeCommunication() {
    if (communicationAnswer.trim().length < 20) {
      alert("Please write a little more about yourself.");
      return;
    }

    const words = communicationAnswer.trim().split(/\s+/).length;

    let score = 60;

    if (words >= 30) score += 10;
    if (words >= 50) score += 10;
    if (communicationAnswer.includes(".")) score += 5;
    if (communicationAnswer.length >= 100) score += 10;

    setCommunicationScore(Math.min(score, 95));
    setPage("communication-result");
  }

  // =====================================================
  // INTERVIEW
  // =====================================================

  function startInterview() {
    setInterviewQuestion(0);
    setInterviewAnswers([]);
    setInterviewScore(null);
    setCurrentInterviewAnswer("");
    setPage("interview");
  }

  function submitInterviewAnswer() {
    if (currentInterviewAnswer.trim().length < 10) {
      alert("Please write an answer before continuing.");
      return;
    }

    const updated = [
      ...interviewAnswers,
      currentInterviewAnswer,
    ];

    setInterviewAnswers(updated);
    setCurrentInterviewAnswer("");

    if (interviewQuestion < interviewQuestions.length - 1) {
      setInterviewQuestion(interviewQuestion + 1);
    } else {
      const score = Math.min(60 + updated.length * 10, 90);

      setInterviewScore(score);
      setPage("interview-result");
    }
  }

  // =====================================================
  // CODING
  // =====================================================

  function runCode() {
    if (!code.trim()) {
      setCodeResult("Please write some code first.");
      return;
    }

    const normalized = code.replace(/\s/g, "").toLowerCase();

    if (
      normalized.includes("max(") &&
      normalized.includes("print")
    ) {
      setCodeResult(
        "Correct Answer ✅\nExpected output: 99\nTest case passed successfully."
      );
    } else if (
      normalized.includes("min(") &&
      normalized.includes("print")
    ) {
      setCodeResult(
        "Wrong Answer ❌\nThis code finds the smallest number, not the largest number."
      );
    } else {
      setCodeResult(
        "Test case failed ❌\nHint: Find the largest number from the given list and print it."
      );
    }
  }

  // =====================================================
  // RESUME
  // =====================================================

  function addResume(event) {
    const file = event.target.files[0];

    if (!file) return;

    setResumeFile(file);
    setResumeCreated(false);
  }

  function createResume() {
    if (!resumeFile) {
      alert("Please add your resume first.");
      return;
    }

    setResumeCreated(true);
  }

  // =====================================================
  // OPPORTUNITIES
  // =====================================================

  function openOpportunity(opportunity) {
    setSelectedOpportunity(opportunity);

    setApplicationForm({
      name: profile.name === "Your Name" ? "" : profile.name,
      email: profile.email,
      phone: profile.phone,
      college: profile.college,
      degree: profile.degree,
      skills: profile.skills,
      why: "",
    });

    setPage("application");
  }

  function updateApplication(field, value) {
    setApplicationForm({
      ...applicationForm,
      [field]: value,
    });
  }

  function submitApplication() {
    const {
      name,
      email,
      phone,
      college,
      degree,
      skills,
      why,
    } = applicationForm;

    if (
      !name ||
      !email ||
      !phone ||
      !college ||
      !degree ||
      !skills ||
      !why
    ) {
      alert("Please fill all application fields.");
      return;
    }

    const newApplication = {
      id: `JS-${Date.now().toString().slice(-6)}`,
      company: selectedOpportunity.company,
      role: selectedOpportunity.role,
      status: "Applied",
      date: new Date().toLocaleDateString(),
    };

    setApplications([...applications, newApplication]);

    setPage("application-success");
  }

  // =====================================================
  // PROFILE
  // =====================================================

  function updateProfile(field, value) {
    setProfile({
      ...profile,
      [field]: value,
    });
  }

  function uploadProfilePhoto(event) {
    const file = event.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setProfile({
      ...profile,
      photo: imageURL,
    });
  }

  function saveProfile() {
    setEditingProfile(false);
    alert("Profile updated successfully.");
  }

  // =====================================================
  // SCORES
  // =====================================================

  const technicalScore = skillScore || 0;
  const communication = communicationScore || 0;
  const interview = interviewScore || 0;

  const readiness = Math.round(
    (technicalScore + communication + interview) / 3
  );

  // =====================================================
  // AUTH SCREEN
  // =====================================================

  if (!isLoggedIn) {
    return (
      <div className="auth-wrapper">

        <div className="auth-brand">
          <div className="auth-logo">JS</div>

          <h1>JOB SEEKER AI</h1>

          <p>
            Find Opportunities. Build Skills. Become Job Ready.
          </p>
        </div>

        <div className="auth-card">

          {authPage === "login" ? (
            <>
              <div className="auth-heading">
                <p className="eyebrow">WELCOME BACK</p>

                <h2>Login to your account</h2>

                <p>
                  Continue your journey towards your dream career.
                </p>
              </div>

              <label>Email Address</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

              {authMessage && (
                <div className="auth-message">
                  {authMessage}
                </div>
              )}

              <button
                className="auth-main-button"
                onClick={handleLogin}
              >
                Login →
              </button>

              <p className="auth-switch">
                Don't have an account?{" "}
                <button
                  className="text-button"
                  onClick={() => {
                    setAuthPage("register");
                    setAuthMessage("");
                  }}
                >
                  Create Account
                </button>
              </p>
            </>
          ) : (
            <>
              <div className="auth-heading">
                <p className="eyebrow">GET STARTED</p>

                <h2>Create your account</h2>

                <p>
                  Build your profile and become job ready.
                </p>
              </div>

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Your full name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    name: e.target.value,
                  })
                }
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />

              {authMessage && (
                <div className="auth-message">
                  {authMessage}
                </div>
              )}

              <button
                className="auth-main-button"
                onClick={handleRegister}
              >
                Create Account →
              </button>

              <p className="auth-switch">
                Already have an account?{" "}
                <button
                  className="text-button"
                  onClick={() => {
                    setAuthPage("login");
                    setAuthMessage("");
                  }}
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>

        <p className="auth-footer">
          © 2026 JOB SEEKER AI • Career Readiness Platform
        </p>
      </div>
    );
  }

  // =====================================================
  // HOME
  // =====================================================

  if (page === "home") {
    return (
      <div>

        <nav>
          <strong>JOB SEEKER AI</strong>

          <div className="nav-actions">
            <button onClick={() => setPage("profile")}>
              👤 Profile
            </button>

            <button onClick={logout}>
              Logout
            </button>
          </div>
        </nav>

        <header className="hero">

          <p className="eyebrow">
            AI CAREER PLATFORM
          </p>

          <h1>
            Find Opportunities.
            <br />
            Build Skills.
            <br />
            Become Job Ready.
          </h1>

          <p>
            One platform to assess your skills, practice coding,
            improve communication, prepare for interviews,
            build your resume and apply for opportunities.
          </p>

          <button onClick={() => setPage("skills")}>
            Start Building Skills →
          </button>

        </header>

        <section className="welcome-profile">

          <div>
            <p className="eyebrow">WELCOME</p>

            <h2>
              Hi, {profile.name || "Job Seeker"} 👋
            </h2>

            <p>
              Your career journey starts here.
            </p>
          </div>

          <button onClick={() => setPage("profile")}>
            Complete Profile →
          </button>

        </section>

        <section className="features">

          <Feature
            icon="🎯"
            title="Build Your Skills"
            text="Assess your technical skills and identify areas that need improvement."
            button="Start Assessment"
            action={() => setPage("skills")}
          />

          <Feature
            icon="💻"
            title="Coding Practice"
            text="Practice programming problems and check whether your solution passes the test case."
            button="Practice Coding"
            action={() => setPage("coding")}
          />

          <Feature
            icon="🗣️"
            title="Communication"
            text="Practice self-introduction and improve your professional communication."
            button="Practice Now"
            action={() => setPage("communication")}
          />

          <Feature
            icon="🤖"
            title="AI Mock Interview"
            text="Practice common interview questions and receive a performance score."
            button="Start Interview"
            action={startInterview}
          />

          <Feature
            icon="📄"
            title="Resume Builder"
            text="Add your resume and keep your career documents ready."
            button="Manage Resume"
            action={() => setPage("resume")}
          />

          <Feature
            icon="🚀"
            title="Employee Opportunities"
            text="Explore internship and fresher opportunities and submit applications."
            button="View Opportunities"
            action={() => setPage("opportunities")}
          />

          <Feature
            icon="📊"
            title="Job Readiness"
            text="See your overall technical, communication and interview readiness."
            button="Check Readiness"
            action={() => setPage("readiness")}
          />

          <Feature
            icon="📬"
            title="My Applications"
            text="Track the opportunities you have applied for."
            button="View Applications"
            action={() => setPage("applications")}
          />

        </section>
      </div>
    );
  }

  // =====================================================
  // PROFILE PAGE
  // =====================================================

  if (page === "profile") {
    return (
      <Page
        title="My Profile"
        back={home}
      >

        <div className="profile-card">

          <div className="profile-top">

            <div className="profile-photo-area">

              {profile.photo ? (
                <img
                  src={profile.photo}
                  className="profile-photo"
                  alt="Profile"
                />
              ) : (
                <div className="profile-photo-placeholder">
                  {profile.name
                    ? profile.name.charAt(0).toUpperCase()
                    : "U"}
                </div>
              )}

              {editingProfile && (
                <label className="photo-upload">
                  Change Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={uploadProfilePhoto}
                  />
                </label>
              )}

            </div>

            <div className="profile-intro">
              <h2>{profile.name}</h2>
              <p>{profile.email}</p>

              <span className="profile-badge">
                Job Seeker
              </span>
            </div>

          </div>

          <hr />

          <div className="profile-grid">

            <div>
              <label>Full Name</label>

              <input
                disabled={!editingProfile}
                value={profile.name}
                onChange={(e) =>
                  updateProfile("name", e.target.value)
                }
              />
            </div>

            <div>
              <label>Email</label>

              <input
                disabled={!editingProfile}
                value={profile.email}
                onChange={(e) =>
                  updateProfile("email", e.target.value)
                }
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                disabled={!editingProfile}
                placeholder="+91 XXXXX XXXXX"
                value={profile.phone}
                onChange={(e) =>
                  updateProfile("phone", e.target.value)
                }
              />
            </div>

            <div>
              <label>College</label>

              <input
                disabled={!editingProfile}
                placeholder="Your college"
                value={profile.college}
                onChange={(e) =>
                  updateProfile("college", e.target.value)
                }
              />
            </div>

            <div>
              <label>Degree</label>

              <input
                disabled={!editingProfile}
                placeholder="B.Tech / BE / MCA..."
                value={profile.degree}
                onChange={(e) =>
                  updateProfile("degree", e.target.value)
                }
              />
            </div>

            <div>
              <label>Branch</label>

              <input
                disabled={!editingProfile}
                placeholder="CSE / AIML / IT..."
                value={profile.branch}
                onChange={(e) =>
                  updateProfile("branch", e.target.value)
                }
              />
            </div>

          </div>

          <label>Skills</label>

          <input
            disabled={!editingProfile}
            placeholder="Python, Java, SQL, React..."
            value={profile.skills}
            onChange={(e) =>
              updateProfile("skills", e.target.value)
            }
          />

          <label>About Me</label>

          <textarea
            disabled={!editingProfile}
            placeholder="Write a short professional introduction..."
            value={profile.bio}
            onChange={(e) =>
              updateProfile("bio", e.target.value)
            }
          />

          <div className="profile-actions">

            {!editingProfile ? (
              <button
                onClick={() => setEditingProfile(true)}
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <button onClick={saveProfile}>
                💾 Save Profile
              </button>
            )}

          </div>

        </div>

      </Page>
    );
  }

  // =====================================================
  // SKILLS PAGE
  // =====================================================

  if (page === "skills") {
    return (
      <Page title="Build Your Skills" back={home}>

        <div className="detail-card">

          <h2>🐍 Python Fundamentals</h2>

          <p>
            Start from the basics and understand Python
            programming fundamentals.
          </p>

          <ul>
            <li>Variables and Data Types</li>
            <li>Conditions and Loops</li>
            <li>Functions</li>
            <li>Lists and Dictionaries</li>
            <li>Basic Problem Solving</li>
          </ul>

          <button onClick={startSkillTest}>
            Take Python Assessment →
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // SKILL TEST
  // =====================================================

  if (page === "skills-test") {
    const current = skillQuestions[skillQuestion];

    return (
      <Page title="Python Assessment" back={() => setPage("skills")}>

        <div className="detail-card">

          <p>
            Question {skillQuestion + 1} of{" "}
            {skillQuestions.length}
          </p>

          <h2>{current.q}</h2>

          {current.options.map((option) => (
            <button
              key={option}
              className={
                skillAnswers[skillQuestion] === option
                  ? "selected-option"
                  : "option"
              }
              onClick={() => chooseSkillAnswer(option)}
            >
              {option}
            </button>
          ))}

          <br />

          {skillQuestion < skillQuestions.length - 1 ? (
            <button onClick={nextSkillQuestion}>
              Next Question →
            </button>
          ) : (
            <button onClick={submitSkillTest}>
              Submit Assessment
            </button>
          )}

        </div>

      </Page>
    );
  }

  // =====================================================
  // SKILL RESULT
  // =====================================================

  if (page === "skills-result") {
    return (
      <Page title="Assessment Result" back={home}>

        <div className="result-card">

          <p>Your Python score</p>

          <h1>{skillScore}%</h1>

          <h2>
            {skillScore >= 80
              ? "Strong Foundation 🔥"
              : skillScore >= 50
              ? "Good Start 👍"
              : "Needs Improvement 📚"}
          </h2>

          <p>
            Recommended learning:
          </p>

          <ul>
            <li>Practice Python fundamentals</li>
            <li>Work on problem solving</li>
            <li>Practice coding challenges</li>
          </ul>

          <button onClick={startSkillTest}>
            Retake Assessment
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // CODING
  // =====================================================

  if (page === "coding") {
    return (
      <Page title="Coding Practice" back={home}>

        <div className="detail-card">

          <h2>🐍 Python Challenge</h2>

          <p>
            Write a Python program to find the largest
            number in the list.
          </p>

          <div className="coding-question">
            <strong>Input:</strong>

            <pre>
numbers = [10, 45, 2, 99, 34]
            </pre>

            <strong>Expected Output:</strong>

            <pre>99</pre>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Example:

numbers = [10, 45, 2, 99, 34]
print(max(numbers))`}
          />

          <button onClick={runCode}>
            ▶ Run Code
          </button>

          {codeResult && (
            <div className="result-box">
              {codeResult}
            </div>
          )}

        </div>

      </Page>
    );
  }

  // =====================================================
  // COMMUNICATION
  // =====================================================

  if (page === "communication") {
    return (
      <Page title="Communication Practice" back={home}>

        <div className="detail-card">

          <h2>🗣️ Self Introduction</h2>

          <p>
            Imagine you are sitting in an interview.
            Introduce yourself professionally.
          </p>

          <textarea
            value={communicationAnswer}
            onChange={(e) =>
              setCommunicationAnswer(e.target.value)
            }
            placeholder="Tell me about yourself..."
          />

          <button onClick={analyzeCommunication}>
            Analyze My Answer
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // COMMUNICATION RESULT
  // =====================================================

  if (page === "communication-result") {
    return (
      <Page title="Communication Result" back={home}>

        <div className="result-card">

          <p>Communication Score</p>

          <h1>{communicationScore}%</h1>

          <h2>
            {communicationScore >= 80
              ? "Excellent Communication 🔥"
              : communicationScore >= 60
              ? "Good Communication 👍"
              : "Keep Practicing 📚"}
          </h2>

          <ul>
            <li>Keep your introduction structured</li>
            <li>Use short and clear sentences</li>
            <li>Explain your skills confidently</li>
          </ul>

          <button
            onClick={() => setPage("communication")}
          >
            Practice Again
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // INTERVIEW
  // =====================================================

  if (page === "interview") {
    return (
      <Page title="AI Mock Interview" back={home}>

        <div className="detail-card">

          <p>
            Question {interviewQuestion + 1} of{" "}
            {interviewQuestions.length}
          </p>

          <h2>
            {interviewQuestions[interviewQuestion]}
          </h2>

          <textarea
            value={currentInterviewAnswer}
            onChange={(e) =>
              setCurrentInterviewAnswer(e.target.value)
            }
            placeholder="Type your interview answer..."
          />

          <button onClick={submitInterviewAnswer}>
            {interviewQuestion ===
            interviewQuestions.length - 1
              ? "Finish Interview"
              : "Next Question →"}
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // INTERVIEW RESULT
  // =====================================================

  if (page === "interview-result") {
    return (
      <Page title="Interview Result" back={home}>

        <div className="result-card">

          <p>Overall Interview Score</p>

          <h1>{interviewScore}%</h1>

          <h2>
            Interview Completed 🎉
          </h2>

          <ul>
            <li>Answer questions with a clear structure</li>
            <li>Give specific examples from projects</li>
            <li>Explain your contribution clearly</li>
            <li>Practice speaking confidently</li>
          </ul>

          <button onClick={startInterview}>
            Try Interview Again
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // RESUME
  // =====================================================

  if (page === "resume") {
    return (
      <Page title="Resume Builder" back={home}>

        <div className="detail-card">

          <h2>📄 Your Resume</h2>

          <p>
            Add your existing resume in PDF, DOC or DOCX
            format.
          </p>

          <label className="add-resume-button">
            + Add Resume

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={addResume}
            />
          </label>

          {resumeFile && (
            <div className="result-box">

              <strong>
                Selected Resume:
              </strong>

              <p>
                {resumeFile.name}
              </p>

              <button onClick={createResume}>
                Save Resume
              </button>

            </div>
          )}

          {resumeCreated && (
            <div className="success-box">
              Resume saved successfully ✅
            </div>
          )}

        </div>

      </Page>
    );
  }

  // =====================================================
  // OPPORTUNITIES
  // =====================================================

  if (page === "opportunities") {
    return (
      <Page title="Employee Opportunities" back={home}>

        <div className="opportunity-grid">

          {opportunities.map((opportunity) => (
            <div
              className="feature-card opportunity-card"
              key={opportunity.id}
            >

              <span className="opportunity-type">
                {opportunity.type}
              </span>

              <h2>{opportunity.role}</h2>

              <h3>{opportunity.company}</h3>

              <p>
                📍 {opportunity.location}
              </p>

              <p>
                💰 {opportunity.stipend}
              </p>

              <p>
                🛠️ {opportunity.skills}
              </p>

              <p>
                🎓 {opportunity.eligibility}
              </p>

              <p>
                ⏰ Deadline: {opportunity.deadline}
              </p>

              <button
                onClick={() =>
                  openOpportunity(opportunity)
                }
              >
                Apply Now →
              </button>

            </div>
          ))}

        </div>

      </Page>
    );
  }

  // =====================================================
  // APPLICATION
  // =====================================================

  if (page === "application") {
    return (
      <Page
        title="Apply for Opportunity"
        back={() => setPage("opportunities")}
      >

        <div className="detail-card">

          <h2>
            {selectedOpportunity.role}
          </h2>

          <p>
            {selectedOpportunity.company}
          </p>

          <hr />

          <input
            placeholder="Full Name"
            value={applicationForm.name}
            onChange={(e) =>
              updateApplication("name", e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={applicationForm.email}
            onChange={(e) =>
              updateApplication("email", e.target.value)
            }
          />

          <input
            placeholder="Phone Number"
            value={applicationForm.phone}
            onChange={(e) =>
              updateApplication("phone", e.target.value)
            }
          />

          <input
            placeholder="College"
            value={applicationForm.college}
            onChange={(e) =>
              updateApplication("college", e.target.value)
            }
          />

          <input
            placeholder="Degree / Branch"
            value={applicationForm.degree}
            onChange={(e) =>
              updateApplication("degree", e.target.value)
            }
          />

          <input
            placeholder="Skills"
            value={applicationForm.skills}
            onChange={(e) =>
              updateApplication("skills", e.target.value)
            }
          />

          <textarea
            placeholder="Why should we select you?"
            value={applicationForm.why}
            onChange={(e) =>
              updateApplication("why", e.target.value)
            }
          />

          <button onClick={submitApplication}>
            Submit Application →
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // APPLICATION SUCCESS
  // =====================================================

  if (page === "application-success") {
    return (
      <Page title="Application Submitted" back={home}>

        <div className="result-card">

          <h1>✓</h1>

          <h2>
            Application Submitted Successfully
          </h2>

          <p>
            Your application has been recorded.
          </p>

          <div className="result-box">

            <p>
              Application ID:
            </p>

            <strong>
              {applications[applications.length - 1]?.id}
            </strong>

            <p>
              Status: <strong>Applied</strong>
            </p>

          </div>

          <button
            onClick={() => setPage("applications")}
          >
            View My Applications
          </button>

        </div>

      </Page>
    );
  }

  // =====================================================
  // MY APPLICATIONS
  // =====================================================

  if (page === "applications") {
    return (
      <Page title="My Applications" back={home}>

        {applications.length === 0 ? (
          <div className="detail-card empty-state">

            <div className="empty-icon">
              📬
            </div>

            <h2>
              No Applications Yet
            </h2>

            <p>
              Explore employee opportunities and apply
              for suitable roles.
            </p>

            <button
              onClick={() => setPage("opportunities")}
            >
              Explore Opportunities →
            </button>

          </div>
        ) : (
          <div className="application-list">

            {applications.map((application) => (
              <div
                className="detail-card application-item"
                key={application.id}
              >

                <h2>
                  {application.role}
                </h2>

                <p>
                  {application.company}
                </p>

                <span className="application-status">
                  {application.status}
                </span>

                <p>
                  Application ID:{" "}
                  <strong>{application.id}</strong>
                </p>

                <p>
                  Applied on: {application.date}
                </p>

              </div>
            ))}

          </div>
        )}

      </Page>
    );
  }

  // =====================================================
  // JOB READINESS
  // =====================================================

  if (page === "readiness") {
    return (
      <Page title="Job Readiness" back={home}>

        <div className="result-card">

          <p>
            Your overall readiness
          </p>

          <h1>
            {readiness}%
          </h1>

          <h2>
            {readiness >= 80
              ? "Job Ready 🔥"
              : readiness >= 60
              ? "Almost Ready 🚀"
              : "Keep Building Your Skills 📚"}
          </h2>

          <ul>
            <li>
              Technical Skills: {technicalScore}%
            </li>

            <li>
              Communication: {communication}%
            </li>

            <li>
              Mock Interview: {interview}%
            </li>

            <li>
              Resume:{" "}
              {resumeCreated
                ? "Completed"
                : "Not Added"}
            </li>
          </ul>

          <button onClick={() => setPage("skills")}>
            Improve Skills
          </button>

        </div>

      </Page>
    );
  }

  return null;
}

// =====================================================
// FEATURE COMPONENT
// =====================================================

function Feature({
  icon,
  title,
  text,
  button,
  action,
}) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{text}</p>

      <button onClick={action}>
        {button}
      </button>

    </div>
  );
}

// =====================================================
// PAGE COMPONENT
// =====================================================

function Page({
  title,
  back,
  children,
}) {
  return (
    <div>

      <nav>

        <strong>
          JOB SEEKER AI
        </strong>

        <div className="nav-actions">

          <button onClick={back}>
            Home
          </button>

        </div>

      </nav>

      <main className="page-content">

        <p className="eyebrow">
          JOB SEEKER AI
        </p>

        <h1>{title}</h1>

        {children}

      </main>

    </div>
  );
}

export default App;