"use client"
import React from "react";
import { IoMdCalendar } from 'react-icons/io';
import Link from "next/link";
import styled from "styled-components";

const StyledEducationCard = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #2a0e61;
  text-align: center;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  background-color: transparent;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 100%;
  max-width: 450px;
  height: 500px;
  transition: transform 0.3s ease, border-color 0.3s ease; /* Modified transition property */
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.02); /* Increased scale for smoother hover effect */
    border-color: #a020f0;
  }
`;


interface Props {
  year: string;
  university: string;
  stream: string;
  description: string;
  cgpa: string;
}

const EducationCard = ({ year, university, stream, description, cgpa}: Props) => {
  return (
    // <div className="mb-4 rounded-lg overflow-hidden shadow-lg border-2 border-solid border-[#2A0E61] text-center py-15 bg-transparent mx-8 w-[450px] h-[500px] transition-border-color hover:border-[#A020F0] relative hover:scale-105 transition duration-300"> {/* Adjusted border color on hover */}
    <StyledEducationCard>
      <div className="px-6 py-6">
        <div className="flex items-center mb-2">
          <span className="text-lg mr-2 text-white align-center mb-4"> {/* Adding text-white class */}
            <IoMdCalendar />
          </span>
          <p className="text-lg font-semibold text-white mb-4">{year}</p>
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-bold text-white mb-4">{university}</h2>
          <p className="text-base font-bold text-white mb-4">{stream}</p>
        </div>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <p className="text-sm font-bold text-white">CGPA: {cgpa}</p> {/* Changed text color to white */}
      </div>
    {/* </div> */}
    </StyledEducationCard>
  );
};

export default EducationCard;
