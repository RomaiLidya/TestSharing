<?php

namespace App\Http\Resources;

use App\Models\Pemeriksaan as PemeriksaanApp;
use Aws\S3\S3Client;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class Pemeriksaan extends JsonResource
{
    public function foo($value)
    {
        $this->foo = $value;
        return $this;
    }
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = collect($this->productImages)->map(function ($collection, $key) {
            $collect = (object) $collection;

            $s3Client = S3Client::factory([
                'credentials' => [
                    'key' => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ],
                'version' => 'latest',
                'signature_version' => 'v4',
                'region' => env('AWS_REGION'),
            ]);

            $options = [
                'Bucket' => env('AWS_BUCKET'),
                'Key' => env('APP_ENV') . '/' . $collect->path,
            ];

            $cmd = $s3Client->getCommand('GetObject', $options);

            if (!empty($this->foo) && $this->foo === 'create') {
                $cmd = $s3Client->getCommand('PutObject', $options);
            }

            $request = $s3Client->createPresignedRequest($cmd, '+20 minutes');
            $presignedUrl = (string) $request->getUri();

            $collect->url = $presignedUrl;
            return $collect;
        });

        $productPrice = $this->productPrices;
 



        return [
            'id' => $this->id,
            'dokter' => $this->dokter,
            'diagnosa' => $this->diagnosa,
            'tindakan' => $this->tindakan,
            'pengobatan' => $this->pengobatan,
            'Daftar' => new Daftar($this->daftar),
            'new' => (date_diff(date_create(date('Y-m-d', strtotime($this->createdAt))), date_create(date('Y-m-d'))))->format('%a') <= 30
        ];
    }
}
