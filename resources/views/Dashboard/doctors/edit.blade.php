@extends('Dashboard.layouts.master')

@section('title')
    Edit Doctor
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
       <li><a href="{{ route('doctors.index') }}">Doctors</a></li>
       <li class="active">Edit Doctor</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Edit Doctor</h3>
          </div>
            <div class="box-body">
                   <form action="{{ route('doctors.update','test') }}" method="POST" enctype="multipart/form-data">
                      @csrf
                      {{ method_field('PATCH') }}
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-4">
                              <div class="form-group">
                                 <label>Name</label>
                                 <input type="hidden" value="{{ $doctors->id }}" name="id">
                                 <input type="text" name="name" value="{{ $doctors->name }}" class="form-control" required>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" value="{{ $doctors->phone }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                   <label>Email</label>
                                   <input type="email" name="email" value="{{ $doctors->email }}" class="form-control" required>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 4 --}}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Sections</label>
                                   <select name="section_id" class="form-control">
                                      <option value="" selected disabled>Select Section</option>
                                      @foreach ($sections as $section)
                                        <option value="{{ $section->id }}" {{ $doctors->section_id == $section->id ? 'selected' : '' }}>{{ $section->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Days</label>
                                   <select name="day[]" class="form-control select2" multiple="multiple" style="width: 100%;">
                                      @forelse($days as $day)
                                        <option value="{{ $day->id }}" {{ in_array($day->id,$doctors->day->pluck('id')->toArray()) ? 'selected' : null }}>{{ $day->name }}</option>
                                      @empty
                                      @endforelse
                                   </select>
                                </div>
                            </div>
                        </div>
                        {{-- End 4 --}}

                        <br><br>
                        <div class="form-group" style="text-align:center">
                            <button type="submit" class="btn btn-success"><i class="fa fa-floppy-o"></i> Saving Data</button>
                            <a href="{{ route('doctors.index') }}" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
                        </div>
                    </form>
                </div>
        </div>
   </section>
</div>

@endsection

@section('scripts')

@endsection
