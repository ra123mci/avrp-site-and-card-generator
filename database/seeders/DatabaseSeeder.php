<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Service Numérique',
            'email' => 'service@udps.cd',
            'password' => Hash::make('30061960'),
        ]);
        
        User::factory()->create([
            'name' => 'DT',
            'email' => 'raphatshibangu@gmail.com',
            'password' => Hash::make('0820222249'),
        ]);

        User::factory()->create([
            'name' => 'Glore Mwana Mbuyi',
            'email' => 'gloremwanambuyi@gmail.com',
            'password' => Hash::make('Gm@199211'),
        ]);
    }
}
