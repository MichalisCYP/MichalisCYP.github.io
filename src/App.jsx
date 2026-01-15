import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Education />
        <Skills />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
