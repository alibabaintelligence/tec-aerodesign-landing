import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ResultsSection from "@/components/ProjectsSection";
import ProposalSection from "@/components/ProposalSection";
import SponsorshipTable from "@/components/SponsorshipTable";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="bg-black">
        <HeroSection />
      </div>
      <div
        className="relative bg-white bg-top bg-no-repeat"
        style={{
          backgroundImage: "url(/images/background.svg)",
        }}
      >
        <div className="container mx-auto">
          <AboutSection />
          <ProposalSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
