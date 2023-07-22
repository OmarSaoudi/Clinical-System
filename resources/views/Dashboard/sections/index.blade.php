@extends('Dashboard.layouts.master')

@section('title')
    Sections
@stop

@section('css')

@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Sections
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard.admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Sections</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Sections List <small>{{ $sections->count() }}</small></h3>
            <br><br>
            <a class="btn btn-success" data-toggle="modal" data-target="#add"><i class="fa fa-plus"></i> Add</a>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Created at</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($sections as $section)
              <tr>
                <td>{{ $loop->index + 1 }}</td>
                <td>{{ $section->name }}</td>
                <td>{{ $section->created_at }}</td>
                <td>
                    <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit{{ $section->id }}"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $section->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.sections.edit')
              @include('Dashboard.sections.delete')
              @endforeach
              @include('Dashboard.sections.add')
              </tbody>
              <tfoot>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Operation</th>
              </tr>
              </tfoot>
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
