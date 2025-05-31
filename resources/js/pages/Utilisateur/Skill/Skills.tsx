import { Link, router } from "@inertiajs/react";

//Sidebar
import MainLayout from "@/layouts/MainLayout";
Skills.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


export default function Skills({ skills }) {

    const supprimerSkill = (e, id) => {
        e.preventDefault();
        router.delete(`/skills/delete/${id}`)
        router.reload()
    }

    return(
        <div>
         <Link className="rounded border border-white p-1" href="create/skills">Ajouter un skill</Link>   
        <div>Je suis la page Skill</div>

            {skills.map((skill, i) => (
                <div key={i}>
                    <h1 className="text-xl">{skill.nom_du_skill}</h1>
                    <div className="w-50 bg-gray-300 rounded h-3">
                        <div
                        className="bg-blue-500 h-3 rounded"
                        style={{ width: `${skill.progres}%` }}
                        ></div>
                    </div>
                    <Link className="rounded border border-white p-1" href={`/skills/edit/${skill.id}`}>Modifier</Link>
                    <button onClick={(e) => supprimerSkill(e, skill.id)} className="rounded border border-white p-1 cursor-pointer">
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    )
}