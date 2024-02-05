<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;


class PostController extends Controller
{

    public function store(Request $request)
    {
        $data = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);
    
        $post = Post::create($data);
    
        return response()->json(['message' => 'Post created successfully', 'post' => $post]);
    }
    
}







