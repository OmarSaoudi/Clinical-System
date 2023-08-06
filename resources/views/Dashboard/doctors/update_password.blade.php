   <!-- Edit -->
   <div class="modal fade" id="update_password{{ $doctor->id }}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" style="text-align: center">Update Password Doctor</h4>
        </div>
       <div class="modal-body">
        <form action="{{ route('update_password') }}" method="POST" autocomplete="off">
            @csrf

            <div class="form-group">
                <label>New Password</label>
                <input type="hidden" name="id" value="{{ $doctor->id }}">
                <input type="password" class="form-control" id="password" name="password" required>
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" required>
            </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info">Save changes</button>
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          </div>
        </form>
       </div>
      </div>
    </div>
  </div>
 <!-- Edit End -->
