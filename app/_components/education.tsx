import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Title} from "@/components/title";

type EducationProps = {
    data: {
        id: number
        institute: string
        degree: string
        academic_year: string
    }[]
}

const Education = ({data}: EducationProps) => {
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