import ResumeHeader from "@/app/_components/resume-header";
import Language from "@/app/_components/language";
import Education from "@/app/_components/education";
import Skills from "@/app/_components/skills";
import { skills} from "@/lib/mockData";
import Experience from "@/app/_components/experience";
import Projects from "@/app/_components/projects";
import {useResume} from "@/providers/resume-provider";

const ResumeBody = () => {
    const {state} = useResume()

    return (
        <div className={'p-8 mb-5 mt-2 print:p-0 print:px-4 print:mb-0'}>
            <ResumeHeader
                {...state.header}
            />
            <Experience/>
            <Skills skillData={skills} />
            <Projects/>
            <Education/>
            <Language/>
        </div>

    );
};

export default ResumeBody;