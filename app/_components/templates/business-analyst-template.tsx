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
  BarChart3,
  Briefcase,
  Users,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Globe,
  ExternalLink,
  Github,
  PieChart,
} from "lucide-react";

const BusinessAnalystTemplate = () => {
  const { state } = useResume();
  const { header, experience, skills, projects, education, languages } = state;

  return (
    <div className="max-w-4xl mx-auto bg-white print:shadow-none shadow-lg">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white">
        <div className="p-8 print:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{header.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5" />
                <h2 className="text-xl font-light text-purple-100">
                  {header.role}
                </h2>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={header.linkedin}
                className="text-purple-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={header.portfolio}
                className="text-purple-200 hover:text-white transition-colors"
              >
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm border-t border-purple-400 pt-4 mt-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{header.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{header.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{header.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub Profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 p-8 print:p-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Professional Experience */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-purple-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp: ExperienceProps) => (
                <div key={exp.id} className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800">
                        {exp.role}
                      </h4>
                      <p className="text-purple-600 font-medium text-lg">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <div className="bg-purple-50 px-4 py-2 rounded-lg text-center lg:text-right mt-2 lg:mt-0">
                      <p className="text-sm font-semibold text-purple-800">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-400">
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-purple-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              Key Projects & Initiatives
            </h3>
            <div className="space-y-6">
              {projects.map((project: Project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 flex-1">
                      {project.name}
                    </h4>
                    <div className="flex gap-2 ml-4">
                      {project.live && (
                        <a
                          href={project.live}
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Tools & Methodologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(", ").map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
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

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Core Competencies */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Core Competencies
            </h3>
            <div className="space-y-4">
              {skills.map((skill: Skill) => (
                <div
                  key={skill.id}
                  className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-100"
                >
                  <h4 className="font-semibold text-purple-700 mb-3">
                    {skill.name}
                  </h4>
                  <div className="space-y-2">
                    {skill.value.split(", ").map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          {item.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu: EducationProps) => (
                <div
                  key={edu.id}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-600 font-medium text-sm">
                    {edu.institute}
                  </p>
                  <p className="text-gray-600 text-sm">{edu.academic_year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang: LanguageProps) => (
                <div key={lang.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      {lang.name}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i <
                            (lang.level === "Native"
                              ? 5
                              : lang.level === "Fluent"
                                ? 4
                                : 3)
                              ? "bg-purple-500"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Metrics Box */}
          <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Key Strengths
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Data Analysis</span>
                <span className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span>Process Improvement</span>
                <span className="font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>Stakeholder Management</span>
                <span className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span>Requirements Gathering</span>
                <span className="font-semibold">Expert</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalystTemplate;
