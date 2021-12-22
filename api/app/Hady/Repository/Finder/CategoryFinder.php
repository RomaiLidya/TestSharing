<?php

namespace App\Hady\Repository\Finder;

use App\Models\Category;
use App\Hady\Hady;
use App\Orenda\Interfaces\IFinder;

class CategoryFinder implements IFinder
{
    private $query;
    private $page;

    public function __construct()
    {
        $this->query = Category::select();
    }

    public function setKeyword($keyword)
    {
        $this->query->where('name', 'ILIKE', "%{$keyword}%");
    }

    public function setCode($value)
    {
        $this->query->where('code', 'ILIKE', "%{$value}%");
    }

    public function withDelete()
    {
        $this->query->where('isDeleted', false);
    }

    public function get()
    {
        return $this->query->paginate($this->page ?? Hady::getPaginate());
    }

    public function orderBy($columnName, $orderBy)
    {
        $this->query->when($columnName, function ($query, $column) use ($orderBy) {
            return $query->orderBy($column, $orderBy);
        }, function ($query) {
            return $query->orderBy('id', 'desc');
        });
    }

    public function perPage($page)
    {
        $this->page = $page;
    }
}
