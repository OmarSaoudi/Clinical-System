<!-- Edit -->
   <div class="modal fade" id="update_status{{ $patient->id }}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" style="text-align: center">Update Status Patient</h4>
        </div>
       <div class="modal-body">
        <form action="{{ route('update_status') }}" method="POST" autocomplete="off">
            @csrf
            <div class="form-group">
                <label for="status">Patient Status</label>
                <input type="hidden" name="id" value="{{ $patient->id }}">
                <select class="form-control" id="status" name="status" required>
                    <option value="" selected disabled>@if( $patient->status == 1) Active @else Inactive @endif</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-warning">Save changes</button>
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            </div>
        </form>
       </div>
      </div>
    </div>
  </div>
<!-- Edit End -->
