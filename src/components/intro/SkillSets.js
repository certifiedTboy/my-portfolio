import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import classes from "./SkillSets.module.css";

const SkillSets = () => {
  const typed = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const skillSets = [
      "Graphics Designer",
      "Web Developer",
      "Software Engineer",
      "Digital Marketer",
    ];

    const options = {
      strings: skillSets,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
};

export default SkillSets;
