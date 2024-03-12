import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import databases, { collectionId, databaseId } from "./AppwriteConfig";
import { Models } from "appwrite";

interface link {
  title: string;
  group: string;
}
export type linkContext = {
  links: link[];
  setLinks: React.Dispatch<SetStateAction<link[]>>;
  getDocs: () => Promise<void>;
};
const linkContext = createContext<linkContext | null>(null);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [links, setLinks] = useState<link[]>([]);

  // functions
  const getDocs = async () => {
    const response = await databases.listDocuments(databaseId, collectionId);
    if (!response) return;
    const { documents } = response;
    console.log(documents);
    const arr: link[] = documents.map((link: Models.Document) => ({
      title: link.title,
      group: link.group,
    }));
    setLinks(arr);
  };



  return (
    <linkContext.Provider value={{ links, setLinks, getDocs }}>
      {children}
    </linkContext.Provider>
  );
}

export const useLinkContext = () => {
  const context = useContext(linkContext);
  if (!context) return;
  return context;
};
