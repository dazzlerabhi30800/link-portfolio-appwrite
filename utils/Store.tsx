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
  showAlert: boolean;
  alertMessage: string;
  add: boolean
  setLinks: React.Dispatch<SetStateAction<link[]>>;
  setShowAlert: React.Dispatch<SetStateAction<boolean>>;
  setAdd: React.Dispatch<SetStateAction<boolean>>;
  setAlertMessage: React.Dispatch<SetStateAction<string>>;
  getDocs: (cat: string) => Promise<void>;
  addDocs: (title: string, link: string, category: string) => Promise<void>;
  deleteDoc: (id: string, cat: string) => Promise<void>;
  handleAlert: (text: string, time: number) => void;
};
const linkContext = createContext<linkContext | null>(null);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [links, setLinks] = useState<link[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [add, setAdd] = useState<boolean>(false);

  // functions
  const getDocs = async (cat?: string) => {
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
    setLinks(arr.filter((arr) => arr.group === cat));
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
      payload,
    );
    if (!promise) return;
    getDocs(category);
    setAdd(false);
  };
  const deleteDoc = async (id: string, cat: string) => {
    if (!databaseId || !collectionId) return;
    if (!id) return;
    const delDoc = await databases.deleteDocument(databaseId, collectionId, id);
    if (!delDoc) return;
    getDocs(cat);
  };

  const handleAlert = (text: string, time: number) => {
    let timeout;
    clearTimeout(timeout);
    if (!text) return;
    setShowAlert(true);
    setAlertMessage(text);
    timeout = setTimeout(() => {
      setShowAlert(false);
    }, time ?? 4000);
  };

  return (
    <linkContext.Provider
      value={{
        links,
        loading,
        showAlert,
        add,
        setAdd,
        setShowAlert,
        alertMessage,
        setAlertMessage,
        setLinks,
        getDocs,
        addDocs,
        deleteDoc,
        handleAlert,
      }}
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
