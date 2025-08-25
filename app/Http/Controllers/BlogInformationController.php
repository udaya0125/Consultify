<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogInformation;
use Inertia\Inertia;

class BlogInformationController extends Controller
{
    //
    /**
     * Display a listing of the blogs.
     */
    public function index()
    {
        $blogs = BlogInformation::latest()->paginate(10); // Paginate (10 per page)
        return response()->json($blogs);
    }

    /**
     * Store a newly created blog in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'             => 'required|string|max:255',
            'image'             => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'short_description' => 'required|string|max:500',
            'long_description'  => 'required|string',
        ]);

        $data = $request->only(['title', 'short_description', 'long_description']);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blogs', 'public');
            $data['image'] = $imagePath;
        }

        $blog = BlogInformation::create($data);

        return response()->json([
            'message' => 'Blog created successfully!',
            'data'    => $blog
        ], 201);
    }

    /**
     * Update the specified blog in storage.
     */
    public function update(Request $request, $id)
    {
        $blog = BlogInformation::findOrFail($id);

        $request->validate([
            'title'             => 'sometimes|required|string|max:255',
            'image'             => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'short_description' => 'sometimes|required|string|max:500',
            'long_description'  => 'sometimes|required|string',
        ]);

        $data = $request->only(['title', 'short_description', 'long_description']);

        // Handle image update
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blogs', 'public');
            $data['image'] = $imagePath;
        }

        $blog->update($data);

        return response()->json([
            'message' => 'Blog updated successfully!',
            'data'    => $blog
        ]);
    }

    /**
     * Remove the specified blog from storage.
     */
    public function destroy($id)
    {
        $blog = BlogInformation::findOrFail($id);
        $blog->delete();

        return response()->json([
            'message' => 'Blog deleted successfully!'
        ]);
    }
    public function showDetails($slug)
    {
        $blog=BlogInformation::where('slug',$slug)->firstOrFail();
        return Inertia::render('MainPage/BlogDetails',['blog'=>$blog]);
    }
}
