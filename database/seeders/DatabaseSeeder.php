<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(BloodTableSeeder::class);
        $this->call(GenderTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(AdminTableSeeder::class);
        $this->call(DayTableSeeder::class);
        $this->call(SectionTableSeeder::class);
        $this->call(DoctorTableSeeder::class);
        //$this->call(ImageTableSeeder::class);
        $this->call(PatientTableSeeder::class);
    }
}
