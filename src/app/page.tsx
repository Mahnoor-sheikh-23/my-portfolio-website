"use client";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import HeroSetion from "./components/HeroSetion";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSetion />
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
     
    </main>
  ); 
}




