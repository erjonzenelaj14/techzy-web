import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import StackMarquee from "@/components/sections/StackMarquee";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import NodesBackground from "@/components/NodesBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen text-foreground overflow-hidden">
      <NodesBackground />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <StackMarquee />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
