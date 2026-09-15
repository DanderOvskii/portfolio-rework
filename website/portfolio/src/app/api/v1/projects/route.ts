// src/app/api/v1/projects/route.ts
export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { createProject,getAllProjects } from '@/db/service/projectService'
import { requireAdmin } from '@/utils/auth'


export async function POST (request: Request) {
  try {
    await requireAdmin(request)

    const body = await request.json()
    const {
      name,
      description,
      projectDate,
      languages,
      website = null,
      image = null
    } = body || {}

    if (!name || !description || !projectDate || !languages) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const project = await createProject({
      name,
      description,
      projectDate,
      languages,
      website,
      image
    })


    return NextResponse.json(project, { status: 201 })
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message || 'Failed to create project' },
      { status: 500 }
    )
  }
}

export async function GET () {
  const projects = await getAllProjects()
  return NextResponse.json(projects, { status: 200 })
}
