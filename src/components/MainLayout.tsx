import NodesBackground from "@/components/NodesBackground";
import Nav from "@/components/sections/Nav";
import StickyContactCta from "@/components/StickyContactCta";
import InternalLinkRibbon from "@/components/InternalLinkRibbon";
import SkipToMainContent from "@/components/SkipToMainContent";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <SkipToMainContent />
      <NodesBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav />
        <StickyContactCta />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <footer className="border-t border-border/60 bg-background/80 backdrop-blur-sm mt-auto" aria-label="Site footer">
          <div className="container py-6 px-6 md:px-8">
            <InternalLinkRibbon />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
