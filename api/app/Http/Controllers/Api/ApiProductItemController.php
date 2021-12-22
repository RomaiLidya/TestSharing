<?php

namespace App\Http\Controllers\Api;

use App\Hady\Repository\Finder\ProductItemFinder;
use App\Hady\Repository\ProductItem as RepositoryProductItem;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductItem as ResourcesProductItem;
use App\Http\Resources\ProductItemCollection;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ApiProductItemController extends Controller
{
    public function index(Request $request): ResourceCollection
    {
        $productFinder = new ProductItemFinder();
        if ($request->has('keyword')) {
            $productFinder->setKeyword($request->query('keyword'));
        }

        if ($request->has('perPage')) {
            $productFinder->perPage($request->query('perPage'));
        }

        if ($request->has('orderBy') && $request->has('ordered')) {
            $productFinder->orderBy($request->query('orderBy'), $request->query('ordered'));
        }

        $productFinder->withDelete();
        $data = $productFinder->get();
        return new ProductItemCollection($data);
    }

    public function show($id): JsonResource
    {
        return new ResourcesProductItem(RepositoryProductItem::findOne($id)->getModel());
    }

    public function store(Request $request): JsonResource
    {
        $product = ProductItem::findOrNew($request->id);
        $product->ProductId = $request->ProductId;
        $product->ProductPackageId = $request->ProductPackageId;
        $product->minimumItem = $request->minimumItem;

        $repo = new RepositoryProductItem($product);
        $repo->load($request->input());
        $repo->save();
        return new ResourcesProductItem($repo->getModel());
    }

    public function destroy($id)
    {
        RepositoryProductItem::findOne($id)->delete();
        return response()->noContent();
    }
}
