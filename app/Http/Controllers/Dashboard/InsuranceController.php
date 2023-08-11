<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInsuranceRequest;
use App\Interfaces\Insurances\InsuranceRepositoryInterface;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{

    private $Insurance;

    public function __construct(insuranceRepositoryInterface $Insurance)
    {
        $this->Insurance = $Insurance;
    }

    public function index()
    {
        return $this->Insurance->index();
    }

    public function create()
    {
        return $this->Insurance->create();
    }


    public function store(StoreInsuranceRequest $request)
    {
        return $this->Insurance->store($request);
    }

    public function edit($id)
    {
        return $this->Insurance->edit($id);
    }


    public function update(Request $request)
    {
        return $this->Insurance->update($request);
    }



    public function destroy(Request $request)
    {
        return $this->Insurance->destroy($request);
    }
}
