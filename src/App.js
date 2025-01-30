import logo from "./logo.svg";
import "./App.css";
import Nav from "./comp/nav";
import Hero from "./comp/Hero/Hero";
import Slider from "./comp/slider/slider";
import Services from "./comp/Services/services";
import Projects from "./comp/Projects/Projects";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Slider />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
