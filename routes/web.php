<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

\Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');



//Users routes
Route::get('/api/users', [UserController::class, 'index']);
Route::put('/api/users/{user}', [UserController::class, 'update']);



// Posts routes
Route::post('/api/posts', [PostController::class, 'store']);

