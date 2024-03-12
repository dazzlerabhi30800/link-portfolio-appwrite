import Link from "next/link";
import "./globals.css";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex gap-10 min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl p-2 md:text-[2.9rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        Links
      </h1>
      <ul className="flex flex-col gap-10">
        <li>
          <Link
            href="/links/github"
            className="flex items-center gap-4 bg-darkViolet p-3 border rounded-md text-xl md:text-2xl text-indigo-200 transition duration-300 linear hover:brightness-200"
          >
            <FaGithub /> Github Links
          </Link>
        </li>
      </ul>
    </main>
  );
}
