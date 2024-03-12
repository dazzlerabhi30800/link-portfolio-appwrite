"use client";
import "../../globals.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddForm from "@/Components/AddForm";
import databases, {
  collectionId,
  databaseId,
} from "../../../../utils/AppwriteConfig";

interface params {
  params: {
    link: string;
  };
}
export default function LinkPage({ params: { link } }: params) {
  const showDocs = async () => {
    const response = await databases.listDocuments(databaseId, collectionId);
    // const data = await response;
    console.log(response?.documents);
  };
  useEffect(() => {
    showDocs();
  }, []);
  const [add, setAdd] = useState<boolean>(false);
  return (
    <main className="flex  flex-col gap-8 min-h-screen items-center justify-center">
      <h1 className="text-4xl p-2 md:text-[2.9rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        {link} Links
      </h1>
      {!add && (
        <button
          className="p-3 border-2 border-rose-600 text-rose-600 transition linear duration-300 hover:text-cyan-500 hover:border-cyan-500 rounded-md"
          onClick={() => setAdd((prev) => !prev)}
        >
          <FaPlus />
        </button>
      )}
      {add && <AddForm show={setAdd} />}
    </main>
  );
}
