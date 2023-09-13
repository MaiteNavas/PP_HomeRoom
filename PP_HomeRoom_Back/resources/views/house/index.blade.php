@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">ALOJAMIENTOS
            <a href="{{ route('house.create') }}" class="float-right btn btn-success btn-sm">Añadir alojamiento</a>
            </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Description</th>
                            <th>Localidad</th>
                            <th>Acciones</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        @foreach($houses as $house)
                        <tr>
                            <td>{{$house->id}}</td>
                            <td>{{$house->name}}</td>
                            <td>{{$house->description}}</td>
                            <td>{{$house->city}}</td>
                            <td>
                                <a href="{{ route('house.show',$house->id)}}" class="btn btn-info btn-sm">Ver</a>
                                <a href="{{ route('house.edit',$house->id)}}" class="btn btn-primary btn-sm">Editar</a>  
                                <!-- Button trigger modal -->
                                <a class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</a>
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar el alojamiento?</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Una vez eliminado no se podrá recuperar.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <a href="{{ route('house.delete',$house->id)}}" class="btn btn-danger">Eliminar</a>
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
