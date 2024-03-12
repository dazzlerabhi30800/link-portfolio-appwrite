import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import databases, { collectionId, databaseId } from "./AppwriteConfig";
import { ID, Models } from "appwrite";

export type linkContext = {
  links: link[];
  loading: boolean;
  setLinks: React.Dispatch<SetStateAction<link[]>>;
  getDocs: () => Promise<void>;
  addDocs: (title: string, link: string, category: string) => Promise<void>;
  deleteDoc: (id: string) => Promise<void>;
};
const linkContext = createContext<linkContext | null>(null);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [links, setLinks] = useState<link[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // functions
  const getDocs = async () => {
    setLoading(true);
    if (!databaseId || !collectionId) return;
    const response = await databases.listDocuments(databaseId, collectionId);
    if (!response) return;
    const { documents } = response;
    const arr: link[] = documents.map((link: Models.Document) => ({
      title: link.title,
      group: link.group,
      link: link.link,
      id: link.$id,
    }));
    setLinks(arr);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const addDocs = async (title: string, link: string, category: string) => {
    if (!databaseId || !collectionId) return;
    if (!title || !link || !category) return;
    const payload = {
      title,
      group: category,
      link,
    };
    const promise = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      payload
    );
    if (!promise) return;
    getDocs();
  };
  const deleteDoc = async (id: string) => {
    if (!databaseId || !collectionId) return;
    if (!id) return;
    const delDoc = await databases.deleteDocument(databaseId, collectionId, id);
    if (!delDoc) return;
    getDocs();
  };

  return (
    <linkContext.Provider
      value={{ links, loading, setLinks, getDocs, addDocs, deleteDoc }}
    >
      {children}
    </linkContext.Provider>
  );
}

export const useLinkContext = () => {
  const context = useContext(linkContext);
  if (!context) return;
  else return context;
};
