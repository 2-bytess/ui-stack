import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import Linkk from "next/link";

interface Project {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  links: {
    github: string;
    live: string;
  };
}

interface CardComponentProps {
  projects: Project[];
}

const CardComponent: React.FC<CardComponentProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          isFooterBlurred
          className="aspect-video md:hover:shadow-xl md:hover:scale-[102%] transition duration-300 my-5 md:mx-5 w-96 col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-purple-600 font-bold">{project.author}</p>
          </CardHeader>
          <Image
            removeWrapper
            alt={project.title}
            className="z-0 w-full h-full object-cover"
            src={`/projects/${project.image}`}
          />
          <CardFooter className="absolute dark:bg-black/50 bg-black/40 bottom-0 z-10 border-t-1 border-black/10 dark:border-black/10">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="font-semibold text-lg tracking-wide text-white">
                  {project.title}
                </p>
                <p className="text-tiny text-white/60">{project.description}</p>
              </div>
            </div>
            <div className="ml-2 text-white flex space-x-3">
              <Linkk href={project.links.github} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="hover:text-purple-400 transition duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Linkk>
              <Linkk href={project.links.live} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="hover:text-purple-400 transition duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Linkk>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
