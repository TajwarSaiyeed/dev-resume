"use client";

import {createContext, useContext,  useReducer, Dispatch} from "react";
import {EducationProps, HeaderProps, LanguageProps} from "@/types";

const ResumeContext = createContext({
    state: {} as any,
    dispatch: {} as Dispatch<any>
});

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children } : {
    children: React.ReactNode
}) => {

    const initialState: {
        header: HeaderProps,
        education: EducationProps[],
        languages: LanguageProps[]
    } = {
        header: {
            name: "Tajwar Saiyeed Abid",
            role: "Full Stack Developer",
            location: "Chittagong, Bangladesh",
            phone: "(+880) 12345-67890",
            email: "test@test.com",
            github: "https://github.com/tajwarsaiyeed/",
            linkedin: "https://www.linkedin.com/in/tajwarsaiyeedabid",
            portfolio: "https://portfolio-tsa.vercel.app/home"
        },
        education:[
            {
                id: 1,
                institute: "National University",
                degree: "Bachelor of English",
                academic_year: "2021-running"
            },{
                id: 2,
                institute: "Gachhbaria Govt. College",
                degree: "Intermediate of Science",
                academic_year: "2019-2021"
            }
        ],
        languages: [
            {
                id: 1,
                name: 'English',
                level: 'Fluent'
            }
        ]

    }

    const reducer = (state: {}, action: any) => {
        switch (action.type) {
            case "SET_HEADER":
                return {
                    ...state,
                    header: action.payload
                }
            case "SET_EDUCATION":
                return {
                    ...state,
                    education: action.payload
                }
            case "SET_LANGUAGE":
                return {
                    ...state,
                    languages: action.payload
                }
            default:
                return state
        }
    }

    const [
        state,
        dispatch
    ] = useReducer(reducer, initialState);



    return (
        <ResumeContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ResumeContext.Provider>
    )
}
export default ResumeContext;