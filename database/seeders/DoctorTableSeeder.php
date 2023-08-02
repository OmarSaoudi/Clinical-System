<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DoctorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Doctor::factory()->count(1)->create();

        // DB::table('doctors')->delete();
        // DB::table('doctors')->insert([
        //     'name' => 'Doctor',
        //     'email' => 'doctor@gmail.com',
        //     'password' => bcrypt('1'),
        // ]);
    }
}
