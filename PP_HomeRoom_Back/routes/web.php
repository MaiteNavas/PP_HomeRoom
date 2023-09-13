<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\RoomController;

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
Route::get('admin', function () {
    return view('dashboard');
});
Route::get('admin/house/{house}/delete',[HouseController::class, 'destroy'])->name('house.delete');
Route::resource('admin/house',HouseController::class);

Route::get('admin/room/{room}/delete',[RoomController::class, 'destroy'])->name('room.delete');
Route::resource('admin/room',RoomController::class);
//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
