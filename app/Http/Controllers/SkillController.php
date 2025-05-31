<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::all();
        return Inertia::render(('Utilisateur/Skill/Skills'),['skills' => $skills]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $skills = Skill::all();
        return Inertia::render(('Utilisateur/Skill/CreateSkill'),['skills' => $skills]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $utilisateur = Utilisateur::find($request->utilisateur_id);

        $skill = new Skill();
        $skill->nom_du_skill = $request->nom_du_skill;
        $skill->progres = $request->progres;
        $skill->utilisateur_id = $request->utilisateur_id;
        $skill->save();

        return redirect('/skills')->with('success', 'Skill ajouté.');

    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $skill = Skill::find($id);
        return Inertia::render('Utilisateur/Skill/EditSkill', ['skill' => $skill]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $skill = Skill::find($id);
        $skill->nom_du_skill = $request->nom_du_skill;
        $skill->progres = $request->progres;
        $skill->save();
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $skill = Skill::find($id);
        $skill->delete();
    }
}
