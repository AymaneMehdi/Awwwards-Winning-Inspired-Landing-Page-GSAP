import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
