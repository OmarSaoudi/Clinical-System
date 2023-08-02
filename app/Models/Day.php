<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    use HasFactory;

    public $fillable= ['name'];

    public function doctor()
    {
        return $this->belongsToMany(Doctor::class,'doctor_day');
    }
}
