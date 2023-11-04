import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Experience, experiences} from "@/lib/mockData";
import {Title} from "@/components/title";

const Experience = ({exprData} : {
    exprData: Experience[]
}) => {
    return (
        <div>
            <Title title={"Experience"}/>
            <div className={'flex flex-col justify-start gap-2'}>
                {exprData.map(ex => <div key={ex.id}>
                    <div className={'flex justify-between items-center font-semibold'}>
                        <div>
                            <p className={'text-[16px]'}>{ex.company}</p>
                            <p className={'text-[12px]'}>{ex.role}</p>
                        </div>
                        <div className={'flex flex-col justify-end items-end'}>
                            <p className={'text-[14px]'}>{ex.location}</p>
                            <p className={'italic text-[12px]'}>{ex.startDate} - {ex.endDate}</p>
                        </div>
                    </div>
                        <p className={'text-justify font-medium text-sm'}>
                            {ex.description}
                        </p>

                </div>)}
            </div>
        </div>
    );
};

export default Experience;