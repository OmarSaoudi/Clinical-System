@extends('Dashboard.layouts.master')

@section('title')
    Edit Insurance
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
       <li class="active">Edit Insurance</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Edit Insurance</h3>
          </div>
            <div class="box-body">
                   <form action="{{ route('insurances.update','test') }}" method="POST" enctype="multipart/form-data">
                      @csrf
                      {{ method_field('PATCH') }}

                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-3">
                              <div class="form-group">
                                <label>Company Name</label>
                                <input type="hidden" value="{{ $insurances->id }}" name="id">
                                 <input type="text" name="name" value="{{ $insurances->name }}" class="form-control" required>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Company Code</label>
                                    <input type="text" name="insurance_code"  value="{{ $insurances->insurance_code }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 1 --}}
                        <div class="row">
                            <div class="col-md-4">
                               <div class="form-group">
                                  <label>Discount Percentage %</label>
                                  <input type="number" name="discount_percentage"  value="{{ $insurances->discount_percentage }}" class="form-control" required>
                                  <span class="help-block with-errors"></span>
                               </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="form-group">
                                     <label>Insurance Bearing Percentage %</label>
                                     <input type="number" name="company_rate"  value="{{ $insurances->company_rate }}" class="form-control" required>
                                     <span class="help-block with-errors"></span>
                                 </div>
                             </div>
                        </div>
                        {{-- End 1 --}}

                        <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                  <label>Notes</label>
                                  <textarea name="notes" class="form-control" placeholder="Enter ...">{{ $insurances->notes }}</textarea>
                              </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                  <label>Status</label>&nbsp; &nbsp;
                                  <input name="status" {{ $insurances->status == 1 ? 'checked' : '' }} value="1" type="checkbox" class="form-check-input">
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
