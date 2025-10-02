import { Template, TemplateType } from "@/types";

export const TEMPLATES: Record<TemplateType, Template> = {
  developer: {
    id: "developer",
    name: "Developer Pro",
    description:
      "Perfect for software developers, engineers, and tech professionals",
    color: "from-blue-500 to-indigo-600",
    icon: "💻",
    suitableFor: [
      "Software Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "DevOps Engineer",
      "Mobile Developer",
    ],
  },
  "graphic-designer": {
    id: "graphic-designer",
    name: "Creative Studio",
    description:
      "Designed for graphic designers, UI/UX designers, and creative professionals",
    color: "from-pink-500 to-rose-600",
    icon: "🎨",
    suitableFor: [
      "Graphic Designer",
      "UI/UX Designer",
      "Creative Director",
      "Brand Designer",
      "Visual Designer",
      "Web Designer",
    ],
  },
  "digital-marketer": {
    id: "digital-marketer",
    name: "Marketing Edge",
    description:
      "Optimized for digital marketers, growth hackers, and marketing professionals",
    color: "from-green-500 to-emerald-600",
    icon: "📈",
    suitableFor: [
      "Digital Marketer",
      "Marketing Manager",
      "SEO Specialist",
      "Content Marketer",
      "Social Media Manager",
      "Growth Hacker",
    ],
  },
  "business-analyst": {
    id: "business-analyst",
    name: "Business Pro",
    description:
      "Tailored for business analysts, consultants, and corporate professionals",
    color: "from-purple-500 to-violet-600",
    icon: "📊",
    suitableFor: [
      "Business Analyst",
      "Data Analyst",
      "Management Consultant",
      "Project Manager",
      "Product Manager",
      "Operations Manager",
    ],
  },
};

export const getTemplate = (templateId: TemplateType): Template => {
  return TEMPLATES[templateId];
};
