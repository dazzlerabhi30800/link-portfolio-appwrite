"use client";
import "../../globals.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddForm from "@/Components/AddForm";

interface params {
  params: {
    link: string;
  };
}
export default function LinkPage({ params: { link } }: params) {
  const [add, setAdd] = useState<boolean>(false);
  return (
    <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
      <h1 className="text-3xl md:text-[2.6rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
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
      {add && <AddForm setAdd={setAdd} />}
    </main>
  );
}
