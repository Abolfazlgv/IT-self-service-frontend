import {
  FaRobot,
  FaNewspaper,
  FaGraduationCap,
  FaUserShield,
  FaStar,
  FaCog,
  FaTools,
  FaBriefcase,
  FaPaintBrush,
} from "react-icons/fa";

export const modules = [
  {
    id: "admin-panel",
    title: "Admin Panel",
    path: "/admin-panel",
    icon: FaUserShield,
    description: "Manage users and portal statistics",
    roles: ["admin"],
  },
  {
    id: "favorites",
    title: "Favorites",
    path: "/favorites",
    icon: FaStar,
    description: "Quick access to your saved resources and tools",
    roles: ["user", "admin"],
  },
  {
    id: "ai",
    title: "AI Tools",
    path: "/module/ai",
    icon: FaRobot,
    description:
      "Access and explore AI platforms like ChatGPT, Claude, and Gemini",
    roles: ["user", "admin"],
  },

  {
    id: "news",
    title: "News Center",
    path: "/module/news",
    icon: FaNewspaper,
    description: "Stay updated with latest technology and global news",
    roles: ["user", "admin"],
  },

  {
    id: "learning",
    title: "Learning",
    path: "/module/learning",
    icon: FaGraduationCap,
    description: "Educational platforms and programming tutorials",
    roles: ["user", "admin"],
  },

  {
    id: "dev-tools",
    title: "Dev Tools",
    path: "/module/dev-tools",
    icon: FaTools,
    description:
      "Development tools, GitHub, StackOverflow, and coding utilities",
    roles: ["user", "admin"],
  },

  {
    id: "productivity",
    title: "Productivity",
    path: "/module/productivity",
    icon: FaBriefcase,
    description: "Tools like Notion, Trello, and Google Drive for productivity",
    roles: ["user", "admin"],
  },

  {
    id: "design",
    title: "Design",
    path: "/module/design",
    icon: FaPaintBrush,
    description: "UI/UX tools like Figma, Dribbble, and design inspiration",
    roles: ["user", "admin"],
  },

  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    icon: FaCog,
    description: "Manage your account and portal configuration",
    roles: ["user", "admin"],
  },
];
