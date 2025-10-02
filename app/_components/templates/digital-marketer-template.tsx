import React from "react";
import { useResume } from "@/providers/resume-provider";
import {
  ExperienceProps,
  Project,
  Skill,
  EducationProps,
  LanguageProps,
} from "@/types";
import {
  TrendingUp,
  Target,
  Zap,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Globe,
  ExternalLink,
  Github,
} from "lucide-react";

const DigitalMarketerTemplate = () => {
  const { state } = useResume();
  const { header, experience, skills, projects, education, languages } = state;

  return (
    <div className="max-w-4xl mx-auto bg-white print:shadow-none shadow-lg">
      {/* Header Section with Marketing Focus */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 print:p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 border-4 border-white border-opacity-20 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-white border-opacity-20 rounded-full translate-y-16 -translate-x-16"></div>

        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{header.name}</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <TrendingUp className="h-5 w-5" />
            <h2 className="text-xl font-light text-green-100">{header.role}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-6">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-4 w-4" />
              <span>{header.location}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-4 w-4" />
              <span>{header.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              <span>{header.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Globe className="h-4 w-4" />
              <span>{header.portfolio}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 print:p-6">
        {/* Experience Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            Marketing Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp: ExperienceProps) => (
              <div
                key={exp.id}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {exp.role}
                    </h4>
                    <p className="text-green-600 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{exp.location}</p>
                    <p className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Skills Section */}
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                Marketing Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill: Skill) => (
                  <div
                    key={skill.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-green-600 mb-3 text-lg">
                      {skill.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.value.split(", ").map((item, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar with Education & Languages */}
          <div className="space-y-6">
            {/* Education */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu: EducationProps) => (
                  <div
                    key={edu.id}
                    className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 font-medium">
                      {edu.institute}
                    </p>
                    <p className="text-sm text-gray-600">{edu.academic_year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang: LanguageProps) => (
                  <div
                    key={lang.id}
                    className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
                  >
                    <span className="font-medium text-gray-800">
                      {lang.name}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Campaigns/Projects Section */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            Key Campaigns & Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800 flex-1">
                    {project.name}
                  </h4>
                  <div className="flex gap-2 ml-4">
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-green-600 hover:text-green-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-green-600 hover:text-green-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    Tools & Platforms:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(", ").map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalMarketerTemplate;
