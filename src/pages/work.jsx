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
    tagline: "Enterprise-grade retail & restaurant billing solution",
    description: "A scalable, production-ready Point of Sale (POS) system engineered for high-volume retail and restaurant operations. The platform handles real-time billing, inventory lifecycle management, and analytics-driven decision-making with a focus on performance, security, and reliability.",
    problem: "Traditional POS systems lack real-time analytics, flexible inventory control, and seamless multi-user workflows, leading to inefficiencies in fast-paced retail environments.",
    solution: "Built a modular POS platform with optimized state management and secure transaction handling, enabling real-time updates, role-based workflows, and actionable insights through analytics dashboards.",
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      integrations: ["Stripe API"],
      auth: ["JWT", "Role-Based Access Control"]
    },
    features: ["High-performance real-time billing system", "Inventory tracking with automated low-stock alerts", "Multi-role authentication (Admin, Manager, Cashier)", "Advanced sales analytics & reporting dashboard", "Secure online/offline payment handling", "Invoice generation with print-ready templates"],
    architecture: ["RESTful API architecture", "Centralized state management using Redux", "Modular backend services", "Scalable database schema design"],
    metrics: { performance: "Reduced billing time by ~40%", scalability: "Supports 1000+ concurrent transactions", reliability: "99.9% uptime during testing phase" },
    deployment: { frontend: "Vercel", backend: "Render", database: "MongoDB Atlas" },
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    title: "Real-Time Chat Messaging App",
    tagline: "Low-latency real-time communication platform",
    description: "A high-performance real-time messaging platform enabling seamless communication with instant message delivery, presence tracking, and media sharing.",
    problem: "Conventional messaging systems struggle with latency and synchronization issues across devices.",
    solution: "Implemented a WebSocket-driven architecture using Socket.io to ensure instant message delivery.",
    techStack: { frontend: ["React.js", "Redux", "Tailwind CSS"], backend: ["Node.js", "Express.js", "Socket.io"], database: ["MongoDB"], integrations: ["Cloudinary"], auth: ["JWT"] },
    features: ["Real-time messaging with WebSocket protocol", "User presence & online/offline status tracking", "Typing indicators and read receipts", "Media/image sharing with cloud storage"],
    architecture: ["Event-driven architecture (Socket.io)", "Bidirectional communication channels", "Optimized message queue handling"],
    metrics: { latency: "<100ms message delivery time", scalability: "Handles 500+ concurrent users", engagement: "Improved interaction speed by 60%" },
    deployment: { frontend: "Vercel", backend: "Render", database: "MongoDB Atlas", media: "Cloudinary" },
    category: "Realtime App", status: "Completed"
  },
  {
    id: 3,
    title: "Smart Task Automation Scheduler",
    tagline: "Automated workflow engine with cron-based execution",
    description: "A robust automation platform that enables users to schedule and execute tasks such as emails, reminders, and notifications.",
    problem: "Manual task management leads to missed deadlines and inefficient workflows.",
    solution: "Developed a scheduling engine using cron jobs and background workers to automate recurring tasks.",
    techStack: { frontend: ["React.js", "Tailwind CSS"], backend: ["Node.js", "Express.js"], database: ["MongoDB"], tools: ["Node-cron", "Nodemailer"], auth: ["JWT"] },
    features: ["Automated email & notification scheduling", "Cron-based recurring and one-time tasks", "Dashboard for task creation and monitoring"],
    architecture: ["Cron-based job scheduling system", "Background worker processing", "RESTful service layer"],
    metrics: { accuracy: "99% task execution accuracy", efficiency: "Reduced manual workload by 70%" },
    deployment: { frontend: "Vercel", backend: "Render", database: "MongoDB Atlas" },
    category: "Automation", status: "Completed"
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