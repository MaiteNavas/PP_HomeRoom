<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();

        return view('customer.index', compact('customers'));
    }
    public function create()
    {
        return view('customer.create');
    }
    public function store(Request $request)
    {
        Customer::create([
            'name' => $request->name,
            'family_name' => $request->family_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            
        ]);

        return redirect('admin/customer');
    }
    public function show($id)
    {
        $customer = Customer::find($id);

        return view('customer.show', compact('customer'));
    }
    public function edit($id)
    {
        $customer = Customer::find($id);

        return view('customer.edit', compact('customer'));
    }
    public function update(Request $request, Customer $customer)
    {
        $customer->update([
            'name' => $request->name,
            'family_name' => $request->family_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,   
        ]);

        return redirect('admin/customer');
    }
    public function destroy($id)
    {
        Customer::where('id',$id)->delete();

        return redirect('admin/customer');
    }
}
