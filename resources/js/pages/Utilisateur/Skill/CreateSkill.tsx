import { useState } from "react";
import { router } from "@inertiajs/react";

export default function CreateSkill() {
    const [values, setValues] = useState({
        nom_du_skill:"",
        progres: 0,
        utilisateur_id: 1
    })

    const ajouterSkill = (e) => {
        e.preventDefault()
        router.post('/post/skills', values)
        router.get('/skills')
        
    }
    console.log(values)

    return(
        <>
        <div>
            <form onSubmit={ajouterSkill}>
                <div>
                    <label htmlFor="">Nom du skill</label>
                    <input className="border border-white rounded" type="text" onChange={(e) => setValues({...values, nom_du_skill: e.target.value})} />
                </div>
                
                <div>
                    <label htmlFor="">Progression</label>
                    <input type="range" min="0" max="100" value={values.progres} onChange={(e) => setValues({...values, progres: parseInt(e.target.value)})} />
                </div>

                <button type="submit">Ajouter</button>
            </form>
        </div>
        </>
    )
}