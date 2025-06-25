"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/skills'),
          fetch('/api/projects')
        ]);

        // Handle profile data
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        } else {
          console.error('Profile API error:', profileRes.status);
          setProfile(null);
        }

        // Handle skills data
        if (skillsRes.ok) {
          const skillsData = await skillsRes.json();
          console.log("Fetched Skills Data:", skillsData);
          setSkills(Array.isArray(skillsData) ? skillsData : []);
        } else {
          console.error('Skills API error:', skillsRes.status);
          setSkills([]);
        }

        // Handle projects data
        if (projectsRes.ok) {
          const projectsData = await projectsRes.json();
          setProjects(Array.isArray(projectsData) ? projectsData : []);
        } else {
          console.error('Projects API error:', projectsRes.status);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Set default values on error
        setProfile(null);
        setSkills([]);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
