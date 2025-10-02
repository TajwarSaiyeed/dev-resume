import React from "react";
import { Title } from "@/components/title";
import { useResume } from "@/providers/resume-provider";
import { Project } from "@/types";

const Projects = () => {
  const { state } = useResume();
  const projectData: Project[] = state.projects;

  return (
    <div className={"w-full"}>
      <Title title={"Projects"} />
      <div className={"w-full flex flex-col gap-2"}>
        {projectData.map(project => (
          <div className={"flex flex-col gap-1"} key={project.id}>
            <div className={"flex gap-2 items-center"}>
              <span className={"font-bold"}>{project.name} - </span>
              <a
                target={"_blank"}
                className={"text-sm font-medium text-blue-500"}
                href={project.live}
              >
                Live
              </a>
              |
              <a
                target={"_blank"}
                className={"text-sm font-medium text-blue-500"}
                href={project.github}
              >
                Github
              </a>
            </div>
            <p className={"text-sm font-[500] text-justify "}>
              {project.description}
            </p>
            <p className={"text-[14px] w-full font-semibold"}>
              <span className={"font-bold"}>Technologies:</span>{" "}
              {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
