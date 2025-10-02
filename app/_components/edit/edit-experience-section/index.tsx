import React, { Dispatch } from "react";
import { useResume } from "@/providers/resume-provider";
import { ExperienceProps } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

type ExperienceItemProps = {
  title: string;
  item_name: string;
  placeholder: string;
  value: string;
  data: ExperienceProps[];
  exp: ExperienceProps;
  dispatch: Dispatch<any>;
};

const ExperienceItem = ({
  title,
  item_name,
  placeholder,
  value,
  data,
  exp,
  dispatch,
}: ExperienceItemProps) => {
  return (
    <div
      className={
        "font-medium flex flex-col items-start text-sm gap-2 w-full mb-2"
      }
    >
      {title}
      <Input
        className={"w-full"}
        name={item_name}
        placeholder={placeholder}
        value={value}
        onChange={e =>
          dispatch({
            type: "SET_EXPERIENCE",
            payload: data.map(i =>
              i.id === exp.id
                ? {
                    ...i,
                    [item_name]: e.target.value,
                  }
                : i
            ),
          })
        }
      />
    </div>
  );
};

const EditExperienceSection = () => {
  const { state, dispatch } = useResume();
  const experience: ExperienceProps[] = state.experience;

  const handleAddNewExperience = () => {
    dispatch({
      type: "SET_EXPERIENCE",
      payload: [
        ...experience,
        {
          id: experience.length + 1,
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    });
  };
  const handleRemoveExperience = (id: number) => {
    if (experience.length === 1) {
      return dispatch({
        type: "SET_EXPERIENCE",
        payload: [
          {
            id: 1,
            company: "Google",
            role: "Software Engineer",
            startDate: "",
            endDate: "",
            location: "Singapore",
            description: "",
          },
        ],
      });
    }
    dispatch({
      type: "SET_EXPERIENCE",
      payload: experience.filter(item => item.id !== id),
    });
  };
  return (
    <div
      className={
        "border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3 bg-orange-200"
      }
    >
      <div
        className={`
                text-lg font-semibold leading-none tracking-tight my-2 w-full text-gray-700
            `}
      >
        Edit Experience
      </div>

      <div className={"flex flex-col gap-2 justify-start items-start w-full"}>
        {experience.map(exp => (
          <Card key={exp.id} className={"w-full"}>
            <CardHeader>
              <CardTitle
                className={"w-full flex items-center gap-2 justify-between"}
              >
                {exp.company}
                <Button
                  onClick={() => handleRemoveExperience(exp.id)}
                  variant="destructive"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-destructive/90"
                >
                  <X className="h-5 w-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent
              className={"flex flex-col gap-2 items-start justify-start"}
            >
              <div className={"flex w-full gap-2"}>
                <ExperienceItem
                  title={"Enter Company Name"}
                  item_name={"company"}
                  placeholder={"e.g. 'Google'"}
                  value={exp.company}
                  data={experience}
                  exp={exp}
                  dispatch={dispatch}
                />
                <ExperienceItem
                  title={"Enter Your Role"}
                  item_name={"role"}
                  placeholder={"e.g. 'Software Engineer'"}
                  value={exp.role}
                  data={experience}
                  exp={exp}
                  dispatch={dispatch}
                />
              </div>
              <div className={"flex w-full gap-2"}>
                <ExperienceItem
                  title={"Start Date"}
                  item_name={"startDate"}
                  placeholder={"e.g. 'Dec 2022'"}
                  value={exp.startDate}
                  data={experience}
                  exp={exp}
                  dispatch={dispatch}
                />
                <ExperienceItem
                  title={"End Date"}
                  item_name={"endDate"}
                  placeholder={"e.g. 'July 2023'"}
                  value={exp.endDate}
                  data={experience}
                  exp={exp}
                  dispatch={dispatch}
                />
              </div>

              <ExperienceItem
                title={"Enter Location"}
                item_name={"location"}
                placeholder={"e.g. 'London, UK'"}
                value={exp.location}
                data={experience}
                exp={exp}
                dispatch={dispatch}
              />

              <div
                className={
                  "font-medium flex flex-col items-start text-sm gap-2 w-full"
                }
              >
                Enter Description
                <Textarea
                  className={"w-full"}
                  name={"description"}
                  placeholder={
                    "e.g. 'Developed web application using Next.js, React.js and MongoDB. Implemented functionalities and REST APIs for the web application using Node.js and Express.js. Implemented authentication and authorization using JWT. Implemented payment gateway using Stripe.'"
                  }
                  value={exp.description}
                  onChange={e =>
                    dispatch({
                      type: "SET_EXPERIENCE",
                      payload: experience.map(i =>
                        i.id === exp.id
                          ? {
                              ...i,
                              description: e.target.value,
                            }
                          : i
                      ),
                    })
                  }
                ></Textarea>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button onClick={handleAddNewExperience}>Add New Experience</Button>
      </div>
    </div>
  );
};

export default EditExperienceSection;
