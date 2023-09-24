<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\BookingStatusController;

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
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
Route::controller(CustomerController::class)->group(function (){
    Route::get('/admin/customer', 'index');
    Route::post('/admin/customer', 'store');
    Route::get('/admin/customer/{id}', 'show');
    Route::put('/admin/customer/{id}', 'update');
    Route::delete('/admin/customer/{id}', 'destroy');
});
Route::controller(BookingController::class)->group(function (){
    Route::get('/admin/booking', 'index');
    Route::post('/admin/booking', 'store');
    Route::get('/admin/booking/{id}', 'show');
    Route::put('/admin/booking/{id}', 'update');
    Route::delete('/admin/booking/{id}', 'destroy');
});
Route::controller(BookingStatusController::class)->group(function (){
    Route::get('/admin/booking_status', 'index');
    Route::post('/admin/booking_status', 'store');
    Route::get('/admin/booking_status/{id}', 'show');
    Route::put('/admin/booking_status/{id}', 'update');
    Route::delete('/admin/booking_status/{id}', 'destroy');
});