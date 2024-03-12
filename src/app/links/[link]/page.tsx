"use client";
import "../../globals.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddForm from "@/components/AddForm";
import { linkContext, useLinkContext } from "../../../../utils/Store";
import LinkComp from "@/components/LinkComp";
import Spinner from "@/components/Spinner";

interface params {
  params: {
    link: string;
  };
}
export default function LinkPage({ params: { link } }: params) {
  const { getDocs, links, loading } = useLinkContext() as linkContext;
  useEffect(() => {
    getDocs();
  }, []);
  const [add, setAdd] = useState<boolean>(false);
  if (loading) return <Spinner />;
  return (
    <main className="flex  flex-col gap-12 min-h-screen w-full items-center justify-center">
      <h1 className="text-4xl p-2 md:text-[2.9rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        {link} Links
      </h1>
      {add && <AddForm show={setAdd} category={link} />}
      {!add && (
        <div className="flex flex-col gap-5 w-[95%] max-w-[350px]">
          {links.map((data: link) => (
            <LinkComp key={data.id} data={data} />
          ))}
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
