function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-28">
      <h2 className="text-6xl font-extrabold">
        Skip the Line,
        <br />
        Not Your Time.
      </h2>

      <p className="mt-6 max-w-2xl text-gray-400 text-xl">
        AI-powered smart queue management for hospitals that reduces waiting
        time, improves patient experience, and handles emergencies intelligently.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold">
          Join Queue
        </button>

        <button className="border border-cyan-500 px-8 py-3 rounded-xl">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;