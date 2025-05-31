import { useState } from "react"
import { router } from "@inertiajs/react"

//Sidebar
import MainLayout from "@/layouts/MainLayout";
EditProjet.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


export default function EditProjet({ projet }) {
    const [values, setValues] = useState({
        nom_du_projet: projet.nom_du_projet,
        description: projet.description,
        lien: projet.lien,
    })    

    const [image, setImage] = useState(null);

        const modifier = (e) => {

        const formData = new FormData();
        formData.append('nom_du_projet', values.nom_du_projet);
        formData.append('description', values.description);
        formData.append('lien', values.lien);

        if (image) {
            formData.append('image', image);
        }

        e.preventDefault();
        router.put(`/projets/update/${projet.id}`, values);
        router.get('/projets') //redirect à la page 
    }

    return(
    <>
        <h1>Editer Projet</h1>
        <form action="" onSubmit={modifier} encType="multipart/form-data">
            <label htmlFor="">Projet :</label>
            <input type="text" className="border border-white rounded" name="type" onChange={(e) => setValues({...values, nom_du_projet: e.target.value})} value={values.nom_du_projet} />

            <label htmlFor="">Description :</label>
            <input type="text" className="border border-white rounded" name="type" onChange={(e) => setValues({...values, description: e.target.value})} value={values.description} />

            <label htmlFor="">Lien :</label>
            <input type="url" className="border border-white rounded" name="type" onChange={(e) => setValues({...values, lien: e.target.value})} value={values.lien} />

            <label htmlFor="">Image :</label>
            <input type="file" accept="image/*" className="border border-white rounded" name="type" onChange={(e) => setImage(e.target.files[0])} />

            <button type='submit'>Modifier</button>
        </form>
    </>
    )
}