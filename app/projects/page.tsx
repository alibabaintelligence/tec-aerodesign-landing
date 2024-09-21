import CallSection from "@/components/CallSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MembersSection from "@/components/MembersSection";
import NavBar from "@/components/NavBar";
import ResultsSection from "@/components/ProjectsSection";
import ProposalSection from "@/components/ProposalSection";

export default function Home() {
  return (
    <main>
      <NavBar navbarAnimation={false} />
      <div
        className="relative bg-white bg-top bg-no-repeat"
        style={{
          backgroundImage: "url(/images/background.svg)",
        }}
      >
        <div className="container mx-auto">
          <ResultsSection />
          <ProposalSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
