@extends('Dashboard.layouts.master')

@section('title')
    Insurances
@stop

@section('css')

@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Insurances
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard.admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Insurances</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Insurances List <small>{{ $insurances->count() }}</small></h3>
            <br><br>
            <a href="{{ route('insurances.create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Add</a>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Company Code</th>
                <th>Discount Percentage</th>
                <th>Insurance Bearing Percentage</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($insurances as $insurance)
              <tr>
                <td>{{ $loop->index + 1 }}</td>
                <td>{{ $insurance->name }}</td>
                <td>{{ $insurance->insurance_code }}</td>
                <td>{{ $insurance->discount_percentage }}</td>
                <td>{{ $insurance->company_rate }}</td>
                <td>{{ $insurance->status == 1 ? 'Active' : 'Inactive' }}</td>
                <td>{{ $insurance->notes }}</td>
                <td>
                    <a href="{{ route('insurances.edit', $insurance->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $insurance->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.insurances.delete')
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
