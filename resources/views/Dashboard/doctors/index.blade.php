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
          <div class="box-body" id="datatable">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th><input type="checkbox" name="select_all" id="example-select-all" onclick="CheckAll('box1', this)"></th>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Section</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($doctors as $doctor)
              <tr>
                <td><input type="checkbox"  value="{{ $doctor->id }}" class="box1"></td>
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
                    {{ $doctor->status == 1 ? 'Active' : 'Inactive' }}
                </td>
                <td>{{ $doctor->created_at->diffForHumans() }}</td>
                <td>
                    <a class="btn btn-warning btn-sm" data-toggle="modal" data-target="#update_status{{ $doctor->id }}"><i class="fa fa-wrench"></i></a>
                    <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#update_password{{ $doctor->id }}"><i class="fa fa-key"></i></a>
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

<!-- Delete All -->
<div class="modal fade" id="delete_all_d">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
              <h4 class="modal-title" style="text-align: center">Delete All Doctors</h4>
        </div>
        <div class="modal-body">
          <form action="{{ route('delete_all_d') }}" method="POST">
                    {{ csrf_field() }}
                    <div class="modal-body">
                        <p>Are sure of the deleting process ?</p><br>
                        <input class="text" type="hidden" id="delete_all_id" name="delete_all_id" value=''>
                    </div>

                    <div class="modal-footer">
                         <button type="submit" class="btn btn-danger">Save changes</button>
                         <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    </div>
          </form>
        </div>
      </div>
    </div>
</div>
<!-- End Delete All -->

@endsection


@section('scripts')
<script type="text/javascript">
    $(function() {
       $("#btn_delete_all").click(function() {
           var selected = new Array();
           $("#datatable input[type=checkbox]:checked").each(function() {
               selected.push(this.value);
           });

           if (selected.length > 0) {
               $('#delete_all_d').modal('show')
               $('input[id="delete_all_id"]').val(selected);
           }
       });
    });
</script>
@endsection
