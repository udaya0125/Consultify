<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OurTeamsInformation extends Model
{
    //
    protected $fillable=[
        'name','position','qualification','experience','facebook_link','whatsapp_link','phone_number','instagram_link','image'
    ];
}
