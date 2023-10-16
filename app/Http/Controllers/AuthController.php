<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Monolog\Logger;

class AuthController extends Controller
{
    public function loginPage(Request $request) : Response
    {
        return Inertia::render('Login');
    }

    public function login(LoginRequest $request) : RedirectResponse
    {
        if (!Auth::attempt($request->validated())) {

            return to_route('login-page')->withErrors(['password' => 'Invalid password']);
        }

        return to_route('home');
    }

    public function registerPage() : Response
    {
        return Inertia::render('Register');
    }

    public function register(RegisterRequest $request) : RedirectResponse
    {
        $data = $request->validated();



        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->save();

        Auth::loginUsingId($user->id);

        return to_route('home');
    }

    public function logout(Request $request) : RedirectResponse
    {
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return to_route('home');
    }
}
