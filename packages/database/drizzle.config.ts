import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config();

import { appSlug } from "@cryptoresume/common";

const dbCredentials = {
  // @ts-ignore
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
};

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials,
  dialect: "postgresql",
  schemaFilter: [appSlug],
});
