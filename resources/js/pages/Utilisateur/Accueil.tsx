import { Head } from '@inertiajs/react';

//Sidebar
import MainLayout from "@/layouts/MainLayout";
Accueil.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

import About from "@/pages/Utilisateur/About";


export default function Accueil({utilisateur}) {

    return(
        <>
            <div>
                <Head title="Accueil" />
            <h1>À propos de {utilisateur.nom}</h1>
            {/* autres infos ici */}
                {/* <section id="about" className="my-10">
                    <About utilisateur={utilisateur} />
                </section> */}
             
            </div>
        </>
    )
}