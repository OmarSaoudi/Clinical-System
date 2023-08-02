<!-- Delete All -->
<div class="modal fade" id="delete_select">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
              <h4 class="modal-title" style="text-align: center">Delete All Doctors</h4>
        </div>
        <div class="modal-body">
          <form action="{{ route('doctors.destroy', 'test') }}" method="POST">
            {{ method_field('delete') }}
            {{ csrf_field() }}
                    <div class="modal-body">
                        <p>Are sure of the deleting process ?</p><br>
                        <input type="hidden" id="delete_select_id" name="delete_select_id" value=''>
                    </div>

                    <div class="modal-footer">
                         <button type="submit" class="btn btn-danger">Save changes</button>
                         <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    </div>
          </form>
        </div>
      </div>
    </div>
  </div>
<!-- End Delete All -->
