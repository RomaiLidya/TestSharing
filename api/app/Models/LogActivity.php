<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LogActivity extends Model
{
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $table = 'LogActivity';

    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'initial',
        'action',
        'description',
        'oldValue',
        'newValue',
        'createdBy',
    ];   

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'createdBy');
    }
}
