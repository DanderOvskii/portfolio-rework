import { db } from '@/db'
import { projects } from '@/db/schema'
import { ProjectFormData, ProjectPreView } from '@/types'
import { eq } from 'drizzle-orm'

export async function createProject (data: ProjectFormData) {
  const [project] = await db
    .insert(projects)
    .values({
      name: data.name,
      description: data.description,
      projectDate: new Date(data.projectDate),
      languages: data.languages,
      image: data.image,
      website: data.website
    })
    .returning()

  return project
}

export async function getAllProjects(): Promise<ProjectPreView[]>{
  const projectsList = await db
  .select({
    id:projects.id, 
    name:projects.name,
    image:projects.image
  })
  .from(projects);
  return projectsList;
}

export async function getProjectById(id: number) {
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, Number(id)))
    .limit(1);

  return project ?? null;
}

export async function deleteProject(id:number){
  const deleteProject = await db
    .delete(projects)
    .where(eq(projects.id, Number(id)))
    return(deleteProject)

}