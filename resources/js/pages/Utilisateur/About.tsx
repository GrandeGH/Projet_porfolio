import { Link } from "@inertiajs/react";

//Sidebar
import MainLayout from "@/layouts/MainLayout";
About.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;


interface Props {
  utilisateur: Utilisateur;
}

export default function About({ utilisateur }: Props) {
  return (
      <div className="space-y-1">
        <h1 className="text-2xl">À propos de moi</h1>
        <p>Nom: {utilisateur.nom}</p>
        <p>Prénom: {utilisateur.prenom}</p>
        <p>Age: {utilisateur.age}</p>
        <p>Email: {utilisateur.email}</p>
        <p>Bio: {utilisateur.bio}</p>

        <Link className="rounded border-white border p-2 py-1" href={`/utilisateur/edit/${utilisateur.id}`}>Edit</Link>
      </div>
  );
}
