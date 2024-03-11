import Link from "next/link";
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Link Portfolio</h1>
      <ul>
        <li>
          <Link href="/links/github">Link to links</Link>
        </li>
      </ul>
    </main>
  );
}
