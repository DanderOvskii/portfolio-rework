export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/utils/auth";
import { ProjectFormData } from "@/types";
import {getProjectById , deleteProject} from "@/db/service/projectService";
function parseId(id: string) {
  const numberId = Number(id);
  return Number.isInteger(numberId) && numberId > 0 ? numberId : null;
}
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
        const projectId = parseId(id);
    if (!projectId) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const project = await getProjectById(projectId);
    console.log("project", project);
    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message || "Failed to fetch project" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    await requireAdmin(request);
    const id = Number(params.id);
    if (!id) {
      return NextResponse.json({ message: "missing id" }, { status: 400 });
    }

    const body = await request.json();
    const {
      name,
      description,
      projectDate,
      languages,
      website = undefined,
      image = undefined,
    } = body || {};

    const data: any = {};
    if (name !== undefined) data.name = name;
    if (description !== undefined) data.description = description;
    if (projectDate !== undefined) data.projectDate = projectDate ? new Date(projectDate) : null;
    if (languages !== undefined) data.languages = languages;
    if (website !== undefined) data.website = website;
    if (image !== undefined) data.image = image;


    const updated = await prisma.project.update({
      where: { id },
      data,
    });


    return NextResponse.json(updated, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message || "Failed to edit project" }, { status: 500 });
 }


}

export async function DELETE(
  request:Request,
  { params }: { params: { id: string } }){
  try{
    await requireAdmin(request);
    const { id } = await params;
    const projectId = parseId(id);
    if (!projectId) {
      return NextResponse.json({ message: "missing id" }, { status: 400 });
    }
    const deletedProject = await deleteProject(projectId);
    return NextResponse.json( deletedProject , { status: 200 });
  }
  catch (err: any) {
    const message = err?.message || "Failed to delete project";
    const status = message.includes("Record to delete does not exist") ? 404 : 500;
    return NextResponse.json({ message }, { status });
  }
}