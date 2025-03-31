import { eq } from "drizzle-orm";
import { db, NewMessage, messages, NewExperience, experiences } from ".";

export class AppDB {
  static async createMessage(args: NewMessage) {
    const message = await db
      .insert(messages)
      .values({
        ...args,
      })
      .returning();

    return message[0];
  }

  static async listMessagesByRecipient(recipientAddress: string) {
    const messageList = await db
      .select()
      .from(messages)
      .where(eq(messages.recipientAddress, recipientAddress))
      .orderBy(messages.createdAt)
      .execute();

    return messageList;
  }

  static async createExperience(args: NewExperience) {
    const experience = await db
      .insert(experiences)
      .values({
        ...args,
      })
      .returning();

    return experience[0];
  }

  static async listExperiencesByUser(userAddress: string) {
    const experienceList = await db
      .select()
      .from(experiences)
      .where(eq(experiences.user, userAddress))
      .orderBy(experiences.startDate)
      .execute();

    return experienceList;
  }
}
