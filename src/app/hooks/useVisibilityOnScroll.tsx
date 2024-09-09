import { useState, useEffect } from "react";

export function useVisibilityOnScroll(sectionId:string) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if section is at least 25% visible from top and bottom
      if (
        sectionTop < windowHeight * 0.75 &&
        sectionBottom > windowHeight * 0.25
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId]);

  return isVisible;
}
