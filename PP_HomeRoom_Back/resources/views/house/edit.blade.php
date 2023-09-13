@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Editar alojamiento
            <a href="{{ route('house.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <form action="{{ route('house.update',$house->id)}}" method="post">
                    @csrf
                    @method('PUT')
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td><input type="text" value ="{{ $house->name }}" class="form-control" name="name"/></td>
                   </tr>
                   <tr>
                        <th>Descripción</th>
                        <td><textarea type="text" class="form-control" name="description">{{ $house->description }}</textarea></td>
                   </tr>
                   <tr>
                        <th>Localidad</th>
                        <td><input type="text" value ="{{ $house->city }}"class="form-control" name="city"/></td>
                   </tr>
                   <tr>
                        <td colspan="2">
                            <input type="submit" class="btn btn-primary">
                        </td>
                   </tr>
                </table>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
