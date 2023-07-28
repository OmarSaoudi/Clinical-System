<!-- Add Section -->
<div class="modal fade" id="add">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
              <h4 class="modal-title" style="text-align: center">Add Section</h4>
        </div>
        <div class="modal-body">
          <form action="{{ route('sections.store') }}" method="post" autocomplete="off">
              @csrf

              <div class="form-group">
                <label>Section Name</label>
                <input type="text" name="name" id="name" class="form-control">
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
<!-- End Add Section -->

