<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Card;

class CardFactory extends Factory
{
    protected $model = Card::class;

    public function definition()
    {
        $dacs = $this->faker->optional()->regexify('[A-Z0-9]{1,6}');
        
        $cocs = sprintf(
            '%s-%s-%s-%s',
            $this->faker->regexify('[A-Z0-9]{4}'),
            $this->faker->regexify('[A-Z0-9]{4}'),
            $this->faker->regexify('[A-Z0-9]{4}'),
            $this->faker->regexify('[A-Z0-9]{4}')
        );

        $key = $dacs ? $dacs . '-' . $cocs : $cocs;

        return [
            'key' => $key,
            // Autres champs de définition de la carte
        ];
    }
}

