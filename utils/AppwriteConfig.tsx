import { Client, Databases } from "appwrite";

export const client = new Client();

export const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
export const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(projectId);

export default databases;
