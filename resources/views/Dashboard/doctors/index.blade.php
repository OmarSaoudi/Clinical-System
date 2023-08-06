@extends('Dashboard.layouts.master')

@section('title')
    Doctors
@stop

@section('css')

@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Doctors
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard.admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Doctors</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Doctors List <small>{{ $doctors->count() }}</small></h3>
            <br><br>
            <a href="{{ route('doctors.create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Add</a>
            <button type="button" class="btn btn-danger" id="btn_delete_all"><i class="fa fa-trash"></i> Delete All</button>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th><input name="select_all" id="example-select-all" type="checkbox"/></th>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Section</th>
                <th>Phone</th>
                <th>Day</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($doctors as $doctor)
              <tr>
                <td>
                    <input type="checkbox" name="delete_select" value="{{ $doctor->id }}" class="delete_select">
                </td>
                <td>{{ $loop->index + 1 }}</td>
                <td>{{ $doctor->name }}</td>
                <td>
                    @if($doctor->image)
                        <img src="{{ URL::asset('Dashboard/img/doctors/'.$doctor->image->filename) }}"
                             height="50px" width="50px" alt="">

                    @else
                        <img src="{{ URL::asset('Dashboard/img/doctor_default.png') }}" height="50px"
                             width="50px" alt="">
                    @endif
                </td>
                <td>{{ $doctor->email }}</td>
                <td>{{ $doctor->section->name }}</td>
                <td>{{ $doctor->phone }}</td>
                <td>
                    {{ $doctor->day->pluck('name')->join(', ') }}
                </td>
                <td>
                    {{ $doctor->status == 1 ? 'Active' : 'Inactive' }}
                </td>
                <td>{{ $doctor->created_at->diffForHumans() }}</td>
                <td>
                    <a href="{{ route('doctors.edit', $doctor->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-warning btn-sm" data-toggle="modal" data-target="#update_status{{ $doctor->id }}"><i class="fa fa-wrench"></i></a>
                    <a class="btn btn-info btn-sm" data-toggle="modal" data-target="#update_password{{ $doctor->id }}"><i class="fa fa-key"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $doctor->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.doctors.delete')
              @include('Dashboard.doctors.update_password')
              @include('Dashboard.doctors.update_status')
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
