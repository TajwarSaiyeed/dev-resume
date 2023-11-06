import {Input} from "@/components/ui/input";
import {useResume} from "@/providers/resume-provider";

const EditHeaderSection = () => {

    const {state, dispatch} = useResume()

    return (
        <div className={'border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3'}>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Enter Name
                <Input
                    className={'w-full'}
                    name={'name'}
                    placeholder={"e.g. 'Tajwar Saiyeed Abid'"}
                    value={state?.header?.name}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            name: e.target.value
                        }
                    }) }
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Role
                <Input
                    className={'w-full'}
                    name={'role'}
                    placeholder={"e.g. 'Full Stack developer'"}
                    value={state?.header?.role}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            role: e.target.value
                        }
                    }) }
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Location
                <Input
                    className={'w-full'}
                    name={'location'}
                    placeholder={"e.g. 'Chittagong, Bangladesh'"}
                    value={state?.header?.location}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            location: e.target.value
                        }
                    })}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Phone
                <Input
                    className={'w-full'}
                    name={'Phone'}
                    placeholder={"e.g. '(+880) 12345-67890'"}
                    value={state?.header?.phone}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            phone: e.target.value
                        }
                    })}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Email
                <Input
                    className={'w-full'}
                    name={'email'}
                    placeholder={"e.g. 'test@test.com'"}
                    value={state?.header?.email}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            email: e.target.value
                        }
                    })}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Github Link
                <Input
                    className={'w-full'}
                    name={'github'}
                    placeholder={"e.g. 'https://github.com/tajwarsaiyeed'"}
                    value={state?.header?.github}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            github: e.target.value
                        }
                    })}
                />
            </div>
            <div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
                Linkedin Profile
                <Input
                    className={'w-full'}
                    name={'linkedin'}
                    placeholder={"e.g. 'https://www.linkedin.com/in/tajwarsaiyeedabid'"}
                    value={state?.header?.linkedin}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            linkedin: e.target.value
                        }
                    })}
                />
            </div><div className={"font-medium flex flex-col items-start text-sm gap-2 w-full"}>
            Portfolio
                <Input
                    className={'w-full'}
                    name={'portfolio'}
                    placeholder={"e.g. 'https://portfolio-tsa.vercel.app/home'"}
                    value={state?.header?.portfolio}
                    onChange={(e) => dispatch({
                        type: 'SET_HEADER',
                        payload: {
                            ...state.header,
                            portfolio: e.target.value
                        }
                    })}
                />
            </div>

        </div>
    );
};

export default EditHeaderSection;