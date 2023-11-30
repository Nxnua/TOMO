<?php
namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Guide extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'guides';
    // protected $fillable = [
    //     'name',
    //     'description',
    //     'image',
    //     'views'
    // ];
}


// {
//     id: 1,
//     name: "Zoloo",
//     description:
//         "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id felis turpis. Integer sit amet nibh non ligula vehicula pulvinar sed eget neque. Proin aliquet tincidunt lectus. In tempor, metus eu vestibulum fermentum, ipsum libero tristique sapien, eget efficitur mauris lorem nec eros. ",
//     image: "/images/profile3.jpg",
//     review: "47 view",
//     star: "4.5",
// },