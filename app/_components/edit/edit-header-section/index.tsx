import React, {Dispatch, DispatchWithoutAction} from 'react';
import {Input} from "@/components/ui/input";
import {HeaderProps} from "@/types";

const EditHeaderSection = ({headerData, dispatch} : { headerData : HeaderProps, dispatch: Dispatch<any> }) => {

    return (
        <div className={'border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3'}>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Enter Name
                <Input
                    className={'w-full'}
                    name={'name'}
                    placeholder={"e.g. 'Tajwar Saiyeed Abid'"}
                    value={headerData?.name}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...headerData,
                            name: e.target.value
                        }
                    }) }
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Role
                <Input
                    className={'w-full'}
                    name={'role'}
                    placeholder={"e.g. 'Full Stack developer'"}
                    value={headerData?.role}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...headerData,
                            role: e.target.value
                        }
                    }) }
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Location
                <Input
                    className={'w-full'}
                    name={'location'}
                    placeholder={"e.g. 'Chittagong, Bangladesh'"}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Phone
                <Input
                    className={'w-full'}
                    name={'Phone'}
                    placeholder={"e.g. '(+880) 12345-67890'"}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Email
                <Input
                    className={'w-full'}
                    name={'Phone'}
                    placeholder={"e.g. '(+880) 12345-67890'"}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>

        </div>
    );
};

export default EditHeaderSection;