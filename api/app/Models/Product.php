<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{

    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $table = 'Product';

    protected $primaryKey = 'id';

    protected $fillable = [
        'productName',
        'productCode',
        'sellingPrice',
        'purchasePrice',
        'CategoryId',
        'description',
        'typeUnit',
        'totalStock',
        'totalDamage',
        'totalReturn',
        'minimumStock',
        'isReminder',
        'holdItem',
        'isDeleted',
        'deletedAt',
    ];

    protected $guarded = [];

    protected $attributes = [
        'description' => null,
        'sellingPrice' => 0,
        'purchasePrice' => 0,
        'typeUnit' => 'PCS',
        'totalStock' => 0,
        'minimumStock' => 0,
        'isReminder' => false,
        'isDeleted' => false,
    ];

     public function category()
    {
        return $this->hasOne(Category::class, 'id', 'CategoryId');
    }

    public function productImage()
    {
        return $this->hasOne(ProductImages::class, 'ProductId', 'id');
    }

    public function productImages()
    {
        return $this->hasMany(ProductImages::class, 'ProductId', 'id');
    }

    public function productPrices()
    {
        return $this->hasMany(ProductPrice::class, 'ProductId', 'id')->where('ProductPrice.isDeleted', false);
    }

    public function stockItems()
    {
        return $this->hasMany(StockItem::class, 'ProductId', 'id');
    }


}
