"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Projects() {
  const allProjects = [
    {
      title: "Music Course",
      description:
        "Platform offering music courses designed to transform your musical journey, catering to all skill level musicians.",
      link: "https://musicnextjs-nu.vercel.app/",
      category: ["Learning", "Nextjs"],
      image: "/musicnextjs.png",
    },
    {
      title: "Deadpool World",
      description:
        "Deadpool World is an action-packed universe of the iconic character, showcasing his unique personality and adventures.",
      link: "https://deadpool-taupe.vercel.app/",
      category: ["Learning", "React.JS"],
      image: "/deadpool.png",
    },
    {
      title: "Parallax Transition",
      description:
        "Learning project focused on implementing smooth scroll transitions to enhance user experience and visual storytelling on web pages.",
      link: "https://parallax-transition.vercel.app/",
      category: ["Learning"],
      image: "/parallax-transition.png",
    },
    {
      title: "To-Do List",
      description:
        "Learning project focused on developing a to-do list application using React and CSS.",
      link: "https://to-do-list-five-henna.vercel.app/",
      category: ["Learning"],
      image: "/to-do-list.png",
    },
    {
      title: "3D Portfolio",
      description:
        "Learning project that showcases interactive 3D models within a React application, enhancing user engagement and visual appeal.",
      link: "https://3-d-portfolio-tawny-two.vercel.app/",
      category: ["Learning"],
      image: "/3dportfolio.png",
    },
    {
      title: "Portfolio",
      description:
        "Learning project built with React and SASS, showcasing my skills and projects in a visually appealing and responsive layout.",
      link: "https://portfolio-pi-seven-22.vercel.app/",
      category: ["Others", "React.JS"],
      image: "/sassportfolio.png",
    },
    {
      title: "Secure Password Storage",
      description:
        "Minor college project demonstrating how passwords are hashed and securely stored in a database, emphasizing best practices in password management.",
      link: "https://shadow-mo.github.io/Secure-Password-Storage/register.html",
      category: ["Others"],
      image: "/securepasswordstorage.png",
    },
    {
      title: "BoomPanda Admin Dashboard",
      description:
        "Developed Boompanda Admin Interface using MERN stack and Nextjs. Engineered RESTful APIs for CRUD operations, ensuring seamless data management within the application.",
      link: "",
      category: ["BoomPanda"],
      image: "/boompanda-admin-dashboard.jpg",
    },
    {
      title: "Focus Realm",
      description:
        "Comprehensive educational management system for students, teachers, and administrators, featuring study sessions, assignment management, performance tracking, leave management, and real-time communication.",
      link: "",
      category: ["BoomPanda"],
      image: "/focus-realm.jpg",
    },
    {
      title: "Create React Tailwind App",
      description:
        "A custom NPM package that streamlines the process of creating new React applications with Tailwind CSS integration, making project setup faster and more efficient.",
      link: "https://www.npmjs.com/package/@mouneshazonde/create-react-tailwind-app",
      category: ["Others"],
      image: "/npm-package.jpg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.category.includes(activeCategory)
        );

  const categories = ["All", "React.JS", "Learning", "BoomPanda", "Others"];

  return (
    <div id="projects" className="bg-primary-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-logo-primary">
          My Work
        </h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-lg font-semibold ${
                activeCategory === category
                  ? "text-logo-primary border-b-2 border-logo-primary"
                  : "text-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative group rounded-[22px] overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 sm:h-56 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-base sm:text-xl font-bold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <Button variant={"default"}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-bold text-white bg-logo-primary rounded-md"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
