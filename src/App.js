import React, { useState, useEffect } from "react";
import MainNavigation from "./components/layouts/MainNavigation";
import HomePage from "./pages/HomePage";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <MainNavigation scrollTop={scrollTop} />
      <HomePage scrollTop={scrollTop} />
    </div>
  );
}

export default App;
