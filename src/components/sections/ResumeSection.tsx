import React from "react";

// TODO: Replace these placeholders with your actual resume content
const resumeData = [
  {
    heading: "Education",
    items: [
      {
        title: "Bachelor of Software Engineering, University of New Brunswick",
        date: "May 2029 | GPA 3.7",
        description:
          "Key coursework: Java, Databases, Discrete Mathematics, Calculus, Physics",
      },
    ],
  },
  {
    heading: "Technical Projects",
    items: [
      {
        title: "Premier League Match Prediction Model",
        description:
          "• Consumed football-data.org API to gather historical match data and team statistics.\n• Cleaned and transformed nested JSON with Python / pandas.\n• Used Sci-Kit learn to create the ML model using linear regression.",
      },
      {
        title: "Assignment Planner (ReactJS)",
        description:
          "• Built a single-page web app that lets students organize assignments and track grades.\n• Implemented modern, responsive UI with custom CSS and state management with React hooks.",
      },
      {
        title: "Wordle Clone",
        description:
          "• Re-created the popular game using vanilla HTML, CSS, and JavaScript.\n• Implemented guess validation, coloured feedback squares, keyboard input, and win / loss states.",
      },
    ],
  },
  {
    heading: "Skills",
    items: [
      {
        title: "Programming Languages",
        description: "SQL, Java, JavaScript, Python, HTML, CSS",
      },
      {
        title: "Frameworks & Libraries",
        description: "ReactJS, Spring Boot, Sci-Kit Learn",
      },
      {
        title: "Tools & Platforms",
        description: "MacOS, Windows, Linux, VS Code, MariaDB, Git, Object-Oriented Programming principles",
      },
    ],
  },
  {
    heading: "Experience",
    items: [
      {
        title: "Merchandiser – PepsiCo Beverages Company",
        date: "Apr 2024 – Present",
        description:
          "• Merchandise Pepsi products to planogram standards with strong attention to detail.\n• Work efficiently at pace to ensure all daily tasks are completed across multiple store locations.",
      },
      {
        title: "Soccer Coach – Fredericton District Soccer Association",
        date: "Apr 2024 – Present",
        description:
          "• Lead and mentor groups of 100+ youth players aged 5-17.\n• Plan drills, explain techniques, and provide constructive feedback tailored to individual skill levels.",
      },
      {
        title: "Summer Camp Counsellor – REDS Youth Programs",
        date: "Jul 2024",
        description:
          "• Supervised 60 campers, ensuring safety and inclusion.\n• Collaborated with staff to design engaging daily activities and quickly resolve conflicts among campers.",
      },
      {
        title: "Team Member – Tim Hortons",
        date: "Jul 2022 – Jul 2024",
        description:
          "• Thrived in fast-paced, high-pressure environment serving 500+ customers per shift.\n• Applied problem-solving skills to handle order issues and maintain customer satisfaction while following strict health & safety protocols.",
      },
    ],
  },
  {
    heading: "Extracurricular",
    items: [
      {
        title: "UNB Men's Varsity Soccer Player",
        date: "Aug 2024 – Present",
        description: "Compete at the varsity level while balancing rigorous academic schedule and team commitments.",
      },
    ],
  },
];

export default function ResumeSection() {
  const resumeUrl = "/Jul2025Resume.pdf"; // Make sure PDF is in public folder

  return (
    <div className="card animate-fade-in w-full max-w-4xl flex flex-col items-center justify-center h-full">
      <div className="flex justify-between items-center mb-8 w-full">
        <h2 className="text-3xl font-bold text-text">Resume</h2>
        <a
          href={resumeUrl}
          download
          className="px-4 py-2 rounded-md bg-accent/20 text-accent font-semibold hover:bg-accent/30 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-8 text-left w-full">
        {resumeData.map((section) => (
          <div key={section.heading}>
            <h3 className="text-2xl font-bold text-accent mb-4 pb-2 border-b-2 border-accent/20">
              {section.heading}
            </h3>
            <ul className="space-y-6">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <h4 className="text-lg font-semibold text-text">
                      {item.title}
                    </h4>
                    {item.date && (
                      <p className="text-sm text-text-secondary md:text-right">
                        {item.date}
                      </p>
                    )}
                  </div>
                  <div className="prose prose-invert max-w-none text-text-secondary mt-1">
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description.split("\n").map((line, i) => (
                        <li key={i}>{line.replace(/^•\s*/, "")}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 