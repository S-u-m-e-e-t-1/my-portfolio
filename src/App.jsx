import React, { useState, useEffect } from 'react';
import { Mail, Phone, Globe, Linkedin, Github, Download, Code, Database, Palette, Server, GitBranch, Smartphone, BarChart3, Brain, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const skills = {
    "Programming Languages": { icon: Code, items: ["C++", "Java", "Python", "PHP"] },
    "Frontend": { icon: Palette, items: ["HTML5", "CSS3", "Bootstrap", "Tailwind"] },
    "Database": { icon: Database, items: ["MySQL", "PostgreSQL", "MongoDB"] },
    "Backend": { icon: Server, items: ["React", "Redux", "Django", "MERN", "NextJs"] },
    "Version Control": { icon: GitBranch, items: ["Git", "GitHub"] },
    "Mobile Development": { icon: Smartphone, items: ["React-Native", "Kotlin Multi-Platform"] },
    "Data Analysis": { icon: BarChart3, items: ["Power BI", "Tableau", "Microsoft Office"] },
    "Soft Skills": { icon: Brain, items: ["Critical thinking", "Data-driven decision making", "Strong Mathematical Analogy"] }
  };

  const projects = [
    {
      title: "Etaxi Booking System",
      tech: "PHP, MySQL",
      description: "Developed an online taxi booking system using PHP, MySQL, and Google Maps API for real-time tracking, ride management, and location-based booking. Integrated SMTP, UltraMsg, and Razor pay for seamless email/WhatsApp Notifications, OTP verification, and secure online payments."
    },
    {
      title: "Online File Storage App",
      tech: "Next.js",
      description: "Built a responsive file storage web app using Next.js, Clerk, Neon (PostgreSQL), Drizzle ORM, and ImageKit, supporting authentication, upload, and file management features. Designed and implemented intuitive UI with HeroUI, enabling file actions like star, trash, and restore for enhanced user experience."
    },
    {
      title: "E-Commerce Website",
      tech: "MERN Stack",
      description: "An E-Commerce website built using MongoDB, Express.js, React.js, and Node.js (MERN) for a full-stack JavaScript solution, enabling real-time product management, user authentication, and secure payment integration. Includes product listings with search/filter, shopping cart, checkout process, user roles (admin/customer), and order management with backend APIs and responsive design."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // In a real implementation, this would be the actual resume file URL
    link.download = 'Sumeet_Panigrahy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Sumeet Panigrahy</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`capitalize transition-colors ${activeSection === section.id
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-white hover:text-purple-300'
                    }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
                <img
                  src="Picture1.png"
                  alt="Sumeet Panigrahy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sumeet Panigrahy
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science Graduate | Full-Stack Developer | Data Analyst
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </button>
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full transition-colors"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://sumeet-portfolio-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Globe size={24} />
            </a>
            <a href="http://www.linkedin.com/in/sumeet-panigrahy-6a2060342" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/S-u-m-e-e-t-1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Motivated and detail-oriented Computer Science graduate with a strong foundation in software development and data analytics. Proficient in programming languages such as Python, Java, and JavaScript, with hands-on experience in developing web applications using frameworks like React and Node.js.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Adept at analyzing datasets using tools like Excel, SQL, and Python libraries (Pandas, NumPy, Matplotlib) to derive actionable insights. Passionate about solving real-world problems through code and data, with a commitment to continuous learning and team collaboration.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-purple-300">Gayatri Institute of Computer and Management, Hinjilicut</p>
                  <p className="text-gray-400">CGPA: 8.5</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Higher Secondary School in Science</h4>
                  <p className="text-purple-300">Science Higher Secondary School, Hinjilicut</p>
                  <p className="text-gray-400">82%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
              <div key={category} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-purple-300 text-sm mb-4 font-medium">{project.tech}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-purple-400" size={20} />
                    <a href="mailto:sumeetpanigrahy529@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      sumeetpanigrahy529@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-purple-400" size={20} />
                    <a href="tel:+917894473241" className="text-gray-300 hover:text-white transition-colors">
                      +91-7894473241
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-purple-400" size={20} />
                    <a href="https://sumeet-portfolio-navy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      Portfolio Website
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="http://www.linkedin.com/in/sumeet-panigrahy-6a2060342" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/S-u-m-e-e-t-1/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors">
                    <Github size={24} />
                  </a>
                </div>
                <p className="text-gray-300 mt-6">
                  I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Sumeet Panigrahy. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-4 z-50">
        <div className="flex justify-around">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`capitalize py-2 px-4 rounded-full transition-colors text-xs ${activeSection === section.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;