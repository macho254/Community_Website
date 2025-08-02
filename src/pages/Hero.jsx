export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Unlock the Future of <span className="text-gold">Finance</span> & Tech
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        BitBridge is a modern, community-driven tech-financial platform to make sense of money, technology, and life.
        Join us as we decode money, tech, and life — one transmission at a time.
      </p>
      <button className="bg-gold hover:bg-opacity-80 text-black font-medium px-6 py-3 rounded-xl transition">
        Join the Movement
      </button>
    </section>
  );
}
