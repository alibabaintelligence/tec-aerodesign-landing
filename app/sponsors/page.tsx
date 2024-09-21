import CallSection from "@/components/CallSection";
import Footer from "@/components/Footer";
import MembersSection from "@/components/MembersSection";
import NavBar from "@/components/NavBar";
import ProposalSection from "@/components/ProposalSection";
import SponsorshipTable from "@/components/SponsorshipTable";

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
          <SponsorshipTable />
          <ProposalSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
