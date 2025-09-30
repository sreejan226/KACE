import BoldCopy from "@/components/animata/text/bold-copy";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/Hero";
import EventsSection from "@/components/sections/Events";
import UpdatesSection from "@/components/sections/Updates";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EventsSection />
      <UpdatesSection />
      <ContactSection />
    </>
  );
}
