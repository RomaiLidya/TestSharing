<?php
namespace App\Orenda\Helper;

class NumberFormat
{
    public static function currency($number, $prefix = 'Rp')
    {
        $return = (float) $number;
        $return = $prefix . ' ' . number_format($return);
        return $return;
    }
}

