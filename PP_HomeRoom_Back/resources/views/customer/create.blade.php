@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Añadir cliente
            <a href="{{ route('customer.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <form action="{{ route('customer.store') }}" method="post">
                    @csrf
                <table class="table table-bordered" >
                   <tr>
                        <th>Nombre</th>
                        <td><input type="text" class="form-control" name="name"/></td>
                   </tr>
                   <tr>
                        <th>Apellidos</th>
                        <td><textarea type="text" class="form-control" name="family_name"></textarea></td>
                   </tr>
                   <tr>
                        <th>Email</th>
                        <td><input type="text" class="form-control" name="email"/></td>
                   </tr>
                   <tr>
                        <th>Teléfono</th>
                        <td><input type="text" class="form-control" name="phone"/></td>
                   </tr>
                   <tr>
                        <th>Dirección</th>
                        <td><input type="text" class="form-control" name="address"/></td>
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
