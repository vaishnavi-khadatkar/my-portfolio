export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#020617] via-[#3b0764] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-pink-400 mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass-card">
            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              Programming
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Core Java</li>
              <li>Advance Java</li>
              <li>JavaScript</li>
              <li>C, C++</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              Web & Database
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>HTML, CSS, Bootstrap</li>
              <li>JSP, Servlets, React JS </li>
              <li>MySQL, JDBC, MongoDB</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              Tools & Concepts
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Eclipse, VS Code</li>
              <li>Git, GitHub</li>
              <li>OOP, MVC</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
