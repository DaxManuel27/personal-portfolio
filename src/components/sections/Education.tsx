import React from "react";
import Image from "next/image";

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
    <div className="card card-hover animate-fade-in flex flex-col items-center justify-center h-full">
      <div className="mb-6 flex justify-center">
        <Image
          src="/unb-logo.png"
          alt="University of New Brunswick logo"
          width={180}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <h2 className="text-3xl font-bold text-text mb-8 text-center">
        Education
      </h2>
      <div className="text-center max-w-4xl">
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
          <h4 className="text-lg font-semibold text-text mb-6">
            Relevant Coursework
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantCoursework.map((course, index) => (
              <div 
                key={index} 
                className="bg-black/20 rounded-lg p-4 border border-white/10 hover:bg-black/40 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-text-secondary font-medium">
                  {course}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 