import { useState } from "react";
import { useContext } from "react";
import { QueueContext } from "../context/QueueContext";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function PatientDashboard() {
  const [token, setToken] = useState("Not Joined");
  const [position, setPosition] = useState("-");
  const [waitTime, setWaitTime] = useState("-");
  const [status, setStatus] = useState("Not Joined");
  const [patientName, setPatientName] = useState("");

  const { queue, setQueue } = useContext(QueueContext);

 const joinQueue = async () => {
  if (!patientName.trim()) {
  alert("Please enter your name");
  return;
}
  const randomNumber = Math.floor(Math.random() * 900) + 100;

  const patient = {
    id: Date.now(),
    token: `A${randomNumber}`,
    name: patientName,
    status: "Waiting",
  };

  setQueue([...queue, patient]);
  try {
  await addDoc(collection(db, "queue"), {
    token: patient.token,
    name: patient.name,
    status: patient.status,
    createdAt: serverTimestamp(),
    uid: auth.currentUser?.uid || null,
  });

  console.log("Patient saved to Firestore");
} catch (error) {
  console.error("Error saving patient:", error);
}

  setToken(patient.token);
  setPosition(queue.length + 1);
  const estimatedTime = (queue.length + 1) * 5;
setWaitTime(`${estimatedTime} min`);
  setStatus("✅ Successfully Joined Queue");
  setPatientName("");
};
      const emergencyQueue = () => {
  setToken("EM-001");
  setPosition(1);
  setWaitTime("Immediate");
  setStatus("🚨 Emergency Priority Activated");
};
const handleLogout = async () => {
  await signOut(auth);
};
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400">
        Patient Dashboard
      </h1>

      <div className="mt-10 grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Current Token</h2>
          <p className="text-5xl mt-4 font-bold text-cyan-400">
  {token}
</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Estimated Wait</h2>
          <div className="mt-10 bg-slate-900 p-6 rounded-2xl border border-green-500">
  <h2 className="text-xl font-bold">Queue Status</h2>

  <p className="mt-3 text-green-400 font-semibold">
    {status}
  </p>
</div>
          <p className="text-5xl mt-4 text-green-400">
  {waitTime}
</p>
<p className="mt-2 text-sm text-gray-400">
  AI Estimated Wait Time
</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Queue Position</h2>
          <p className="text-5xl mt-4 text-yellow-400">
  {position}
</p>
        </div>

      </div>
      <div className="mt-8">
  <label className="block mb-2 text-lg font-semibold">
    Patient Name
  </label>

  <input
    type="text"
    placeholder="Enter your name"
    value={patientName}
    onChange={(e) => setPatientName(e.target.value)}
    className="w-full md:w-96 p-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
  />

</div>
<div className="mt-10 flex gap-4">
  <button
    onClick={joinQueue}
    className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-bold"
  >
    Join Queue
  </button>

  <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-bold">
    Scan QR
  </button>

  <button
    onClick={emergencyQueue}
    className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold"
  >
    Emergency
  </button>

  <button
    onClick={handleLogout}
    className="bg-gray-700 hover:bg-gray-800 px-8 py-3 rounded-xl font-bold"
  >
    Logout
  </button>
</div>

      
    </div>
  );
}

export default PatientDashboard;