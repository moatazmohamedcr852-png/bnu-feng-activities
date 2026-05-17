import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Robotics Section */}
      <section id="robotics" className="section section-light">
        <div className="section-header">
          <h2 className="section-title">Robotics</h2>
          <p className="section-description">
            Building the future of automation, underwater exploration, and smart robotic systems.
          </p>
        </div>
        
        <div className="grid-2">
          <ProjectCard 
            teamName="Robocore Robotics"
            description="A dedicated robotics team focused on developing advanced remote-operated vehicles and tackling complex engineering challenges. اسفين يا دكتور والله "
            imageIcon="/robocore.jpg"
            projects={[
              {
                name: "ROV Project - MATE ROV Competition",
                description: "Representing FENG in the international MATE ROV competition by building an advanced Remotely Operated Vehicle to perform intricate tasks underwater.",
                badgeText: "Competition Project"
              }
            ]}
          />
          
          <ProjectCard 
            teamName="Hooligans"
            description="A competitive robotics squad specializing in marine robotics and participating in global engineering competitions."
            imageIcon="/hoolgans.png"
            projects={[
              {
                name: "ROV Project - MATE ROV Competition",
                description: "Representing FENG in the international MATE ROV competition by building an advanced Remotely Operated Vehicle to perform intricate tasks underwater.",
                badgeText: "Competition Project"
              }
            ]}
          />

          <ProjectCard 
            teamName="Re-Move (Exo-skeleton)"
            description="A wearable robotic arm designed for rehabilitation. A doctor performs movements in the clinic, which the device records and saves to a file. When the patient returns home and activates the device, it reads the file and accurately replicates the recorded movements."
            icon={<span className="material-icons">accessibility_new</span>}
          />

          <ProjectCard 
            teamName="Guardian"
            description="A smart vehicle designed to assist police in raids, featuring advanced facial recognition and personnel identification capabilities."
            icon={<span className="material-icons">local_police</span>}
          />
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section id="entrepreneurship" className="section section-gray">
        <div className="section-header">
          <h2 className="section-title">Entrepreneurship</h2>
          <p className="section-description">
            Fostering innovation and bringing groundbreaking projects from the lab to the real world.
          </p>
        </div>
        
        <div className="grid-2" style={{ maxWidth: '800px' }}>
          <ProjectCard 
            teamName="Rally Society"
            description="A hub for entrepreneurial engineers working to solve real-world problems. We focus on cultivating an entrepreneurial mindset and fostering innovative thinking among students."
            imageIcon="/rally.png"
          />
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="section section-light">
        <div className="section-header">
          <h2 className="section-title">Tech</h2>
          <p className="section-description">
            Exploring software, hardware, and electronics through hands-on workshops and global communities.
          </p>
        </div>
        
        <div className="grid-2">
          <ProjectCard 
            teamName="Arduino Workshop"
            description="A hands-on environment where students learn the fundamentals of electronics, microcontrollers, and embedded systems programming."
            icon={<span className="material-icons">memory</span>}
          />
          
          <ProjectCard 
            teamName="IEEE Student Branch"
            description="The premier technical and professional organization dedicated to advancing technology for the benefit of humanity. Join a global network of engineers and innovators."
            imageIcon="/ieee.png"
          />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Benha National University - Faculty of Engineering (FENG). All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
