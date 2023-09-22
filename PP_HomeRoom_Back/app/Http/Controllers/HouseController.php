<?php

namespace App\Http\Controllers;


use App\Models\House;
use Illuminate\Http\Request;

class HouseController extends Controller
{
    public function index()
    {
        $houses = House::all();

        return $houses;
    }
    public function store(Request $request)
    {
        $house = House::create([
            'name' => $request->name,
            'description' => $request->description,
            'city' => $request->city,
        ]);

        return $house;
    }
    public function show($id)
    {
        $house = House::find($id);

        return $house;
    }
    public function update(Request $request)
    {
        $house = House::findorFail($request->id);
        $house->update([
            'name' => $request->name,
            'description' => $request->description,
            'city' => $request->city,
        ]);
        return $house;
    }
    public function destroy($id)
    {
        $house = House::where('id',$id)->delete();

        return $house;
    }
}
