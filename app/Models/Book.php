<?php
namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'articles';
    protected $fillable = [
        'name',
        'detail'
    ];
}