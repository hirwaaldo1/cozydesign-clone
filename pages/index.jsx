import Head from "next/head";
import AboutSection from "../components/sections/homepage/About";
import BlogSection from "../components/sections/homepage/Blog";
import CampanySections from "../components/sections/homepage/Campany";
import ClientSections from "../components/sections/homepage/Client";
import HelpSection from "../components/sections/homepage/Help";
import HeroSection from "../components/sections/homepage/Hero";
import SupportChat from "../components/ui/SupportChat";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cozy: Honest, real-world digital design & marketing</title>
        <meta
          name="description"
          content="Cozy: Honest, real-world digital design & marketing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <ClientSections />
      <CampanySections />
      <BlogSection />
      <HelpSection />
      <SupportChat />
    </>
  );
}
