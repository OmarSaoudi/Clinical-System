<?php
namespace App\Interfaces\Doctors;


interface DoctorRepositoryInterface
{

    // get All Doctors
    public function index();

    // create Doctors
    public function create();

    // store Doctors
    public function store($request);

    // destroy Doctors
    public function edit($id);

    // update Doctor
    public function update($request);

    // destroy Doctor
    public function destroy($request);

    // update_password
    public function update_password($request);

    // update_status
    public function update_status($request);

}
