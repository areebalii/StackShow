import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCode, FaLightbulb, FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects'; // Adjust path to your projects data

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-white p-20 text-center">Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#030712] pt-28 pb-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition-all">
                <FaGithub /> Github
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition-all">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive Section */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <FaCode className="text-blue-500" /> Technical Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenges & Solutions */}
            <div className="lg:col-span-1 space-y-10">
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-sm uppercase tracking-widest">
                  <FaLightbulb /> Challenge
                </div>
                <p className="text-gray-400 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">
                  {project.challenges || "Managing complex state transitions across the application."}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-4 font-mono text-sm uppercase tracking-widest">
                  <FaCode /> Solution
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {project.solution || "Implemented a custom hook using Redux Toolkit to normalize data fetching."}
                </p>
              </div>
            </div>

            {/* Code Snippet Window */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono tracking-widest">snippet.js</span>
                </div>
                <SyntaxHighlighter
                  language="javascript"
                  style={atomDark}
                  customStyle={{
                    background: 'transparent',
                    padding: '24px',
                    fontSize: '14px',
                    lineHeight: '1.7'
                  }}
                >
                  {project.codeSnippet || "// Code snippet not provided for this project"}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;