//Sidebar
import MainLayout from "@/layouts/MainLayout";
Acceuil.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


export default function Acceuil() {

    return(
        <>
            <div>
                <p>Accueil</p>
            </div>
        </>
    )
}