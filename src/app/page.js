"use client";

import Header from "@/component/header";
import AboutUs from "@/component/aboutUs";
import Services from "@/component/services";
import Stats from "@/component/stats";
import Features from "@/component/features";
import GetStartedToday from "@/component/GetStartedToday";
import Testimonials from "@/component/testimonials";
import Info from "@/component/info";
import Footer from "@/component/footer";
import Projects from "@/component/projects";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Stats />
      <Projects />
      <Features />
      <Testimonials />
      <GetStartedToday />
      <Info />
      <Footer />
    </>
  );
}
