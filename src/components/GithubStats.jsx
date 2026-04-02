import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaUsers } from 'react-icons/fa';

const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const username = "areebalii"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          avatar: data.avatar_url
        });
      })
      .catch(err => console.error("Error fetching GitHub stats", err));
  }, []);

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Profile Info */}
        <div className="flex items-center gap-6">
          <img src={stats.avatar} alt="Github Avatar" className="h-20 w-20 rounded-full border-2 border-blue-500/50 shadow-lg shadow-blue-500/20" />
          <div>
            <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
            <p className="text-gray-400">Real-time stats for @{username}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-auto">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5">
            <FaCodeBranch className="text-blue-400 mb-2" size={20} />
            <span className="text-2xl font-bold text-white">{stats.repos}</span>
            <span className="text-xs text-gray-500 uppercase">Repositories</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/5">
            <FaUsers className="text-purple-400 mb-2" size={20} />
            <span className="text-2xl font-bold text-white">{stats.followers}</span>
            <span className="text-xs text-gray-500 uppercase">Followers</span>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            className="flex flex-col items-center p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-colors col-span-2 md:col-span-1"
          >
            <FaGithub className="text-white mb-2" size={20} />
            <span className="text-sm font-bold text-white">View Profile</span>
            <span className="text-[10px] text-blue-100 uppercase">Follow Me</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubStats;