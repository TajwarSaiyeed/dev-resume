"use client";

import {createContext, useContext, useReducer, Dispatch} from "react";
import {EducationProps, ExperienceProps, HeaderProps, LanguageProps, Project, Skill} from "@/types";

const ResumeContext = createContext({
    state: {} as any,
    dispatch: {} as Dispatch<any>
});

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({children}: {
    children: React.ReactNode
}) => {

    const initialState: {
        header: HeaderProps,
        experience: ExperienceProps[],
        skills: Skill[],
        projects: Project[],
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
        experience: [
            {
                id: 1,
                company: "Decrypton Private Limited",
                role: "Full Stack Developer - Remote",
                location: "Lucknow, India",
                startDate: "Dec 2022",
                endDate: "July 2023",
                description: "Developed web application using Next.js, React.js and MongoDB. Implemented functionalities and REST APIs for the web application using Node.js and Express.js. Implemented authentication and authorization using JWT. Implemented payment gateway using Stripe.",

            }, {
                id: 2,
                company: "Eduvanz Financing Private Limited",
                role: "Full Stack Developer - Remote",
                location: "Lucknow, India",
                startDate: "Dec 2022",
                endDate: "July 2023",
                description: "Developed web application using Next.js, React.js and MongoDB. Implemented functionalities and REST APIs for the web application using Node.js and Express.js. Implemented authentication and authorization using JWT. Implemented payment gateway using Stripe." +
                    "Developed web application using Next.js, React.js and MongoDB. Implemented functionalities and REST APIs for the web application using Node.js and Express.js. Implemented authentication and authorization using JWT. Implemented payment gateway using Stripe.",
            },
        ],
        skills: [
            {
                id: 1,
                name: "Language",
                value: "JavaScript, TypeScript, Node.js"
            },
            {
                id: 2,
                name: "Frameworks",
                value: "Next.js, Express.js"
            },
            {
                id: 3,
                name: "Libraries",
                value: "React.js, DaisyUI, TansStack Query"
            }
        ],
        projects: [
            {
                id: 1,
                name: "Gym Management System",
                live: "https://gym-management-system-abid.vercel.app/about-the-app",
                github: "https://github.com/TajwarSaiyeed/gym-management-system",
                description: "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
                technologies: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
            }, {
                id: 2,
                name: "Learning Management System",
                live: "https://gym-management-system-abid.vercel.app/about-the-app",
                github: "https://github.com/TajwarSaiyeed/gym-management-system",
                description: "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
                technologies: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
            }, {
                id: 3,
                name: "School Management System",
                live: "https://gym-management-system-abid.vercel.app/about-the-app",
                github: "https://github.com/TajwarSaiyeed/gym-management-system",
                description: "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
                technologies: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
            }, {
                id: 4,
                name: "Unsplash Photo Gallery",
                live: "https://gym-management-system-abid.vercel.app/about-the-app",
                github: "https://github.com/TajwarSaiyeed/gym-management-system",
                description: "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
                technologies: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
            },
        ],
        education: [
            {
                id: 1,
                institute: "National University",
                degree: "Bachelor of English",
                academic_year: "2021-running"
            }, {
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
            case "SET_EXPERIENCE":
                return {
                    ...state,
                    experience: action.payload
                }
            case "SET_SKILL":
                return {
                    ...state,
                    skills: action.payload
                }
            case "SET_PROJECT":
                return {
                    ...state,
                    projects: action.payload
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