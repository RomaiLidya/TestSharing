<?php

namespace App\Http\Controllers\Api;

use App\Models\Daftar;
use App\Hady\Repository\Daftar as RepositoryDaftar;
use App\Hady\Repository\Finder\DaftarFinder;
use App\Http\Controllers\Controller;
use App\Http\Resources\Daftar as ResourcesDaftar;
use App\Http\Resources\DaftarCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ApiDaftarController extends Controller
{
    public function index(Request $request): ResourceCollection
    {
        $daftarFinder = new DaftarFinder();
        if ($request->has('keyword')) {
            $daftarFinder->setKeyword($request->query('keyword'));
        }

        if ($request->has('code')) {
            $daftarFinder->setCode($request->query('code'));
        }

        if ($request->has('perPage')) {
            $daftarFinder->perPage($request->query('perPage'));
        }

        if ($request->has('orderBy') && $request->has('ordered')) {
            $daftarFinder->orderBy($request->query('orderBy'), $request->query('ordered'));
        }

        $daftarFinder->withDelete();
        $data = $daftarFinder->get();
        return new DaftarCollection($data);
    }

    public function show($id): JsonResource
    {
        return new ResourcesDaftar(RepositoryDaftar::findOne($id)->getModel());
    }

    public function store(Request $request): JsonResource
    {
        $daftar = Daftar::findOrNew($request->id);
        $daftar->NIK = $request->NIK;
        $daftar->namapasien = $request->namapasien;
        $daftar->alamat = $request->alamat;
        $daftar->tanggallahir = $request->tanggallahir;
        $daftar->telepon = $request->telepon;

        $repo = new RepositoryDaftar($daftar);
        $repo->load($request->input());
        $repo->save();
        return new ResourcesDaftar($repo->getModel());
    }

    public function destroy($id)
    {
        RepositoryDaftar::findOne($id)->delete();
        return response()->noContent();
    }
}
