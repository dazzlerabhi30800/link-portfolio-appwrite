"use client";
import "../../globals.css";

interface params {
  params: {
    link: string;
  };
}
export default function LinkPage({ params: { link } }: params) {
  console.log(link);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl md:text-[2.6rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        {link} Links
      </h1>
    </main>
  );
}
