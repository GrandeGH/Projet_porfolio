import { useState } from "react"
import { router } from "@inertiajs/react"

export default function EditTEST({ test }) {
    const [values, setValues] = useState({
        nomtTable: nomVariable.nomtTable,
    })    

        const modifier = (e) => {
        e.preventDefault();
        router.put(`/test/update/${nomVariable.id}`, values);
        router.get('/test') //redirect à la page 
    }

    return(
    <>
        <h1>Editer</h1>
        <form action="" onSubmit={modifier}>
            <input type="text" name="type" onChange={(e) => setValues({...values, nomVariable: e.target.value})} value={values.nomVariable} />

        </form>
    </>
    )
}