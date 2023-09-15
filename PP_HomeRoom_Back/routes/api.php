<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HouseController;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\LoginRegisterController;

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

Route::controller(HouseController::class)->group(function (){
    Route::get('/admin/house', 'index');
    Route::post('/admin/house', 'store');
    Route::get('/admin/house/{id}', 'show');
    Route::put('/admin/house/{id}', 'update');
    Route::delete('/admin/house/{id}', 'destroy');
});
Route::controller(RoomController::class)->group(function (){
    Route::get('/admin/room', 'index');
    Route::post('/admin/room', 'store');
    Route::get('/admin/room/{id}', 'show');
    Route::put('/admin/room/{id}', 'update');
    Route::delete('/admin/room/{id}', 'destroy');
});
Route::controller(LoginRegisterController::class)->group(function() {
    Route::get('/register', 'register')->name('register');
    Route::post('/store', 'store')->name('store');
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/admin', 'admin')->name('admin');
    Route::post('/logout', 'logout')->name('logout');
});