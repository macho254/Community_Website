// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      name: "GoalStack",
      description: "Goal-based savings platform to keep you consistent.",
      link: "https://goalstack.example.com",   // 🔗 project URL
    },
    {
      name: "Pamoja Pay",
      description: "Buy & Sell Ownership on your Business & Product.",
      link: "https://pamoja-pay.example.com",
    },
    // add more projects here
  ];

  return (
    <section className="min-h-screen bg-[#111] text-white px-4 py-12 rounded-2xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gold">
        Community Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1a1a1a] border border-gold/20 rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gold mb-2">
              {project.name}
            </h2>
            <p className="text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
