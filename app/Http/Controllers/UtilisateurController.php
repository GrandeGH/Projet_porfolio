<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Http\Requests\StoreUtilisateurRequest;
use App\Http\Requests\UpdateUtilisateurRequest;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Projet;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Utilisateur/Accueil'); 
    }

    public function about()
    {
        $utilisateur = Utilisateur::first();
        return Inertia::render('Utilisateur/About', ['utilisateur' => $utilisateur]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $utilisateur = new Utilisateur();
        $utilisateur->nom = $request->nom;
        $utilisateur->prenom = $request->prenom;
        $utilisateur->age = $request->age;
        $utilisateur->bio = $request->bio;
        $utilisateur->email = $request->email;
        $utilisateur->save();

    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Utilisateur $utilisateur)
    {
        return Inertia::render('Utilisateur/EditUser', [
            'utilisateur' => $utilisateur
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Utilisateur $utilisateur)
    {
        $utilisateur = Utilisateur::first();
        $utilisateur->nom = $request->nom;
        $utilisateur->prenom = $request->prenom;
        $utilisateur->age = $request->age;
        $utilisateur->email = $request->email;
        $utilisateur->bio = $request->bio;
        $utilisateur->save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
