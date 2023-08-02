@extends('Dashboard.layouts.master')

@section('title')
    Ambulances
@stop

@section('css')

@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Ambulances
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard.admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Ambulances</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Ambulances List <small>{{ $ambulances->count() }}</small></h3>
            <br><br>
            <a href="{{ route('ambulances.create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Add</a>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Ambulance number</th>
                <th>Ambulance model</th>
                <th>Manufacturing year</th>
                <th>Ambulance type</th>
                <th>Driver's name</th>
                <th>License number</th>
                <th>Phone</th>
                <th>Ambulance status</th>
                <th>Notes</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($ambulances as $ambulance)
              <tr>
                <td>{{ $loop->index + 1 }}</td>
                <td>{{ $ambulance->car_number }}</td>
                <td>{{ $ambulance->car_model }}</td>
                <td>{{ $ambulance->car_year_made }}</td>
                <td>{{ $ambulance->car_type == 1 ? 'Owned' : 'Rent' }}</td>
                <td>{{ $ambulance->driver_name }}</td>
                <td>{{ $ambulance->driver_license_number }}</td>
                <td>{{ $ambulance->driver_phone }}</td>
                <td>{{ $ambulance->is_available == 1 ? 'Active' : 'Inactive' }}</td>
                <td>{{ $ambulance->notes }}</td>
                <td>
                    <a href="{{ route('ambulances.edit', $ambulance->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $ambulance->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.ambulances.delete')
              @endforeach
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</div>


@endsection


@section('scripts')

@endsection
