@extends('Dashboard.layouts.master')

@section('title')
    Edit Patient
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
       <li><a href="{{ route('patients.index') }}">Patients</a></li>
       <li class="active">Edit Patient</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Edit Patient</h3>
          </div>
            <div class="box-body">
                   <form action="{{ route('patients.update','test') }}" method="POST">
                      @csrf
                      {{ method_field('PATCH') }}

                        {{-- 1 --}}
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="hidden" value="{{ $patients->id }}" name="id">
                                    <input type="text" name="name" value="{{ $patients->name }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value="{{ $patients->email }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" value="{{ $patients->phone }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                 <label>Date Of Birth</label>
                                 <input type="date" name="date_birth" value="{{ $patients->date_birth }}" class="form-control" required>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" name="address" value="{{ $patients->address }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 4 --}}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Genders</label>
                                   <select name="gender_id" class="form-control">
                                      <option value="" selected disabled>Select Gender</option>
                                      @foreach ($genders as $gender)
                                        <option value="{{ $gender->id }}" {{ $patients->gender_id == $gender->id ? 'selected' : '' }}>{{ $gender->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Bloods</label>
                                   <select name="blood_id" class="form-control">
                                      <option value="" selected disabled>Select Blood</option>
                                      @foreach ($bloods as $blood)
                                        <option value="{{ $blood->id }}" {{ $patients->blood_id == $blood->id ? 'selected' : '' }}>{{ $blood->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 4 --}}

                        <br><br>
                        <div class="form-group" style="text-align:center">
                            <button type="submit" class="btn btn-success"><i class="fa fa-floppy-o"></i> Saving Data</button>
                            <a href="{{ route('patients.index') }}" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
                        </div>
                    </form>
                </div>
        </div>
   </section>
</div>

@endsection

@section('scripts')

@endsection
