import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import QRCode from "react-qr-code";
function DoctorDashboard() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "queue"), (snapshot) => {
      const queueData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQueue(queueData);
    });

    return () => unsubscribe();
  }, []);

  const nextPatient = async () => {
  if (queue.length === 0) return;

  try {
    await deleteDoc(doc(db, "queue", queue[0].id));
    console.log("Patient removed");
  } catch (error) {
    console.error("Error removing patient:", error);
  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400">
        Doctor Dashboard
      </h1>

      <div className="mt-10 bg-slate-900 rounded-2xl p-6">
        <h2 className="text-2xl font-bold">
          Current Patient
        </h2>

        <p className="mt-4 text-5xl text-green-400">
  {queue.length > 0 ? queue[0].token : "No Patient"}
</p>

        <button
  onClick={nextPatient}
  className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-bold"
>
  Next Patient
</button>
        <div className="mt-8 bg-slate-900 p-6 rounded-xl">
  <h2 className="text-2xl font-bold mb-4">Live Queue</h2>

  {queue.length === 0 ? (
    <p>No patients in queue.</p>
  ) : (
    <ul className="space-y-3">
      {queue.map((patient) => (
        <li
          key={patient.id}
          className="bg-slate-800 p-4 rounded-lg flex justify-between"
        >
          <span>{patient.token}</span>
          <span>{patient.name}</span>
          <span>{patient.status}</span>
        </li>
      ))}
    </ul>
  )}
</div>
<div className="mt-10 bg-slate-900 p-6 rounded-2xl flex flex-col items-center">
  <h2 className="text-2xl font-bold mb-4">
    Patient QR Code
  </h2>

  <QRCode
    value="http://localhost:5176/"
    size={180}
    bgColor="#ffffff"
    fgColor="#000000"
  />

  <p className="mt-4 text-gray-400 text-center">
    Scan this QR to open the Patient App
  </p>
</div>
      </div>
    </div>
  );
}

export default DoctorDashboard;