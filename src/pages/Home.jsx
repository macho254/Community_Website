export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4  text-white
    bg-[#111] rounded-2xl shadow-lg border border-gold/20 p-10 max-w-3xl mx-auto "          
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Unlock the Future of <span className="text-gold">Finance</span> & Tech
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        BitBridge is a modern, community-driven tech-financial platform to make sense of money, technology, and life.
        Join us as we decode money, tech, and life — one transmission at a time.
      </p>
      <a
        href="https://t.me/+bjFSNwZJFZY4MGNk"
        target="_blank"
        rel="noopener noreferrer"
      >
      <button className="bg-gold hover:bg-opacity-80 text-black font-medium px-6 py-3 rounded-xl transition">
        Join the Movement
      </button>
      </a>
    </section>
  );
}
