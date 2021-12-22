<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Hady\Repository\Category as RepositoryCategory;
use App\Hady\Repository\Finder\CategoryFinder;
use App\Http\Controllers\Controller;
use App\Http\Resources\Category as ResourcesCategory;
use App\Http\Resources\CategoryCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ApiCategoryController extends Controller
{
    public function index(Request $request): ResourceCollection
    {
        $categoryFinder = new CategoryFinder();
        if ($request->has('keyword')) {
            $categoryFinder->setKeyword($request->query('keyword'));
        }

        if ($request->has('code')) {
            $categoryFinder->setCode($request->query('code'));
        }

        if ($request->has('perPage')) {
            $categoryFinder->perPage($request->query('perPage'));
        }

        if ($request->has('orderBy') && $request->has('ordered')) {
            $categoryFinder->orderBy($request->query('orderBy'), $request->query('ordered'));
        }

        $categoryFinder->withDelete();
        $data = $categoryFinder->get();
        return new CategoryCollection($data);
    }

    public function show($id): JsonResource
    {
        return new ResourcesCategory(RepositoryCategory::findOne($id)->getModel());
    }

    public function store(Request $request): JsonResource
    {
        $category = Category::findOrNew($request->id);
        $category->name = $request->name;
        $category->description = $request->description;
        $category->code = $request->code;

        $repo = new RepositoryCategory($category);
        $repo->load($request->input());
        $repo->save();
        return new ResourcesCategory($repo->getModel());
    }

    public function destroy($id)
    {
        RepositoryCategory::findOne($id)->delete();
        return response()->noContent();
    }
}
