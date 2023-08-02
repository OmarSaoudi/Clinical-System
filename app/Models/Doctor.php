<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Doctor extends Authenticatable
{
    use HasFactory;

    public $fillable= ['email','email_verified_at','password','phone','name','status'];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function day()
    {
        return $this->belongsToMany(Day::class,'doctor_day');
    }

}
