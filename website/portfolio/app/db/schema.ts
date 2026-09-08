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

export const roleEnum = pgEnum('Role', ['ADMIN', 'USER'])

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  lastname: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique()
})

export const projects = pgTable('Project', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  projectDate: timestamp({mode: 'date'}).notNull(),
  languages: varchar({length: 255}).notNull(),
  image: text(),
  website: text()
})
