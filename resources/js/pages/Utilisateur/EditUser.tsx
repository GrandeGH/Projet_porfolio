import { useState } from "react"
import { router } from "@inertiajs/react"
import { Link } from "@inertiajs/react"

//Sidebar
import MainLayout from "@/layouts/MainLayout";
EditUser.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


export default function EditUser({ utilisateur }) {
    const [values, setValues] = useState({
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        age: utilisateur.age,
        email: utilisateur.email,
        bio: utilisateur.bio,
    })    

        const modifier = (e) => {
        e.preventDefault();
        router.put(`/utilisateur/update/${utilisateur.id}`, values);
        router.get('/utilisateur') //redirect à la page 
    }

    return(
    <>
        <h1>Editer</h1>
        <form action="" onSubmit={modifier}>
            <div>
                <label htmlFor="">Modifier nom : </label>
                <input className="border border-white" type="text" name="type" onChange={(e) => setValues({...values, nom: e.target.value})} value={values.nom} />
            </div>

            <div>
                <label htmlFor="">Modifier prénom : </label>
                <input className="border border-white" type="text" name="type" onChange={(e) => setValues({...values, prenom: e.target.value})} value={values.prenom} />
            </div>

            <div>
                <label htmlFor="">Modifier âge : </label>
                <input className="border border-white" type="text" name="type" onChange={(e) => setValues({...values, age: e.target.value})} value={values.age} />
            </div>

            <div>
                <label htmlFor="">Modifier email : </label>
                <input className="border border-white" type="text" name="type" onChange={(e) => setValues({...values, email: e.target.value})} value={values.email} />
            </div>

            <div>
                <label htmlFor="">Modifier bio : </label>
                <input className="border border-white" type="text" name="type" onChange={(e) => setValues({...values, bio: e.target.value})} value={values.bio} />
            </div>

            <button type="submit">Modifier</button>

            <Link href="/utilisateur">Retour</Link>

        </form>
    </>
    )
}