import Link from "next/link";
import "./globals.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex gap-10 relative overflow-x-hidden min-h-screen flex-col w-full items-center justify-center p-4">
      <h1 className="text-4xl p-2 md:text-[2.9rem] font-medium uppercase text-cyan-30 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-400 animate-bgchange">
        Links
      </h1>
      <ul className="flex flex-col gap-12 mt-10">
        <li>
          <Link
            href="/links/social"
            className="flex justify-center items-center gap-4 bg-darkViolet p-3 border rounded-md text-lg md:text-xl text-indigo-200 transition duration-300 linear hover:brightness-200"
          >
            <FaTwitter /> Social Links
          </Link>
        </li>
        <li>
          <Link
            href="/links/github"
            className="flex justify-center items-center gap-4 bg-darkViolet p-3 border rounded-md text-lg md:text-xl text-indigo-200 transition duration-300 linear hover:brightness-200"
          >
            <FaGithub /> Github Repo Links
          </Link>
        </li>

        <li>
          <Link
            href="/links/certifications"
            className="flex justify-center items-center gap-4 bg-darkViolet p-3 border rounded-md text-lg md:text-xl text-indigo-200 transition duration-300 linear hover:brightness-200"
          >
            <AiOutlineSafetyCertificate /> Certifications
          </Link>
        </li>
      </ul>
    </main>
  );
}
