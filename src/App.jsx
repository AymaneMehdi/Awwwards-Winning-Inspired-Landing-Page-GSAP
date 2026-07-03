import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Story from "./components/story";
import Contact from "./components/contact";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
};

export default App;
