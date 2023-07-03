<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginPage()
    {
        Inertia::render('login');
    }
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            response()->redirectTo('login')->withErrors('Username or password is wrong');
        }

        $user = User::query()->where('email', '=', $request->get('email'));

        return to_route('home', $user);
    }

    public function registerPage() {
        return Inertia::render('register');
    }
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->save();

        return to_route('home', $user);
    }
}
