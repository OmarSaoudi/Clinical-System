<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInsuranceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'insurance_code' => 'required',
            'discount_percentage' =>'required|numeric',
            'company_rate' =>'required|numeric',
            'name' => 'required|unique:insurances,name,'.$this->id,
        ];
    }
}
