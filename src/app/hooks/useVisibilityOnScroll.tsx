"use client";
import { useState, useEffect } from "react";

export function useVisibilityOnScroll(
  sectionId: string,
  triggerOnce: boolean = false
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section || (triggerOnce && isVisible)) return; // Skip if visible and triggerOnce is true

      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if section is at least 25% visible from top and bottom
      if (
        sectionTop < windowHeight * 0.75 &&
        sectionBottom > windowHeight * 0.25
      ) {
        setIsVisible(true);
      } else if (!triggerOnce) {
        setIsVisible(false); // Reset visibility when it's not visible and triggerOnce is false
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial visibility on component mount
    handleScroll();

    // Remove the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId, isVisible, triggerOnce]); // Add dependencies for isVisible and triggerOnce

  return isVisible;
}
