import Navbar from "./components/navbar";
import Hero from "./components/hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
