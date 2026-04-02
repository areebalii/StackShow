import { motion } from 'framer-motion';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar md:pb-0">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className="relative px-6 py-2 text-sm font-medium transition-colors"
        >
          {/* Text Color logic */}
          <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
            {cat}
          </span>

          {/* Animated Background Pill */}
          {activeCategory === cat && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;