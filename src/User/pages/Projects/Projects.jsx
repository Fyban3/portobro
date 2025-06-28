import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MainHeading } from "../../components";
import ProjectCard from "./Project"; // Import your ProjectCard component
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/actions/project";
import Pagination from "@mui/material/Pagination";
import './pagination.css'

const Projects = () => {
    ////////////////////////////// VARIABLES //////////////////////////////////////
    const dispatch = useDispatch();
    const { projects } = useSelector((state) => state.project);
    const projectsPerPage = 9; // Number of projects per page
    const [currentPage, setCurrentPage] = useState(1);

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// USE EFFECTS ////////////////////////////////////
    useEffect(() => {
        dispatch(getProjects());
    }, []);

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    return (
        <motion.section
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [0, 1] }}
            transition={{ duration: .3, delayChildren: .5 }}
            name="projects"
            className="bg-white text-black py-10 px-5 rounded-xl shadow"
        >
            <div className="w-full flex justify-center">
                <MainHeading
                    forwardHeading={<span className="text-orange">Projects</span>}
                    backHeading="Projects"
                    detail="A selection of my work, focused on clean code and elegant solutions."
                    className="text-orange font-extrabold shadow-none text-center"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} className="bg-gray-100 text-gray-800 rounded-md shadow-md" />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Pagination
                    count={Math.ceil(projects.length / projectsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </div>
        </motion.section>
    );
};

export default Projects;
