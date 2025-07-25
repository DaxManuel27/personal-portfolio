import React from "react";

export default function Education() {
  const relevantCoursework = [
    "Object Oriented Programming",
    "Software Engineering", 
    "Databases",
    "Discrete Math",
    "Calculus",
    "Physics"
  ];

  return (
    <div className="card animate-fade-in flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-text mb-8 text-center">
        Education
      </h2>
      <div className="text-center max-w-2xl">
        <h3 className="text-2xl font-semibold text-accent mb-2">
          University of New Brunswick
        </h3>
        <p className="text-lg text-text-secondary mb-4">
          Fredericton, NB
        </p>
        <p className="text-xl font-medium text-text-secondary mb-8">
          Software Engineering Co-op
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-text mb-4">
            Relevant Coursework
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relevantCoursework.map((course, index) => (
              <div key={index} className="text-text-secondary">
                • {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 