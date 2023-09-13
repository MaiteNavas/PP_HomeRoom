@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">ID Alojamiento: {{ $house->id }}
            <a href="{{ route('house.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td>{{ $house->name }}</td>
                   </tr>
                   <tr>
                        <th>Descripción</th>
                        <td>{{ $house->description }}</td>
                   </tr>
                   <tr>
                        <th>Localidad</th>
                        <td>{{ $house->city }}</td>
                   </tr>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
