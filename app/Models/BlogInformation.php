<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class BlogInformation extends Model
{
    protected $fillable = [
        'title',
        'image',
        'short_description',
        'long_description',
        'slug',
    ];

    protected static function boot()
    {
        parent::boot();

        // Before creating a new blog
        static::creating(function ($blog) {
            if (empty($blog->slug)) {
                // Temporarily generate slug from title
                $slug = Str::slug($blog->title);

                // Check if the model has an ID yet (it doesn't in creating)
                // So we append a random string for uniqueness
                $slug .= '-' . uniqid();

                // Limit slug length (optional)
                $blog->slug = Str::limit($slug, 60, '');
            }
        });

        // Before updating, regenerate slug if title changes
        static::updating(function ($blog) {
            if ($blog->isDirty('title')) {
                $slug = Str::slug($blog->title) . '-' . $blog->id;
                $blog->slug = Str::limit($slug, 60, '');
            }
        });
    }
}
