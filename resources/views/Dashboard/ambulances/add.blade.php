@extends('Dashboard.layouts.master')

@section('title')
    Create Ambulance
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
       <li><a href="{{ route('ambulances.index') }}">Ambulances</a></li>
       <li class="active">Create Ambulance</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Create Ambulance</h3>
          </div>
            <div class="box-body">
                    <form method="POST" action="{{ route('ambulances.store') }}">
                      @csrf
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-3">
                              <div class="form-group">
                                 <label>Ambulance number</label>
                                 <input type="text" name="car_number" value="{{ old('car_number') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-group">
                                 <label>Ambulance model</label>
                                 <input type="text" name="car_model" value="{{ old('car_model') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                   <label>Manufacturing year</label>
                                   <input type="number" name="car_year_made" value="{{ old('car_year_made') }}" class="form-control">
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                   <label>Ambulance type</label>
                                   <select class="form-control" name="car_type">
                                       <option value="" selected disabled>Select Ambulance type</option>
                                       <option value="1">Owned</option>
                                       <option value="2">Rent</option>
                                    </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 2 --}}
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                               <label>Driver's name</label>
                               <input type="name" name="driver_name" value="{{ old('driver_name') }}" class="form-control" required>
                               <span class="help-block with-errors"></span>
                            </div>
                          </div>
                           <div class="col-md-4">
                              <div class="form-group">
                                <label>License number</label>
                                <input type="number" class="form-control" value="{{ old('driver_license_number') }}" name="driver_license_number" required>
                                <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                  <label>Phone</label>
                                  <input type="number" class="form-control" value="{{ old('driver_phone') }}" name="driver_phone" required>
                                  <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 2 --}}

                        <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                  <label>Notes</label>
                                  <textarea name="notes" class="form-control" value="{{ old('notes') }}" placeholder="Enter ..."></textarea>
                              </div>
                            </div>
                        </div>


                        <br><br>
                        <div class="form-group" style="text-align:center">
                            <button type="submit" class="btn btn-success"><i class="fa fa-floppy-o"></i> Saving Data</button>
                            <a href="{{ route('ambulances.index') }}" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
                        </div>
                    </form>
                </div>
        </div>
   </section>
</div>

@endsection

@section('scripts')

@endsection
