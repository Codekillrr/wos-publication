import React from "react";

const Subjects = () => {
  const items = [
    "Material Science",
    "Microbiology",
    "Computer Science",
    "Engineering",
    "Biology",
    "Medicine",
    "Earth Science",
    "Meteorology",
    "Chemistry",
    "Agriculture",
    "Business & Economics",
    "Geophysics",
    "Atmospheric Science",
    "Physics",
    "Food Science",
    "Social Science",
    "Linguist",
    "Physiology",
    "Nursing",
    "Archeology",
  ];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-5">
      {items.map((subject, idx) => (
        <div
          key={idx}
          className="px-4 py-1.5 shadow-md border-b-2 border-1 min-w-50 rounded-4xl"
        >
          {subject}
        </div>
      ))}
    </div>
  );
};

export default Subjects;
