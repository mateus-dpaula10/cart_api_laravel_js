<?php

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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('imagem')->nullable();
            $table->double('preco_compra', 11, 2)->nullable();
            $table->double('preco_venda', 11, 2)->nullable();
            $table->string('responsavel')->nullable();
            $table->string('descricao')->nullable();
            $table->integer('quantidade')->nullable();
            $table->double('total', 11, 2)->nullable();
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
