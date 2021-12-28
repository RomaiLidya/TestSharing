<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Article extends Model
{

    const CREATED_AT = 'createdAt';   
    const UPDATED_AT = 'updatedAt';

    protected $table = 'Article';

    protected $primaryKey = 'id';
   
    protected $fillable = [
        'title','content', 'category', 'status', 'isDeleted', 'deletedAt',
    ]; 

    protected $guarded = [];


}
