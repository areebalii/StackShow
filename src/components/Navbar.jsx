import { Link } from 'react-router-dom';
import { RiTerminalBoxLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <RiTerminalBoxLine size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Areeb<span className="text-blue-500">.</span>dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex text-sm font-medium">
          <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
          <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Social Links */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              <RiGithubFill size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <RiLinkedinBoxFill size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;