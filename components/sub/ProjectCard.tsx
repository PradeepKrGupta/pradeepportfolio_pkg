"use client"
// import React from "react";
// import styled from "styled-components";
// import Image from "next/image";
// import Link from "next/link";
// import { IoMdCalendar } from 'react-icons/io';

// const StyledProjectCard = styled.div`
//   position: relative;
//   overflow: hidden;
//   border: 2px solid #2a0e61;
//   border-radius: 0.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, border-color 0.3s ease; /* Modified transition property */

//   &:hover {
//     transform: scale(1.02); /* Increased scale for smoother hover effect */
//     border-color: #a020f0;
//   }
// `;


// const VisitProjectButton = styled.div`
//   position: absolute;
//   bottom: 10px;
//   right: 10px;
//   border: 2px solid #2a0e61;
//   padding: 6px 13px;
//   background-color: #2a0e61;
//   color: white;
//   cursor: pointer;
//   border-radius: 8px;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     border: 2px solid #A020F0; 
    
//   }
// `;

// interface Props {
//   src: string;
//   title: string;
//   year:string;
//   description: string;
//   href: string;
// }

// const ProjectCard = ({ src, title,year, description, href }: Props) => {
//   return (
//     <StyledProjectCard>
//       <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />
//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <div className="flex items-center mb-2">
//             <span className="text-md mr-2 text-white align-center mb-2">
//               <IoMdCalendar />
//             </span>
//             <p className="text-sm font-semibold text-white mb-2">{year}</p>
//           </div>
//         <p className="mt-2 text-gray-300 mb-4 text-left">{description}</p>
//       </div>
//       <Link href={href} target="_blank" rel="noreferrer noopener">
//         <VisitProjectButton>
//           Visit Project
//         </VisitProjectButton>
//       </Link>
//     </StyledProjectCard>
//   );
// };

// export default ProjectCard;






import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { IoMdCalendar } from 'react-icons/io';

const StyledProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border: 2px solid #2a0e61;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: #a020f0;
  }
`;

const VisitProjectButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 2px solid #2a0e61;
  padding: 6px 13px;
  background-color: #2a0e61;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border: 2px solid #A020F0; 
  }
`;

interface Props {
  src: string;
  title: string;
  year: string;
  description: string;
  href: string;
  isVideo?: boolean;
}

const ProjectCard = ({ src, title, year, description, href, isVideo = false }: Props) => {
  return (
    <StyledProjectCard>
      {isVideo ? (
        <video src={src} width="1000" height="1000" loop autoPlay muted style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
          Sorry, your browser doesnot support embedded videos.
        </video>
      ) : (
        <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />
      )}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="flex items-center mb-2">
          <IoMdCalendar className="text-md mr-2 text-white align-center mb-2" />
          <p className="text-sm font-semibold text-white mb-2">{year}</p>
        </div>
        <p className="mt-2 text-gray-300 mb-4 text-left">{description}</p>
      </div>
      <Link href={href} passHref>
        <VisitProjectButton>
          Visit Project
        </VisitProjectButton>
      </Link>
    </StyledProjectCard>
  );
};

export default ProjectCard;


