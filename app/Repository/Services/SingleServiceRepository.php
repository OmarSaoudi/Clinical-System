<?php


namespace App\Repository\Services;


use App\Models\Service;

class SingleServiceRepository implements \App\Interfaces\Services\SingleServiceRepositoryInterface
{

    public function index()
    {
        $services = Service::all();
        return view('Dashboard.services..index', compact('services'));
    }

    public function store($request)
    {
        try {
            $services = new Service();
            $services->name = $request->name;
            $services->price = $request->price;
            $services->description = $request->description;
            $services->status = 1;
            $services->save();

            return redirect()->route('services.index');
        }
        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update($request)
    {
        try {

            $services = Service::findOrFail($request->id);
            $services->name = $request->name;
            $services->price = $request->price;
            $services->description = $request->description;
            $services->status = $request->status;
            $services->save();
            return redirect()->route('services.index');

        }
        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
        Service::destroy($request->id);
        return redirect()->route('services.index');
    }
}
