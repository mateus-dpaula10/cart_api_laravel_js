<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'nome',
        'imagem',
        'preco_compra',
        'preco_venda',
        'responsavel',
        'descricao',
    ];

    public function carrinho() {
        return $this->belongsTo(Cart::class);
    }

    use HasFactory;
}
