import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/ui/navbar';
import { navContext } from '../context/navContext';
import portfolio from "../assets/images/giga.jpeg"

// Icons
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, 
  FaServer, FaPuzzlePiece, FaMapMarkerAlt, 
  FaGraduationCap, FaAward, FaInstagram, FaTwitter, FaLinkedin,
  FaPlay, FaPause, FaMusic, FaCalendarAlt, FaClock,
  FaQuoteLeft, FaHeart, FaCode, FaExternalLinkAlt,
  FaFolderOpen
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiMongodb, 
  SiRedux, SiRedis, SiGraphql, SiGit, SiSpotify
} from 'react-icons/si';

// Static Data
const data = {
  "personalInfo": {
    "name": "Anurag yadav",
    "title": "B.Tech CSE Student",
    "university": "Lovely Professional University (LPU)",
    "year": "3rd Year",
    "cgpa": 7.3
  },
  "education": [
    {
      "level": "B.Tech CSE",
      "institution": "Lovely Professional University",
      "status": "Pursuing",
      "year": "3rd Year",
      "cgpa": 7.3
    },
    {
      "level": "Class 12th",
      "institution": "The Oxford School",
      "percentage": 82
    },
    {
      "level": "Class 10th",
      "institution": "The Oxford School",
      "percentage": 82
    }
  ],
  "work": [
    {
      "role": "Frontend Intern",
      "company": "TechCorp",
      "duration": "Summer 2023",
      "desc": "Built responsive UI components."
    },
    {
      "role": "Freelance Developer",
      "company": "Upwork",
      "duration": "2022 - Present",
      "desc": "Delivered full-stack web apps."
    }
  ],
  "techStack": {
    "frontend": ["HTML", "CSS", "JavaScript", "React", "Redux", "Redux Toolkit", "Tailwind CSS"],
    "backend": ["Node.js", "MongoDB", "Redis", "GraphQL"],
    "other": ["REST APIs", "Git", "Problem Solving"]
  },
  "about": {
    "summary": "I am a 3rd-year B.Tech CSE student at Lovely Professional University with a CGPA of 7.3. I have a strong interest in web development and enjoy building modern, scalable applications using frontend and backend technologies.",
    "interests": ["Web Development", "UI/UX Design", "Building Full Stack Applications"],
    "goal": "To become a skilled full-stack developer and build impactful, real-world applications."
  }
};
const certificates = [
  {
    id: 1,
    title: "Cloud Computing Certification",
    issuer: "NPTEL (IIT)",
    description:
      "Completed an in-depth certification in Cloud Computing covering distributed systems, virtualization, cloud architecture, and service models (IaaS, PaaS, SaaS). Gained practical understanding of scalable infrastructure, deployment strategies, and cloud security fundamentals.",

    skills: [
      "Cloud Architecture",
      "Virtualization",
      "Distributed Systems",
      "AWS Fundamentals",
      "Scalability & Load Balancing"
    ],

    credential: "NPTEL Certified",
    year: "2024"
  },

  {
    id: 2,
    title: "JavaScript Certification",
    issuer: "Professional Certification",
    description:
      "Advanced JavaScript certification focusing on core language concepts, asynchronous programming, DOM manipulation, and modern ES6+ features. Built strong problem-solving skills and deep understanding of browser behavior and event-driven architecture.",

    skills: [
      "JavaScript (ES6+)",
      "Async/Await & Promises",
      "DOM Manipulation",
      "Event Loop",
      "Functional Programming"
    ],

    credential: "Certified JavaScript Developer",
    year: "2024"
  },

  {
    id: 3,
    title: "Backend Development Certification",
    issuer: "Coursera",
    description:
      "Comprehensive backend development certification covering REST API design, server-side architecture, authentication, and database management. Focused on building scalable and secure web applications using modern backend technologies.",

    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication & Security"
    ],

    credential: "Coursera Certified",
    year: "2025"
  }
];

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
    title: "Smart Task Automation Scheduler",
    description:
      "An automation-driven scheduling platform that allows users to plan and execute tasks such as sending emails, reminders, and notifications at predefined times. Designed with reliability and flexibility, it integrates background job processing and cron-based scheduling for seamless automation workflows.",
    
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Node-cron",
      "Nodemailer",
      "JWT",
      "Tailwind CSS"
    ],

    features: [
      "Automated task scheduling (email/notifications)",
      "Cron-based background job execution",
      "User dashboard for task management",
      "Secure authentication & session handling",
      "Real-time status tracking of tasks",
      "Scalable backend architecture"
    ],

    category: "Automation",
    status: "Completed"
  }
];

