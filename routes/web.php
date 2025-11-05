<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControlAccueil;
use Inertia\Inertia;
// Route::get('/', [ControlAccueil::class,'index']);
// Route::get('/',function(){
//    return "hello world";
// });

Route::get('/',function(){
   return Inertia::render('Accueil');
});
Route::get('/propos',function(){

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
