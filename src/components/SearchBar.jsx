import { HiOutlineSearch } from 'react-icons/hi';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-md group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
        <HiOutlineSearch size={20} />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search projects by name..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
};

export default SearchBar;