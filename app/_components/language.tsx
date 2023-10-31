import React from 'react';
import {Separator} from "@/components/ui/separator";

type LanguageProps = {
    data: {
        id: number
        name: string
        level: string
    }[]
}

const Language = ({data} : LanguageProps) => {
    return (
        <div>
            <h2 className={'text-2xl font-semibold mt-2'}>Languages:</h2>
            <Separator className={'my-2'}/>
            <div className={'flex items-center gap-2'}>
                {data.map((item) => (
                    <>
                    <p key={item.id} className={'flex justify-between gap-1 text-lg'}>
                        <span className={'font-semibold'}>{item.name} :</span>
                        <span> {item.level}</span>
                        {data.length === item.id ? '' : ','}
                    </p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Language;