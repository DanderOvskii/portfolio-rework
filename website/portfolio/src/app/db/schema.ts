import {
  pgTable,
  pgEnum,
  uuid,
  serial,
  varchar,
  text,
  timestamp,
  integer
} from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('role', ['ADMIN', 'USER']);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  lastname: varchar({ length: 255 }).notNull(),
  dateOfBirth: timestamp('dateOfBirth', { mode: 'date' }).defaultNow().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: roleEnum().default("USER").notNull()
})

export const projects = pgTable('Project', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  projectDate: timestamp({mode: 'date'}).notNull(),
  languages: varchar({length: 255}).notNull(),
  image: text(),
  website: text(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().$onUpdate(() => new Date()).notNull()
})
