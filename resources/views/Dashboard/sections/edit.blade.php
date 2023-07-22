   <!-- Edit -->
   <div class="modal fade" id="edit{{ $section->id }}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Section Update</h4>
        </div>
       <div class="modal-body">
        <form action="{{ route('sections.update', 'test') }}" method="POST">
            {{ method_field('patch') }}
            {{ csrf_field() }}
            @csrf

         <ul class="nav nav-tabs">
            <li class="active"><a href="#tab_1" data-toggle="tab">EN</a></li>
            <li><a href="#tab_2" data-toggle="tab">AR</a></li>
          </ul><br>

          <div class="tab-content">
            <div class="tab-pane active" id="tab_1">
                <label class="required">Name (EN)</label>
                <input type="hidden" name="id" value="{{ $section->id }}">
                <input class="form-control" type="text" name="en_name" id="en_name" value="{{ $section->translate('en')->name }}" required>
            </div>
            <div class="tab-pane" id="tab_2">
                <label class="required">Name (AR)</label>
                <input class="form-control" type="text" name="ar_name" id="ar_name" value="{{ $section->translate('ar')->name }}" required>
            </div>
          </div>

          <div class="modal-footer">
            <button type="submit" class="btn btn-success">Save changes</button>
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          </div>

        </form>
       </div>
      </div>
    </div>
  </div>
 <!-- Edit End -->
