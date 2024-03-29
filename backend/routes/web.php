<?php

use App\Http\Controllers\Auth\RegisterController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::post('register', [RegisterController::class, 'register'])
    ->middleware('restrictothers');

// Страница создания токена
Route::get('/home', function () {
  if(Auth::check() && Auth::user()->role === 1){
      return auth()
          ->user()
          ->createToken('auth_token', ['admin'])
          ->plainTextToken;
  }
  return redirect("/");
})->middleware('auth');