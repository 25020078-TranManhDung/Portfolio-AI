import Home from "./Home";
import Projects from "./Projects";
import Summary from "./Summary";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-32">
      <section id="home" className="min-h-screen pt-20">
        <Home />
      </section>
      
      <section id="projects" className="min-h-screen pt-20">
        <Projects />
      </section>
      
      <section id="summary" className="min-h-screen pt-20">
        <Summary />
      </section>

      <section id="contact" className="min-h-screen pt-20">
        <Contact />
      </section>
    </div>
  );
}
