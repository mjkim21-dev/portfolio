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
    name: "project-one",
    description: "A short, plain-language description of what this project does and the problem it solves. Focus on the outcome, not just the tech.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/yourusername/project-one",
    demo: "https://project-one-demo.vercel.app",
    year: "2025"
  },
  {
    name: "project-two",
    description: "Another project. This one might be a CLI tool, a script, or a backend service — describe it in one or two sentences.",
    tech: ["Python", "Docker"],
    link: "https://github.com/yourusername/project-two",
    demo: "",
    year: "2024"
  },
  {
    name: "project-three",
    description: "A third example project. Delete or duplicate these objects to fit however many projects you actually have.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://github.com/yourusername/project-three",
    demo: "",
    year: "2024"
  }
];
