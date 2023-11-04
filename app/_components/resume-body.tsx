import React from 'react';
import ResumeHeader from "@/app/_components/resume-header";
import Language from "@/app/_components/language";
import Education from "@/app/_components/education";
import Skills from "@/app/_components/skills";
import {experiences, projects, skills} from "@/lib/mockData";
import Experience from "@/app/_components/experience";
import Projects from "@/app/_components/projects";

const ResumeBody = () => {

    return (
        <div className={'p-8 my-5 print:p-0 print:px-8 print:my-0'}>
            <ResumeHeader
                name={'Tajwar Saiyeed Abid'}
                role={'Full Stack Developer'}
                location={'Chittagong, Bangladesh'}
                phone={'(+88) 01853-600515'}
                email={"tajwarsaiyeed15@gmail.com"}
                github={"https://github.com/TajwarSaiyeed"}
                linkedin={"https://www.linkedin.com/in/tajwarsaiyeedabid"}
                portfolio={"https://portfolio-tsa.vercel.app/home"}
            />
            <Experience exprData={experiences} />
            <Skills skillData={skills} />
            <Projects projectData={projects} />
            <Education
                data={[
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
                ]}
            />
            <Language
                data={[
                    {
                        id: 1,
                        name: 'Bangla',
                        level: 'Native'
                    },
                    {
                        id: 2,
                        name: 'English',
                        level: 'Fluent'
                    }
                ]}
            />
        </div>

    );
};

export default ResumeBody;