<?php

//copie de SKillController 

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Projet;
use App\Http\Requests\StoreProjetRequest;
use App\Http\Requests\UpdateProjetRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projets = Projet::all();
        return Inertia::render(('Utilisateur/Projet/Projets'),['projets' => $projets]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projets = Projet::all();
        return Inertia::render(('Utilisateur/Projet/CreateProjet'),['projets' => $projets]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $utilisateur = Utilisateur::find($request->utilisateur_id);

        $projet = new Projet();
        $projet->nom_du_projet = $request->nom_du_projet;
        $projet->description = $request->description;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projets', 'public'); // stocké dans storage/app/public/projets
            $projet->image = $path; // par ex: projets/monimage.jpg
        }

        $projet->lien = $request->lien;
        $projet->utilisateur_id = $request->utilisateur_id;
        $projet->save();

        return redirect('/projets')->with('success', 'Projet ajouté.');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $projet = Projet::find($id);
        return Inertia::render('Utilisateur/Projet/DetailProjet', ['projet' => $projet]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $projet = Projet::find($id);
        return Inertia::render('Utilisateur/Projet/EditProjet', ['projet' => $projet]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $projet = Projet::find($id);
        $projet->nom_du_projet = $request->nom_du_projet;
        $projet->description = $request->description;
        $projet->lien = $request->lien;       
        
        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('projets', 'public');
        $projet->image = $path;
    }

        $projet->save();

        return redirect('/projets')->with('success', 'Projet modifié.');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $projet = Projet::find($id);
        $projet->delete();
        
    }
}
