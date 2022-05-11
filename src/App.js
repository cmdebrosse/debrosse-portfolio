import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Navbar />
      {/* Multi-page site */}
      <AnimatedRoutes />

      {/* Single page scrolling site
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </>
  );
}

export default App;
