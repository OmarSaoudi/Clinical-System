<?php

use App\Http\Controllers\Dashboard\AmbulanceController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\SectionController;
use App\Http\Controllers\Dashboard\DoctorController;
use App\Http\Controllers\Dashboard\InsuranceController;
use App\Http\Controllers\Dashboard\PatientController;
use App\Http\Controllers\Dashboard\SingleServiceController;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

/*
|--------------------------------------------------------------------------
| Backend Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/Dashboard_Admin', [DashboardController::class, 'index']);


Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]
    ], function(){


   //################################ dashboard user ##########################################
    Route::get('/dashboard/user', function () {
        return view('Dashboard.users.dashboard');
    })->middleware(['auth'])->name('dashboard.user');
    //################################ end dashboard user #####################################



    //################################ dashboard admin ########################################
    Route::get('/dashboard/admin', function () {
        return view('Dashboard.admins.dashboard');
    })->middleware(['auth:admin'])->name('dashboard.admin');
    //################################ end dashboard admin #####################################

    //################################ dashboard doctor ########################################
      Route::get('/dashboard/doctor', function () {
        return view('Dashboard.doctors.dashboard');
    })->middleware(['auth:doctor'])->name('dashboard.doctor');
    //################################ end dashboard doctor #####################################

    //################################ dashboard patient ########################################
    Route::get('/dashboard/patient', function () {
        return view('Dashboard.patients.dashboard');
    })->middleware(['auth:patient'])->name('dashboard.patient');
    //################################ end dashboard patient #####################################

    Route::middleware(['auth:admin'])->prefix('admin')->group(function () {
        //############################# sections route ##########################################
        Route::resource('sections', SectionController::class);
        //############################# end sections route ######################################

        //############################# Doctors route ##########################################
        Route::resource('doctors', DoctorController::class);
        Route::post('update_password', [DoctorController::class, 'update_password'])->name('update_password');
        Route::post('update_status', [DoctorController::class, 'update_status'])->name('update_status');
        //############################# end Doctors route ######################################

        //############################# Doctors route ##########################################
        Route::resource('ambulances', AmbulanceController::class);
        //############################# end Doctors route ######################################

        //############################# SingleService route ##########################################
        Route::resource('services', SingleServiceController::class);
        //############################# end SingleService route ######################################

        //############################# Insurance route ##########################################
        Route::resource('insurances', InsuranceController::class);
        //############################# end Insurance route ######################################

        //############################# patients route ##########################################
        Route::resource('patients', PatientController::class);
        Route::post('update_password', [PatientController::class, 'update_password'])->name('update_password');
        Route::post('update_status', [PatientController::class, 'update_status'])->name('update_status');
        //############################# end patients route ######################################

        //############################# single_invoices route ##########################################
        Route::view('single_invoices','livewire.single_invoices.index')->name('single_invoices');
        Route::view('Print_single_invoices','livewire.single_invoices.print')->name('Print_single_invoices');
        //############################# end single_invoices route ######################################

    });

    Route::middleware(['auth:doctor'])->prefix('doctor')->group(function () {

    });


    require __DIR__.'/auth.php';

});
