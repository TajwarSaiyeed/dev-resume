"use client";
import {useEffect, useReducer, useState} from "react";
import Sidebar from "@/app/_components/sidebar";
import ResumeBody from "@/app/_components/resume-body";

export default function Home() {

    const [hasMounted, setHasMounted] = useState(false)

    const initialState: any = {
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

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    console.log(state)

    const {header} = state as any;

    console.log(header)

    return (
        <>
            <Sidebar header={header} dispatch={dispatch}/>
            <ResumeBody/>
        </>

    )
}