const iconMap = {
  "HTML": <FaHtml5 className="text-orange-500" />,
  "CSS": <FaCss3Alt className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "React": <FaReact className="text-cyan-400" />,
  "Redux": <SiRedux className="text-purple-500" />,
  "Redux Toolkit": <SiRedux className="text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Redis": <SiRedis className="text-red-500" />,
  "GraphQL": <SiGraphql className="text-pink-500" />,
  "REST APIs": <FaServer className="text-gray-300" />,
  "Git": <FaGithub className="text-white" />,
  "Problem Solving": <FaPuzzlePiece className="text-blue-300" />
};

// --- ANIMATION VARIANTS ---
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

// --- BENTO CARD COMPONENT ---
const BentoCard = ({ children, className = "", span = "col-span-1 row-span-1", delay = 0, gradient = false }) => (
  <motion.div
    custom={delay}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className={`${span} ${gradient ? 'bg-linear-to-br' : 'bg-gray-900/70'} backdrop-blur-md border border-dotted border-gray-700 rounded-2xl p-4 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// --- BENTO LAYOUT ---
const BentoLayout = ({ data, iconMap, time, randomImg, setRandomImg, musicPlaying, setMusicPlaying }) => {
  
  const allSkills = [
    ...data.techStack.frontend,
    ...data.techStack.backend,
    ...data.techStack.other
  ];

  const contributions = Array.from({ length: 365 }).map(() => Math.floor(Math.random() * 5));

  const [fade, setFade] = useState(true);
useEffect(() => {
  const imgTimer = setInterval(async () => {
    try {
      setFade(false); // fade OUT

      const res = await fetch("https://api.waifu.pics/sfw/waifu");
      const data = await res.json();

      setTimeout(() => {
        setRandomImg(data.url); // change image
        setFade(true); // fade IN
      }, 300); // match transition duration

    } catch (err) {
      console.log(err);
    }
  }, 3000);

  return () => clearInterval(imgTimer);
}, []);

  return (
    <div className="w-full h-full overflow-y-auto p-4 md:p-6 lg:p-8 pt-24">
      {/* 
        GRID: 5 columns, all square boxes (aspect-square)
        Tighter gap for cohesive look
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 auto-rows-[160px]">
        
        {/* 1. PROFILE - Large Square (2x2) */}
        <BentoCard 
  span="col-span-2 row-span-2" 
  delay={0}
  className="p-0 overflow-hidden relative group flex flex-row"
>
  {/* Background Icon Accent */}
  <div className="absolute top-4 right-4 z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
    <FaCode className="text-5xl text-blue-500" />
  </div>

  {/* LEFT 1/3: Image Section */}
  <div className="w-1/3 h-full relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a] z-10 opacity-60"></div>
    <img 
      src={portfolio} 
      alt="Profile" 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
    />
  </div>

  {/* RIGHT 2/3: Information Section */}
  <div className="w-2/3 h-full p-6 md:p-8 flex flex-col justify-center relative z-10">
    
    {/* Name: Primary Focus */}
    <h2 className="array-font text-3xl md:text-4xl font-bold text-white leading-tight mb-2 tracking-tight">
      {data.personalInfo.name}
    </h2>

    {/* Degree: Secondary Focus */}
    <p className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4">
      {data.personalInfo.title}
    </p>

    {/* University: Tertiary Focus */}
    <div className="flex items-center gap-2 text-gray-400 text-sm font-light mb-auto">
      <FaGraduationCap className="text-gray-600 text-base" />
      <span>{data.personalInfo.university}</span>
    </div>

    {/* Academic Performance: Aligned Left, No Borders */}
    <div className="mt-8 pt-2">
      <span className="text-gray-600 text-[10px] uppercase tracking-widest font-semibold block mb-1">
        Academic Performance
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-white font-mono text-4xl font-bold">
          {data.personalInfo.cgpa}
        </span>
        <span className="text-gray-500 text-sm font-medium">CGPA</span>
      </div>
    </div>

  </div>
</BentoCard>
        {/* 4. RANDOM IMG - Square */}
        <BentoCard span="col-span-3 row-span-1" delay={3} className="relative group">
         <img 
  src={randomImg} 
  alt="Random" 
  className={`w-full h-full rounded-2xl object-cover 
  transition-all duration-500 
  ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"} 
  group-hover:scale-110`}
/>
         
          <div className="absolute bottom-2 left-2 right-2">
            
          </div>
        </BentoCard>

       
        

        {/* 5. SOCIALS - Square */}
        <BentoCard 
  span="col-span-1 row-span-1" 
  delay={4} 
  className="flex flex-col justify-between items-center py-6 relative overflow-hidden group"
>
  {/* Subtle Background Glow on Hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Top Header */}
  <span className="text-[10px] text-blue-400 font-mono font-bold tracking-[0.3em] z-10">
    SOCIALS
  </span>

  {/* Main Icons - Larger, Spaced Out, with Glow */}
  <div className="flex gap-8 z-10">
    <motion.a 
      href="#" 
      className="text-4xl text-pink-500 hover:text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all"
      whileHover={{ y: -5, scale: 1.1 }}
    >
      <FaInstagram />
    </motion.a>
    <motion.a 
      href="#" 
      className="text-4xl text-blue-400 hover:text-blue-300 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)] transition-all"
      whileHover={{ y: -5, scale: 1.1 }}
    >
      <FaTwitter />
    </motion.a>
    <motion.a 
      href="#" 
      className="text-4xl text-blue-600 hover:text-blue-500 drop-shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all"
      whileHover={{ y: -5, scale: 1.1 }}
    >
      <FaLinkedin />
    </motion.a>
  </div>

  {/* Bottom Subtext */}
  <span className="text-[9px] text-gray-600 font-mono tracking-widest z-10 group-hover:text-gray-500 transition-colors">
    STAY CONNECTED
  </span>
</BentoCard>
          {/* 8. MUSIC PLAYER - Wide (2x1) */}
        <BentoCard 
          span="col-span-2 row-span-1" 
          delay={7} 
          gradient="from-green-900/30 to-gray-900/70"
          className="flex items-center gap-3"
        >
          <motion.div 
            className="w-14 h-14 rounded-full bg-black border-2 border-gray-700 overflow-hidden shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            
          >
            <img src="https://picsum.photos/seed/music/100/100" className="w-full h-full object-cover" />
            <motion.div 
              className="absolute inset-0 rounded-full border-t-2 border-green-500"
            
            />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h4 className="text-white font-bold text-xs truncate">Midnight City</h4>
                <p className="text-gray-400 text-[10px] truncate">M83 • Lo-fi Beats</p>
              </div>
              <motion.button 
                onClick={() => setMusicPlaying(!musicPlaying)}
                className="text-green-400 hover:text-green-300"
                whileTap={{ scale: 0.9 }}
              >
                {musicPlaying ? <FaPause className="text-lg"/> : <FaPlay className="text-lg"/>}
              </motion.button>
            </div>
            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="bg-green-500 h-full rounded-full"
              
              />
            </div>
          </div>
        </BentoCard>

        {/* 6. SKILLS SCROLL - Wide (3x1) */}
      <BentoCard span="col-span-3 row-span-1" delay={5} className="flex flex-col justify-center py-4">
  
  {/* Big Bold Heading */}
  <h3 className="text-xl array-font text-white mb-3 uppercase tracking-widest flex items-center gap-2 font-bold">
    <FaCode className="text-blue-500 text-lg" /> SKILL SET
  </h3>

  <div className="relative w-full overflow-hidden">
    <motion.div 
      className="flex gap-8 w-max"
      animate={{ x: [0, -500] }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    >
      {[...allSkills, ...allSkills].map((skill, idx) => (
        <motion.div 
          key={idx} 
          className="flex items-center array-font gap-3 px-5 py-3 bg-gray-900/90 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-default"
          whileHover={{ scale: 1.05 }}
          title={skill}
        >
          {/* Large Icons */}
          <span className="text-2xl text-gray-200">
            {iconMap[skill]}
          </span>
          <span className="text-xs text-gray-400 font-bold tracking-wide hidden md:inline">
            {skill}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</BentoCard>
         {/* 2. LIVE CLOCK - Square */}
        <BentoCard span="col-span-1 row-span-1" delay={1} className="flex flex-col justify-center items-center">
          <FaClock className="text-blue-500 text-2xl mb-2" />
          <h1 className="array-font text-3xl font-bold text-white tracking-tight font-mono">
            {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </h1>
          <p className="text-gray-500 text-[10px] font-mono mt-1">{time.toLocaleDateString('en-US', { weekday: 'short' })}</p>
          {/* Seconds Progress */}
          <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(time.getSeconds() / 60) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </BentoCard>

        {/* 3. CALENDAR - Square */}
        <BentoCard span="col-span-1 row-span-1" delay={2} className="flex flex-col justify-center items-center">
          <FaCalendarAlt className="text-purple-400 text-2xl mb-2" />
          <h2 className="array-font text-4xl font-bold text-white leading-none">{time.getDate()}</h2>
          <p className="text-gray-300 text-sm font-medium">{time.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
          <div className="flex gap-1 mt-3">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full ${i === time.getDay() ? 'bg-purple-500' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </BentoCard>

      

        {/* 7. EDUCATION - Wide (2x1) */}
        <BentoCard 
  span="col-span-2 row-span-1" 
  delay={6} 
  className="flex flex-col justify-center py-4 relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800"
>
  {/* Background Watermark */}
  <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white opacity-[0.03] pointer-events-none select-none tracking-tighter transform -rotate-12">
    EDU
  </div>

  {/* Header */}
  <h3 className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-[0.2em] font-bold relative z-10">
    EDUCATION
  </h3>

  <div className="flex flex-col relative z-10">
    {data.education.slice(0, 2).map((edu, idx) => (
      <motion.div 
        key={idx} 
        // Fixed Alignment: Center items, distribute space between left and right
        className="flex items-center justify-between py-4 px-2 -mx-2 border-b border-gray-800/50 last:border-0 hover:bg-white/5 transition-all cursor-pointer"
        whileHover={{ x: 4 }}
      >
        {/* Left Column: Degree Info (Centered Vertically) */}
        <div className="flex flex-col justify-center">
          {/* Highlighted Size: Large Degree Name */}
          <h4 className="text-base array-font font-bold text-white leading-tight tracking-tight">
            {edu.level}
          </h4>
          <p className="text-gray-400 text-xs mt-1 font-medium">{edu.institution}</p>
        </div>

        {/* Right Column: Score (Aligned to End, Centered Vertically) */}
        <div className="flex flex-col items-end justify-center min-w-[70px]">
          {/* Highlighted Size: Large Monospace Score */}
          <span className="text-2xl font-mono font-bold text-blue-500 leading-none">
            {edu.cgpa ? edu.cgpa : `${edu.percentage}%`}
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
            {edu.cgpa ? "CGPA" : "Score"}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</BentoCard>
        

        {/* 9. QUOTE - Square */}
        <BentoCard 
          span="col-span-1 row-span-1" 
          delay={8} 
          gradient="from-blue-900/40 to-purple-900/40"
          className="flex flex-col justify-center"
        >
          <FaQuoteLeft className="text-blue-500/30 text-4xl mb-2" />
          <p className="text-[11px] font-serif text-white italic leading-snug">
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p className="text-[8px] text-gray-400 mt-3 font-mono">— Cory House</p>
        </BentoCard>

        {/* 10. WORK - Wide (2x1) */}
        <BentoCard 
  span="col-span-2 row-span-2" 
  delay={9} 
  className="flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
>
  {/* Background Watermark - Amber Theme */}
  <div className="absolute -bottom-8 -right-8 text-[10rem] font-black text-amber-500/5 pointer-events-none select-none tracking-tighter transform -rotate-12">
    CERTS
  </div>

  {/* Header - Amber Accent */}
  <h3 className="text-x array-font text-amber-400 mb-4 uppercase tracking-[0.25em] font-bold flex items-center gap-2 relative z-10">
    <FaAward /> Certifications
  </h3>

  {/* Scrollable List */}
  <div className="flex-1 overflow-y-auto pr-2 space-y-3 relative z-10 custom-scrollbar">
    {certificates.map((cert) => (
      <motion.div 
        key={cert.id} 
        className="group p-4 bg-gray-800/20 border border-gray-700/50 rounded-xl hover:border-amber-500/50 hover:bg-gray-800/40 transition-all cursor-pointer"
        whileHover={{ x: 4 }}
      >
        {/* Top Row: Title & Year */}
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm font-bold text-white leading-tight max-w-[70%]">
            {cert.title}
          </h4>
          <span className="text-[10px] font-mono text-gray-400 bg-gray-900/50 px-2 py-1 rounded border border-gray-700 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-colors">
            {cert.year}
          </span>
        </div>

        {/* Issuer */}
        <p className="text-amber-500/80 text-[11px] font-semibold mb-2">
          {cert.issuer}
        </p>

        {/* Credential Badge */}
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
          <span className="w-1 h-1 rounded-full bg-amber-500"></span>
          <span className="text-[10px] text-amber-200 tracking-wide uppercase">
            {cert.credential}
          </span>
        </div>
      </motion.div>
    ))}
  </div>

 
</BentoCard>

        {/* 11. GITHUB CONTRIBUTIONS - Wide (3x1) */}
       <BentoCard 
  span="col-span-3 row-span-1" 
  delay={10} 
  className="flex flex-col py-3 px-4 overflow-hidden" // Main container clips overflow
>
  {/* Header */}
  <div className="flex justify-between items-center mb-3 flex-shrink-0">
    <h3 className="text-[10px] font-mono text-white uppercase tracking-widest flex items-center gap-2">
      <FaGithub /> Contributions
    </h3>
    <span className="text-[9px] text-gray-500 font-mono">Last 365 Days</span>
  </div>

  {/* 
     Scrollable Container: Allows the long strip of squares to flow horizontally.
     grid-rows-7: Fixes the height to 7 rows (Days of week).
     grid-flow-col: Fills the 7 rows, then moves to the next column (Weeks).
  */}
  <div className="flex-1 w-full overflow-x-auto no-scrollbar pb-1">
    <div className="grid grid-rows-5 grid-flow-col gap-1 min-w-max">
      {contributions.map((count, i) => (
        <motion.div 
          key={i} 
          // aspect-square ensures they are always perfect squares
          className="w-4 h-4 aspect-square rounded-[2px] transition-colors cursor-pointer
          hover:ring-2 hover:ring-white/50"
          // GitHub Dark Mode Palette
          style={{
            backgroundColor: 
              count === 0 ? '#161b22' : 
              count <= 2 ? '#0e4429' : 
              count <= 4 ? '#006d32' : 
              count <= 6 ? '#26a641' : 
              '#39d353'
          }}
          whileHover={{ scale: 1.5, zIndex: 10 }}
          title={`${count} contributions`}
        />
      ))}
    </div>
  </div>
  
  {/* Utility class to hide scrollbar but keep functionality */}
  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      height: 4px;
    }
    .no-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .no-scrollbar::-webkit-scrollbar-thumb {
      background-color: #374151;
      border-radius: 20px;
    }
  `}</style>
</BentoCard>

        

      </div>
    </div>
  );
};

