import AboutSection from "@/components/AboutSection";
import CallSection from "@/components/CallSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ResultsSection from "@/components/ResultsSection";

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
          <ResultsSection />
          <CallSection />
        </div>
      </div>
    </main>
  );
}
