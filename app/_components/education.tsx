import React from 'react';
import {Title} from "@/components/title";
import {useResume} from "@/providers/resume-provider";
import {EducationProps} from "@/types";


const Education = () => {
    const {state} = useResume()

    const data: EducationProps[] = state?.education

    return (
        <div>
            <Title title={"Education"}/>
            <div className={'flex items-start flex-col justify-start gap-2'}>
                {data.map((item) => (
                    <div key={item.id}>
                        <p className={'text-xl font-semibold'}>{item.institute}</p>
                        <p>{item.degree}</p>
                        <p className={'text-sm font-serif'}>{item.academic_year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;