<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookingStatus;

class BookingStatusController extends Controller
{
    public function index()
    {
        $bookings_status = BookingStatus::all();

        return response()->json(['data' => $bookings_status], 200);
    }
}
