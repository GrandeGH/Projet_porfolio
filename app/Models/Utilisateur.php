<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    /** @use HasFactory<\Database\Factories\UtilisateurFactory> */
    use HasFactory;

        public function projet() {
        return $this->hasMany(Projet::class);
    }
    
    public function skill() {
        return $this->hasMany(Skill::class);
    }

    public function experience() {
        return $this->hasMany(Experience::class);
    }
}
