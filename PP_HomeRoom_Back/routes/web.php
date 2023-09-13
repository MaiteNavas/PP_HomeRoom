<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\CustomerController;

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

Route::get('admin/customer/{id}/delete',[CustomerController::class, 'destroy'])->name('customer.delete');
Route::resource('admin/customer',CustomerController::class);
//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::view('/login',"login")->name('login');
Route::view('/registro',"register")->name('registro');
Route::view('/privada',"secret")->name('privada');

Route::post('/validar-registro', [LoginController::class, 'register'])->name('validar-registro');
Route::post('/inicia-sesion', [LoginController::class, 'login'])->name('inicia-sesion');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');