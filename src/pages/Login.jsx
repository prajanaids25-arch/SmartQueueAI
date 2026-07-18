import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="bg-slate-900 p-10 rounded-2xl w-full max-w-xl border border-slate-700">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          SmartQueue AI
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Select Your Role
        </p>

        <div className="mt-10 space-y-5">

          <Link
            to="/patient"
            className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold"
          >
            👤 Patient
          </Link>

          <Link
            to="/doctor"
            className="block w-full text-center bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold"
          >
            👨‍⚕️ Doctor
          </Link>

          <Link
            to="/admin"
            className="block w-full text-center bg-red-500 hover:bg-red-600 py-4 rounded-xl font-bold"
          >
            🛠️ Admin
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Login;