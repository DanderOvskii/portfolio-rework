"use client";

import { useEffect, useState } from 'react';
import { getProjects ,deleteProject} from '@/db/apiCalls/projectApiCalls';
import Link from 'next/link';
import { ProjectPreView } from '@/types';
import { deleteImage } from '@/db/apiCalls/imageApiCalls';

const AdminPage = () => {
   const [projects, setProjects] = useState<ProjectPreView[]>([]);
   console.log("projects", projects);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    const handleDelete = async (id:number,image:string) => {
        const stringid = String(id);
        const confirmed = window.confirm("Are you sure you want to delete this?");
        if (!confirmed) return;
    
        try {
          await deleteProject(stringid);
          await deleteImage(image);
          alert("Item deleted successfully!");
          setProjects((prev) => prev.filter((project) => project.id !== id));
        } catch (err) {
          alert("Error deleting item");
          console.error(err);
        }
      };

   return (
    <div className="flex items-center justify-center min-h-screen">
           <div id="projects" className=" flex flex-col items-center justify-center ">
            <p className="title" >projects</p>
            <div className="w-full flex gap-5 flex-wrap justify-center items-center select-cont">
                <div className="group h-64 aspect-square flex justify-center items-center flex-col transition-all ease-in-out duration-300 hover:scale-110 hover:mb-[60px]">
                    <Link href={"admin/addproject"} className="h-4/5 aspect-square">
                        <div className="h-full bg-black aspect-square rounded-[20px] shadow-[0px_30px_8px_-13px_rgba(0,0,0,0.27)] transition-all ease-in-out duration-300 group-hover:shadow-[0px_45px_12px_-13px_rgba(0,0,0,0.27)]">
                            <p className="w-full h-full  flex justify-center items-center title rounded-[20px] contrast-50 grayscale transition-all ease-in-out duration-300 group-hover:contrast-100 group-hover:grayscale-0">+</p>
                        </div>
                    </Link>
                    <p className="subtitle transition-all duration-500 group-hover:text-ds-yellow">add project</p>
                </div>
                {projects && projects.map((project) => (
                    <div key={project.id} className="group h-64 aspect-square flex justify-center items-center flex-col transition-all ease-in-out duration-300 hover:scale-110 hover:mb-[60px]">
                        <button  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(project.id ,project.image||"")}>delete</button>
                        <Link href={`admin/${project.id}` || ''} className="h-4/5 aspect-square">
                            <div className="h-full aspect-square bottom-0 rounded-[20px] shadow-[0px_30px_8px_-13px_rgba(0,0,0,0.27)] transition-all ease-in-out duration-300 group-hover:shadow-[0px_45px_12px_-13px_rgba(0,0,0,0.27)]">
                                <img
                                    src={project.image || ''}
                                    alt={project.name}
                                    className="w-full h-full object-cover rounded-[20px] contrast-50 grayscale transition-all ease-in-out duration-300 group-hover:contrast-100 group-hover:grayscale-0"
                                />
                            </div>
                        </Link>
                        <p className="text-ds-white font-play text-[30px] transition-all duration-500 group-hover:text-ds-yellow">{project.name}</p>
                    </div>
                ))}

            </div>

        </div>
    </div>
  );
};

export default AdminPage;
