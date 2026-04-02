import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Glass Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a href={project.github} className="rounded-full bg-white/20 p-3 text-white hover:bg-white/40">
            <FaGithub size={20} />
          </a>
          {/* Note: In a real project, this might link to ProjectDetails instead of a direct Demo */}
          <Link to={`/project/${project.id}`} className="rounded-full bg-white/20 p-3 text-white hover:bg-white/40">
            <FaExternalLinkAlt size={18} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-300 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;