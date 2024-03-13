"use client";
import "../../globals.css";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import AddForm from "@/components/AddForm";
import { linkContext, useLinkContext } from "../../../../utils/Store";
import LinkComp from "@/components/LinkComp";
import Spinner from "@/components/Spinner";
import {
  client,
  collectionId,
  databaseId,
} from "../../../../utils/AppwriteConfig";

interface params {
  params: {
    link: string;
  };
}
export default function LinkPage({ params: { link } }: params) {
  // States & variables
  const { getDocs, links, loading, add, setAdd, handleAlert } = useLinkContext() as linkContext;

  // useEffect Hook to fetch links
  useEffect(() => {
    if (!link) return;
    getDocs(link);
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${collectionId}.documents`,
      (response) => {
        if (response.events.includes("databases.*.collections.*.documents.*.create")) {
          handleAlert("Link Added", 4000);
        }
        if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
          handleAlert("Link Deleted", 4000);
        }
      },
    );
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) return <Spinner />;
  return (
    <main className="flex relative overflow-x-hidden flex-col gap-12 min-h-screen w-full items-center justify-center">
      <h1 className="text-4xl p-2 md:text-[2.9rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        {link} Links
      </h1>
      {add && <AddForm category={link} />}
      {!add && (
        <div className="flex flex-col gap-5 w-[95%] md:min-w-[320px] max-w-fit">
          {links.length >= 1 ? (
            links.map((data: link) => <LinkComp key={data.id} category={link} data={data} />)
          ) : (
            <p className="text-rose-400 text-lg md:text-xl">
              No Links Available. Please Add one
            </p>
          )}
        </div>
      )}
      {!add && (
        <button
          className="p-3 border-2 border-rose-600 text-rose-600 transition linear duration-300 hover:text-cyan-500 hover:border-cyan-500 rounded-md"
          onClick={() => setAdd((prev) => !prev)}
        >
          <FaPlus />
        </button>
      )}
    </main>
  );
}
