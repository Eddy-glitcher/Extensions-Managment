import type { Extension } from "../interfaces/etension.interface";

export const extensionsData: Extension[] = [
  {
    id: crypto.randomUUID(),
    name: "DevLens",
    description: "Quickly inspect pages and visualize element boundaries.",
    icon: "images/logo-devlens.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "StyleSpy",
    description: "instantly analize and copy Css from any webpage element.",
    icon: "images/logo-style-spy.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page landing.",
    icon: "images/logo-speed-boost.svg",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    name: "JSONWizard",
    description: "Formats, validates and prettifies JSON responses in-browser.",
    icon: "images/logo-json-wizard.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    icon: "images/logo-tab-master-pro.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    icon: "images/logo-viewport-buddy.svg",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    icon: "images/logo-markup-notes.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Gridguides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    icon: "images/logo-grid-guides.svg",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    icon: "images/logo-palette-picker.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    icon: "images/logo-link-checker.svg",
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Dom Snapshot",
    description: "Capture and export DOM structures quickly.",
    icon: "images/logo-dom-snapshot.svg",
    isActive: false,
  },
  {
    id: crypto.randomUUID(),
    name: "ConsolePlus",
    description:
      "Enhanced developer console whit advanced filtering and logging.",
    icon: "images/logo-console-plus.svg",
    isActive: true,
  },
];
