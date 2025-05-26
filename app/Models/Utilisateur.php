<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    /** @use HasFactory<\Database\Factories\UtilisateurFactory> */
    use HasFactory;

    public function projets() {
        return $this->hasMany(Projet::class);
    }
    
    public function skills() {
        return $this->hasMany(Skill::class);
    }

    public function experiences() {
        return $this->hasMany(Experience::class);
    }
}
