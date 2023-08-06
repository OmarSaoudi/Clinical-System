@extends('Dashboard.layouts.master')

@section('title')
    Patients
@stop

@section('css')

@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Patients
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard.admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Patients</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Patients List <small>{{ $patients->count() }}</small></h3>
            <br><br>
            <a href="{{ route('patients.create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Add</a>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Blood</th>
                <th>Date</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($patients as $patient)
              <tr>
                <td>{{ $loop->index + 1 }}</td>
                <td>{{ $patient->name }}</td>
                <td>{{ $patient->email }}</td>
                <td>{{ $patient->gender->name }}</td>
                <td>{{ $patient->blood->name }}</td>
                <td>{{ $patient->date_birth }}</td>
                <td>{{ $patient->address }}</td>
                <td>{{ $patient->phone }}</td>
                <td>
                    {{ $patient->status == 1 ? 'Active' : 'Inactive' }}
                </td>
                <td>{{ $patient->created_at->diffForHumans() }}</td>
                <td>
                    <a href="{{ route('patients.edit', $patient->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-warning btn-sm" data-toggle="modal" data-target="#update_status{{ $patient->id }}"><i class="fa fa-wrench"></i></a>
                    <a class="btn btn-info btn-sm" data-toggle="modal" data-target="#update_password{{ $patient->id }}"><i class="fa fa-key"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $patient->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.patients.delete')
              @include('Dashboard.patients.update_password')
              @include('Dashboard.patients.update_status')
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
<script>
    $(function() {
        jQuery("[name=select_all]").click(function(source) {
            checkboxes = jQuery("[name=delete_select]");
            for(var i in checkboxes){
                checkboxes[i].checked = source.target.checked;
            }
        });
    })
</script>
<script type="text/javascript">
    $(function () {
        $("#btn_delete_all").click(function () {
            var selected = [];
            $("#example input[name=delete_select]:checked").each(function () {
                selected.push(this.value);
            });

            if (selected.length > 0) {
                $('#delete_select').modal('show')
                $('input[id="delete_select_id"]').val(selected);
            }
        });
    });
</script>
@endsection
