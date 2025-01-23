import * as React from "react";
import PublicationsCard from "../sub/PublicationsCard";

import Image from "next/image";
import Link from 'next/link';


const Publications = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 cursor-pointer"
      id="publications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Research and Publications
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-rows gap-10 px-10"> {/* Use grid layout with 3 columns for medium size screens and above */}

        
        <PublicationsCard
          src="/Guesture.jpeg"
          year="4 October 2024"
          title="Gesture Recognition for Sign Language using Machine Learning"
          Conference="5th Global Conference for Advancement in Technology (GCAT)"
          description="Sign language serves as vital communication for the deaf and hard of hearing. This project addresses the communication gap by developing an advanced gesture recognition model, enabling real-time interpretation of sign language gestures from video input. Leveraging machine learning and computer vision, it accurately detects gestures, fostering inclusivity by translating them into text or spoken language. This innovative solution promotes effective communication between both sign language users and the broader community. Notably, the system boasts exceptional accuracy in real-time detection of 18 gestures, marking a significant advancement in accessibility technology."
          href="https://drive.google.com/file/d/1dYUdaNnW5GODrX1d2aUGzYvPVBCGh3PP/view?usp=sharing"
        />
            <PublicationsCard
              src="/WifiJammer.jpeg"
              year="20 Sept 2024"
              title="Low-Cost Network Jammer for Wi-Fi Network in Civilian Areas"
              Conference="5th International Conference on Smart Electronics and Communication (ICOSEC 2024)"
              description="This application presents a novel approach to intercepting unmanned aerial vehicles (UAVs) and the Wifi Networks operating in the 2.4 GHz frequency band using an Arduino Nano and nRF24L01 module. The jamming device identifies wireless networks, targets specific channels, and disrupts drone connections in real-time. It provides a flexible and scalable solution for network security professionals, with a focus on drones like the DJI Phantom and Parrot Bebop series. The paper details implementation, experimental results, and highlights the effectiveness of this 2.4 GHz jammer for UAV countermeasures."
              href="https://ieeexplore.ieee.org/document/10722738"
            />
            <PublicationsCard
              src="/facialCertificate.jpeg"
              year="24 June 2024"
              title="Facial Emotion Recognition Using Computer Vision Techniques"
              Conference="Fifteenth International IEEE Conference on Computing, Communication, and Networking Technologies (ICCCNT)"
              description="This is one of my best Deep Learning Project where 7 Different Facial Emotions of Humans (Happy, Sad, Angry, Disgust, Surprise, Neutral, Fear) can be able to detect, In this project different Algorithms like Convolutional Neural Network (CNN), ResNet50 and InceptionV3 have been used to trained the model. About Dataset: The dataset comprises a diverse collection of 28,821 images used for training, featuring seven distinct facial expressions: Total Images: 28821 ,surprise: 3,205 images, fear: 4,103 images, anger: 3,993 images, neutral: 4,982 images, sadness: 4,938 images, disgust: 436 images, happiness: 7,164 images"
              href="https://ieeexplore.ieee.org/document/10725699"
            />
          <PublicationsCard
            src="/RealEstateCertificate.jpeg"
            year="19 July 2024"
            title="Real Estate Price Prediction Uisng PySpark MLlib"
            Conference="1st IEEE International Conference on Smart Power Control and Renewable Energy (ICSPCRE)"
            description="This is one of the good project for using the big data techonolgy like pyspark mllib where in dataset I have used around 3 lakh instances with around 18 attributes with the help of preprocessing the data and it's proper corrections the model can able to predict the real estate prices according to the dependent attributes required for the proper predictions on Tier 1 cities like Mumbai, Pune, Bangalore, Delhi, Hydrabad and many more."
            href="https://ieeexplore.ieee.org/document/10675142"
          />
          
      </div>
    </div>

  );
};

export default Publications;



