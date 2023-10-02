<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;
    protected $table = 'house';
    protected $guarded = [];
    public $timestamps = false;
    protected $fillable =[
        "name",
        "description",
        "city",
    ];
    function room(){
        return $this->hasMany(House::class);
    }
}
