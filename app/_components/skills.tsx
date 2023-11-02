import React from 'react';
import {Skill} from "@/lib/mockData";
import {Separator} from "@/components/ui/separator";

const Skills = ({skillData}: {
    skillData: Skill[]
}) => {
    return (
        <div>
            <h2 className={'text-2xl font-semibold mt-2'}>Skills:</h2>
            <Separator className={'my-2'}/>
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