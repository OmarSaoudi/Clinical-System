   <!-- Edit -->
   <div class="modal fade" id="edit{{ $section->id }}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" style="text-align: center">Section Update</h4>
        </div>
       <div class="modal-body">
        <form action="{{ route('sections.update', 'test') }}" method="POST">
            {{ method_field('patch') }}
            {{ csrf_field() }}
            @csrf

            <div class="form-group">
                <input type="hidden" name="id" id="id" value="{{ $section->id }}">
                <label>Section Name</label>
                <input type="text" name="name" id="name" value="{{ $section->name }}" class="form-control" required>
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
