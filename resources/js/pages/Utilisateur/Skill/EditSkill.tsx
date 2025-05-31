import { useState } from "react"
import { router } from "@inertiajs/react"

export default function EditSkill({ skill }) {
    const [values, setValues] = useState({
        nom_du_skill: skill.nom_du_skill,
        progres: skill.progres,
    })    

        const modifier = (e) => {
        e.preventDefault();
        router.put(`/skills/update/${skill.id}`, values);
        router.get('/skills') 
    }

    return(
    <>
        <h1>Editer</h1>
        <form action="" onSubmit={modifier}>
            <label htmlFor="">Skill :</label>
            <input type="text" className="border border-white rounded" name="type" onChange={(e) => setValues({...values, nom_du_skill: e.target.value})} value={values.nom_du_skill} />

            <label htmlFor="">Progression :</label>
            <input type="range" min="0" max="100" className="border border-white rounded" name="type" onChange={(e) => setValues({...values, progres: e.target.value})} value={values.progres} />

            <button type='submit'>Modifier</button>
        </form>
    </>
    )
}