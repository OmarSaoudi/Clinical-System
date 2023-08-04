<?php


namespace App\Repository\Insurances;
use App\Interfaces\insurances\insuranceRepositoryInterface;
use App\Models\Insurance;

class InsuranceRepository implements InsuranceRepositoryInterface
{

    public function index()
    {
        $insurances = Insurance::all();
        return view('Dashboard.insurances.index', compact('insurances'));
    }

    public function create()
    {
        return view('Dashboard.insurances.add');
    }

    public function store($request)
    {
        try {

            $insurances = new Insurance();
            $insurances->name = $request->name;
            $insurances->insurance_code = $request->insurance_code;
            $insurances->discount_percentage = $request->discount_percentage;
            $insurances->company_rate = $request->company_rate;
            $insurances->status = 1;
            $insurances->notes = $request->notes;
            $insurances->save();

            return redirect()->route('insurances.index');
        }
        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $insurances = Insurance::findorfail($id);
        return view('Dashboard.insurances.edit', compact('insurances'));
    }

    public function update($request)
    {
        if (!$request->has('status'))
            $request->request->add(['status' => 0]);
        else
            $request->request->add(['status' => 1]);

        $insurances = Insurance::findOrFail($request->id);

        $insurances->update($request->all());
        $insurances->save();

        return redirect()->route('insurances.index');
    }

    public function destroy($request)
    {
        Insurance::destroy($request->id);
        return redirect()->route('insurances.index');
    }

}
