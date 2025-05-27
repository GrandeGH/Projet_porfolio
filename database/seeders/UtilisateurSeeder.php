<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Utilisateur;

class UtilisateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          Utilisateur::create([
            'nom' => 'Grande',
            'prenom' => 'Georges',
            'age' => 28,
            'bio' => 'Développeur passionné par le web et les jeux vidéo.',
            'email' => 'georgesgrande1996@gmail.com',
        ]);
    }
}
