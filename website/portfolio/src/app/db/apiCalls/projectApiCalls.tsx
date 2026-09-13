import { Project, ProjectFormData } from "@/types";


export async function addProject(project: ProjectFormData) {
  const response = await fetch("/api/v1/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to add project");
  }

  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch("/api/v1/projects",{cache:"no-store"});
  if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || "Failed to get projects");
  return await response.json();
}

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`/api/v1/projects/${id}`,{cache:"no-store"});
  if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || "Failed to get project");
  return await response.json();
}

export async function editProject(project: ProjectFormData, id: string) {
  const response = await fetch(`/api/v1/projects/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to edit project");
  }

  return response.json();
}

export async function deleteProject(id:number){
  const response = await fetch(`/api/v1/projects/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error((await response.json().catch(() => ({}))).message || "Failed to delete project");
  return await response.json() as Promise<{ deleted: boolean }>;
}