// --- MINIMAL LAYOUT ---
const MinimalLayout = ({ data, iconMap }) => {
  const allSkills = [...data.techStack.frontend, ...data.techStack.backend, ...data.techStack.other];
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-6 pt-24 h-full overflow-y-auto">
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto rounded-full border border-gray-600 mb-6 overflow-hidden bg-gray-900">
          <img src={portfolio} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        <h1 className="array-font text-5xl md:text-6xl font-bold text-white tracking-tighter">{data.personalInfo.name}</h1>
        <p className="text-blue-500 font-mono mt-2 text-lg tracking-widest">{data.personalInfo.title}</p>
      </div>
      <div className="w-full space-y-10">
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-300 text-center font-mono text-lg leading-relaxed max-w-2xl mx-auto">
            {data.about.summary}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {data.education.map((edu, idx) => (
            <div key={idx} className="text-center group">
              <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{edu.level}</h4>
              <p className="text-gray-500 text-sm mb-2">{edu.institution}</p>
              <span className="text-2xl font-bold font-mono text-white">
                {edu.cgpa ? edu.cgpa : edu.percentage+'%'}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 flex-wrap pt-8 border-t border-gray-800">
          {allSkills.map((skill, idx) => (
            <div key={idx} className="text-4xl text-gray-600 hover:text-blue-400 hover:scale-125 transition-all duration-300" title={skill}>
              {iconMap[skill]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAGAZINE LAYOUT ---
const MagazineLayout = ({ data, iconMap }) => {
  const allSkills = [...data.techStack.frontend, ...data.techStack.backend, ...data.techStack.other];
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden relative">
      <div className="w-full md:w-1/3 h-64 md:h-full relative border-r border-gray-800 bg-gray-900">
        <img src={portfolio} alt="Profile" className="w-full h-full object-cover opacity-60 md:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:hidden"></div>
        <div className="absolute bottom-4 left-4 md:hidden">
          <h1 className="text-3xl font-bold text-white">{data.personalInfo.name}</h1>
          <p className="text-blue-400 font-mono text-sm">{data.personalInfo.title}</p>
        </div>
      </div>
      <div className="w-full md:w-2/3 h-full overflow-y-auto p-8 md:p-12 lg:p-16 relative">
        <div className="hidden md:block mb-12 border-b-2 border-dotted border-gray-700 pb-8">
          <h1 className="array-font text-6xl font-bold text-white tracking-tighter mb-2">{data.personalInfo.name}</h1>
          <p className="text-blue-400 font-mono text-xl tracking-widest">{data.personalInfo.title}</p>
          <div className="flex gap-6 mt-4 text-xs text-gray-500 font-mono items-center">
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> {data.personalInfo.university}</span>
            <span className="flex items-center gap-2"><FaGraduationCap /> {data.personalInfo.year}</span>
            <span className="flex items-center gap-2"><FaAward /> CGPA: {data.personalInfo.cgpa}</span>
          </div>
        </div>
        <div className="mb-16">
          <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed font-serif">
            {data.about.summary}
          </p>
        </div>
        <div className="relative my-16 py-8 border-t border-b border-gray-800">
          <div className="absolute top-0 left-0 text-[150px] leading-none text-blue-600/5 font-serif select-none -mt-8 -ml-4">"</div>
          <div className="relative z-10 pl-8 md:pl-12">
            <p className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-4">{data.about.goal}</p>
            <div className="w-24 h-1 bg-blue-500 mb-4"></div>
            <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase block">— The Mission Statement</span>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex flex-col gap-16">
            {data.education.map((edu, idx) => (
              <div key={idx} className="relative group pr-20">
                <span className="absolute -top-6 -left-2 text-[80px] font-serif font-bold text-gray-800 select-none z-0 leading-none opacity-50">{edu.year || idx + 1}</span>
                <div className="relative z-10 pl-12 border-l-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                  <h4 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:text-blue-100 transition-colors pr-8">{edu.level}</h4>
                  <p className="text-xl text-gray-400 font-serif italic mb-4 font-light">{edu.institution}</p>
                  <div className="absolute top-4 right-0 w-16 h-16 rounded-full border border-gray-600 bg-gray-900/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 group-hover:border-blue-400 group-hover:bg-blue-900/40 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <span className="text-xl font-bold text-white leading-none font-mono">{edu.cgpa || edu.percentage}</span>
                    {!edu.cgpa && <span className="text-[10px] text-gray-400 leading-none mt-0.5">%</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-12">
          <div className="flex flex-wrap gap-6">
            {allSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-lg">{iconMap[skill]}</div>
                <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono uppercase tracking-wider">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


function About() {
  const { setActive } = useContext(navContext);
  const [layout, setLayout] = useState('minimal'); 
  const [time, setTime] = useState(new Date());
  const [randomImg, setRandomImg] = useState('https://picsum.photos/400/400?random=1');
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    setActive("about");
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [setActive]);

  return (
    <>
      <section className="grid-bg h-screen w-full relative overflow-hidden">
        
        {/* Layout Switcher */}
        <div className="absolute top-24 right-6 z-20 flex flex-col gap-2">
          <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase text-right mb-1">View Layout</span>
           <button 
            onClick={() => setLayout('minimal')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${
              layout === 'minimal' 
                ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' 
                : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'
            }`}
          >
            MINIMAL
          </button>
          <button 
            onClick={() => setLayout('bento')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${
              layout === 'bento' 
                ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' 
                : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'
            }`}
          >
            BENTO
          </button>
         
          <button 
            onClick={() => setLayout('magazine')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${
              layout === 'magazine' 
                ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' 
                : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'
            }`}
          >
            MAGAZINE
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={layout}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {layout === 'bento' && (
              <BentoLayout 
                data={data} 
                iconMap={iconMap} 
                time={time} 
                randomImg={randomImg} 
                setRandomImg={setRandomImg} 
                musicPlaying={musicPlaying} 
                setMusicPlaying={setMusicPlaying} 
              />
            )}
            {layout === 'minimal' && <MinimalLayout data={data} iconMap={iconMap} />}
            {layout === 'magazine' && <MagazineLayout data={data} iconMap={iconMap} />}
          </motion.div>
        </AnimatePresence>

      </section>
      <Navbar />
    </>
  );
}

export default About;