<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = 'booking';
    protected $guarded = [];
    public $timestamps = false;
    protected $fillable =[
        "id_customer",
        "id_room",
        "id_booking_status",
        "checkin_date",
        "checkout_date",
        "total_adults",
        "total_children",
        "price"
    ];

    function booking_status(){
        return $this->belongsTo(BookingStatus::class,'id_booking_status');
    }
    function customer(){
        return $this->belongsTo(Customer::class,'id_customer');
    }
    function room(){
        return $this->belongsTo(Room::class,'id_room');
    }
}
