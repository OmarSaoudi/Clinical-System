<?php
namespace App\Repository\Sections;

use App\Interfaces\Sections\SectionRepositoryInterface;
use App\Models\Section;
use App\Models\Doctor;

class SectionRepository implements SectionRepositoryInterface
{

    public function index()
    {
      $sections = Section::all();
      return view('Dashboard.sections.index', compact('sections'));
    }

    public function store($request) {

        $section_data = [
           'en' => ['name'       => $request->input('en_name'),],
           'ar' => ['name'       => $request->input('ar_name'),],
        ];

        Section::create($section_data);

        session()->flash('add');
        return redirect()->route('sections.index');
    }

    public function update($request)
    {
        $section = Section::findOrFail($request->id);
        $section->update([
            'en' => [
                'name'       => $request->input('en_name'),
            ],
            'ar' => [
                'name'       => $request->input('ar_name'),
            ],
        ]);
        session()->flash('edit');
        return redirect()->route('sections.index');
    }


    public function destroy($request)
    {
        Section::findOrFail($request->id)->delete();
        session()->flash('delete');
        return redirect()->route('sections.index');
    }

    public function show($id)
    {
        $doctors = Doctor::findOrFail($id)->doctors;
        $section = Section::findOrFail($id);
        return view('Dashboard.sections.show_doctors', compact('doctors','section'));
    }

}
