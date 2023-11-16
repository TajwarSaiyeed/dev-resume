export type HeaderProps = {
    /**
     * name of the person
     * @example John Doe
     */
    name: string,
    /**
     * role of the person
     * @example Software Engineer
     */
    role: string,
    /**
     * location of the person
     * @example New York, NY
     */
    location: string,
    /**
     * phone number of the person
     * @example +1 123 456 7890
     */
    phone: string,
    /**
     * email address of the person
     * @example test@test.com
     */
    email: string,
    /**
     * github username of the person
     * @example https://github.com/tajwarsaiyeed/
     */
    github: string,
    /**
     * linkedin username of the person
     * @example https://www.linkedin.com/in/tajwarsaiyeedabid/
     */
    linkedin: string,
    /**
     * portfolio website of the person
     * https://portfolio-tsa.vercel.app/home
     */
    portfolio: string
}


export type ExperienceProps = {
    /**
     * auto-incremented number
     */
    id: number
    /**
     * name of the company
     * @example Google
     */
    company: string
    /**
     * role of the person
     * @example Software Engineer
     */
    role: string
    /**
     * location of the company
     * @example New York, NY
     */
    location: string
    /**
     * start date of the job
     * @example July 2020
     */
    startDate: string
    /**
     * end date of the job
     * @example July 2021
     */
    endDate: string
    /**
     * description of the job
     * @example
     * - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     */
    description: string
}

export type Skill = {
    /**
     * auto-incremented number
     */
    id: number
    /**
     * name of sections
     * @example technologies, library, tools, frameworks
     */
    name: string;
    /**
     * value for the sections
     * @example
     * Language : JavaScript, TypeScript, Node.js
     * Frameworks : Next.js, Express.js
     * Libraries : React.js, DaisyUI, TansStack Query
     */
    value: string
}




export type Project = {
    /**
     * auto-incremented number
     */
    id: number
    /**
     * name of the project
     * @example Gym Management System
     */
    name: string
    /**
     * live link of the project
     * @example https://gym-management-system-abid.vercel.app/about-the-app
     */
    live: string
    /**
     * github link of the project
     * @example https://github.com/TajwarSaiyeed/gym-management-system
     */
    github: string
    /**
     * description of the project
     * @example The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators, trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.
     */
    description: string
    /**
     * technologies used in the project
     * @example Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary
     */
    technologies: string
}

export type EducationProps = {
    /**
     * id of the education
     * @example auto-incremented number
     */
    id: number
    /**
     * name of the institute
     * @example University of ... or ... College
     */
    institute: string
    /**
     * name of the course
     * @example Bachelor of Science
     */
    degree: string
    /**
     * start date of the course
     * @example 2018-2021 or 2021-running
     */
    academic_year: string
}

export type LanguageProps = {
    /**
     * id of the language
     * @example auto-incremented number
     */
    id: number,
    /**
     * name of the language
     * @example English
     */
    name: string,
    /**
     * level of the language
     * @example Native
     */
    level: string
}