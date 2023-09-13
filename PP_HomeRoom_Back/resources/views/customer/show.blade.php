@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">ID Cliente: {{ $customer->id }}
            <a href="{{ route('customer.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td>{{ $customer->name }}</td>
                   </tr>
                   <tr>
                        <th>Apellidos</th>
                        <td>{{ $customer->family_name }}</td>
                   </tr>
                   <tr>
                        <th>Email</th>
                        <td>{{ $customer->email }}</td>
                   </tr>
                   <tr>
                        <th>Teléfono</th>
                        <td>{{ $customer->phone }}</td>
                   </tr>
                   <tr>
                        <th>Dirección</th>
                        <td>{{ $customer->address }}</td>
                   </tr>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
