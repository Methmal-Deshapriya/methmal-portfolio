import React from "react";
import NavBar from "./components/NavBar";
import Me from "./components/Me";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection selection:bg-neutral-300 selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Me />
        <About />
        <Technologies />

        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
