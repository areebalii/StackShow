import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-[1px]" // The 1px padding creates the "border"
    >
      {/* Animated Border Gradient (The Spotlight) */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(250px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.5), transparent 80%)`
        }}
      />

      {/* Main Card Content */}
      <div className="relative z-20 h-full w-full rounded-[15px] bg-[#030712] p-4 backdrop-blur-3xl">
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             <a href={project.github} target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-white/20"><FaGithub size={20}/></a>
             <Link to={`/project/${project.id}`} className="rounded-full bg-white/10 p-3 hover:bg-white/20"><FaExternalLinkAlt size={18}/></Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;