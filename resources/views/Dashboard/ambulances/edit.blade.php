@extends('Dashboard.layouts.master')

@section('title')
    Edit Ambulance
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
       <li class="active">Edit Ambulance</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Edit Ambulance</h3>
          </div>
            <div class="box-body">
                   <form action="{{ route('ambulances.update','test') }}" method="POST" enctype="multipart/form-data">
                      @csrf
                      {{ method_field('PATCH') }}

                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-3">
                              <div class="form-group">
                                <label>Ambulance number</label>
                                <input type="hidden" value="{{ $ambulances->id }}" name="id">
                                 <input type="text" name="car_number" value="{{ $ambulances->car_number }}" class="form-control" required>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Ambulance model</label>
                                    <input type="text" name="car_model"  value="{{ $ambulances->car_model }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Manufacturing year</label>
                                    <input type="number" name="car_year_made"  value="{{ $ambulances->car_year_made }}" class="form-control" required>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Ambulance type</label>
                                    <select class="form-control" name="car_type">
                                        <option value="1" {{ $ambulances->car_type == 1 ? 'selected' : '' }}>Owned</option>
                                        <option value="2" {{ $ambulances->car_type == 2 ? 'selected' :' ' }}>Rent</option>
                                    </select>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 1 --}}
                        <div class="row">
                            <div class="col-md-4">
                               <div class="form-group">
                                  <label>Driver's name</label>
                                  <input type="text" name="driver_name"  value="{{ $ambulances->driver_name }}" class="form-control" required>
                                  <span class="help-block with-errors"></span>
                               </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="form-group">
                                     <label>License number</label>
                                     <input type="number" name="driver_license_number"  value="{{ $ambulances->driver_license_number }}" class="form-control" required>
                                     <span class="help-block with-errors"></span>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="form-group">
                                    <label>Phone</label>
                                    <input type="number" name="driver_phone"  value="{{ $ambulances->driver_phone }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                 </div>
                             </div>

                        </div>
                        {{-- End 1 --}}

                        <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                  <label>Notes</label>
                                  <textarea name="notes" class="form-control" placeholder="Enter ...">{{ $ambulances->notes }}</textarea>
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
