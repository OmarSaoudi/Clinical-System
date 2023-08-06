<?php

namespace Database\Seeders;

use App\Models\Blood;
use App\Models\Gender;
use App\Models\Patient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PatientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patients = new Patient();
        $patients->email = 'patient@gmail.com';
        $patients->password = Hash::make('1');
        $patients->date_birth = '1988-12-01';
        $patients->phone = '123456789';
        $patients->gender_id = Gender::all()->unique()->random()->id;
        $patients->blood_id = Blood::all()->unique()->random()->id;
        $patients->name = 'محمد السيد';
        $patients->address = 'القاهرة';
        $patients->save();
    }
}
