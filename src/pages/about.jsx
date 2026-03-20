import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/ui/navbar';
import { navContext } from '../context/navContext';
import portfolio from "../assets/images/giga.jpeg"
// Icons
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, 
  FaServer, FaPuzzlePiece, 
  FaMapMarkerAlt, FaGraduationCap, FaAward 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiMongodb, 
  SiRedux, SiRedis, SiGraphql, SiGit 
} from 'react-icons/si';

// Static Data
const data = {
  "personalInfo": {
    "name": "Prakhar Shourya",
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

// Map skill names to colored icons
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

function About() {
  const { setActive } = useContext(navContext);
  const [layout, setLayout] = useState('classic'); 

  useEffect(() => {
    setActive("about");
  }, []);

  const allSkills = [
    ...data.techStack.frontend,
    ...data.techStack.backend,
    ...data.techStack.other
  ];

  // --- Layout Components ---

  const ClassicLayout = () => (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto p-6 h-full items-center lg:items-start justify-center pt-20">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/3 flex flex-col items-center"
      >
        <div className="w-64 h-64 rounded-full border-2 border-dotted border-blue-500/50 overflow-hidden mb-6 relative group shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <img 
            src={portfolio}
            alt="Profile" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            onError={(e) => { e.target.style.display='none'; }} 
          />
        </div>
        
        <div className="border-2 border-dotted border-gray-600 p-6 w-full bg-gray-900/60 backdrop-blur-md rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-20">
                <FaServer className="text-4xl"/>
            </div>

          <h2 className="array-font text-3xl font-bold text-white mb-1 z-10 relative">{data.personalInfo.name}</h2>
          <p className="text-blue-400 font-mono text-sm mb-6 z-10 relative">{data.personalInfo.title}</p>
          
          <div className="text-gray-300 text-sm space-y-3 z-10 relative">
            <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <p className="truncate">{data.personalInfo.university}</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-700 pt-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <FaGraduationCap />
                    <span>YEAR</span>
                </div>
                <span className="text-white font-mono">{data.personalInfo.year}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-700 pt-2">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <FaAward />
                    <span>CGPA</span>
                </div>
                <span className="text-green-400 font-mono font-bold">{data.personalInfo.cgpa}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-dotted border-gray-700">
             <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-mono text-green-500 tracking-widest">SYSTEM ONLINE</span>
             </div>
             <div className="flex gap-1 mb-1">
                 <div className="h-1 w-1/3 bg-blue-900"></div>
                 <div className="h-1 w-1/3 bg-blue-700"></div>
                 <div className="h-1 w-1/3 bg-blue-500"></div>
             </div>
             <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-2">
                 <span>ID: #8821X</span>
                 <span>NET: SECURE</span>
             </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-2/3 flex flex-col gap-6"
      >
        <div className="border-2 border-dotted border-gray-600 p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg hover:border-blue-500/50 transition-colors">
          <h3 className="array-font text-2xl text-white mb-3 border-b border-gray-700 pb-2 flex items-center gap-2">
             <span className="text-blue-500 text-xl">01.</span> ABOUT
          </h3>
          <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">
            {data.about.summary}
          </p>
          <div className="mt-4 bg-blue-900/10 p-3 rounded border border-blue-500/20">
            <span className="text-blue-400 font-bold text-sm block mb-1">CURRENT GOAL</span>
            <p className="text-gray-400 text-sm italic">"{data.about.goal}"</p>
          </div>
        </div>

        <div className="border-2 border-dotted border-gray-600 p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg hover:border-blue-500/50 transition-colors">
          <h3 className="array-font text-2xl text-white mb-4 border-b border-gray-700 pb-2 flex items-center gap-2">
             <span className="text-blue-500 text-xl">02.</span> EDUCATION
          </h3>
          <div className="space-y-4">
            {data.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between md:items-center border-l-2 border-gray-600 pl-4 hover:border-blue-400 transition-colors">
                <div>
                  <h4 className="text-white font-bold">{edu.level}</h4>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="block text-blue-400 font-mono text-xs">{edu.year || edu.status}</span>
                  <span className="block text-gray-300 font-mono text-sm font-bold mt-1">{edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}%`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-dotted border-gray-600 p-6 bg-gray-900/40 backdrop-blur-sm rounded-lg hover:border-blue-500/50 transition-colors">
          <h3 className="array-font text-2xl text-white mb-4 border-b border-gray-700 pb-2 flex items-center gap-2">
             <span className="text-blue-500 text-xl">03.</span> TECH ARSENAL
          </h3>
          <div className="flex flex-wrap gap-4">
            {allSkills.map((skill, idx) => (
              <div key={idx} className="w-10 h-10 flex items-center justify-center text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 bg-gray-800 rounded-lg border border-gray-700" title={skill}>
                {iconMap[skill] || <span className="text-xs text-gray-600">?</span>}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  const MinimalLayout = () => (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-6 pt-24 h-full overflow-y-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
         <div className="w-32 h-32 mx-auto rounded-full border border-gray-600 mb-6 overflow-hidden bg-gray-900">
            <img src= {portfolio} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
         </div>
         <h1 className="array-font text-5xl md:text-6xl font-bold text-white tracking-tighter">{data.personalInfo.name}</h1>
         <p className="text-blue-500 font-mono mt-2 text-lg tracking-widest">{data.personalInfo.title}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full space-y-10"
      >
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
      </motion.div>
    </div>
  );

  // MAGAZINE LAYOUT (UPDATED: EDITORIAL SCORE CIRCLE)
  const MagazineLayout = () => (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Left Side: Full Height Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/3 h-64 md:h-full relative border-r border-gray-800 bg-gray-900"
      >
        <img 
            src={portfolio} 
            alt="Profile" 
            className="w-full h-full object-cover opacity-60 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:hidden"></div>
        
        <div className="absolute bottom-4 left-4 md:hidden">
             <h1 className="text-3xl font-bold text-white">{data.personalInfo.name}</h1>
             <p className="text-blue-400 font-mono text-sm">{data.personalInfo.title}</p>
        </div>
      </motion.div>

      {/* Right Side: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-2/3 h-full overflow-y-auto p-8 md:p-12 lg:p-16 relative"
      >
        {/* Desktop Header */}
        <div className="hidden md:block mb-12 border-b-2 border-dotted border-gray-700 pb-8">
             <h1 className="array-font text-6xl font-bold text-white tracking-tighter mb-2">{data.personalInfo.name}</h1>
             <p className="text-blue-400 font-mono text-xl tracking-widest">{data.personalInfo.title}</p>
             <div className="flex gap-6 mt-4 text-xs text-gray-500 font-mono items-center">
                 <span className="flex items-center gap-2"><FaMapMarkerAlt /> {data.personalInfo.university}</span>
                 <span className="flex items-center gap-2"><FaGraduationCap /> {data.personalInfo.year}</span>
                 <span className="flex items-center gap-2"><FaAward /> CGPA: {data.personalInfo.cgpa}</span>
             </div>
        </div>

        {/* Summary Section */}
        <div className="mb-16">
            <h3 className="text-blue-500 font-mono text-sm tracking-widest mb-4">// SUMMARY</h3>
            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed font-serif">
                {data.about.summary}
            </p>
        </div>

        {/* EDITORIAL QUOTE SECTION */}
        <div className="relative my-16 py-8 border-t border-b border-gray-800">
            <div className="absolute top-0 left-0 text-[150px] leading-none text-blue-600/5 font-serif select-none -mt-8 -ml-4">
                “
            </div>

            <div className="relative z-10 pl-8 md:pl-12">
                <p className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-4">
                    {data.about.goal}
                </p>
                <div className="w-24 h-1 bg-blue-500 mb-4"></div>
                <span className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase block">
                    — The Mission Statement
                </span>
            </div>
        </div>

        {/* MAGAZINE EDUCATION SECTION - WITH SCORE CIRCLE */}
        <div className="mb-16">
            <h3 className="text-blue-500 font-mono text-sm tracking-widest mb-8 border-b border-gray-800 pb-2">// EDUCATION HISTORY</h3>
            
            <div className="flex flex-col gap-16">
                {data.education.map((edu, idx) => (
                    <div key={idx} className="relative group pr-20"> {/* Added right padding for circle */}
                        {/* Watermark Year */}
                        <span className="absolute -top-6 -left-2 text-[80px] font-serif font-bold text-gray-800 select-none z-0 leading-none opacity-50">
                            {edu.year || idx + 1}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 pl-12 border-l-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                            
                            {/* Degree (Big Typography) */}
                            <h4 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:text-blue-100 transition-colors pr-8">
                                {edu.level}
                            </h4>

                            {/* Institution (Italic) */}
                            <p className="text-xl text-gray-400 font-serif italic mb-4 font-light">
                                {edu.institution}
                            </p>

                            {/* Status/Year Text */}
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                                    {edu.year || edu.status}
                                </span>
                            </div>
                        </div>

                        {/* EDITORIAL SCORE CIRCLE (Punch) */}
                        <div className="absolute top-4 right-0 w-16 h-16 rounded-full border border-gray-600 bg-gray-900/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 group-hover:border-blue-400 group-hover:bg-blue-900/40 group-hover:scale-110 transition-all duration-300 shadow-xl">
                            <span className="text-xl font-bold text-white leading-none font-mono">
                                {edu.cgpa || edu.percentage}
                            </span>
                            {!edu.cgpa && <span className="text-[10px] text-gray-400 leading-none mt-0.5">%</span>}
                        </div>

                    </div>
                ))}
            </div>
        </div>

        {/* Skills Cloud */}
        <div className="pb-12">
            <h3 className="text-blue-500 font-mono text-sm tracking-widest mb-6 border-b border-gray-800 pb-2">// TECH ARSENAL</h3>
            <div className="flex flex-wrap gap-6">
                {allSkills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        {iconMap[skill]}
                    </div>
                    <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono uppercase tracking-wider">
                        {skill}
                    </span>
                </div>
                ))}
            </div>
        </div>

      </motion.div>
    </div>
  );

  return (
    <>
      <section className="grid-bg h-screen w-full relative overflow-hidden">
        
        {/* Layout Switcher UI */}
        <div className="absolute top-24 right-6 z-20 flex flex-col gap-2">
          <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase text-right mb-1">View Layout</span>
          <button 
            onClick={() => setLayout('classic')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${layout === 'classic' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'}`}
          >
            CLASSIC
          </button>
          <button 
            onClick={() => setLayout('minimal')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${layout === 'minimal' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'}`}
          >
            MINIMAL
          </button>
          <button 
            onClick={() => setLayout('magazine')} 
            className={`px-4 py-2 text-xs font-mono border transition-all ${layout === 'magazine' ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'}`}
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
            {layout === 'classic' && <ClassicLayout />}
            {layout === 'minimal' && <MinimalLayout />}
            {layout === 'magazine' && <MagazineLayout />}
          </motion.div>
        </AnimatePresence>

      </section>
      <Navbar />
    </>
  );
}

export default About;