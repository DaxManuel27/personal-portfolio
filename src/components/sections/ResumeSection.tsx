import React from "react";

const resumeData = [
  {
    heading: "Education",
    items: [
      {
        title: "University of New Brunswick, Fredericton, NB",
        date: "GPA: 3.7 (Dean’s List)",
        description:
          "Relevant Coursework: Software Engineering, Systems Programming, OOP in Java, Databases, Discrete Math, Calculus, Physics",
      },
    ],
  },
  {
    heading: "Projects",
    items: [
      {
        title: "CheetahCode | GitHub | Website",
        description:
          "ReactJS, NodeJs, ExpressJS, Supabase\n" +
          "• Developed a full stack web app allowing users to practice and test coding speed in real time.\n" +
          "• Implemented user authentication using Supabase Auth, supporting registration, login, and session tokens.\n" +
          "• Designed RESTful APIs using Express to handle user authentication, user results, and code snippet management.\n" +
          "• Crafted a responsive typing area component using React ensuring real time and seamless user interaction.",
      },
      {
        title: "CodeSimplify Chrome Extension | GitHub | Download",
        description:
          "NodeJS, ExpressJS, Gemini API, HTML/CSS\n" +
          "• Enabled developers to understand codebases, by providing real time code explanations, through a chrome extension powered by Gemini API.\n" +
          "• Published Chrome Web store by building a full stack application with NodeJS and Express.\n" +
          "• Designed a sleek looking popup displaying the code explanation using HTML and CSS.",
      },
      {
        title: "Premier League Prediction Model | GitHub",
        description:
          "Python, Scikit-Learn, Pandas, Numpy\n" +
          "• Achieved 60% accuracy on betting props by training a linear regression model using Scikit-learn, indicating a profitable model.\n" +
          "• Boosted model performance through preprocessing data using pandas and numpy.\n" +
          "• Tested the model on multiple betting props, such as final score, total goals, and both teams to score.",
      },
    ],
  },
  {
    heading: "Technical Skills",
    items: [
      {
        title: "Languages",
        description: "Java, JavaScript, Python, HTML/CSS, SQL",
      },
      {
        title: "Frameworks/Libraries",
        description: "NodeJS, ExpressJS, React, Scikit-learn, pandas, numpy",
      },
      {
        title: "Developer Tools",
        description: "Git, GitHub, VS Code, IntelliJ Idea, MacOS, Windows, Linux",
      },
      {
        title: "Courses/Certifications",
        description: "Code with Mosh: Ultimate JavaScript Series, Code with Mosh: Data Structures and Algorithms.",
      },
    ],
  },
  {
    heading: "Experience",
    items: [
      {
        title: "Youth Soccer Coach",
        date: "April 2024 - Present | Fredericton District Soccer Association, Fredericton, NB",
        description:
          "• Demonstrated strong leadership in managing groups of over 100 children in a playing field.\n" +
          "• Provided mentorship and coaching to young athletes, to improve their understanding of the game.",
      },
      {
        title: "Merchandiser",
        date: "April 2025 – July 2025 | PepsiCo Beverages, Fredericton, NB",
        description:
          "• Used strong attention to detail to merchandise PepsiCo products properly and at pace to increase sales.",
      },
      {
        title: "Team Member",
        date: "July 2022 – July 2024 | Tim Hortons, Fredericton, NB",
        description:
          "• Demonstrated a strong ability to work in a fast-paced and high-pressure environment.",
      },
    ],
  },
  {
    heading: "Other",
    items: [
      {
        title: "UNB Men’s Varsity Soccer Player",
        date: "Aug 2024 - Present",
        description: "",
      },
    ],
  },
];

export default function ResumeSection() {
  return (
    <div className="card card-hover animate-fade-in w-full max-w-4xl flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-text mb-8 text-center">Resume</h2>
      <a
        href="/aug2025.pdf"
        download
        className="mb-8 px-6 py-2 rounded-lg bg-accent text-black font-semibold hover:bg-cyan-300 transition-colors duration-200"
      >
        Download PDF
      </a>
      <div className="w-full space-y-10">
        {resumeData.map((section) => (
          <div key={section.heading}>
            <h3 className="text-2xl font-bold text-accent mb-1">{section.heading}</h3>
            <hr className="border-accent mb-4" />
            <div className="space-y-6">
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="font-semibold text-text text-lg">{item.title}</span>
                    {item.date && (
                      <span className="text-text-secondary text-base md:text-right">{item.date}</span>
                    )}
                  </div>
                  {item.description && (
                    <ul className="list-disc list-inside text-text-secondary mt-1 whitespace-pre-line">
                      {item.description.split("\n").map((line, i) =>
                        line.trim().startsWith("•") ? (
                          <li key={i}>{line.replace(/^•\s*/, "")}</li>
                        ) : line.trim() !== "" ? (
                          <li key={i} className="list-none pl-0">{line}</li>
                        ) : null
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 