ALTER TYPE "public"."Role" RENAME TO "role";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "dateOfBirth" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "role" DEFAULT 'USER' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "age";