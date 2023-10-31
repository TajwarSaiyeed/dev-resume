import React from 'react';
import ResumeHeader from "@/app/_components/resume-header";
import {Separator} from "@/components/ui/separator";
import Language from "@/app/_components/language";
import Education from "@/app/_components/education";

const ResumeBody = () => {
    return (
        <div className={'border rounded-lg h-screen p-8 my-5'}>
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
            {/*<Experience />*/}
            {/*<Skills />*/}
            {/*<Projects />*/}
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