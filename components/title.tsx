import {Separator} from "@/components/ui/separator";
import React from "react";

export const Title = ({title} : {title: string}) => {
    return (
        <div>
            <h2 className={'text-2xl font-semibold mt-2'}>{title}:</h2>
            <Separator className={'my-2'}/>
        </div>
    );
}