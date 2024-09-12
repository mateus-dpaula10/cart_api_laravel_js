<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produto-api', [ProductController::class, 'indexProdutoApi'])->name('produto.api.index');

Route::post('/carrinho', [CartController::class, 'store'])->name('carrinho.store');
Route::get('/carrinho/verifica/{id}/{user}', [CartController::class, 'verificaProduto'])->name('carrinho.verifica');
Route::get('/carrinho/{id}', [CartController::class, 'show'])->name('carrinho.show');
Route::put('/carrinho/put/{id}', [CartController::class, 'update'])->name('carrinho.update');
Route::delete('/carrinho/destroy/{id}', [CartController::class, 'destroy'])->name('carrinho.delete');