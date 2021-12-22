<?php

namespace App\Hady\Repository;

use App\Models\Category as AppCategory;
use App\Models\LogActivity;
use App\Orenda\Interfaces\IRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class Category implements IRepository
{
    private $related;
    private $attributes;

    public function __construct($related = null)
    {
        $this->related = $related;
    }

    public function load($attributes)
    {
        $this->attributes = $attributes;
    }

    public function getModel()
    {
        return $this->related;
    }

    public function save()
    {
        $isExist = $this->related->exists;
        $rules = [
            'name' => ['required', 'string'],
            'code' => ['required', 'string', 'min:3'],
        ];

        if ($isExist) {
            $rules['name'] = ['required', 'string', Rule::unique('Category', 'name')->ignore($this->related->id)];
            $rules['code'] = ['required', 'string', 'min:3', Rule::unique('Category', 'code')->ignore($this->related->id)];
        }

        $validator = Validator::make($this->attributes, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $oldValue = AppCategory::find($this->related->id);
        $this->related->save();

        LogActivity::create([
            'initial' => 'Category',
            'action' => $isExist ? 'UPDATE' : 'CREATE',
            'description' => Auth::user()->firstName . ($isExist ?  ' Memperbaharui kategori ' : ' Menambah kategori ') . $this->related->name,
            'createdBy' => Auth::user()->id,
            'oldValue' => $isExist ? json_encode($oldValue) : null,
            'newValue' => json_encode($this->related),
        ]);
    }

    public function delete()
    {
        $this->related->update(['isDeleted' => true, 'deletedAt' => date('Y-m-d H:i:s')]);
        LogActivity::create([
            'initial' => 'Category',
            'action' => 'DELETE',
            'description' => Auth::user()->firstName . ' Menghapus kategori ' . $this->related->name,
            'createdBy' => Auth::user()->id,
        ]);
    }

    public static function findOne($id)
    {
        return new self(AppCategory::where([['id', $id], ['isDeleted', false]])->firstOrFail());
    }
}
