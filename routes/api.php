<?php

use App\Http\Controllers\GuideController;
use App\Models\Guide;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// $post = new Post;

// $post->title = $request->title;
// $post->body = $request->body;
// $post->slug = $request->slug;

// $post->save();

// return response()->json(["result" => "ok"], 201);


// Route::resource('posts', PostController::class)->only([
//     'destroy', 'show', 'store', 'update'
//  ]);

Route::get('/test_guide/', function (Request $request) {
    $new_guide = new Guide;
    $new_guide->name = 'Zoloo';
    $new_guide->description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id felis turpis. Integer sit amet nibh non ligula vehicula pulvinar sed eget neque. Proin aliquet tincidunt lectus. In tempor, metus eu vestibulum fermentum, ipsum libero tristique sapien, eget efficitur mauris lorem nec eros. ';
    $new_guide->image = '/images/profile3.jpg';
    $new_guide->review = [];
    $new_guide->rate = '4.5';
    $new_guide->save();
    return response()->json(['status' => "success", 'result' => $new_guide], 201);
});

Route::get('/test_trip/', function (Request $request) {
    $new_trip = new Trip;
    $new_trip->title = "Overnight Semi-Gobi Tour";
    $new_trip->location = "Elsen Tasarkhai sand dunes, nomadic family, wild horses in Hustai National Park";
    $new_trip->image = "/images/semi-gobi.png";
    $new_trip->price = 200;
    $new_trip->discount = 25;
    $new_trip->duration = "2 days and 1 night";
    $new_trip->review = 40;
    $new_trip->rating = 4.5;
    $new_trip->stars = "";
    $new_trip->discount = 25;
    $new_trip->duration = "2 days and 1 night";
    $new_trip->review = 40;
    $new_trip->rating = 4.5;
    $new_trip->star = "";
    $new_trip->save();
    return response()->json(['status' => "success", 'result' => $new_trip], 201);
});

Route::get('/guide/{slug}', function (Request $request) {
    $slug = $request->slug;
    $guide = Guide::where('slug', $slug)->get();
    return ['status' => "success", 'result' => $guide];
});

Route::get('/guides', function (Request $request) {
    $limit = $request->input('limit');
    $offset = $request->input('offset');
    if (is_numeric($limit) && is_numeric($offset)) {
        $guides = Guide::skip($offset)
            ->take($limit)->get();
    } else {
        $guides = Guide::all();
    }

    return response()->json(['status' => "success", 'result' => $guides], 201);
});


Route::get('/trip/{slug}', function (Request $request) {
    $slug = $request->slug;
    $trip = Trip::where('slug', $slug)->get();
    return ['status' => "success", 'result' => $trip];
});


Route::get('/trips', function (Request $request) {
    $limit = $request->input('limit');
    $offset = $request->input('offset');
    if (is_numeric($limit) && is_numeric($offset)) {
        $guides = Trip::skip($offset)
            ->take($limit)->get();
    } else {
        $guides = Trip::all();
    }

    return response()->json(['status' => "success", 'result' => $guides], 201);
});


// Route::resource('guides', GuideController::class)->only([
//     'show',
//     'store',
// ]);

Route::get('/ping', function (Request $request) {
    $connection = DB::connection('mongodb');
    $msg = 'MongoDB is accessible!';
    try {
        $connection->command(['ping' => 1]);
    } catch (\Exception $e) {
        $msg = 'MongoDB is not accessible. Error: ' . $e->getMessage();
    }
    return ['msg' => $msg];
});