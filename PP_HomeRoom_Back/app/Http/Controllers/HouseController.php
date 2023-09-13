<?php

namespace App\Http\Controllers;

use App\Models\House;
use Illuminate\Http\Request;

class HouseController extends Controller
{
    public function index()
    {
        $houses = House::all();

        return view('house.index', compact('houses'));
    }
    public function create()
    {
        return view('house.create');
    }
    public function store(Request $request)
    {
        House::create([
            'name' => $request->name,
            'description' => $request->description,
            'city' => $request->city,
        ]);

        return redirect('admin/house');
    }
    public function show($id)
    {
        $house = House::find($id);

        return view('house.show', compact('house'));
    }

    public function edit($id)
    {
        $house = House::find($id);
        return view('house.edit', compact('house'));
    }
    public function update(Request $request, House $house)
    {
        $house->update([
            'name' => $request->name,
            'description' => $request->description,
            'city' => $request->city,
        ]);

        return redirect('admin/house');
    }
    public function destroy($id)
    {
        House::where('id',$id)->delete();

        return redirect('admin/house');
    }
}
