<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Models\House;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::all();

        return $rooms;
    }
    public function store(Request $request)
    {
        $room = Room::create([
            'name' => $request->name,
            'description' => $request->description,
            'id_house' => $request->id_house,
            'price' => $request->price,   
        ]);

        return $room;
    }
    public function show($id)
    {
        $room = Room::find($id);

        return $room;
    }
    public function edit($id)
    {
        $room = Room::find($id);
        $houses = House::all();
        
        return $room;
    }
    public function update(Request $request)
    {
        $room = House::findorFail($request->id);
        $room->update([
            'id_house' => $request->id_house,
            'name' => $request->name,
            'description' => $request->description, 
            'price' => $request->price,   
        ]);

        return $room;
    }
    public function destroy($id)
    {
        $room = Room::where('id',$id)->delete();

        return $room;
    }
}
