<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HouseController;

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