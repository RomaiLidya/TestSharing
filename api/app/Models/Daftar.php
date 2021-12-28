<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Daftar extends Model
{

    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $table = 'Daftar';

    protected $primaryKey = 'id';

    protected $fillable = [
        'namapasien', 'alamat', 'tanggallahir', 'telepon', 
        // 'tanggalkunjungan','politujuan', 'keluhan', 'jenispembayaran',
    ];

    protected $guarded = [];

    public function pemeriksaan()
    {
        return $this->belongsTo(Pemeriksaan::class);
    }
}
