import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProgramGrid from "@/components/ProgramGrid";
import Ticker from "@/components/Ticker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-8">
      <SiteHeader />
      <HeroSection />
      <ProgramGrid />
      <Ticker />
    </div>
  );
};

export default Index;
