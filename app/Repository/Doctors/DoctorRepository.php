<?php
namespace App\Repository\Doctors;

use App\Interfaces\Doctors\DoctorRepositoryInterface;
use App\Models\Doctor;
use App\Models\Section;
use App\Traits\UploadTrait;
use App\Models\Image;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DoctorRepository implements DoctorRepositoryInterface
{

    use UploadTrait;

    public function index()
    {
      $doctors = Doctor::all();
      return view('Dashboard.doctors.index', compact('doctors'));
    }

    public function create()
    {
        $sections = Section::all();
        return view('Dashboard.doctors.add', compact('sections'));
    }

    public function store($request){

        DB::beginTransaction();

        try {

            $doctors = new Doctor();
            $doctors->email = $request->email;
            $doctors->password = Hash::make($request->password);
            $doctors->section_id = $request->section_id;
            $doctors->phone = $request->phone;
            $doctors->status = 1;
            $doctors->save();

            // store trans
            $doctors->name = $request->name;
            $doctors->save();

            //Upload img
            $this->verifyAndStoreImage($request,'photo','doctors','upload_image',$doctors->id,'App\Models\Doctor');

            DB::commit();
            session()->flash('add');
            return redirect()->route('doctors.create');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }


    }

    public function update($request)
    {
        DB::beginTransaction();

        try {

            $doctor = Doctor::findorfail($request->id);

            $doctor->email = $request->email;
            // $doctor->section_id = $request->section_id;
            $doctor->phone = $request->phone;
            $doctor->save();
            // store trans
            $doctor->name = $request->name;
            $doctor->save();

            // update pivot tABLE
            // $doctor->doctorappointments()->sync($request->appointments);

            // update photo
            if ($request->has('photo')){
                // Delete old photo
                if ($doctor->image){
                    $old_img = $doctor->image->filename;
                    $this->Delete_attachment('upload_image','doctors/'.$old_img,$request->id);
                }
                //Upload img
                $this->verifyAndStoreImage($request,'photo','doctors','upload_image',$request->id,'App\Models\Doctor');
            }

            DB::commit();
            session()->flash('edit');
            return redirect()->back();

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
      if($request->page_id==1){

       if($request->filename){

         $this->Delete_attachment('upload_image','doctors/'.$request->filename,$request->id,$request->filename);
       }
          Doctor::destroy($request->id);
          session()->flash('delete');
          return redirect()->route('doctors.index');
      }


      //---------------------------------------------------------------

      else{

          // delete selector doctor
          $delete_select_id = explode(",", $request->delete_select_id);
          foreach ($delete_select_id as $ids_doctors){
              $doctor = Doctor::findorfail($ids_doctors);
              if($doctor->image){
                  $this->Delete_attachment('upload_image','doctors/'.$doctor->image->filename,$ids_doctors,$doctor->image->filename);
              }
          }

          Doctor::destroy($delete_select_id);
          session()->flash('delete');
          return redirect()->route('doctors.index');
      }

    }


    public function edit($id)
    {
        // $sections = Section::all();
        // $appointments = Appointment::all();
        $doctors = Doctor::findorfail($id);
        return view('Dashboard.Doctors.edit', compact('doctors'));
    }

    public function update_password($request)
    {
        try {
            $doctor = Doctor::findorfail($request->id);
            $doctor->update([
                'password'=>Hash::make($request->password)
            ]);

            session()->flash('edit');
            return redirect()->back();
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update_status($request)
    {
        try {
            $doctor = Doctor::findorfail($request->id);
            $doctor->update([
                'status'=>$request->status
            ]);

            session()->flash('edit');
            return redirect()->back();
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function delete_all_d($request)
    {
        $delete_all_id = explode(",", $request->delete_all_id);
        Doctor::whereIn('id', $delete_all_id)->delete();
        return redirect()->route('doctors.index');
    }

}
