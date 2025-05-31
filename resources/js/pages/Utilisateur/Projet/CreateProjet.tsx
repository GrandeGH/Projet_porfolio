import { useState } from "react";
import { router } from "@inertiajs/react";

//Sidebar
import MainLayout from "@/layouts/MainLayout";
CreateProjet.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default function CreateProjet() {
    const [values, setValues] = useState({
        nom_du_projet:"",
        description:"",
        lien: "",
        image:null,
        utilisateur_id: 1
    })

    const ajouterProjet = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("nom_du_projet", values.nom_du_projet);
        formData.append("description", values.description);
        formData.append("image", values.image); // fichier
        formData.append("lien", values.lien);
        formData.append("utilisateur_id", values.utilisateur_id.toString());

        console.log("Données envoyées :", values);
        // router.post('/post/projets', values)
        // router.get('/projets')
        

        router.post("/post/projets", formData, {
            forceFormData: true, // très important pour forcer l'envoi multipart
            onSuccess: () => router.get("/projets"),
        });        
    }
    console.log(values)

    return(
        <>
        <div>
            <form onSubmit={ajouterProjet}  encType="multipart/form-data">
                <div>
                    <label htmlFor="">Nom du projet: </label>
                    <input className="border border-white rounded" value={values.nom_du_projet} type="text" onChange={(e) => setValues({...values, nom_du_projet: e.target.value})} />
                </div>
                
                <div>
                    <label htmlFor="">Description: </label>
                    <input className="border border-white rounded" value={values.description} type="text" onChange={(e) => setValues({...values, description: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Lien: </label>
                    <input className="border border-white rounded" value={values.lien} type="url" onChange={(e) => setValues({...values, lien: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="">Image: </label>
                    <input className="border border-white rounded" type="file" onChange={(e) => setValues({ ...values, image: e.target.files[0] })} />
                </div>

                <button type="submit">Ajouter</button>
            </form>
        </div>
        </>
    )
}