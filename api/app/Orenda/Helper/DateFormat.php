<?php
namespace App\Orenda\Helper;

class DateFormat
{
    /* Parse to Date only format
     * @param \DateTime image name without folder
     * @return String 02-12-2018
     */
    public static function date(\DateTime $datetime = null)
    {
        $return = null;

        if(empty($datetime))
            $datetime = new \DateTime;

        if(!empty($datetime))
            $return = $datetime->format('d-m-Y');

        return $return;
    }

    // @return 02-12-2018, alias of date()
    public static function shortDate(\DateTime $datetime)
    {
        return self::date($datetime);
    }

    // @return 02 Dec 2018
    public static function mediumDate(\DateTime $datetime)
    {
        $return = null;

        if(!empty($datetime))
            $return = $datetime->format('d M Y');

        return $return;
    }

    // @return 02 December 2018
    public static function fullDate(\DateTime $datetime)
    {
        $return = null;

        if(!empty($datetime))
            $return = $datetime->format('d F Y');

        return $return;
    }

    // @return 24:00
    public static function time(\DateTime $datetime)
    {
        $return = null;

        if(!empty($datetime))
            $return = $datetime->format('H.i') . ' WIB';

        return $return;
    }

    public static function iso(\DateTime $datetime)
    {
        $return = null;

        if(!empty($datetime))
            $return = $datetime->format('Y-m-d');

        return $return;
    }
}

