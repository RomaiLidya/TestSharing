<?php

namespace App\Http\Controllers\Api;
 
use App\Models\Article;
use App\Hady\Repository\Article as RepositoryArticle;
use App\Http\Controllers\Controller;
use App\Http\Resources\Article as ResourcesArticle;
use App\Http\Resources\ArticleCollection;
use Illuminate\Http\Request;
use App\Hady\Repository\Finder\ArticleFinder;
use Illuminate\Http\Resources\Json\JsonResource; 
use Illuminate\Http\Resources\Json\ResourceCollection;
 
class ApiArticleController extends Controller
{

    public function index(Request $request): ResourceCollection
    {
        $articleFinder = new ArticleFinder();
        if ($request->has('keyword')) {
            $articleFinder->setKeyword($request->query('keyword'));
        }
    

        if ($request->has('perPage')) {
            $articleFinder->perPage($request->query('perPage'));
        }

        if ($request->has('orderBy') && $request->has('ordered')) {
            $articleFinder->orderBy($request->query('orderBy'), $request->query('ordered'));
        }

        $articleFinder->withDelete();
        $data = $articleFinder->get();
        return new ArticleCollection($data);
    }


  
    public function show($id): JsonResource
    {
        return new ResourcesArticle(RepositoryArticle::findOne($id)->getModel());
    }


    public function store(Request $request): JsonResource
    {
        $article = Article::findOrNew($request->id);
        $article->title = $request->title;
        $article->content = $request->content; 
        $article->category = $request->category;
        $article->status = $request->status;
        
        $repo = new RepositoryArticle($article);
        $repo->load($request->input());
        $repo->save();
        return new ResourcesArticle($repo->getModel());
    }

    public function destroy($id)
    {
        RepositoryArticle::findOne($id)->delete();
        return response()->noContent();
    }
}
