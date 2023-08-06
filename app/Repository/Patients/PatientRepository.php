<?php


namespace App\Repository\Patients;
use App\Interfaces\Patients\PatientRepositoryInterface;
use App\Models\Blood;
use App\Models\Gender;
use App\Models\Patient;
use Illuminate\Support\Facades\Hash;

class PatientRepository implements PatientRepositoryInterface
{
    public function index()
    {
       $patients = Patient::all();
       return view('Dashboard.patients.index', compact('patients'));
    }

    public function create()
    {
        $data['genders'] = Gender::all();
        $data['bloods'] = Blood::all();
        return view('Dashboard.patients.add',$data);
    }

    public function store($request)
    {
       try {
           $patients = new Patient();
           $patients->name = $request->name;
           $patients->address = $request->address;
           $patients->email = $request->email;
           $patients->password = Hash::make($request->password);
           $patients->date_birth = $request->date_birth;
           $patients->phone = $request->phone;
           $patients->blood_id = $request->blood_id;
           $patients->gender_id = $request->gender_id;
           $patients->status = 1;
           $patients->save();

           return redirect()->route('patients.index');
        }

       catch (\Exception $e) {
           return redirect()->back()->withErrors(['error' => $e->getMessage()]);
       }
    }

    public function show($id)
    {
        $patients = Patient::findorfail($id);
        return view('Dashboard.patients.show', compact('patients'));
    }

    public function edit($id)
    {

        $data['genders'] = Gender::all();
        $data['bloods'] = Blood::all();
        $patients = Patient::findorfail($id);
        return view('Dashboard.patients.edit',$data,compact('patients'));
    }

    public function update($request)
    {

        try {
            $patients = Patient::findOrFail($request->id);
            $patients->name = $request->name;
            $patients->address = $request->address;
            $patients->email = $request->email;
            $patients->date_birth = $request->date_birth;
            $patients->phone = $request->phone;
            $patients->blood_id = $request->blood_id;
            $patients->gender_id = $request->gender_id;
            $patients->save();

            return redirect()->route('patients.index');
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
       Patient::destroy($request->id);
       return redirect()->route('patients.index');
    }

    public function update_password($request)
    {
        try {
            $patient = Patient::findorfail($request->id);
            $patient->update([
                'password' => Hash::make($request->password)
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
            $patient = Patient::findorfail($request->id);
            $patient->update([
                'status' => $request->status
            ]);

            return redirect()->back();
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }
}
