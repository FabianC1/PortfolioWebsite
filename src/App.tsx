import { useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './index.css';
import './App.css';

function App() {

  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalImageSrc(null);
    }, 300);
  };


  return (
    <div className="min-h-screen bg-charcoalBlack text-white font-sans">

      {/* Transparent Header */}
      <header
        className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[rgba(18,18,31,0.6)] backdrop-blur-md shadow-md shadow-purple-800/20 gradient-border-b"
      >
        <h1 className="text-2xl font-bold text-purple-300">Fabian Galasel</h1>
        <nav className="space-x-6 text-sm uppercase tracking-wide text-purple-200">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>


      <header className="flex items-center justify-center min-h-[60vh] pl-32 pr-30 bg-darkPurple">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 ml-24 pt-52">

          <>
            {/* Profile Image */}
            <div
              onClick={() => handleImageClick("/pfp.jpg")}
              className="cursor-pointer rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ width: '25rem', height: '24rem' }}
            >
              <img
                src="/pfp.jpg"
                alt="Fabian Galasel"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal */}
            {isModalOpen && modalImageSrc && (
              <div
                className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50
      transition-opacity duration-300
      ${isAnimating ? 'opacity-100' : 'opacity-0'}
      `}
                onClick={handleCloseModal}
              >
                <div
                  className={`w-[80vw] h-[80vh] rounded-lg overflow-hidden shadow-lg border-2 border-white
        transform transition-transform duration-300
        ${isAnimating ? 'scale-100' : 'scale-90'}
        `}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalImageSrc}
                    alt="Fabian Galasel Large"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </>


          {/* Name, Title, and Social Links */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold">Fabian Galasel</h1>
            <p className="text-xl md:text-2xl mt-2 font-light text-skyBlue">Aspiring Software Developer</p>

            <div className="mt-10 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/FabianC1"
                target="_blank"
                rel="noopener noreferrer"
                className="slide-bg flex items-center space-x-2 border border-white text-skyBlue px-4 py-2 rounded-full transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fabian-galasel"
                target="_blank"
                rel="noopener noreferrer"
                className="slide-bg flex items-center space-x-2 border border-white text-skyBlue px-4 py-2 rounded-full transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

          </div>

        </div>
      </header>



      {/* Spacer to push content below fixed header */}
      <div className="h-16"></div>

      {/* Sections (to be expanded) */}
      <section
        id="about"
        className="max-w-4xl mx-auto py-24 px-6 relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-purple-300 mb-6">About Me</h2>

        {/* Picture and description side by side */}
        <div className="flex gap-16 items-start">
          <img
            src="/image2.jpg"
            alt="Fabian Galasel"
            className="w-40 h-40 rounded-full border-2 border-purple-500 hover:opacity-100 transition-opacity flex-shrink-0 mt-6 cursor-default"
            style={{ objectFit: "cover" }}
          />

          <p className="text-gray-300 leading-relaxed text-lg backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg max-w-xl">
            I am Fabian Galasel, an aspiring software developer with a passion for building web and mobile applications.
            I recently graduated with a BSc in Computer Science from Middlesex University.
            I’m looking for a role where I can keep growing—somewhere I can dedicate myself to learning new technologies, sharpening my skills, 
            and becoming the best developer I can be.
          </p>


        </div>

        {/* Skills row below, centered */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto">
          {[
            "TypeScript", "Bash", "JavaScript", "HTML5", "CSS3",
            "React", "React Native", "Node.js", "Express.js", "Python",
            "Kotlin", "Flask", "Axios", "C++", "Java",
            "Vue.js", "React Navigation", "MongoDB"
          ].map((tech) => (
            <span
              key={tech}
              className="cursor-default px-4 py-1 text-sm rounded-full border border-skyBlue text-skyBlue bg-white/5 hover:bg-skyBlue hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>



      <section id="projects" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-purple-300 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-darkPurple p-6 rounded-lg border border-purple-700 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Housing Price Prediction</h3>
            <p className="text-gray-300 mb-4">A machine learning project predicting house prices using regression models.</p>
            <a href="https://github.com/FabianC1/Housing-Price-Prediction-Using-Regression-Models" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:text-neonPurple">
              View on GitHub
            </a>
          </div>
          <div className="bg-darkPurple p-6 rounded-lg border border-purple-700 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">PulseTech Mobile App</h3>
            <p className="text-gray-300 mb-4">A React Native app for medication reminders, messaging, and appointment management.</p>
            <a href="https://github.com/FabianC1/PulseTechMobile" target="_blank" rel="noopener noreferrer" className="text-skyBlue hover:text-neonPurple">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-purple-300 mb-8">Education</h2>
        <div className="space-y-6">
          <div className="bg-darkPurple p-6 rounded-lg border border-purple-700 shadow-lg">
            <h3 className="text-xl font-semibold">Middlesex University</h3>
            <p className="text-gray-300 font-medium">Bachelor of Computer Science</p>
            <p className="text-gray-300 mb-2">2022 - 2025 | Expected First Class Honours</p>
            <p className="text-gray-300">
              Focused on software development, full stack engineering, and user-centered design. Gained practical experience in programming, web technologies, software engineering, and mobile app development.
            </p>
          </div>
          <div className="bg-darkPurple p-6 rounded-lg border border-purple-700 shadow-lg">
            <h3 className="text-xl font-semibold">Stanmore College</h3>
            <p className="text-gray-300 font-medium">IT BTEC Extended Diploma (RQF), Computer Science</p>
            <p className="text-gray-300 mb-2">2019 - 2022 | Triple Distinction* (D*D*D*)</p>
            <p className="text-gray-300">
              Gained hands-on experience in full-stack development, cybersecurity, IT project management, and technical support.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">Contact</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out via email or connect on LinkedIn.</p>
        <a href="mailto:galaselfabian@gmail.com" className="text-skyBlue hover:text-neonPurple underline">
          galaselfabian@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-#ffffff-500">
        &copy; {new Date().getFullYear()} Fabian Galasel
      </footer>
    </div>
  );
}

export default App;
