"use client";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSetion from "./components/HeroSetion";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSetion />
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
        <Footer/>
    </main>
  ); F
}

