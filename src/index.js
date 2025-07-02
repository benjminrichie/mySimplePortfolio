import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import SkillSet from "./SkillSet";


// Initialize existing animations
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the about section
  const aboutSection = document.querySelector('#about');
  console.log("About section found:", aboutSection);
  if (aboutSection) {
    // Create a new instance of the SkillSet component
    // Pass the document.body as container if needed
    const skillSetComponent = new SkillSet(document.body);
    console.log("SkillSet component created");
    // Render the component and add it after the about section
    const skillElement = skillSetComponent.render();
    console.log("SkillSet element rendered:", skillElement);
    aboutSection.after(skillElement);
    console.log("SkillSet element added to DOM");
  } else {
    console.error("Could not find #about section to append skills to");
  }
});