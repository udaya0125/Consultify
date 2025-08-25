<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogInformationController;
use App\Http\Controllers\OurTeamsInformationController;


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

Route::get('/library/ourteam',function(){
    return Inertia::render("MainDashboard/OurTeamTable");
});

Route::get('/blog/{slug}',[BlogInformationController::class,'showDetails'])->name('blog.showDetails');


Route::get('/blog',function(){
    return  Inertia::render('MainPage/Blog');
});

Route::get('/blogs', [BlogInformationController::class, 'index'])->name('blogs.index');
Route::post('/blogs', [BlogInformationController::class, 'store'])->name('blogs.store');
Route::put('/blogs/{id}', [BlogInformationController::class, 'update'])->name('blogs.update');
Route::delete('/blogs/{id}', [BlogInformationController::class, 'destroy'])->name('blogs.destroy');


Route::get('/team', [OurTeamsInformationController::class, 'index'])->name('team.index');
Route::post('/team', [OurTeamsInformationController::class, 'store'])->name('team.store');
Route::put('/team/{id}', [OurTeamsInformationController::class, 'update'])->name('team.update');
Route::delete('/team/{id}', [OurTeamsInformationController::class, 'destroy'])->name('team.destroy');





require __DIR__.'/auth.php';
