
import * as React from "react";
import ProjectCard from "../sub/CertificateCard";

import Image from "next/image";
import Link from 'next/link';


const Certificates = () => {
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
            src="/reactnative.jpg"
            year="2 July 2024"
            title="Complete React-Native Bootcamp: Built 18 ios and android apps"
            by="By Udemy"
            description="
            Completing the Complete React-Native Course on Udemy has been an incredible journey! 📱💡 Throughout the course, I progressed from a beginner to an advanced level, building several project-based full-stack mobile apps using the highly flexible cross-platform framework, React Native. This framework enables the creation of a single app that can run on Android, iOS, and even the web. The hands-on experience and in-depth knowledge gained have been invaluable. 🚀 I'm thrilled to have expanded my skill set and am excited to start applying what I've learned to real-world projects. A huge shoutout to the instructors for making this course both comprehensive and engaging! 👏✨"

            href="https://drive.google.com/file/d/124SwyistewpniDq1lt-YfhbrERwhEtGt/view?usp=sharing"
          />
          <ProjectCard
            src="/dockerCertificate.jpeg"
            year="April 2024"
            title="Docker for Intermediate Level"
            by="By Great Learning Academy"
            description="
            🚀 Completing the Docker for Intermediate level course on the Great Learning Platform has been an enriching experience! 💻⚙️ Throughout the journey, I delved into Docker storage solutions like volumes, mounts, and networking services such as Bridge, Host, and Overlay Networks. Additionally, I mastered automation techniques using Compose Up and Dockerfile. This learning journey has equipped me with advanced containerization skills, ready to tackle complex projects with confidence! 🎉"

            href="https://drive.google.com/file/d/1YwS3g1D8zClIpd-_vOtwkuCGu9nBbKnc/view?usp=sharing"
          />
          <ProjectCard
            src="/dataAnalyst.png"
            year="29 feb 2024"
            title="Data Analytics Essentials"
            by="By Cisco Networking Academy"
            description="🎓 Delving into Data Analytics Essentials with Cisco Networking Academy, I've acquired a comprehensive understanding of data exploration, analysis techniques, and visualization using tools like Tableau, Excel, and Python. 📊 From cleaning and organizing data to interpreting patterns and trends, this journey has equipped me with invaluable skills essential for informed decision-making in today's data-driven world. 🌐 Continuously eager to explore advanced topics and emerging technologies, I'm poised to leverage data as a catalyst for innovation and impact. 🚀"

            href="https://www.credly.com/badges/10323e93-88f1-4ac4-9817-378321df3aec"
          />

        <ProjectCard
          src="/aws.jpeg"
          year="3 Jan 2024"
          title="AWS Academy Introduction to Cloud Semester I"
          by="By AWS Academy"
          description="Immersing myself in AWS Academy's Introduction to Cloud Semester I, I've embarked on a transformative journey into the world of cloud computing. ☁️ From understanding the fundamentals of cloud architecture to hands-on experience with AWS services, this course has laid a solid foundation for harnessing the power of the cloud. 💻 Learning to deploy, manage, and scale applications in the cloud environment has equipped me with essential skills for modern IT infrastructure. 🌐 Eager to delve deeper into advanced cloud concepts and stay abreast of AWS innovations, I'm ready to leverage the cloud as a driving force for organizational growth and efficiency. 🚀"

          href="https://drive.google.com/file/d/1wdeFzR796yPvY5Oe1ho-i6uVi_Tebymm/view?usp=sharing"
        />

        <ProjectCard
          src="/web.jpeg"
          year="13 Sept 2023"
          title="The complete 2023 Web Development Bootcamp"
          by="By Udemy"
          description="Embarking on Udemy's The Complete 2023 Web Development Bootcamp, I've immersed myself in a comprehensive journey to master the art of web development. 💻 From HTML and CSS fundamentals to advanced concepts in JavaScript and frameworks like React and Node.js, this bootcamp has equipped me with the skills to build dynamic and responsive web applications. 🌐 Exploring topics such as database integration, API development, and deployment strategies, I've gained a holistic understanding of modern web development practices. 🚀 Continuously driven to refine my skills and explore emerging technologies 🌟"

          href="https://www.udemy.com/certificate/UC-728a5967-011c-44e5-b6e1-13bddc517aed/"
        />
      </div>
    </div>

  );
};




export default Certificates;



