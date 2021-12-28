<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Daftar extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'NIK' => $this->NIK,
            'namapasien' => $this->namapasien,
            'alamat' => $this->alamat,
            'tanggallahir' => $this->tanggallahir,
            'telepon' => $this->telepon,
            // 'tanggalkunjungan' => $this->tanggalkunjungan,
            // 'politujuan' => $this->politujuan,
            // 'keluhan' => $this->keluhan,
            // 'jenisPembayaran' => $this->jenisPembayaran,
        ];
    }
}
