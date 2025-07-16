// components/navbar/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-7">
      <Link
        to="/"
        className="font-pixelgame text-7xl text-cyan-600 m-8 drop-shadow-lg transition-all duration-300 ease-in-out hover:text-cyan-400 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
      >
        HiestSprint
      </Link>
      <div className="space-x-6">
        <Link to="/" className="text-glow">Home</Link>
        <Link to="/download" className="text-glow">Download</Link>
        <Link to="/about" className="text-glow">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
