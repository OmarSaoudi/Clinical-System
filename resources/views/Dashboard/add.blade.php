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
          <form action="{{ route('doctors.store') }}" method="post" autocomplete="off">
              @csrf

              <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" id="name" class="form-control">
              </div>

              <div class="form-group">
                <label>Phone</label>
                <input type="text" name="phone" id="phone" class="form-control">
              </div>

              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" id="email" class="form-control">
              </div>

              <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" id="password" class="form-control">
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

