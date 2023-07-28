<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\SectionController;
use App\Http\Controllers\Dashboard\DoctorController;
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

    Route::middleware(['auth:admin'])->prefix('admin')->group(function () {
        //############################# sections route ##########################################
        Route::resource('sections', SectionController::class);
        //############################# end sections route ######################################

        //############################# Doctors route ##########################################
        Route::resource('doctors', DoctorController::class);
        Route::post('delete_all_d', [DoctorController::class, 'delete_all_d'])->name('delete_all_d');
        Route::post('update_password', [DoctorController::class, 'update_password'])->name('update_password');
        Route::post('update_status', [DoctorController::class, 'update_status'])->name('update_status');
        //############################# end Doctors route ######################################
    });

    Route::middleware(['auth:doctor'])->prefix('doctor')->group(function () {

    });


    require __DIR__.'/auth.php';

});
