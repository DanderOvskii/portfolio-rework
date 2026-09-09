import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { SignUpFormData } from "@/types";
import { eq } from "drizzle-orm";



export async function createUser(data: SignUpFormData) {
  const [user] = await db
    .insert(usersTable)
    .values({
      name: data.name,
      lastname: data.lastName,
      dateOfBirth: new Date(data.dateOfBirth),
      email: data.email,
      password: data.password,
      role: "USER",
    })
    .returning();

  return user;
}

export async function findUserById(id: string) {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1);

  return user ?? null;
}


export async function findUserByEmail(email: string) {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return user ?? null;}