<?php

namespace App\Hady\Repository;

use App\Models\Article as AppArticle;
use App\Models\LogActivity;
use App\Orenda\Interfaces\IRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule; 
use Illuminate\Validation\ValidationException;

class Article implements IRepository
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
        $rules = [
            'title' => ['required', 'string'],
                  ];

        if ($this->related->exists) {
            $rules['title'] = ['required', 'title', Rule::unique('Article', 'title')->ignore($this->related->id)];
      
        }

        $validator = Validator::make($this->attributes, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $this->related->save();
    }








    public function delete()
    {
        $this->related->update(['isDeleted' => true, 'deletedAt' => date('Y-m-d H:i:s')]);
      
    }

    public static function findOne($id)
    {
        return new self(AppArticle::where([['id', $id], ['isDeleted', false]])->firstOrFail());
    }
}   
