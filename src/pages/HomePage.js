import React, { useEffect, useState } from "react";
import Progress from "../components/progress-tracker/Progress";
import Intro from "../components/intro/Intro";
import Services from "../components/services/Services";
import WorkExperience from "../components/work-experience/WorkExperience";
import Banner from "../components/banner/Banner";
import Projects from "../components/projects/Projects";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/UI/BackToTop";
import Loader from "../components/UI/Loader";

const HomePage = ({ scrollTop }) => {
  const [loaderOff, setLoaderOff] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaderOff(true);
    }, 3000);
  }, []);

  return (
    <div>
      {!loaderOff && <Loader />}
      <Intro />
      <Progress />
      <Services />
      <WorkExperience />
      <Banner />
      <Projects />
      <Contacts />
      <Footer />
      <BackToTop scrollTop={scrollTop} />
    </div>
  );
};

export default HomePage;
