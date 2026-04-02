import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import GithubStats from '../components/GithubStats';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30">
      {/* 1. Background Ambient Light */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32">
        {/* 2. Hero Section */}
        <section className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          >
            Project <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Showcase</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            A curated collection of full-stack applications, digital experiences, and
            technical experiments built with the MERN stack and modern UI libraries.
          </motion.p>
        </section>

        <GithubStats />

        {/* 3. Search & Filter Controls */}
        <section className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </section>

        {/* 4. Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;