"use client";

import {createContext, useContext,  useReducer, Dispatch} from "react";
import {HeaderProps} from "@/types";

const ResumeContext = createContext({
    state: {} as any,
    dispatch: {} as Dispatch<any>
});

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children } : {
    children: React.ReactNode
}) => {

    const initialState: {
        header: HeaderProps
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
        }

    }

    const reducer = (state: {}, action: any) => {
        switch (action.type) {
            case "SET_HEADER":
                return {
                    ...state,
                    header: action.payload
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