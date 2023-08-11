<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
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
            "name" => 'required',
            "email" => 'required|email|unique:patients,email,'.$this->id,
            "password" => 'required|sometimes',
            "phone" => 'required|numeric|unique:patients,phone,'.$this->id,
            'date_birth' => 'required|date|date_format:Y-m-d',
            "gender_id" => 'required',
            "blood_id" => 'required',
        ];
    }
}
