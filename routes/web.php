<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('', 'welcome')->name('welcome');

Route::put('registration', [CardController::class, 'update'])->name('rgistration.set');

Route::get('registration', function () {
    return Inertia::render('Registration');
})->name('home');

Route::get('profile/{card}  ', [CardController::class, 'profile'])->name('profile');

Route::middleware('auth')->group(function () {

    Route::controller(CardController::class)->group(function() {

        Route::get('card/{card}', 'show')->name('card');

        Route::prefix('admin')->name('admin')->group(function() {
            Route::get('', 'index');

            Route::prefix('keys')->name('.keys')->group(function () {
                Route::get('', 'keys');
                Route::post('', 'store')->name('.store');
            });

            Route::prefix('registrations')->name('.registrations')->group(function () {
                Route::get('', 'registrations');
            });
        });
    });
    
    Route::get('/account', [ProfileController::class, 'edit'])->name('account.edit');
    Route::patch('/account', [ProfileController::class, 'update'])->name('account.update');
    Route::delete('/account', [ProfileController::class, 'destroy'])->name('account.destroy');
});

require __DIR__.'/auth.php';
