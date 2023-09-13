<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\House;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::all();

        return view('room.index', compact('rooms'));
    }
    public function create()
    {
        $houses = House::all();
        return view('room.create', compact('houses'));
    }
    public function store(Request $request)
    {
        Room::create([
            'id_house' => $request->id_house,
            'name' => $request->name,
            'description' => $request->description,
            
        ]);

        return redirect('admin/room');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $room = Room::find($id);

        return view('room.show', compact('room'));
    }
    public function edit($id)
    {
        $room = Room::find($id);
        $houses = House::all();
        
        return view('room.edit', compact('room','houses'));
    }
    public function update(Request $request, Room $room)
    {
        $room->update([
            'id_house' => $request->id_house,
            'name' => $request->name,
            'description' => $request->description,
            
        ]);

        return redirect('admin/room');
    }
    public function destroy($id)
    {
        Room::where('id',$id)->delete();

        return redirect('admin/room');
    }
}
