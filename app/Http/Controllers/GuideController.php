<?php
namespace App\Http\Controllers;

use App\Models\Guide;
use Illuminate\Http\Request;

class GuideController extends Controller
{
    public function show($slug)
    {
        // return view('post', [
        //     'post' => Guide::where('slug', '=', $slug)->first()
        // ]);
        // return response()->json(["result" => "ok"], 201);
        return response()->json(['status' => "success", 'result' => Guide::where('slug', '=', $slug)->first()]);
    }

    public function store(Request $request)
    {
        $post = new Guide;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->slug = $request->slug;
        $post->save();

        return response()->json(["result" => "ok"], 201);
    }

}