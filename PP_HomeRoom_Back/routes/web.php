<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\Auth\LoginRegisterController;


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
    return view('home');
});
Route::get('admin/house/{house}/delete',[HouseController::class, 'destroy'])->name('house.delete');
Route::resource('admin/house',HouseController::class);

Route::get('admin/room/{room}/delete',[RoomController::class, 'destroy'])->name('room.delete');
Route::resource('admin/room',RoomController::class);

Route::get('admin/customer/{id}/delete',[CustomerController::class, 'destroy'])->name('customer.delete');
Route::resource('admin/customer',CustomerController::class);

Route::get('admin/booking/{id}/delete',[BookingController::class, 'destroy'])->name('booking.delete');
Route::resource('admin/booking',BookingController::class);
//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
 
Route::controller(LoginRegisterController::class)->group(function() {
    Route::get('/register', 'register')->name('register');
    Route::post('/store', 'store')->name('store');
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/admin', 'admin')->name('admin');
    Route::post('/logout', 'logout')->name('logout');
});