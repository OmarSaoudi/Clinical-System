<?php
namespace App\Repository\Doctors;

use App\Interfaces\Doctors\DoctorRepositoryInterface;
use App\Models\Appointment;
use App\Models\Day;
use App\Models\Doctor;
use App\Models\Section;
use App\Traits\UploadTrait;
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
        $days = Day::all();
        return view('Dashboard.doctors.add',compact('sections','days'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $doctors = new Doctor();
            $doctors->name = $request->name;
            $doctors->email = $request->email;
            $doctors->password = Hash::make($request->password);
            $doctors->phone = $request->phone;
            $doctors->section_id = $request->section_id;
            $doctors->status = 1;
            $doctors->save();

            // insert pivot tABLE
            $doctors->day()->attach($request->day);

            //Upload img
            $this->verifyAndStoreImage($request,'photo','doctors','upload_image',$doctors->id,'App\Models\Doctor');

            DB::commit();
            return redirect()->route('doctors.index');
        }

        catch (\Exception $e){
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $sections = Section::all();
        $days = Day::all();
        $doctors = Doctor::findorfail($id);
        return view('Dashboard.doctors.edit',compact('sections','days','doctors'));
    }

    public function update($request)
    {
        DB::beginTransaction();

        try {

            $doctors = Doctor::findorfail($request->id);
            $doctors->name = $request->name;
            $doctors->email = $request->email;
            $doctors->section_id = $request->section_id;
            $doctors->phone = $request->phone;
            $doctors->day()->sync($request->day);
            $doctors->save();

            DB::commit();
            return redirect()->route('doctors.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
      if($request->page_id==1)
      {
          Doctor::destroy($request->id);
          session()->flash('delete');
          return redirect()->route('doctors.index');
      }

      else
      {
          $delete_select_id = explode(",", $request->delete_select_id);
          Doctor::destroy($delete_select_id);
          return redirect()->route('doctors.index');
      }

    }

    public function update_password($request)
    {
        try {
            $doctor = Doctor::findorfail($request->id);
            $doctor->update([
                'password'=>Hash::make($request->password)
            ]);

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

            return redirect()->back();
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

}
