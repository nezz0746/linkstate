import { pgSchema, text, varchar, uuid, timestamp } from "drizzle-orm/pg-core";
import { appSlug } from "@cryptoresume/common";

export const schema = pgSchema(appSlug);

export const messages = schema.table("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  recipientAddress: text("recipient_address").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const experiences = schema.table("experiences", {
  id: uuid("id").defaultRandom().primaryKey(),
  user: text("user").notNull(),
  companyAddress: text("company_address").notNull(),
  title: text("title").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  description: text("description").notNull(),
  claimHash: text("claim_hash").notNull(),
  signature: text("signature").notNull(),
});

// Types
export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;

export type Experience = typeof experiences.$inferSelect;
export type NewExperience = typeof experiences.$inferInsert;
