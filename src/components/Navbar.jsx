import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
      <Link to="/">
        <h1 className="text-2xl font-bold text-cyan-400">
          SmartQueue AI
        </h1>
      </Link>

      <Link
  to="/login"
  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
>
  Login
</Link>
    </nav>
  );
}

export default Navbar;
