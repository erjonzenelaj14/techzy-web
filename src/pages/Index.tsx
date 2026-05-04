import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import StackMarquee from "@/components/sections/StackMarquee";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import NodeNetwork from "@/components/NodeNetwork";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Global animated node-network background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NodeNetwork className="w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Stats />
        <Services />
        <Process />
        <StackMarquee />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
