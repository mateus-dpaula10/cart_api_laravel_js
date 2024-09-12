<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        return view ('cart.index');
    }
    
    public function store(Request $request)
    {
        $itemCarrinho = Cart::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Sucesso: Produto adicionado ao carrinho!',
            'item_carrinho' => $itemCarrinho
        ]);
    }

    public function verificaProduto($id, $user) {
        $produto = Cart::where('product_id', $id)->where('user_id', $user)->get();
        return response()->json($produto);
    }
    
    public function show($id)
    {
        $produtos = Cart::where('user_id', $id)->get();
        return response()->json($produtos);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $itemCarrinho = Cart::findOrFail($id);
        $itemCarrinho->quantidade = $request->input('quantidade');
        $itemCarrinho->total = $request->input('total');
        $itemCarrinho->save();

        return response()->json([
            'message' => 'Carrinho atualizado com sucesso!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $itemCarrinho = Cart::findOrFail($id);
        $itemCarrinho->delete();

        return response()->json([
            'message' => 'Produto removido com sucesso!'
        ]);
    }
}
