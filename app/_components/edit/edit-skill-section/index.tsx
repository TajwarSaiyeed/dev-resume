import React, {Dispatch} from 'react';
import {useResume} from "@/providers/resume-provider";
import { Skill} from "@/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {XCircle} from "lucide-react";
import {Input} from "@/components/ui/input";

type SkillItemProps = {
    title: string,
    item_name: string,
    placeholder: string,
    value: string,
    data: Skill[],
    sk: Skill,
    dispatch: Dispatch<any>
}


const EditSkillItem = ({title, item_name, placeholder, data, value, sk, dispatch}:SkillItemProps ) => {
    return <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full mb-2"}>
        {title}
        <Input
            className={'w-full'}
            name={item_name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => dispatch({
                type: 'SET_SKILL',
                payload: data.map((p) => p.id === sk.id ? {
                    ...p,
                    [item_name]: e.target.value
                } : p)
            })}
        />
    </div>
}

const EditSkillSection = () => {
    const {state, dispatch} = useResume()
    const skills: Skill[] = state.skills;

    const handleAddNewSkillData = () => {
        dispatch({
            type: "SET_SKILL",
            payload: [
                ...skills,
                {
                    id: skills.length + 1,
                    name: "Technology Demo",
                    value: "Next.js, React.js, test1"
                }
            ]
        })
    }

    const handleRemoveSkill = (id: number) => {
        if (skills.length === 1) {
            return dispatch({
                type: 'SET_SKILL',
                payload: [
                    {
                        id: 1,
                        name: "Technologies",
                        value: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
                    }
                ]
            })
        }
        dispatch({
            type: 'SET_SKILL',
            payload: skills.filter((item) => item.id !== id)
        })
    }

    return (
        <div className={'border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3 bg-green-200'}>
            <div className={`
                text-lg font-semibold leading-none tracking-tight my-2 w-full text-gray-700
            `}>
                Edit Skills
            </div>
            <div className={'flex flex-col gap-2 justify-start items-start w-full'}>
                {
                    skills.map((sk) => (
                        <Card key={sk.id} className={'w-full'}>
                            <CardHeader>
                                <CardTitle className={'w-full flex items-center gap-2 justify-between'}>
                                    {sk.name}
                                    <Button onClick={() => handleRemoveSkill(sk.id)} variant="destructive" className={'p-1'} size="icon" asChild>
                                        <XCircle className="h-6 w-6"/>
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={'flex flex-col gap-2 items-start justify-start'}>
                                <EditSkillItem
                                    title={"Enter Item Name"}
                                    item_name={'name'}
                                    placeholder={"e.g. 'Technology, Language, Tools, etc.'"}
                                    value={sk.name}
                                    data={skills}
                                    sk={sk}
                                    dispatch={dispatch}
                                />
                                <EditSkillItem
                                    title={"Enter Item value"}
                                    item_name={'value'}
                                    placeholder={"e.g. 'Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, etc.'"}
                                    value={sk.value}
                                    data={skills}
                                    sk={sk}
                                    dispatch={dispatch}
                                />
                            </CardContent>
                        </Card>
                    ))}

            </div>
            <Button
                onClick={handleAddNewSkillData}
            >
                Add New Skill Item
            </Button>
        </div>
    );
};

export default EditSkillSection;