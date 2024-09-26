import Link from "next/link";
import "../styles/header.css"; 

export const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <Link href="/" className="link-nav">PRincipal</Link>
                <Link href="/create" className="link-nav">Crear</Link>
                <Link href="/tasks" className="link-nav">Tareas</Link>
            </nav>
        </header>
    )
}