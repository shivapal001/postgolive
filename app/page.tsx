import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyJoin } from "@/components/sections/why-join";
import { OpenRoles } from "@/components/sections/open-roles";
import { HiringProcess } from "@/components/sections/hiring-process";
import { AppStatus } from "@/components/sections/app-status";
import { ApplicationForm } from "@/components/sections/application-form";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyJoin />
        <OpenRoles />
        <HiringProcess />
        <AppStatus />
        <ApplicationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
