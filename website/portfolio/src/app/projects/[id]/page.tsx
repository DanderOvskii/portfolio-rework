"use client"

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProject } from "@/db/apiCalls/projectApiCalls";
import { Project } from "@/types";
import SvgBackComp from "@/components/svgs/svgBackComp";


const ProjectPage = () => {
    const params = useParams<{ id: string }>();
    const id = params.id as string;
    console.log("id", id);
    const [project, setProject] = useState<Project>()
    const [error, setError] = useState<string | null>(null)
    console.log("project", project);
    useEffect(() => {
        if (!id) return;
        getProject(id).then(setProject).catch((e) => setError(e?.message || "faild to load project"))

    }, [id]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                {error}
            </div>
        )
    }


    return (
        <>
            <div className="md:w-[85%] w-full h-screen  bg-ds-black left-0 float-left">
                <img className="h-full w-full object-cover" src={project?.image||''} alt={project?.name} />
            </div>

            <div className="right-0 md:w-1/5 w-full pt-8 pl-8 md:h-screen h-2/5 fixed float-right rounded-tl-[50px]  md:rounded-bl-[50px] bottom-0 rounded-bl-[0px] md:rounded-tr-[0px] rounded-tr-[50px] bg-ds-blue text-just-white">
                <div className="flex flex-col">
                    <a className="w-12.5" href="/#projects">
                       <SvgBackComp className="social-button " />
                    </a>
                    <p className="mr-1/10 subtitle">{project?.name}</p>
                    <p className="font-play text-text">{project?.projectDate
                        ? new Date(project.projectDate).toLocaleDateString("en-GB")
                        : ""}</p>
                    <p className="font-play text-text">{project?.languages}</p>
                    <div className="w-3/4 h-2 bg-ds-yellow mt-2 mb-2 rounded-[20px] "></div>
                    <p className="font-play text-text">{project?.description}</p>
                    <a className=" md:bottom-12.5 top-8 md:top-auto md:right-auto right-8 absolute" href={project?.website || ""} target="_blank">
                        <button className="button48" role="button"><span className="text">Go to page</span></button>
                    </a>

                </div>
            </div>
        </>
    );
}
export default ProjectPage;