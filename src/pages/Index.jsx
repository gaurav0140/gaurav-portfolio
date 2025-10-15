import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll(".section-reveal");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showLoading]);

  return (
    <>
      {showLoading && <LoadingScreen />}
      <div className={`min-h-screen ${showLoading ? "hidden" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <div className="section-reveal">
            <About />
          </div>
          <div className="section-reveal">
            <Experience />
          </div>
          <div className="section-reveal">
            <Projects />
          </div>
          <div className="section-reveal">
            <OpenSource />
          </div>
          <div className="section-reveal">
            <Skills />
          </div>
          <div className="section-reveal">
            <Achievements />
          </div>
          <div className="section-reveal">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
