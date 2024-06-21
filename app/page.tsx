import AboutSection from "@/components/AboutSection";
import CallSection from "@/components/CallSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MembersSection from "@/components/MembersSection";
import NavBar from "@/components/NavBar";
import ResultsSection from "@/components/ResultsSection";
import SponsorshipTable from "@/components/SponsorshipTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-800">
      <NavBar />
      <div className="px-12 py-20 bg-black">
        <div className="container mx-auto">
          <HeroSection />
        </div>
      </div>
      <div
        className="relative bg-white bg-top bg-no-repeat"
        style={{
          backgroundImage: "url(/images/background.svg)",
        }}
      >
        <div className="container mx-auto">
          <AboutSection />
          <MembersSection />
          <ResultsSection />
          <CallSection />
          <SponsorshipTable />
        </div>
        <Footer />
      </div>
    </main>
  );
}
