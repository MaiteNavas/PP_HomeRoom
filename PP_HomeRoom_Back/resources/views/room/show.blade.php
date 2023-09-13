@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">ID Habitación: {{ $room->id }}
            <a href="{{ route('house.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td>{{ $room->name }}</td>
                   </tr>
                   <tr>
                        <th>Descripción</th>
                        <td>{{ $room->description }}</td>
                   </tr>
                   <tr>
                        <th>Alojamiento</th>
                        <td>{{ $room->house->name }}</td>
                   </tr>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
