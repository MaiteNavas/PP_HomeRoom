@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">HABITACIONES
            <a href="{{ route('room.create') }}" class="float-right btn btn-success btn-sm">Añadir habitación</a>
            </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Alojamiento</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Alojamiento</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @foreach($rooms as $room)
                        <tr>
                            <td>{{ $room->id }}</td>
                            <td>{{ $room->name }}</td>
                            <td>{{ $room->house->name }}</td>
                            <td>{{ $room->price }}</td>
                            <td>
                                <a href="{{ route('room.show',$room->id) }}" class="btn btn-info btn-sm">Ver</a>
                                <a href="{{ route('room.edit',$room->id) }}" class="btn btn-primary btn-sm">Editar</a>  
                                <!-- Button trigger modal -->
                                <a class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</a>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar la habitación?</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Una vez eliminado no se podrá recuperar.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <a href="{{ route('room.delete',$room->id)}}" class="btn btn-danger">Eliminar</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
