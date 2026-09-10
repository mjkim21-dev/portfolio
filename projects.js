/*
  PROJECTS.JS
  ------------------------------------------------------------
  This is the file you'll edit most often. Add a new object to
  the PROJECTS array below for each project you want to show.

  Fields:
    name        - project name (string)
    description - 1-3 sentences about what it does (string)
    tech        - array of tech/tools used, shown as tags
    link        - URL to the code (GitHub repo, etc.) — required
    demo        - URL to a live demo — optional, leave as "" to hide
    year        - e.g. "2025" — optional, leave as "" to hide

  Order: projects display in the order listed here, top to bottom.
  ------------------------------------------------------------
*/

const PROJECTS = [
  {
    name: "Nanoelectronics and Metrology Lab for Celano Lab at ASU",
    description: "As a member of the Celano lab at ASU, I have been supporting day-to-day laboratory operations through equipment purchasing, shipping, and facility coordination while also contributing to research involving image segmentation and enhancement. I am exploring Python-based computer vision and AI/physics-informed approaches for processing and analyzing microscopy and metrology data.",
    tech: ["Python", "ImageJ/Fiji", "Cursor", "NanoScope Analysis"],
    link: "https://labs.engineering.asu.edu/celano/",
    //demo: "",
    year: "2025-Now"
  },
  {
    name: "Honeywell Aerospace Radiation Effects Internship",
    description: "This internship gave me experience in Radiation Effects from a Systems Engineering perspective, with responsibilities spanning the design of test plans for semiconductor devices for TID, FXR, and neutron-induced displacement damage (nDD) effects. I have put together some slides showing how radiation affects electronic devices; the PDF will be downloaded when you click the link button.",
    tech: ["KiCAD", "Microsoft Office Suite", "Creme96", "OMERE"],
    link: "https://github.com/mjkim21-dev/portfolio/raw/main/content/raditationpresentation.pdf",
    //demo: "n/a",
    year: "2026"
  },
//  {
    //name: "WORKING: Senior Design Project",
   // description: "A third example project. Delete or duplicate these objects to fit however many projects you actually have.",
   // tech: ["TypeScript", "Next.js", "Tailwind"],
   // link: "n/a",
  //  demo: "n/a",
   // year: "2026-Now"
//  }
];
