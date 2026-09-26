import React from "react";
import Intro from "../components/intro/Intro";
import Progress from "../components/progress-tracker/Progress";
import Services from "../components/services/Services";
import WorkExperience from "../components/work-experience/WorkExperience";
import Banner from "../components/banner/Banner";
import Projects from "../components/projects/Projects";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

const HomePage = () => (
  <main>
    <Intro />
    <Progress />
    <Services />
    <WorkExperience />
    <Projects />
    <Banner />
    <Contacts />
    <Footer />
  </main>
);

export default HomePage;
