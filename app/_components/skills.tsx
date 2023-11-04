import React from 'react';
import {Skill} from "@/lib/mockData";
import {Separator} from "@/components/ui/separator";
import {Title} from "@/components/title";

const Skills = ({skillData}: {
    skillData: Skill[]
}) => {
    return (
        <div>
            <Title title={"Skills"}/>
            <ul className={'list-disc px-10'}>
                {skillData.map(skill => (
                    <li key={skill.id}>
                        <span className={'font-bold text-lg'}>
                            {skill.name} : {" "}
                        </span>
                        <span>
                            {skill.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;