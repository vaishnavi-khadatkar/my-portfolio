import profileImg from "../assets/portfolio-img.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#3b0764] to-[#020617] pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center fade-up">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-cyan-400 mb-3">Java Developer | Fresher</p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Vaishnavi Khadatkar
            </span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-xl">
            Passionate Java Developer with strong fundamentals in web
            technologies, backend development, and database management.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold glow hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="/Vaishnavi_Khadatkar_CV.pdf"
              download
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-3xl rounded-3xl"></div>

          {/* Glass Card with Image */}
          <div className="relative w-full h-[380px] rounded-2xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 shadow-2xl 
            overflow-hidden">

            <img
              src={profileImg}
              alt="Vaishnavi Khadatkar"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
