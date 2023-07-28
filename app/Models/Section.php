<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    // use Translatable;
    use HasFactory;
    // public $translatedAttributes = ['name'];
    protected $fillable = ['name'];

    public function doctor()
    {
        return $this->hasMany(Doctor::class);
    }
}

