import { eq } from "drizzle-orm";
import { db, NewUser, users as usersTable } from ".";

export class AppDB {
  static async createUser(
    args: Omit<NewUser, "id" | "created_at" | "updated_at">,
  ) {
    const user = await db
      .insert(usersTable)
      .values({
        ...args,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .onConflictDoUpdate({
        target: [usersTable.address],
        set: {
          ...args,
          updated_at: new Date(),
        },
      })
      .returning();

    return user;
  }

  static async getUserByFid(fid: string) {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.fid, fid))
      .execute();

    return user[0];
  }

  static async getUserByAddress(address: string) {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.address, address))
      .execute();

    return user[0];
  }
}
