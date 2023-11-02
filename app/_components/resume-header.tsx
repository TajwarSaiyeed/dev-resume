import React from 'react';

type ResumeHeaderProps = {
    name: string
    role: string
    location: string
    phone: string
    email: string
    portfolio: string
    linkedin: string
    github: string
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
                          name,
                          role, location, phone, email, portfolio, linkedin, github
                      }) => {
    return (
        <div>
            <h1 className={'uppercase text-4xl font-semibold'}>{name}</h1>
            <p className={'font-bold my-2'}>
                {role}
            </p>
            <div className={'flex items-center justify-between text-sm font-medium'}>
                <span>{location}</span>
                <span>{phone}</span>
                <a
                    className={'text-blue-400 hover:text-blue-600 underline'}
                    href={`mailto:${email}`} target="_blank">{email}</a>
                <div className={'flex gap-2 items-center'}>
                    <a className={'underline text-blue-400 hover:text-blue-600'} href={github} target="_blank" >
                        Github
                    </a>
                    <a className={'underline text-blue-400 hover:text-blue-600'} href={linkedin} target="_blank">
                        Linkedin

                    </a>
                    <a className={'underline text-blue-400 hover:text-blue-600'} href={portfolio} target="_blank">
                        Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResumeHeader;