import { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './index.css';
import './App.css';
import { ThemeToggle } from './components/ThemeToggle';


function EducationTimelineItem({ item }: { item: typeof educationData[0] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-12 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
    >
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full 
                bg-orange dark:bg-skyBlue 
                border-2 border-black dark:border-white">
      </div>

      <div className="bg-darkPurple p-6 rounded-lg border border-pastelBlue dark:border-purple-700 shadow-md">

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-charcoalBlack dark:text-purple-300 flex items-center gap-3 mb-1">

              <span>{item.institution}</span>
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="w-10 h-10 object-contain"
                />
              )}
            </h3>
            <p className="text-orange dark:text-skyBlue">{item.degree}</p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.duration}</p>
            {/** Mobile collapsible block */}
            <div className="block md:hidden">
              <details
                className="text-black dark:text-gray-300 whitespace-pre-line cursor-pointer"
                onToggle={(e) => setExpanded(e.currentTarget.open)}
              >
                <summary className="text-[#7DAFC3] dark:text-skyBlue underline mb-2">
                  {expanded ? "Less Details" : "More Details"}
                </summary>
                <p>{item.details}</p>
              </details>
            </div>

            {/** Desktop always expanded */}
            <p className="hidden md:block text-black dark:text-gray-300 whitespace-pre-line">
              {item.details}
            </p>

          </div>

          {/* Images on md+ screens */}
          {item.images?.length > 0 && (
            <div className="flex flex-col gap-6 w-full md:w-72 mt-6">
              {item.images?.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.institution} image ${i + 1}`}
                  className="rounded-lg shadow-md border border-white/10 h-44 object-cover w-full max-w-md mx-auto md:mx-0"
                />
              ))}
            </div>

          )}
        </div>
      </div>
    </div>
  );
}

const educationData = [
  {
    institution: "Middlesex University",
    logo: "/mdx.png",
    images: ["/mdx-building.jpg", "/mdx-building-2.jpg"],
    degree: "BSc Computer Science – Expected First Class Honours",
    duration: "2022 – 2025",
    details:
      "Focused on software development, full stack engineering, and user-centered design. Gained practical experience in programming, web technologies, software engineering, and mobile app development.\n\n" +
      "Key modules and activities:\n" +
      "- Machine Learning\n" +
      "- Software Engineering\n" +
      "- Mobile Development\n" +
      "- Natural Language Processing (NLP)\n" +
      "- Web Applications and Databases\n" +
      "- Foundations of Computer Science\n" +
      "- Systems and Architecture\n" +
      "- User Experience (UX) Design\n" +
      "- Undergraduate Individual Project - PulseTech"
  },

  {
    institution: "Stanmore College",
    logo: "/stanmore.png",
    images: ["/stanmore1.png", "/stanmore-2.webp"],
    degree: "IT BTEC Extended Diploma (RQF) – D*D*D*",
    duration: "2019 – 2022",
    details:
      "Gained hands-on experience in designing and developing full-stack applications, managing IT systems, and applying best practices in technical support, cybersecurity, and project delivery.\n\n" +
      "Key modules and activities:\n" +
      "- Cyber Security & Incident Management\n" +
      "- Software Testing\n" +
      "- Website & Mobile App Development\n" +
      "- IT Project Management\n" +
      "- Data Modelling\n" +
      "- Programming\n" +
      "- Cisco Networking\n" +
      "- IT Services Delivery"
  }
];

function EducationSection() {
  return (
    <section id="education" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-charcoalBlack dark:text-purple-300 mb-10 text-center md:text-left">
        Education
      </h2>
      <div className="relative border-l-4 border-pastelBlue dark:border-purple-500 pl-4">
        {educationData.map((item, index) => (
          <EducationTimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}



function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY * 1.2,
        behavior: 'smooth',
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const projects = [
    {
      title: "PulseTechMobile",
      description: "A React Native mobile app for medication tracking, messaging, and appointment management.",
      url: "https://github.com/FabianC1/PulseTechMobile",
      icon: "/PulseTech.png",
      extraInfo: "Built with React Native, TypeScript and Node.js"
    },
    {
      title: "Housing Price Prediction",
      description: "A machine learning project predicting house prices using advanced regression models for improved accuracy.",
      url: "https://github.com/FabianC1/Housing-Price-Prediction-Using-Regression-Models",
      icon: "/python.png",
      extraInfo: "Developed with Python, Pandas, and Scikit-learn"
    },
    {
      title: "Lesson Booking System (Full Stack)",
      description: "A full stack JavaScript app enabling lesson booking with frontend and backend integration.",
      url: "https://github.com/FabianC1/LessonBookingSystem-FullStack",
      icon: "/CulinaryCanvas.png",
      extraInfo: "Full Stack: JavaScript, Express, MongoDB"
    },
    {
      title: "Swim School Management System",
      description: "A Java desktop application managing swimming lessons, schedules, students, and instructor assignments effectively.",
      url: "https://github.com/FabianC1/SwimSchool-Management-System",
      icon: "/java.png",
      extraInfo: "Built with Java and JavaFX"
    },
    {
      title: "PulseTech BackEnd",
      description: "A backend service for PulseTech, built with Node.js and Express to manage API endpoints and database interactions.",
      url: "https://github.com/FabianC1/PulseTech-BackEnd",
      icon: "/PulseTech.png",
      extraInfo: "Developed with Node.js, Express, and MongoDB"
    },
    {
      title: "Supply Chain System Software",
      description: "A C++ group project implementing software solutions for efficient supply chain management.",
      url: "https://github.com/FabianC1/Supply-Chain-System-Software",
      icon: "/c++.png",
      extraInfo: "Implemented in C++"
    },
    {
      title: "NLP Sentiment Analysis BiLSTM",
      description: "An NLP project analyzing sentiment using BiLSTM networks for improved text classification results.",
      url: "https://github.com/FabianC1/NLP-Sentiment-Analysis-BiLSTM",
      icon: "/python.png",
      extraInfo: "Utilised Python, PyTorch, and BiLSTM"
    }
  ];


  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-charcoalBlack dark:text-purple-300 mb-8 text-center md:text-left">Projects</h2>

      {/* Scroll instructions */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4 md:hidden">
        ← Swipe left/right to explore →
      </p>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4 hidden md:block">
        ← Scroll horizontally to view more projects →
      </p>

      {/* Scroll container with gradient edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r  pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l pointer-events-none z-10" />

        <div
          ref={scrollRef}
          className="relative w-full max-w-full flex space-x-6 overflow-x-auto snap-x snap-proximity px-2 scrollbar-hide touch-pan-x
             bg-[#f8f9fb] dark:bg-charcoalBlack text-black dark:text-white"
          style={{ scrollBehavior: 'auto', overflowY: 'hidden' }}
        >
          {projects.map(({ title, description, url, icon, extraInfo }, index) => (
            <div key={index} className="project-card snap-center shrink-0 w-[calc(100vw-3rem)] sm:w-96">

              <div className="project-card-content p-6 rounded-lg shadow-lg bg-inherit text-inherit flex flex-col justify-between h-full">

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-inherit cursor-default">
                    <span className="inline-flex items-center gap-2 break-words">
                      {title}
                      {icon && (
                        <img
                          src={icon}
                          alt={`${title} icon`}
                          className="w-6 h-6 object-contain inline-block"
                          loading="lazy"
                        />
                      )}
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 cursor-default" style={{ whiteSpace: 'normal' }}>
                    {description}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 cursor-pointer 
             text-skyBlue hover:text-black 
             dark:text-skyBlue dark:hover:text-white 
             transition-colors duration-300"
                  >
                    <span>View on GitHub</span>
                    <FaGithub className="text-xl" />
                  </a>
                </div>

                {/* Extra info appears after animation completes */}
                {extraInfo && (
                  <div className="project-extra">
                    <p className="text-gray-700 dark:text-white text-sm">{extraInfo}</p>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

}

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

    <div className="min-h-screen font-sans w-full overflow-x-hidden bg-white text-charcoalBlack dark:bg-charcoalBlack dark:text-white transition-colors duration-300">

      <Helmet>
        <title>Fabian Galasel Portfolio</title>
        <meta name="description" content="Fabian Galasel – Software, Web & Mobile Developer Portfolio" />
        <meta property="og:title" content="Fabian Galasel Portfolio" />
        <meta property="og:description" content="Explore my software, web, and mobile development work." />
        <meta property="og:image" content="https://fabian-galasel.netlify.app/pfp.jpg" />
        <meta property="og:url" content="https://fabian-galasel.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://fabian-galasel.netlify.app/pfp.jpg" />
      </Helmet>

      {/* Transparent Header */}
      <header
        className="fixed top-0 w-full z-50 px-6 py-6 flex flex-wrap justify-between items-center 
           bg-[rgba(191,201,221,0.62)] dark:bg-[rgba(18,18,31,0.45)] 
           backdrop-blur-md shadow-md shadow-purple-800/20 gradient-border-b"
      >

        {/* Top row: Name and ThemeToggle */}
        <div className="w-full flex justify-between items-center sm:w-auto">
          <h1 className="text-2xl font-bold text-charcoalBlack dark:text-lightPurple">Fabian Galasel</h1>
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom row: Navigation and ThemeToggle on desktop */}
        <div className="w-full flex justify-between items-center mt-4 sm:mt-0 sm:gap-6 sm:w-auto">
          <nav className="w-full sm:w-auto text-sm sm:text-base uppercase tracking-wide 
                    text-charcoalBlack dark:text-lightPurple 
                    flex justify-center sm:justify-start gap-x-3 sm:gap-x-6 flex-wrap">
            <a href="#about" className="hover:text-skyBlue dark:hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-skyBlue dark:hover:text-white transition">Projects</a>
            <a href="#education" className="hover:text-skyBlue dark:hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-skyBlue dark:hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <header className="flex items-center justify-center min-h-[60vh] bg-darkPurple px-6">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 pt-52">
          {/* Profile Image */}
          <div
            onClick={() => handleImageClick("/pfp.jpg")}
            className="cursor-pointer rounded-full overflow-hidden border-4 border-pastelBlue dark:border-white shadow-lg w-52 h-52 md:w-[25rem] md:h-[24rem]"

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
              className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
              onClick={handleCloseModal}
            >
              <div
                className={`
    w-[95vw] h-[54vw]
    sm:w-auto sm:h-auto sm:max-w-[80vw] sm:max-h-[80vh]
    rounded-lg overflow-hidden shadow-lg border-2 border-pastelBlue dark:border-white
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

          {/* Text + Socials */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold">Fabian Galasel</h1>
            <p className="text-xl md:text-2xl mt-2 font-light text-charcoalBlack dark:text-skyBlue">
              Aspiring Software, Web & Mobile Developer
            </p>

            <div className="mt-10 flex flex-col items-center md:items-start space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/FabianC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-bg flex items-center space-x-2 border border-white text-skyBlue px-4 py-2 rounded-full"
                >
                  <FaGithub className="text-2xl" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/fabian-galasel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-bg flex items-center space-x-2 border border-white text-skyBlue px-4 py-2 rounded-full"
                >
                  <FaLinkedin className="text-2xl" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
              <a
                href="/Fabian Galasel CV.pdf"
                download
                className="group slide-bg flex items-center space-x-2 border border-white text-charcoalBlack dark:text-skyBlue px-4 py-2 rounded-full md:ml-[52px] mx-auto md:mx-0 transition-colors duration-300"
              >
                <span className="w-5 h-5 transition duration-300 text-black dark:text-skyBlue group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                  >
                    <path d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
                  </svg>
                </span>


                <span className="font-medium">Download CV</span>
              </a>

            </div>
          </div>
        </div>
      </header>


      {/* Spacer to push content below fixed header */}
      <div className="h-24"></div>

      {/* About section */}
      <div className="w-full overflow-x-hidden">
        <section
          id="about"
          className="max-w-4xl mx-auto py-24 px-6 relative"
        >
          <h2 className="text-3xl font-bold text-charcoalBlack dark:text-purple-300 mb-6 text-center md:text-left">About Me</h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="/image2.jpg"
              alt="Fabian Galasel"
              className="w-40 h-40 rounded-full border-2 border-charcoalBlack dark:border-purple-500 mt-2 flex-shrink-0 object-cover mx-auto md:mx-0"
            />
            <p className="text-charcoalBlack dark:text-gray-300 leading-relaxed text-lg backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg max-w-xl">
              I am Fabian, an aspiring software, web, and mobile developer with a passion for building impactful applications.
              I recently graduated with a BSc in Computer Science from Middlesex University. I'm looking for a role where I can grow—putting in the time to master new technologies
              and continuously push myself to the next level.
            </p>
          </div>

          {/* Floating Skills*/}
          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto">
            {[
              "TypeScript", "Bash", "JavaScript", "HTML", "CSS",
              "React", "React Native", "Node.js", "Express.js", "Python",
              "Kotlin", "Racket", "Postman", "C++", "Java",
              "Vue.js", "React Navigation", "MongoDB"
            ].map((tech) => (
              <span
                key={tech}
                className="cursor-default px-4 py-1 text-sm rounded-full 
    border border-red-500 dark:border-skyBlue 
    text-red-500 dark:text-skyBlue 
    bg-white/5 
    hover:bg-red-500 hover:text-black 
    dark:hover:bg-skyBlue dark:hover:text-white 
    font-semibold
    transition"
              >
                {tech}
              </span>

            ))}
          </div>
        </section>
      </div>

      {/* Projects section */}
      <ProjectsSection />

      {/* Education section */}
      <EducationSection />

      {/* Contact section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-charcoalBlack dark:text-purple-300 mb-8 text-center md:text-left">
          Contact
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out via email or phone. I'm open to opportunities and happy to connect!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Card */}
          <a
            href="mailto:galaselfabian@gmail.com"
            className="group flex justify-center items-center gap-6 border border-black dark:border-white p-4 rounded-xl transition-all duration-700 ease-in-out hover:border-orange dark:hover:border-neonPurple hover:shadow-lg hover:shadow-orange/50 dark:hover:shadow-neonPurple/50"
          >
            <img
              src="/gmail.png"
              alt="Email Icon"
              className="w-6 h-6 transition-transform group-hover:scale-110 duration-700"
            />
            <span className="text-charcoalBlack dark:text-skyBlue group-hover:text-orange dark:group-hover:text-white text-center transition-colors duration-700 ease-in-out">
              galaselfabian@gmail.com
            </span>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+447458358427"
            className="group flex justify-center items-center gap-6 border border-black dark:border-white p-4 rounded-xl transition-all duration-700 ease-in-out hover:border-orange dark:hover:border-neonPurple hover:shadow-lg hover:shadow-orange/50 dark:hover:shadow-neonPurple/50"
          >
            <img
              src="/phone.png"
              alt="Phone Icon"
              className="w-6 h-6 transition-transform group-hover:scale-110 duration-700"
            />
            <span className="text-charcoalBlack dark:text-skyBlue group-hover:text-orange dark:group-hover:text-white text-center transition-colors duration-700 ease-in-out">
              +44 7458 358 427
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-white/50 flex items-center justify-center space-x-2">
        <span>&copy; {new Date().getFullYear()} Fabian Galasel</span>
        <img
          src="/Signature.png"
          alt="Fabian Galasel Signature"
          className="h-20 filter contrast-200 brightness-200"
        />
      </footer>

    </div>
  );
}

export default App;
