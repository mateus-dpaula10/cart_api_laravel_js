<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'nome',
        'imagem',
        'preco_compra',
        'preco_venda',
        'responsavel',
        'descricao',
        'quantidade',
        'total',
        'product_id',
        'user_id'
    ];

    use HasFactory;

    public function produtos() {
        return $this->hasMany(Product::class);
    }

    public function usuarios() {
        return $this->hasMany(User::class);
    }
}
