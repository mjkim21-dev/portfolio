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
    description: "For this lab, I have been working for Professor Umberto Celano. I have been supporting day-to-day laboratory operations through equipment purchasing, shipping, and facility coordination while also contributing to research involving image segmentation and enhancement. I am exploring Python-based computer vision and AI/physics-informed approaches for processing and analyzing microscopy and metrology data.",
    tech: ["Python", "ImageJ/Fiji", "Cursor", "NanoScope Analysis"],
    link: "https://labs.engineering.asu.edu/celano/",
    //demo: "",
    year: "Sep 2025 - Present"
  },
  {
    name: "Honeywell Aerospace Radiation Effects Internship",
    description: "This internship gave me experience in Radiation Effects from a Systems Engineering perspective, with responsibilities spanning the design of test plans for semiconductor devices for TID, FXR, and neutron-induced displacement damage (nDD) effects. I have put together some slides showing how radiation affects electronic devices. *For more info, the PDF will be downloaded when you click the link button.*",
    tech: ["KiCAD", "Microsoft Office Suite", "Creme96", "OMERE"],
    link: "https://github.com/mjkim21-dev/portfolio/raw/main/content/raditationpresentation.pdf",
    //demo: "n/a",
    year: "Summer 2026"
  },
  {
    name: "Junior Embedded Systems Project",
    description: "Developed a custom Bluetooth Low Energy GATT protocol to enable structured wireless communication between embedded hardware and a connected client device for EGR 314, which is a class at ASU. Designed the data flow around custom services and characteristics to support reliable control and feedback in a compact system. *For more info, the website is attached to the link button.*",
    tech: ["KiCad", "MicroPython", "BLE GATT", "Power Supply", "Multimeter", "Soldering Station"],
    link: "https://mjkim21-dev.github.io/mjkim21.github.io/",
    //demo: "n/a",
    year: "Spring 2026"
  },
  {
    name: "GaN Power Module for FURI ASU",
    description: "Fulton Undergraduate Research Initiative (FURI) was an opportunity for me to get research experience. I joined Professor Zhicheng Guo's Power Electronics lab and had the opportunity to research GaN power modules for medium/high voltage applications with PhD researcher Jie Deng. *For more info, the poster is attached to the link button.*",
    tech: ["Altium", "Oscilloscope", "Matlab/Simulink"],
    link: "https://forge.engineering.asu.edu/furiproject/intelligent-1300-v-60a-double-side-cooling-gan-power-module-for-next-generation-ev-powertrains/",
    //demo: "n/a",
    year: "Spring 2025"
  }
];
