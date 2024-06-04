"use client"
import * as React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 cursor-pointer"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10"> {/* Use grid layout with 3 columns for medium size screens and above */}

        <ProjectCard
          src="/BusTracking.mp4" // Replace with your actual video path
          title="Cloud-Based Real-Time Bus Tracking System using Mobile GPS"
          year="23-May 2024"
          description="The Hybrid Cloud-Based Bus Tracking System is an innovative solution designed to enhance real-time bus tracking 🚌💨, making commuting more efficient and dependable. The system leverages Google Firebase 🔐 for user authentication and Amazon Web Services (AWS) EC2 🌐 to host the server, ensuring a seamless and reliable user experience. The custom-made user interface was built from scratch using the versatile ReactNative framework 📱, delivering a robust cross-platform application.
          This project demonstrates the potential of cloud-based technologies in transforming everyday commuting, providing a reliable and efficient solution for real-time bus tracking."
          href="https://youtu.be/uJIKwjOQbZQ?si=mIFOtrN1nv5Hg997"
          isVideo={true}
        />

        <ProjectCard
          src="/Emotion_Recognition.mp4" // Replace with your actual video path
          title="Emotion Recognition using CNN"
          year="11-April 2024"
          description="Our project has developed a cutting-edge real-time facial emotion detection system, utilizing Convolutional Neural Networks (CNN) to accurately recognize and interpret seven distinct emotions: neutral 🙃, happy 😃, sad 😢, angry 😠, disgust 😖, surprise 😮, and fear 😨. Trained and tested on a robust dataset of over 36k images, this technology ensures high precision in emotion recognition. It enhances user experiences across platforms, enabling more empathetic and responsive digital interactions. This breakthrough advances the field of artificial intelligence by adapting technology to seamlessly reflect human emotions."
          href="https://www.linkedin.com/feed/update/urn:li:activity:7183535325439299584/"
          isVideo={true}
        />


        <ProjectCard
          src="/SignLanguageDetectionOutput.mp4"
          title="Guesture Recognition using YoloV5"
          year="Sept-Oct 2023"
          description="Sign language serves as vital communication for the deaf and hard of hearing. This project addresses the communication gap by developing an advanced gesture recognition model, enabling real-time interpretation of sign language gestures from video input. Leveraging machine learning and computer vision, it accurately detects gestures, fostering inclusivity by translating them into text or spoken language. This innovative solution promotes effective communication between both sign language users and the broader community. Notably, the system boasts exceptional accuracy in real-time detection of 18 gestures, marking a significant advancement in accessibility technology 🤚✋👋👌✌️🤞"

          href="https://www.linkedin.com/posts/pradeep-kumar-gupta-b696a7234_amritavishwavidyapeetham-machinelearning-activity-7134759439047217152-PCYd?utm_source=share&utm_medium=member_desktop"
          isVideo={true}
        />
        <ProjectCard
          src="/portfolio.jpeg"
          title="My Portfolio Website"
          year="Feb-March 2024"
          description="Discover the wonders of my portfolio website, where the celestial realm of space converges with cutting-edge technology. Crafted with Node.js and TypeScript to ensure a robust structure, Tailwind CSS for sleek styling, and React.js for an immersive frontend experience, it's an interstellar adventure through my projects, educational pursuits, and beyond. Engage with me through social icons, and embark on a voyage to explore the boundless possibilities of software development. 🌌🌠🌟☄️🚀"

          href="#"
        />
        <ProjectCard
          src="/HMS.jpeg"
          title="Hostel Management System"
          year="Nov-Dec 2022"
          description="The Hostel Management System is a web application crafted with HTML, CSS, and Python Flask framework, leveraging an Oracle database for seamless data insertion and retrieval of student information. It streamlines student registration processes for hostel accommodation while autonomously assigning room numbers, floors, and blocks. This project amalgamates technology and convenience to enhance hostel administration efficiency 👷‍♂️👷‍♀️🔩🧱🏠"

          href="https://github.com/PradeepKrGupta/Hostel-Management-System-using-python-flask-and-oracle-database--PKG"
        />
        <ProjectCard
          src="/AcademicSpot.jpeg"
          title="Academic Spot"
          year="July-Aug 2022"
          description="This project is a comprehensive website designed to facilitate efficient learning and collaboration among students and teachers. It offers seamless access to Microsoft Teams recording videos with full playback control. Additionally, users can easily locate and access materials uploaded by subject teachers. The website incorporates robust form validation to ensure accurate information submission during registration. Future enhancements will further enrich the user experience 🌐💻🖥️🌐"

          href="https://pradeepkrgupta.github.io/AcademicSpot--pkg/"
        />
        <ProjectCard
          src="/Jarvis.jpeg"
          title="Jarvis Artificial Intelligence"
          year="26 May 2023"
          description="Jarvis AI bears similarity to Google AI or Alexa. Developed using Python's Speech Recognition library and other supporting frameworks, this project enables seamless control of one's laptop or system. Its key functionalities include performing tasks such as opening and searching on YouTube, Google, and Wikipedia, playing music, delivering personalized greetings (wishme), providing current time and date information, and even generating a customized diet chart based on user input and many more such features. All these actions are performed effortlessly through voice commands, enhancing user convenience and interaction 🤖🧬🤖👾"

          href="https://github.com/PradeepKrGupta/Jarvis-Artificial-Intelligence-PKG-"
        />

        <ProjectCard
          src="/SpaceGame.mp4"
          title="Space Inveder Game"
          year="June-July 2022"
          description="This project is a small game developed with Python programming language, leveraging the Pygame library. The game features a single-player UFO ship tasked with defending against descending UFO enemies from space. Players score points by successfully hitting enemy UFOs with bullets, and the game continues until an enemy UFO collides with the player's UFO. Upon collision, the game ends, and the player's final score is displayed on the screen. This engaging game offers immersive entertainment with simple yet addictive gameplay mechanics.👾🛸👽🌌"

          href="https://github.com/PradeepKrGupta/Space-Invader-Game--PKG"
          isVideo={true}
        />
      </div>
    </div>

  );
};




export default Projects;



