import { NextRequest } from "next/server";

export interface NavItem {
  label: string
  hash: string
  route: string
}

export interface SocialItem {
  label: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface SocialButtonProps {
  text?: boolean
  horizontal?: boolean
}

export interface SignUpFormData {
  name: string
  lastName: string
  password: string
  dateOfBirth: string
  email: string
}
export interface userData {
  name: string
  lastName: string
  email: string
  dateOfBirth: string
  role: string
}

export interface ProjectFormData {
  name: string
  description: string
  projectDate: string
  languages: string
  image?: string
  website?: string
}
export interface ProjectPreView {
  id: number
  name: string
  image?: string | null
}
export interface Project {
  id: number
  name: string
  description: string
  projectDate: string
  languages: string
  image?: string
  website?: string
}

export interface userTokenData {
  userId: number
  role: string
}
export interface CustomRequest extends NextRequest {
  user?: userTokenData;
}