<?php

namespace App\Http\Livewire;

use App\Models\Doctor;
use App\Models\Invoice;
use App\Models\Patient;
use App\Models\Service;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Livewire\Component;

class SingleInvoice extends Component
{
    public $InvoiceSaved,$InvoiceUpdated;
    public $show_table = true;
    public $username;
    public $tax_rate = 17;
    public $updateMode = false;
    public $price,$discount_value = 0 ,$patient_id,$doctor_id,$section_id,$type,$service_id,$single_invoice_id,$catchError;


    public function mount(){

        $this->username = auth()->user()->name;
     }



    public function render()
    {
        return view('livewire.single_invoices.single-invoices', [
            'single_invoices'=>Invoice::where('invoice_type',1)->get(),
            'Patients'=> Patient::all(),
            'Doctors'=> Doctor::all(),
            'Services'=> Service::all(),
            'subtotal' => $Total_after_discount = ((is_numeric($this->price) ? $this->price : 0)) - ((is_numeric($this->discount_value) ? $this->discount_value : 0)),
            'tax_value'=> $Total_after_discount * ((is_numeric($this->tax_rate) ? $this->tax_rate : 0) / 100)
        ]);
    }

    public function show_form_add(){
        $this->show_table = false;
    }

    public function print($id)
    {
        $single_invoice = Invoice::findorfail($id);
        return Redirect::route('Print_single_invoices',[
            'invoice_date' => $single_invoice->invoice_date,
            'doctor_id' => $single_invoice->doctor->name,
            'section_id' => $single_invoice->section->name,
            'Service_id' => $single_invoice->service->name,
            'type' => $single_invoice->type,
            'price' => $single_invoice->price,
            'discount_value' => $single_invoice->discount_value,
            'tax_rate' => $single_invoice->tax_rate,
            'total_with_tax' => $single_invoice->total_with_tax,
        ]);

    }

    public function get_section()
    {
        $doctor_id = Doctor::with('section')->where('id', $this->doctor_id)->first();
        $this->section_id = $doctor_id->section->name;

    }

    public function get_price()
    {
        $this->price = Service::where('id', $this->service_id)->first()->price;
    }


    public function edit($id){

        $this->show_table = false;
        $this->updateMode = true;
        $single_invoice = Invoice::findorfail($id);
        $this->single_invoice_id = $single_invoice->id;
        $this->patient_id = $single_invoice->patient_id;
        $this->doctor_id = $single_invoice->doctor_id;
        $this->section_id = DB::table('sections')->where('id', $single_invoice->section_id)->first()->name;
        $this->service_id = $single_invoice->Service_id;
        $this->price = $single_invoice->price;
        $this->discount_value = $single_invoice->discount_value;
        $this->type = $single_invoice->type;


    }




    public function delete($id){

     $this->single_invoice_id = $id;

    }

    public function destroy(){
        Invoice::destroy($this->single_invoice_id);
        return redirect()->to('/single_invoices');
    }

}
