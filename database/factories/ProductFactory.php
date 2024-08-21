<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => $this->faker->word,
            'imagem' => $this->faker->imageUrl(640, 480, 'nature', true, 'Faker'), 
            'preco_compra' => $this->faker->randomFloat(2, 1, 100), 
            'preco_venda' => $this->faker->randomFloat(2, 1, 100), 
            'responsavel' => $this->faker->word,
            'descricao' => $this->faker->sentence
        ];
    }
}
