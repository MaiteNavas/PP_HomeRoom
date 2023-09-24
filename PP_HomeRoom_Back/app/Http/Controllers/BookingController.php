<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;


class BookingController extends Controller
{

    public function index()
    {
            $bookings = Booking::with('room', 'customer', 'booking_status')->get();
    
            return response()->json(['data' => $bookings], 200);
    }
    
    public function store(Request $request)
    {
        $booking = Booking::create([
            'id_customer' => $request->id_customer,
            'id_room' => $request->id_room,
            'checkin_date' => $request->checkin_date,
            'checkout_date' => $request->checkout_date,
            'total_adults' => $request->total_adults,
            'total_children' => $request->total_children,
            'price' => $request->price,
        ]);

        return $booking;
    }
    public function show($id)
    {
        $booking = Booking::find($id);

        return $booking;
    }
    public function update(Request $request)
    {
        $booking = Booking::findorFail($request->id);
        $booking->update([
            'id_customer' => $request->id_customer,
            'id_room' => $request->id_room,
            'id_booking_status' => $request->id_booking_status,
            'checkin_date' => $request->checkin_date,
            'checout_date' => $request->checkout_date,
            'total_adults' => $request->total_adults,
            'total_children' => $request->total_children,
            'price' => $request->price,
        ]);
        return $booking;
    }
    public function destroy($id)
    {
        $booking = Booking::where('id',$id)->delete();

        return $booking;
    }
}
