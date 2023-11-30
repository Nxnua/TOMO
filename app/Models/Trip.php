<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'trips';
    protected $fillable = [
        "title",
        "location",
        "image",
        "price",
        "discount",
        "duration",
        "review",
        "rating",
        "stars",
        "discount",
        "duration",
        "review",
        "rating",
        "star"
    ];


}

