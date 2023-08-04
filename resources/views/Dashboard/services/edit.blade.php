   <!-- Edit -->
   <div class="modal fade" id="edit{{ $service->id }}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" style="text-align: center">service Update</h4>
        </div>
       <div class="modal-body">
        <form action="{{ route('services.update', 'test') }}" method="POST">
            {{ method_field('patch') }}
            {{ csrf_field() }}
            @csrf

            <div class="form-group">
                <input type="hidden" name="id" id="id" value="{{ $service->id }}">
                <label>Service Name</label>
                <input type="text" name="name" id="name" value="{{ $service->name }}" class="form-control" required>
            </div>

            <div class="form-group">
                <label>Price</label>
                <input type="number" name="price" id="price" value="{{ $service->price }}" class="form-control" required>
            </div>

            <div class="form-group">
                <label>Status</label>
                <select class="form-control" id="status" name="status" required>
                    <option value="{{ $service->status }}" selected>{{ $service->status == 1 ? 'Active' : 'Inactive' }}</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea name="description" class="form-control" placeholder="Enter ...">{{ $service->description }}</textarea>
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
