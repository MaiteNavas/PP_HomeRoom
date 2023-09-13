<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $table = 'room';
    protected $guarded = [];
    public $timestamps = false;
    protected $fillable =[
        "id_house",
        "name",
        "description",
        
    ];
    function house(){
        return $this->belongsTo(House::class,'id_house');
    }
}
