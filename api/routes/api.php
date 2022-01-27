<?php

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
Route::group(['prefix' => '/'], function () {
    Route::post('login', 'Api\ApiAuthController@login')->name('login');
    Route::post('register', 'Api\ApiAuthController@register');
    Route::post('forgotpassword', 'Api\ApiAuthController@forgotPassword');
    Route::post('resetpassword', 'Api\ApiAuthController@resetPassword');
});


// Category
Route::group(['prefix' => 'category', 'module' => 'CATEGORIES'], function () {
    Route::get('/', ['as' => 'api.category.index', 'accessLevel' => 'ACCESS,VIEW', 'uses' => 'Api\ApiCategoryController@index']);
    Route::get('/{id}', ['as' => 'api.category.show', 'accessLevel' => 'VIEW', 'uses' => 'Api\ApiCategoryController@show']);
    Route::post('/', ['as' => 'api.category.store', 'accessLevel' => 'CREATE', 'uses' => 'Api\ApiCategoryController@store']);
    Route::delete('/{id}', ['as' => 'api.category.destroy', 'accessLevel' => 'DELETE', 'uses' => 'Api\ApiCategoryController@destroy']);
});

// Users
Route::group(['prefix' => 'users', 'module' => 'USERS'], function () {
    Route::get('/', ['as' => 'api.users.index', 'accessLevel' => 'ACCESS,VIEW', 'uses' => 'Api\ApiUserController@index']);
    Route::get('/me', ['as' => 'api.users.me', 'accessLevel' => 'BYPASS', 'uses' => 'Api\ApiAccountController@show']);
    Route::get('/{id}', ['as' => 'api.users.show', 'accessLevel' => 'VIEW', 'uses' => 'Api\ApiUserController@show']);
    Route::post('/', ['as' => 'api.users.store', 'accessLevel' => 'CREATE', 'uses' => 'Api\ApiUserController@store']);
    Route::post('/change-password', ['as' => 'api.users.changepassword', 'accessLevel' => 'BYPASS', 'uses' => 'Api\ApiUserController@changePassword']);
    Route::delete('/{id}', ['as' => 'api.users.delete', 'accessLevel' => 'DELETE', 'uses' => 'Api\ApiUserController@destroy']);
    Route::post('/confirmation-password', ['as' => 'api.users.confirmpw', 'accessLevel' => 'BYPASS', 'uses' => 'Api\ApiUserController@validationPassword']);
});

// Permission
Route::group(['prefix' => 'permission', 'module' => 'PERMISSION'], function () {
    Route::get('/', ['as' => 'api.users.index', 'accessLevel' => 'ACCESS', 'uses' => 'Api\ApiPermissionController@index']);
    Route::post('/set-permission', ['as' => 'api.users.index', 'accessLevel' => 'SET-PERMISSION', 'uses' => 'Api\ApiPermissionController@setPermission']);
    Route::get('/get-permission/{id}', ['as' => 'api.users.index', 'accessLevel' => 'GET-PERMISSION', 'uses' => 'Api\ApiPermissionController@getPermission']);
    Route::post('/delete-permission', ['as' => 'api.users.delete-byuserid', 'accessLevel' => 'DELETE', 'uses' => 'Api\ApiPermissionController@destroyPermission']);
    Route::delete('/{id}', ['as' => 'api.users.index', 'BYPASS' => 'DELETE', 'uses' => 'Api\ApiPermissionController@destroy']);
});


