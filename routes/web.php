<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect ('produto');
});

Auth::routes();

Route::middleware('auth')->group(function () {
    Route::resource('pagina-inicial', HomeController::class);
    Route::resource('produto', ProductController::class);
    Route::resource('carrinho', CartController::class);
});