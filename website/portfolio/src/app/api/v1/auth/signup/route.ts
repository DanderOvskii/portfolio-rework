import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { emailRegex, isValidDate, passwordRegex } from "@/utils/helpers";
import { emailIsTaken, invalidEmail, invalidPassword } from "@/utils/constants";
import {findUserByEmail,createUser} from "@/db/service/userService";
import { generateToken } from "@/utils/auth";

export async function POST(request: Request) {
  const { email, password, name, lastName, dateOfBirth } =
    await request.json();

  // Check if the email is valid
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: invalidEmail }, { status: 400 });
  }

  // Check if the password meets the requirements
  if (!passwordRegex.test(password)) {
    return NextResponse.json(
      {
        message: invalidPassword,
      },
      { status: 400 }
    );
  }

  if (!isValidDate(dateOfBirth)) {
    return NextResponse.json(
      { message: "Invalid date of birth" },
      { status: 400 }
    );
  }

  // Check if the email is already taken
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    return NextResponse.json(
      {
        message: emailIsTaken,
      },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({
    name,
    lastName,
    email,
    password: hashedPassword,
    dateOfBirth,
  })
  const token = await generateToken({ userId: user.id, role: user.role });

  const baseUrl = new URL(request.url).origin;
  const redirectUrl =
    user.role === "ADMIN" ? `${baseUrl}/admin` : `${baseUrl}/`;

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
