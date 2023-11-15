import React from 'react';
import {useResume} from "@/providers/resume-provider";
import {LanguageProps} from "@/types";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

const EditLanguageSection = () => {
    const {state, dispatch} = useResume()
    const data: LanguageProps[] = state?.languages


    const handleAddNewLanguage = () => {
        dispatch({
            type: 'SET_LANGUAGE',
            payload: [
                ...data,
                {
                    id: data.length + 1,
                    name: '',
                    level: ''
                }
            ]
        })
    }
    const handleRemoveLanguage = (id: number) => {
        if (data.length === 1) {
            return dispatch({
                type: 'SET_LANGUAGE',
                payload: [
                    {
                        id: 1,
                        name: 'English',
                        level: 'Fluent'
                    }
                ]
            })
        }
        dispatch({
            type: 'SET_LANGUAGE',
            payload: data.filter((item) => item.id !== id)
        })
    }

    return (
        <div className={'border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3 bg-emerald-200'}>
            <div className={`
                text-lg font-semibold leading-none tracking-tight my-2 w-full text-gray-700
            `}>
                Edit Languages
            </div>
            <div className={'flex flex-col justify-start items-start w-full gap-2'}>
                {data?.map((item) => (
                    <Card key={item.id} className={'w-full'}>
                        <CardHeader><CardTitle>{item.name}</CardTitle></CardHeader>
                        <CardContent className={'flex flex-col gap-2 items-start justify-start'}>
                            <div className={'w-full'}>
                                <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full mb-2"}>
                                    Enter Language
                                    <Input
                                        className={'w-full'}
                                        name={'name'}
                                        placeholder={"e.g. 'English'"}
                                        value={item.name}
                                        onChange={(e) => dispatch({
                                            type: 'SET_LANGUAGE',
                                            payload: data.map((i) => i.id === item.id ? {
                                                ...i,
                                                name: e.target.value
                                            } : i)
                                        })}
                                    />
                                </div>
                                <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                                    Enter Level
                                    <Input
                                        className={'w-full'}
                                        name={'level'}
                                        placeholder={"e.g. 'Fluent'"}
                                        value={item.level}
                                        onChange={(e) => dispatch({
                                            type: 'SET_LANGUAGE',
                                            payload: data.map((i) => i.id === item.id ? {
                                                ...i,
                                                level: e.target.value
                                            } : i)
                                        })}
                                    />
                                </div>
                            </div>

                            <Button
                                onClick={() => handleRemoveLanguage(item.id)}
                                variant={'destructive'}
                                size={'sm'}
                            >
                                Remove
                            </Button>
                        </CardContent>
                    </Card>
                ))}
                <Button
                    onClick={handleAddNewLanguage}
                >
                    Add Language
                </Button>
            </div>
        </div>
    );
};

export default EditLanguageSection;