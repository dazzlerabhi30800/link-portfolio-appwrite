import { Client, Databases } from "appwrite";

const client = new Client();
// export const databaseId = "65efed10265fad648901";
// export const collectionId = "65efed1e94a410edfc71";

export const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
export const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID;
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65efec9e17e02eb48b73");

export default databases;
