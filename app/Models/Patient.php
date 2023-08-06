<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Patient extends Authenticatable
{
    use HasFactory;

    public $fillable= ['name','address','email','password','date_birth','phone','gender_id','blood_id','status'];

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function blood()
    {
        return $this->belongsTo(Blood::class);
    }
}
