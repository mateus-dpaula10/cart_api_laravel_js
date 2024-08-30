<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produto-api', [ProductController::class, 'indexProdutoApi'])->name('produto.api.index');

Route::post('/carrinho', [CartController::class, 'store'])->name('carrinho.store');
Route::get('/carrinho/verifica/{id}/{user}', [CartController::class, 'verificaProduto'])->name('carrinho.verifica');
Route::get('/carrinho/{id}', [CartController::class, 'show'])->name('carrinho.show');
