import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import NeuralBackground from './components/NeuralBackground';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden"
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      {/* Global Spotlight Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      <NeuralBackground />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default App;