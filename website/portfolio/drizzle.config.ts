
import { defineConfig } from "drizzle-kit";
console.log("Database URL exists:", !!process.env.DATABASE_URL);
export default defineConfig({
  schema: "./src/app/db/schema.ts",
  out: "./src/app/db/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});