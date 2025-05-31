import { Link, router } from "@inertiajs/react";

//Sidebar
import MainLayout from "@/layouts/MainLayout";
Projets.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


export default function Projets({ projets }) {

    const supprimerProjet = (e, id) => {
        e.preventDefault();
        router.delete(`projets/delete/${id}`)
        router.reload()
    }

    return(
        <div>
         <Link className="rounded border border-white p-1" href="create/projets">Ajouter un projet</Link>   
        <div>Je suis la page Projet</div>

            {projets.map((projet, i) => (
                <div className="border border-white rounded-xl p-3 m-3" key={i}>
                    <h1 className="text-xl">{projet.nom_du_projet}</h1>
                    <img className="w-80" src={`/storage/${projet.image}`} alt={projet.nom_du_projet} />
                    <Link className="rounded border border-white p-1" href={`/projets/detail/${projet.id}`}>Détail</Link>

                    <Link className="rounded border border-white p-1" href={`/projets/edit/${projet.id}`}>Modifier</Link>
                    <button onClick={(e) => supprimerProjet(e, projet.id)} className="rounded border border-white p-1 cursor-pointer">
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    )
}