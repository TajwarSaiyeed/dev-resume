import React, {Dispatch} from 'react';
import {useResume} from "@/providers/resume-provider";
import {EducationProps} from "@/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type EducationItemProps = {
    title: string,
    item_name: string,
    placeholder: string,
    value: string,
    data: EducationProps[],
    lan: EducationProps,
    dispatch: Dispatch<any>
}
const EducationItem = ({title, item_name, placeholder, value, data, lan, dispatch}: EducationItemProps) => {
    return <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full mb-2"}>
        Enter {title}
        <Input
            className={'w-full'}
            name={item_name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => dispatch({
                type: 'SET_EDUCATION',
                payload: data.map((i) => i.id === lan.id ? {
                    ...i,
                    [item_name]: e.target.value
                } : i)
            })}
        />
    </div>
}

const EditEducationSection = () => {
        const {state, dispatch} = useResume()
        const data: EducationProps[] = state?.education

        const handleAddNewInstitute = () => {
            dispatch({
                type: 'SET_EDUCATION',
                payload: [
                    ...data,
                    {
                        id: data.length + 1,
                        institute: '',
                        degree: '',
                        academic_year: ''
                    }
                ]
            })
        }

        const handleRemoveInstitute = (id: number) => {
            if (data.length === 1) {
                return dispatch({
                    type: 'SET_EDUCATION',
                    payload: [
                        {
                            id: 1,
                            institute: 'University of California',
                            degree: 'Bachelor of Science',
                            academic_year: '2022-running'
                        }
                    ]
                })

            }
            dispatch({
                type: 'SET_EDUCATION',
                payload: data.filter((item) => item.id !== id)
            })
        }

        return (
            <div className={'border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3 bg-blue-200'}>
                <div className={`
                text-lg font-semibold leading-none tracking-tight my-2 w-full text-gray-700
            `}>
                    Edit Education
                </div>
                <div className={'flex flex-col justify-start items-start w-full gap-2'}>
                    {data.map((lan) => (
                        <Card key={lan.id} className={'w-full'}>
                            <CardHeader>
                                <CardTitle>
                                    {lan.institute}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col gap-2 items-start justify-start'}>
                                <div className={'w-full'}>
                                    <EducationItem
                                        title={'Institute'}
                                        item_name={'institute'}
                                        placeholder={"e.g. 'University of California'"}
                                        value={lan.institute}
                                        data={data}
                                        lan={lan}
                                        dispatch={dispatch}
                                    />

                                    <EducationItem
                                        title={'Degree'}
                                        item_name={'degree'}
                                        placeholder={"e.g. 'Bachelor of Science'"}
                                        value={lan.degree}
                                        data={data}
                                        lan={lan}
                                        dispatch={dispatch}
                                    />

                                    <EducationItem
                                        title={'Academic Year'}
                                        item_name={'academic_year'}
                                        placeholder={"e.g. '2019-2021' or '2021-running'"}
                                        value={lan.academic_year}
                                        data={data}
                                        lan={lan}
                                        dispatch={dispatch}
                                    />

                                </div>

                                <Button
                                    onClick={() => handleRemoveInstitute(lan.id)}
                                    variant={'destructive'}
                                    size={'sm'}
                                >
                                    Remove
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                    <Button
                        onClick={handleAddNewInstitute}
                    >
                        Add Institute
                    </Button>
                </div>
            </div>
        );
    }
;

export default EditEducationSection;