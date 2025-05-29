<?php

use App\Http\Controllers\UtilisateurController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/accueil', [UtilisateurController::class, 'index']);

//ABOUT
Route::get('/utilisateur', [UtilisateurController::class, 'about']);
Route::get('/create/utilisateur', [UtilisateurController::class, 'create']);
Route::post('/post/utilisateur', [UtilisateurController::class, 'store']);
Route::get('/utilisateur/edit/{utilisateur}', [UtilisateurController::class, 'edit']);
Route::put('/utilisateur/update/{utilisateur}', [UtilisateurController::class, 'update']);

//PROJET
Route::get('/projets', [ProjetController::class, 'index']);
Route::get('/create/projets', [ProjetController::class, 'create']);
Route::post('/post/projets', [ProjetController::class, 'store']);
Route::get('/projets/edit/{projets}', [ProjetController::class, 'edit']);
Route::put('/projets/update/{projets}', [ProjetController::class, 'update']);
Route::delete('/projets/delete/{iprojets', [ProjetController::class, 'destroy']);


//EXPERIENCE
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/create/experiences', [ExperienceController::class, 'create']);
Route::post('/post/experiences', [ExperienceController::class, 'store']);
Route::get('/experiences/edit/{experiences}', [ExperienceController::class, 'edit']);
Route::put('/experiences/update/{experiences}', [ExperienceController::class, 'update']);
Route::delete('/experiences/delete/{experiences}', [ExperienceController::class, 'destroy']);

//SKILL
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/create/skills', [SkillController::class, 'create']);
Route::post('/post/skills', [SkillController::class, 'store']);
Route::get('/skills/edit/{skill}', [SkillController::class, 'edit']);
Route::put('/skills/update/{skill}', [SkillController::class, 'update']);
Route::delete('/skills/delete/{skill}', [SkillController::class, 'destroy']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
