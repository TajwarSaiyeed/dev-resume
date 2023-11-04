import React from 'react';
import {Title} from "@/components/title";

type LanguageProps = {
    data: {
        id: number
        name: string
        level: string
    }[]
}

const Language = ({data}: LanguageProps) => {
    return (
        <div>
            <Title title={"Languages"}/>
            <div className={'flex items-center gap-2'}>
                {data.map((item) => (
                    <p key={item.id} className={'flex justify-between gap-1 text-lg'}>
                        <span className={'font-semibold'}>{item.name} :</span>
                        <span> {item.level}</span>
                        {data.length === item.id ? '' : ','}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Language;