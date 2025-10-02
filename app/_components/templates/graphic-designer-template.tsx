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
  ExternalLink,
  Palette,
  Award,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

const GraphicDesignerTemplate = () => {
  const { state } = useResume();
  const { header, experience, skills, projects, education, languages } = state;

  return (
    <div className="max-w-4xl mx-auto bg-white print:shadow-none shadow-lg">
      {/* Header Section with Creative Layout */}
      <div className="relative bg-gradient-to-r from-pink-500 to-rose-600 text-white p-8 print:p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-4 -translate-x-4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">{header.name}</h1>
          <h2 className="text-xl font-light mb-4 text-pink-100">
            {header.role}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{header.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{header.phone}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{header.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{header.portfolio}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={header.linkedin}
              className="text-pink-200 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={header.github}
              className="text-pink-200 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 p-8 print:p-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Experience Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
              Creative Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp: ExperienceProps) => (
                <div
                  key={exp.id}
                  className="relative border-l-4 border-pink-200 pl-6 pb-6"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-gray-600 bg-pink-50 px-3 py-1 rounded-full">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-pink-600 font-medium mb-2">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects/Portfolio Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Palette className="h-4 w-4 text-white" />
              </div>
              Featured Projects
            </h3>
            <div className="grid gap-6">
              {projects.map((project: Project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {project.name}
                    </h4>
                    <div className="flex gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          className="text-pink-600 hover:text-pink-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-pink-600 hover:text-pink-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(", ").map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-white text-pink-700 px-2 py-1 rounded-full border border-pink-200"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Creative Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill: Skill) => (
                <div key={skill.id} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-600 mb-2">
                    {skill.name}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skill.value.split(", ").map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu: EducationProps) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100"
                >
                  <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-pink-600 font-medium">{edu.institute}</p>
                  <p className="text-sm text-gray-600">{edu.academic_year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang: LanguageProps) => (
                <div
                  key={lang.id}
                  className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
                >
                  <span className="font-medium text-gray-800">{lang.name}</span>
                  <span className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignerTemplate;
