import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Contact />
      </div>
    </>
  );
}