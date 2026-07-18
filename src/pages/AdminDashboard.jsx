function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Patients Waiting</h2>
          <p className="text-5xl mt-4 text-yellow-400">32</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Emergency Cases</h2>
          <p className="text-5xl mt-4 text-red-400">3</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Doctors Available</h2>
          <p className="text-5xl mt-4 text-green-400">12</p>
        </div>

      </div>

      <button className="mt-10 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-bold">
        Emergency Priority
      </button>
    </div>
  );
}

export default AdminDashboard;