function Features() {
  return (
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center">
        Why Choose SmartQueue AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-cyan-400">
            AI Prediction
          </h3>

          <p className="mt-4 text-gray-400">
            Predicts waiting time using live queue data.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-cyan-400">
            QR Queue
          </h3>

          <p className="mt-4 text-gray-400">
            Join hospital queue instantly by scanning QR.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-cyan-400">
            Emergency Priority
          </h3>

          <p className="mt-4 text-gray-400">
            Emergency patients are automatically prioritized.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;