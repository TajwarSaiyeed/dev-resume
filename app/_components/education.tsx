import React from 'react';
import {Separator} from "@/components/ui/separator";

type EducationProps = {
    data: {
        id: number
        institute: string
        degree: string
        academic_year: string
    }[]
}

const Education = ({data} : EducationProps) => {
    return (
        <div>
            <h2 className={'text-2xl font-semibold mt-2'}>Education:</h2>
            <Separator className={'my-2'}/>
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