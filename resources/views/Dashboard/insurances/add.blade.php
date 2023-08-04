@extends('Dashboard.layouts.master')

@section('title')
    Create Insurance
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
       <li><a href="{{ route('insurances.index') }}">Insurances</a></li>
       <li class="active">Create Insurance</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Create Insurance</h3>
          </div>
            <div class="box-body">
                    <form method="POST" action="{{ route('insurances.store') }}">
                      @csrf
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                 <label>Company Name</label>
                                 <input type="text" name="name" value="{{ old('name') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                 <label>Company Code</label>
                                 <input type="text" name="insurance_code" value="{{ old('insurance_code') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 2 --}}
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                               <label>Discount Percentage %</label>
                               <input type="number" name="discount_percentage" value="{{ old('discount_percentage') }}" class="form-control" required>
                               <span class="help-block with-errors"></span>
                            </div>
                          </div>
                           <div class="col-md-4">
                              <div class="form-group">
                                <label>Insurance Bearing Percentage %</label>
                                <input type="number" class="form-control" value="{{ old('company_rate') }}" name="company_rate" required>
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
                            <a href="{{ route('insurances.index') }}" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
                        </div>
                    </form>
                </div>
        </div>
   </section>
</div>

@endsection

@section('scripts')

@endsection
