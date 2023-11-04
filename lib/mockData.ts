export type Skill = {
    id: number
    name: string;
    value: string
}

export type Experience = {
    id: number
    company: string
    role: string
    location: string
    startDate: string
    endDate: string
    description: string
}

export type Project = {
    id: number
    name: string
    live: string
    github: string
    description: string
    technologies: string
}

export const skills: Skill[] = [
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
]

export const experiences: Experience[] = [
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
        company: "Decrypton Private Limited",
        role: "Full Stack Developer - Remote",
        location: "Lucknow, India",
        startDate: "Dec 2022",
        endDate: "July 2023",
        description: "Developed web application using Next.js, React.js and MongoDB. Implemented functionalities and REST APIs for the web application using Node.js and Express.js. Implemented authentication and authorization using JWT. Implemented payment gateway using Stripe.",
    },

]

export const projects: Project[] = [
    {
        id: 1,
        name: "Gym Management System",
        live: "https://gym-management-system-abid.vercel.app/about-the-app",
        github: "https://github.com/TajwarSaiyeed/gym-management-system",
        description: "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
        technologies: "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary"
    }
]

