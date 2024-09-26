import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <h1>Crud fullstack</h1>
      <p>App creada con <b className="t1">Next.Js</b> and <b className="t2">Supabase</b></p>
        <Link href="/create" className="link-main">Comenzar</Link>
    </main>
  );
}
