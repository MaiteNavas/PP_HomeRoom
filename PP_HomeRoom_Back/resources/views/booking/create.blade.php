@extends('layouts.app')
@section('content')

<div class="container fluid">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Añadir reserva
            <a href="{{ route('booking.index') }}" class="float-right btn btn-success btn-sm">Volver</a>
            </h6>
        </div>
        <div class="card-body"> 
            <div class="table-responsive">
                <form action="{{ route('booking.store') }}" method="post">
                    @csrf
                <table class="table table-bordered" >
                <tr>
                        <th>Cliente</th>
                        <td><select name="id_customer" required class="form-control" id="customer">
                            @foreach ($customers as $customer)
                                <option value="{{ $customer->id }}">{{ $customer->name }}{{ $customer->family_name }}</option>
                            @endforeach
                            </select>
                        </td>
                   </tr>
                   <tr>
                        <th>Check-in</th>
                        <td><input type="date" class="form-control" name="checkin_date"></input></td>
                   </tr>
                   <tr>
                        <th>Check-out</th>
                        <td><input type="date" class="form-control" name="checkout_date"></input></td>
                   </tr>
                   <tr>
                        <th>Habitaciones disponibles</th>
                        <td><select name="id_room" required class="form-control" id="customer">
                            @foreach ($rooms as $room)
                                <option value="{{ $room->id }}">{{ $room->name }}</option>
                            @endforeach
                            </select>
                        </td>
                   </tr>
                   <tr>
                        <th>Adultos</th>
                        <td><input type="text" class="form-control" name="total_adults"></input></td>
                   </tr>
                   <tr>
                        <th>Niños</th>
                        <td><input type="text" class="form-control" name="total_children"></input></td>
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
