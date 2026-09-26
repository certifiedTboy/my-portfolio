import React, { useEffect } from "react";
import MainNavigation from "./components/layouts/MainNavigation";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-scroll-reveal]");
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    let observer;
    const revealElement = (element) => {
      element.classList.add("is-visible");
      observer?.unobserve(element);
    };
    const revealVisibleElements = () => {
      elements.forEach((element) => {
        if (element.classList.contains("is-visible")) return;

        const bounds = element.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
          revealElement(element);
        }
      });
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) revealElement(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -36px 0px",
        }
      );

      elements.forEach((element) => observer.observe(element));
    } else {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    window.addEventListener("scroll", revealVisibleElements, { passive: true });
    window.addEventListener("resize", revealVisibleElements);
    revealVisibleElements();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealVisibleElements);
      window.removeEventListener("resize", revealVisibleElements);
    };
  }, []);

  return (
    <>
      <MainNavigation />
      <HomePage />
    </>
  );
}

export default App;
