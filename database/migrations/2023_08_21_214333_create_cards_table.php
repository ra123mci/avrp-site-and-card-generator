<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // ->nullable() => si ca peut etre null
        // ->default(valeur) => si ca a une valeur par default

        Schema::create('cards', function (Blueprint $table) {
            $table->id();

            $table->string('key', 32);

            $table->string('first_name')->nullable(); // Nom
            $table->string('last_name')->nullable(); // PostNom
            $table->string('home_name')->nullable(); // Prenom

            $table->string('celphone')->nullable(); // Telephone
            $table->string('email')->nullable(); // Email

            $table->string('date_of_birth')->nullable(); // Date de Naissance
            $table->string('place_of_birth')->nullable(); // Lieu de Naissance
            $table->enum('gender', ['male', 'female', 'other'])->nullable(); // Genre | Sexe

            $table->string('occupation')->nullable(); // Prefession
            $table->string('quality')->nullable(); // qualité

            $table->string('country')->nullable(); // Pays
            $table->string('province')->nullable(); // Province
            $table->string('city')->nullable(); // Ville
            $table->string('district')->nullable(); // Districte
            $table->string('township')->nullable(); // Commune
            $table->string('neighborhood')->nullable(); // Quartier
            $table->string('address')->nullable(); // Adresse

            $table->string('bio')->nullable(); // Biographie

            $table->string('avatar')->nullable(); // Profile

            $table->foreignIdFor(User::class)->nullable()->constrained()->nullOnDelete();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
