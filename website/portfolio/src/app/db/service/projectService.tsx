import { db } from "@/db";
import { projects } from "@/db/schema";
import { ProjectFormData } from "@/types";
import { eq } from "drizzle-orm";



export async function createProject(data: ProjectFormData) {
  const [project] = await db
    .insert(projects)
    .values({
      name: data.name,
      description: data.description,
      projectDate: new Date(data.projectDate),
      languages: data.languages,
      image: data.image,
      website:data.website,
    })
    .returning();

  return project;
}