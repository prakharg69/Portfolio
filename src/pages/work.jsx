import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import Navbar from '../components/ui/navbar';
import { navContext } from '../context/navContext';
import GithubContributions from '../components/ui/Gitcontribution';
import ProjectModal from '../components/ui/ProjectModal';
import arroww from "../assets/images/arrow.png";

const projects = [
  {
    id: 1,
    title: "POS Software (Point of Sale System)",
    description:
      "A full-featured Point of Sale (POS) system designed for retail and restaurant environments. It enables real-time billing, inventory tracking, sales analytics, and multi-user role management. Built with scalability and performance in mind, the system supports secure transactions, dynamic product management, and detailed reporting dashboards.",
    
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Stripe API",
      "JWT Authentication"
    ],

    features: [
      "Real-time billing & invoice generation",
      "Inventory management with stock alerts",
      "Role-based access control (Admin/Cashier)",
      "Sales analytics & reporting dashboard",
      "Secure payment integration",
      "Responsive UI for desktop & tablet"
    ],

    category: "Full Stack",
    status: "Completed"
  },

  {
    id: 2,
    title: "Real-Time Chat Messaging App",
    description:
      "A scalable real-time chat application supporting instant messaging, user presence, and message synchronization. The system ensures low-latency communication using WebSockets and includes features like typing indicators, read receipts, and media sharing, delivering a seamless messaging experience across devices.",
    
    techStack: [
      "React.js",
      "Node.js",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Cloudinary"
    ],

    features: [
      "Real-time messaging with WebSocket",
      "Typing indicators & online status",
      "Media/image sharing support",
      "Read receipts & message timestamps",
      "Authentication & secure sessions",
      "Modern chat UI with dynamic updates"
    ],

    category: "Realtime App",
    status: "Completed"
  },

  {
    id: 3,
    title: "Voice-Controlled Process Management System",
    description:
      "An intelligent process management system that enables users to control and automate workflows using voice commands. The platform leverages speech recognition and natural language processing to execute tasks, manage processes, and improve productivity through hands-free interaction and smart automation.",
    
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Web Speech API",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT Authentication"
    ],

    features: [
      "Voice command-based task execution",
      "Speech-to-text processing using Web Speech API",
      "Workflow automation & process management",
      "Real-time command recognition feedback",
      "Secure authentication & user roles",
      "Interactive dashboard for monitoring processes"
    ],

    category: "Voice AI / Automation",
    status: "Completed"
  }
];

function Work() {
    const {setActive} = useContext(navContext);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(()=>{
      setActive("work");
    },[]);

    const getTopTechs = (stackObj) => {
      const allTechs = Object.values(stackObj).flat();
      return allTechs.slice(0, 4);
    };
    
  return (
    <>
   <Navbar></Navbar>
   <section className="grid-bg min-h-screen relative pb-20">
      
      {/* Top Section: Heading + GitHub Graph */}
      <div className="flex flex-col items-center justify-center pt-10 mb-2 relative z-10">
        
        {/* ✨ New Heading: Blue Glow + array-font + Entrance Animation */}
       <motion.h2 
  className="array-font text-10xl md:text-9xl font-bold text-white mb-6 tracking-wide"
  style={{ 
    textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)' 
  }}
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  WORK
</motion.h2>
        
        <GithubContributions />
        
        {/* ✨ Three Arrows with Entrance Animation */}
        <div className="flex items-center justify-center gap-50 ">
            {[
              { rotation: 'rotate-80', delay: 0.2 },
              { rotation: 'rotate-50', delay: 0.3 },
              { rotation: 'rotate-110 scale-y-[-1]', delay: 0.4 }
            ].map((arrow, index) => (
              <motion.img 
                key={index}
                src={arroww} 
                alt={`Arrow ${index + 1}`} 
                className={`w-50 h-50 ${arrow.rotation}`}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: arrow.delay, 
                  duration: 0.5, 
                  type: "spring", 
                  stiffness: 120 
                }}
              />
            ))}
        </div>
      </div>

      {/* Projects Grid - UNCHANGED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all group h-full"
            >
              {/* Card Content */}
              <motion.div 
  key={project.id}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: idx * 0.1 }}
  className="relative bg-[#0d1117]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 flex flex-col h-full group hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg"
>
  {/* Background Watermark Icon */}
  <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none transform -rotate-12">
    <FaGithub className="text-9xl text-white" />
  </div>

  {/* Card Content */}
  <div className="relative z-10 flex flex-col h-full">
    
    {/* Top Row: Category & Status */}
    <div className="flex justify-between items-start mb-5">
      <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded uppercase tracking-wider font-bold">
        {project.category}
      </span>
      
      
    </div>

    {/* Title & Tagline */}
    <div className="mb-auto">
      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight tracking-tight">
        {project.title}
      </h3>
      
      <p className="font-['Space_Grotesk'] text-gray-400 text-xs leading-relaxed mb-5 line-clamp-2 italic opacity-80">
        {project.tagline}
      </p>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {getTopTechs(project.techStack).map((tech) => (
        <span key={tech} className="text-[10px] font-mono text-gray-300 bg-gray-800/50 border border-gray-700 px-2 py-1 rounded hover:border-gray-500 transition-colors">
          {tech}
        </span>
      ))}
    </div>

    {/* GitHub Button */}
    <a 
      href="#"
      target="_blank"
      className="w-full mt-auto flex items-center justify-center gap-2 py-2.5 bg-[#161b22] border border-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-300 rounded-lg text-xs font-bold transition-all group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    >
      <FaGithub className="text-sm" />
      <span>GitHub</span>
    </a>
    
  </div>
</motion.div>

              {/* Action Button */}
              <button 
                onClick={() => setSelectedProject(project)}
                className="w-full py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

   </section>
   </>
  )
}

export default Work;