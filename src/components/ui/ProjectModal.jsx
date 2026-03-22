import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTimes, FaRegClock, FaServer, FaCode, FaRocket, 
  FaCheckCircle, FaLayerGroup, FaGithub 
} from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0B0E11] border border-gray-800 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto custom-scrollbar shadow-2xl relative"
      >
        
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 select-none">
          <FaGithub className="text-[12rem] text-white transform -rotate-12" />
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-gray-800/50 p-2 rounded-full hover:bg-red-500/20 hover:text-red-400"
        >
          <FaTimes size={18} />
        </button>

        <div className="p-8 z-10">
          {/* Header */}
          <div className="mb-6 border-b border-gray-800 pb-4 relative">
            <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-2 inline-block bg-blue-500/10 px-2 py-1 rounded">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
            <p className="text-gray-400 text-sm font-medium italic">{project.tagline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Context & Problem */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                  <FaLayerGroup className="text-purple-500" /> Description
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h3 className="text-red-400 font-bold flex items-center gap-2 mb-2">
                  <FaTimes className="text-red-500" /> Problem
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h3 className="text-green-400 font-bold flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-green-500" /> Solution
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Right Column: Tech & Architecture */}
            <div className="space-y-6">
              
              {/* Tech Stack */}
              <div>
                <h3 className="text-white font-bold flex items-center gap-2 mb-3">
                  <FaCode className="text-blue-500" /> Tech Stack
                </h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(project.techStack).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-600 uppercase text-[10px] font-bold tracking-wider block mb-1">{key}</span>
                      <div className="flex flex-wrap gap-2">
                        {value.map((tech) => (
                          <span key={tech} className="bg-[#161b22] border border-gray-700 text-gray-300 px-2 py-1 rounded text-xs shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-bold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-xs">
                      <span className="text-blue-500 mt-1">▹</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Metrics & Deployment */}
          <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold flex items-center gap-2 mb-3">
                <FaRocket className="text-orange-500" /> Metrics
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-[#0d1117] p-3 rounded-lg border border-gray-800">
                    <span className="text-gray-600 text-[10px] uppercase font-bold block">{key}</span>
                    <span className="text-white font-mono text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold flex items-center gap-2 mb-3">
                <FaServer className="text-cyan-500" /> Deployment
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(project.deployment).map(([key, value]) => (
                  <div key={key} className="bg-[#0d1117] p-3 rounded-lg border border-gray-800 flex justify-between items-center">
                    <span className="text-gray-600 text-[10px] uppercase font-bold">{key}</span>
                    <span className="text-cyan-400 font-mono text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Button (Bottom) */}
          <div className="mt-8 pt-4 flex justify-end border-t border-gray-800">
            <a 
              href="#" // Replace with actual project.githubUrl
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] border border-gray-700 hover:border-gray-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
export default ProjectModal;