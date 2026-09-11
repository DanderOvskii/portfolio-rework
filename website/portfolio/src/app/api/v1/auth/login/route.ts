import { findUserByEmail } from '@/db/service/userService'
import { NextResponse } from 'next/server'
import { invalidCredentials } from '@/utils/constants'
import bcrypt from 'bcryptjs'
import { generateToken } from '@/utils/auth'

export async function POST (request: Request) {
  // Parse the request body
  const { email, password } = await request.json()
  const user = await findUserByEmail(email)
  if (!user) {
    return NextResponse.json({ message: invalidCredentials }, { status: 401 })
  }
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    return NextResponse.json({ message: invalidCredentials }, { status: 401 })
  }
  const token = await generateToken({ userId: user.id, role: user.role });
   const redirectUrl = user.role === "ADMIN" 
    ? '/admin'  // Change to direct path
    : '/';

  const response = NextResponse.json({
    redirectUrl,
    user,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 3600,
  });

  return response;
}
