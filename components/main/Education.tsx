// Education.tsx
import React from "react";
import EducationCard from "../sub/EducationCard";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="education">
      <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        Education
      </h1>
      <div className="flex flex-col md:flex-row w-full md:justify-center gap-4 md:gap-8 px-4">
        <EducationCard
          year="2021 - 2025"
          university="Amrita Vishwa Vidyapeetham, Bengaluru"
          stream="B.Tech (Computer Science and Engineering)"
          description="I am a final year Engineering Student of B.Tech Computer Science and Engineering at Amrita Vishwa Vidyapeetham University, Banglore. Proficient in Java, Python and JavaScript and adept at web and mobile app development, Data Science, and software debugging."
          cgpa="8.26/10"
        />
        <EducationCard
          year="2017 - 2019"
          university="Sai Global Secondary School, Nepal"
          stream="National Examinations Board (Equivalent: CBSE)"
          description="I have completed my Higher Secondary School from Sai Global Secondary School, Nepal on specialization of Physics, Chemistry and Math"
          cgpa="(3.22/4.0) <==> (8.05/10)"
        />
        <EducationCard
          year="June 2017"
          university="Buddha Jyoti MA VI, Nepal"
          stream="National Examinations Board (Equivalent: CBSE)"
          description="I have completed my schooling from National Examination Board in Buddha Jyoti MA VI."
          cgpa="(3.50/4.0) <==> (8.75/10)"
        />
        {/* Add more EducationCard components as needed */}
      </div>
    </div>
  );
};

export default Education;
