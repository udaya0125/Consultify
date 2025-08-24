<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/analytics',function(){
        return Inertia::render('MainDashboard/Analytics');
    });
});


// MainPage Routes:

Route::get('/home',function(){
    return Inertia:: render('HomePage/Home');
});
// route for the About Us Page
Route::get('/aboutus',function(){
    return Inertia:: render('MainPage/AboutUsPage');
});

Route::get('/library/blog',function(){
    return  Inertia::render('MainDashboard/BlogTableDetails');
});


Route::get('/blog',function(){
    return  Inertia::render('MainPage/BlogDetails');
});

require __DIR__.'/auth.php';
