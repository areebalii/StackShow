import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#030712] selection:bg-blue-500/30 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;