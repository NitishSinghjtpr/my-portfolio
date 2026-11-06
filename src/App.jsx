import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import MyJourney from "./components/MyJourney";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <MyJourney/>
      <Contact/>

      {/* <section id="home" className="min-h-screen bg-gray-900 text-white pt-24">
        <h1 className="text-4xl text-center font-bold">
          Welcome to My Portfolio
        </h1>
      </section> */}
    </>
  );
}

export default App;