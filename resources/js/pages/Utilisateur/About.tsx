import { Link } from "@inertiajs/react";

interface Props {
  utilisateur: Utilisateur;
}

export default function About({ utilisateur }: Props) {
  return (
    <div className="">
      <h1 className="text-2xl">À propos de moi</h1>
      <p>Nom: {utilisateur.nom}</p>
      <p>Prénom: {utilisateur.prenom}</p>
      <p>Age: {utilisateur.age}</p>
      <p>Email: {utilisateur.email}</p>
      <p>Bio: {utilisateur.bio}</p>

      <Link href={`/utilisateur/edit/${utilisateur.id}`}>Edit</Link>
    </div>
  );
}
