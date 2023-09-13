@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Añadir habitación
            <a href="{{ route('room.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <form action="{{ route('room.store') }}" method="post">
                    @csrf
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td><input type="text" class="form-control" name="name"/></td>
                   </tr>
                   <tr>
                        <th>Descripción</th>
                        <td><textarea type="text" class="form-control" name="description"></textarea></td>
                   </tr>
                   <tr>
                        <th>Alojamiento</th>
                        <td><select name="id_house" required class="form-control" id="house">
                            @foreach ($houses as $house)
                                <option value="{{ $house->id }}">{{ $house->name }}</option>
                            @endforeach
                            </select>
                        </td>
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
