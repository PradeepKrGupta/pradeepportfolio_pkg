"use client"
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { IoMdCalendar } from 'react-icons/io';

const StyledProjectCard = styled.div`
  position: relative;
  display: flex;
  border: 2px solid #2a0e61;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease; /* Modified transition property */

  &:hover {
    transform: scale(1.02); /* Increased scale for smoother hover effect */
    border-color: #a020f0;
  }
`;


const ImageContainer = styled.div`
  width: 20%;
`;

const ContentContainer = styled.div`
  width: 80%;
  padding: 20px;
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
    border-color: #A020F0;
  }
`;

interface Props {
  src: string;
  year: string;
  title: string;
  by: string;
  description: string;
  href: string;
}

const CertificateCard = ({ src, year, title, by, description, href }: Props) => {
  return (
    <StyledProjectCard>
      <ImageContainer>
        <Image src={src} alt={title} width={200} height={300} className="w-full object-contain" />
      </ImageContainer>
      <ContentContainer>
        <div className="relative">
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2 text-white align-center mb-2">
              <IoMdCalendar />
            </span>
            <p className="text-lg font-semibold text-white mb-2">{year}</p>
          </div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <h3 className="text-1xl font-semibold text-white">{by}</h3>
          <p className="mt-2 text-gray-300 mb-4 text-left">{description}</p>
        </div>
        <Link href={href} target="_blank" rel="noreferrer noopener">
          <VisitProjectButton>
            View Certificate
          </VisitProjectButton>
        </Link>
      </ContentContainer>
    </StyledProjectCard>
  );
};

export default CertificateCard;
