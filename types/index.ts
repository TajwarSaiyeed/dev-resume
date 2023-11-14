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