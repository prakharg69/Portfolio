import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

const ProjectDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  // Handle case where user might refresh the page (data lost in state)
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p>Project not found. Please go back.</p>
          <button onClick={() => navigate('/work')} className="mt-4 text-blue-500 hover:underline">
            Go to Work
          </button>
        </div>
      </div>
    );
  }

  // Helper to flatten tech stack
  const getTechs = (stackObj) => Object.values(stackObj).flat();

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-['Space_Grotesk']">
      
      {/* Simple Navigation Bar */}
      <div className="fixed top-0 left-0 w-full p-6 z-10 flex items-center gap-4">
        <button 
          onClick={() => navigate('/work')}
          className="text-gray-500 hover:text-white transition-colors flex items-center gap-2"
        >
          <FaArrowLeft /> <span className="text-sm font-bold uppercase tracking-widest">Back</span>
        </button>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* Header Section - No Boxes */}
        <div className="mb-12">
          <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500 italic font-light">
            {project.tagline}
          </p>
        </div>

        {/* Description - Simple Text Block */}
        <div className="mb-16 space-y-6">
          <h3 className="text-white text-lg font-bold">The Project</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution - Simple Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-red-400 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-red-500">01.</span> Problem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h3 className="text-green-400 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-green-500">02.</span> Solution
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack - Simple List/Tags, No Boxes */}
        <div className="mb-16">
          <h3 className="text-white text-lg font-bold mb-6">Technologies Used</h3>
          <div className="flex flex-wrap gap-4">
            {getTechs(project.techStack).map((tech) => (
              <span key={tech} className="text-gray-400 text-sm border-b border-gray-700 pb-1 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features - Simple List */}
        <div className="mb-16">
          <h3 className="text-white text-lg font-bold mb-6">Key Features</h3>
          <ul className="space-y-3">
            {project.features.map((feat, idx) => (
              <li key={idx} className="text-gray-400 flex items-start gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / GitHub Link */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
             <h4 className="text-white font-bold mb-1">Deployment</h4>
             <p className="text-gray-500 text-sm">Frontend: {project.deployment.frontend} • Backend: {project.deployment.backend}</p>
          </div>
          <a 
            href="#"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            <FaGithub /> View Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;