import { pgSchema, text, varchar, uuid, timestamp } from "drizzle-orm/pg-core";
import { appSlug } from "@cryptoresume/common";

export const schema = pgSchema(appSlug);

export const users = schema.table("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  address: text("address").unique(),
  fid: varchar("fid", { length: 256 }),
  username: varchar("username", { length: 256 }),
  pfp_url: text("pfp_url"),
  addresses: text("addresses").array(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
