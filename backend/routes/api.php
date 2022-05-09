<?php
use App\Http\Controllers\ExampleController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    // список всех сообщений
    Route::get('posts', [ExampleController::class, 'post']);
    // получить сообщение
    Route::get('posts/{id}', [ExampleController::class, 'singlePost']);
    // добавить сообщение
    Route::post('posts', [ExampleController::class, 'createPost']);
    // обновить сообщение
    Route::put('posts/{id}', [ExampleController::class, 'updatePost']);
    // удалить сообщение
    Route::delete('posts/{id}', [ExampleController::class, 'deletePost']);
    // добавить нового пользователя с ролью Writer
    Route::post('users/writer', [ExampleController::class, 'createWriter']);
    // добавить нового пользователя с Subscriber 
    Route::post(
        'users/subscriber',
        [ExampleController::class, 'createSubscriber']
    );
    // удалить пользователя
    Route::delete('users/{id}', [ExampleController::class, 'deleteUser']);
});
