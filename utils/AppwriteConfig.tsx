import { Client, Databases } from "appwrite";

const client = new Client();
export const databaseId = "65efed10265fad648901";
export const collectionId = "65efed1e94a410edfc71";
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65efec9e17e02eb48b73");

export default databases;
