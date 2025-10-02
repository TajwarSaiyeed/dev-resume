import React from "react";
import { Title } from "@/components/title";
import { useResume } from "@/providers/resume-provider";
import { Skill } from "@/types";

const Skills = () => {
  const { state } = useResume();
  const skillData: Skill[] = state.skills;

  return (
    <div>
      <Title title={"Skills"} />
      <ul className={"list-disc px-10"}>
        {skillData.map(skill => (
          <li key={skill.id}>
            <span className={"font-bold text-lg"}>{skill.name} : </span>
            <span>{skill.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
