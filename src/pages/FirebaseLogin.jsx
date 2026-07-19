import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function FirebaseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  // Google Login (Patient)
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("✅ Google Login Successful");
      navigate("/patient");
    } catch (error) {
      alert(error.message);
    }
  };

  // Email Login (Doctor / Admin)
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userEmail = userCredential.user.email;

      if (userEmail === "doctor@smartqueue.com") {
        alert("✅ Doctor Login Successful");
        navigate("/doctor");
      } else if (userEmail === "admin@smartqueue.com") {
        alert("✅ Admin Login Successful");
        navigate("/admin");
      } else {
        alert("✅ Patient Login Successful");
        navigate("/patient");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold text-cyan-400 text-center">
          Firebase Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-6 p-3 rounded bg-slate-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 rounded bg-slate-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold text-white"
        >
          Login
        </button>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 hover:bg-red-600 p-3 rounded font-bold text-white"
        >
          Continue with Google
        </button>

      </div>
    </div>
  );
}

export default FirebaseLogin;