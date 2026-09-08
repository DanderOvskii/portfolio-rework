
import { defineConfig } from "drizzle-kit";
console.log("Database URL exists:", !!process.env.DATABASE_URL);
export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./app/db/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});