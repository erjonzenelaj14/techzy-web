import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import NodesBackground from "@/components/NodesBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <NodesBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
