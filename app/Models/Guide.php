<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Guide extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'guides';
    protected $fillable = [
        'name',
        'description',
        'image',
        'review',
        "rate"
    ];


}
