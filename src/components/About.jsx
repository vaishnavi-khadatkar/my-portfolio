const About = () => {
  return (
    <section
      id="about"
      className="px-24 py-28 grid grid-cols-2 gap-16 items-center"
    >
      {/* LEFT */}
      <div>
        <h2 className="text-4xl font-semibold mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-white/70 leading-relaxed">
          I am a Java Developer Fresher with hands-on experience in Java, JSP,
          Servlets, JDBC, and MySQL. I enjoy building clean, scalable web
          applications using MVC architecture and modern UI practices.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-6">
        {[
          "Java & OOP Concepts",
          "MVC Architecture",
          "Web Development",
          "Database Design",
        ].map((item) => (
          <div
            key={item}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition"
          >
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
