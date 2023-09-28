<?php

namespace App\Http\Controllers;


use App\Models\Customer;
use Illuminate\Http\Request;


class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();

        return response()->json(['data' => $customers], 200);
    }
    public function create()
    {
        return view('customer.create');
    }
    public function store(Request $request)
    {
       $customer = Customer::create([
            'name' => $request->name,
            'family_name' => $request->family_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            
        ]);
        return $customer;
    }
    public function show($id)
    {
        $customer = Customer::find($id);

        return $customer;
    }
    public function edit($id)
    {
        $customer = Customer::find($id);

        return $customer;
    }
    public function update(Request $request)
    {
        $customer= Customer::findorFail($request->id);
        $customer->update([
            'name' => $request->name,
            'family_name' => $request->family_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,   
        ]);

        return $customer;
    }
    public function destroy($id)
    {
        $customer = Customer::where('id',$id)->delete();

        return $customer;
    }
}
