<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\ViewErrorBag;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginPage(Request $request)
    {
        return Inertia::render('Login');
    }
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {

            return to_route('login-page')->withErrors(['password' => 'Invalid password']);
        }

        return to_route('home');
    }

    public function registerPage() {
        return Inertia::render('Register');
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

        Auth::loginUsingId($user->id);

        return to_route('home');
    }

    public function logout(Request $request) {

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return to_route('home');
    }
}
