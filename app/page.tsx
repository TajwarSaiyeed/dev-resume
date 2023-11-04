"use client";
import {useEffect, useReducer, useState} from "react";
import Sidebar from "@/app/_components/sidebar";
import ResumeBody from "@/app/_components/resume-body";

export default function Home() {

    const [hasMounted, setHasMounted] = useState(false)

    const initialState: any = {

    }

    const reducer = (state: {}, action: any) => {
    }

    const [
        state,
        dispatch
    ] = useReducer(initialState, reducer);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }


    return (
        <>
            <Sidebar/>
            <ResumeBody/>
        </>

    )
}
