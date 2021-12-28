<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Pemeriksaan extends Model
{

    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $table = 'Pemeriksaan';

    protected $primaryKey = 'id';

    protected $fillable = [
        'daftarId',
        'dokter',
        'diagnosa',
        'tindakan',
        'pengobatan',
    ];

    protected $guarded = [];

 
     public function Daftar()
    {
        return $this->hasOne(Daftar::class, 'id', 'DaftarId');
    }

  
}
