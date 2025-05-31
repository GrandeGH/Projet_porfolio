import { Link } from "@inertiajs/react";

export default function Sidebar() {

    return(
        <>
        
            <div className="w-30 h-screen text-white space-y-1 p-4 flex-col fixed">
                <h2 className="text-2xl">Porfolio</h2>
                <nav className="flex flex-col space-y-2 p-5">
                    <Link className="text-xl" href="/accueil">Accueil</Link>
                    <Link className="text-xl" href="/utilisateur">About</Link>
                    <Link className="text-xl" href="/skills">Skills</Link>
                    <Link className="text-xl" href="/experiences">Experiences</Link>
                    <Link className="text-xl" href="/projets">Projets</Link>
                    <Link className="text-xl" href="/utilisateur/edit">Contact</Link>
                    <div>(Réseaux sociaux)</div>
                </nav>
            </div>
        </>
    )
}