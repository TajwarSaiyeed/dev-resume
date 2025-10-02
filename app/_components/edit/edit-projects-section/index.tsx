import React, { Dispatch } from "react";
import { useResume } from "@/providers/resume-provider";
import { Project } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ProjectItemProps = {
  title: string;
  item_name: string;
  placeholder: string;
  value: string;
  data: Project[];
  pro: Project;
  dispatch: Dispatch<any>;
};

const ProjectItem = ({
  title,
  item_name,
  placeholder,
  value,
  data,
  pro,
  dispatch,
}: ProjectItemProps) => {
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
            type: "SET_PROJECT",
            payload: data.map(p =>
              p.id === pro.id
                ? {
                    ...p,
                    [item_name]: e.target.value,
                  }
                : p
            ),
          })
        }
      />
    </div>
  );
};

const EditProjectsSection = () => {
  const { state, dispatch } = useResume();
  const projects: Project[] = state.projects;

  const handleAddNewProject = () => {
    dispatch({
      type: "SET_PROJECT",
      payload: [
        ...projects,
        {
          id: projects.length + 1,
          name: "Gym Management System",
          live: "https://gym-management-system-abid.vercel.app/about-the-app",
          github: "https://github.com/TajwarSaiyeed/gym-management-system",
          description:
            "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
          technologies:
            "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary",
        },
      ],
    });
  };
  const handleRemoveProject = (id: number) => {
    if (projects.length === 1) {
      return dispatch({
        type: "SET_PROJECT",
        payload: [
          {
            id: 1,
            name: "Gym Management System",
            live: "https://gym-management-system-abid.vercel.app/about-the-app",
            github: "https://github.com/TajwarSaiyeed/gym-management-system",
            description:
              "The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.",
            technologies:
              "Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary",
          },
        ],
      });
    }
    dispatch({
      type: "SET_PROJECT",
      payload: projects.filter(item => item.id !== id),
    });
  };
  return (
    <div
      className={
        "border p-3 rounded-md flex flex-wrap justify-between gap-2 my-3 bg-amber-400"
      }
    >
      <div
        className={`
                text-lg font-semibold leading-none tracking-tight my-2 w-full text-gray-700
            `}
      >
        Edit Projects
      </div>
      <div className={"flex flex-col gap-2 justify-start items-start w-full"}>
        {projects.map(pro => (
          <Card key={pro.id} className={"w-full"}>
            <CardHeader>
              <CardTitle
                className={"w-full flex items-center gap-2 justify-between"}
              >
                {pro.name}
                <Button
                  onClick={() => handleRemoveProject(pro.id)}
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
              <ProjectItem
                title={"Enter Project Name"}
                item_name={"name"}
                placeholder={"e.g. 'Gym Management System'"}
                value={pro.name}
                data={projects}
                pro={pro}
                dispatch={dispatch}
              />
              <div className={"flex gap-2 items-center w-full my-4"}>
                <ProjectItem
                  title={"Enter Live Link"}
                  item_name={"live"}
                  placeholder={
                    "e.g. 'https://gym-management-system-abid.vercel.app/about-the-app'"
                  }
                  value={pro.live}
                  data={projects}
                  pro={pro}
                  dispatch={dispatch}
                />
                <ProjectItem
                  title={"Enter GitHub Link"}
                  item_name={"github"}
                  placeholder={
                    "e.g. 'https://github.com/TajwarSaiyeed/gym-management-system'"
                  }
                  value={pro.github}
                  data={projects}
                  pro={pro}
                  dispatch={dispatch}
                />
              </div>
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
                    "e.g. 'The Gym Management System is a web application designed to facilitate the management of a fitness center or gym. It provides various features for different user roles including administrators,  trainers, and students. Attendance, payment, and workout tracking are some of the features available to users. Stripe is used for payment processing.'"
                  }
                  value={pro.description}
                  onChange={e =>
                    dispatch({
                      type: "SET_PROJECT",
                      payload: projects.map(p =>
                        p.id === pro.id
                          ? {
                              ...p,
                              description: e.target.value,
                            }
                          : p
                      ),
                    })
                  }
                ></Textarea>
              </div>
              <ProjectItem
                title={"Enter Technologies"}
                item_name={"technologies"}
                placeholder={
                  "e.g. 'Next.js, TypeScript, Prisma ORM, React-hook-form, Zustand, Stripe, Next-auth, MongoDB, Material UI, Cloudinary'"
                }
                value={pro.technologies}
                data={projects}
                pro={pro}
                dispatch={dispatch}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={handleAddNewProject}>Add New Project</Button>
    </div>
  );
};

export default EditProjectsSection;
