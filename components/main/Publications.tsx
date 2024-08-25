
import * as React from "react";
import ProjectCard from "../sub/PublicationsCard";

import Image from "next/image";
import Link from 'next/link';


const Publications = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 cursor-pointer"
      id="certificates"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificates
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-rows gap-10 px-10"> {/* Use grid layout with 3 columns for medium size screens and above */}

        
          <ProjectCard
            src="/RealEstateCertificate.jpeg"
            year="19 July 2024"
            title="Real Estate Price Prediction Uisng PySpark MLlib"
            Conference="1st IEEE International Conference on Smart Power Control and Renewable Energy (ICSPCRE)"

            href="https://drive.google.com/drive/u/0/folders/1xyb4KAOQuy9Xvr7TlEt6UIrDmp6Oclgh"
          />
          <ProjectCard
            src="/facialCertificate.jpeg"
            year="24 June 2024"
            title="Facial Emotion Recognition Using Computer Vision Techniques"
            Conference="Fifteenth International IEEE Conference on Computing, Communication, and Networking Technologies (ICCCNT)"

            href="https://drive.google.com/drive/u/0/folders/1xyb4KAOQuy9Xvr7TlEt6UIrDmp6Oclgh"
          />
          
      </div>
    </div>

  );
};




export default Publications;



