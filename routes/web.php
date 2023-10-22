<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/login', [AuthController::class, 'loginPage'])
    ->name('login-page')
    ->middleware('apiGuest');

Route::get('/register', [AuthController::class, 'registerPage'])
    ->name('register-page')
    ->middleware('apiGuest');

Route::post('/login', [AuthController::class, 'login'])
    ->name('auth.login')
    ->middleware('apiGuest');

Route::post('/register', [AuthController::class, 'register'])
    ->name('auth.register')
    ->middleware('apiGuest');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/aboutme', function () {
    return Inertia::render('Aboutme');
})->name('aboutme');

Route::get('/cv', function () {
    return Inertia::render('Cv');
})->name('cv');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::middleware(['apiAuth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
