<?php

namespace App\Http\Controllers;

use App\Http\Api\PortfolioApi;
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
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class AuthController extends Controller
{
    public function loginPage(Request $request) : Response
    {
        return Inertia::render('Login');
    }

    public function login(LoginRequest $request) : RedirectResponse
    {
        $credentials = $request->validated();

        $authenticate = $this->portfolioApi->authenticate($credentials['email'], $credentials['password']);

        if ($authenticate->isSuccessful()) {
            $request->session()->put('token', $authenticate->getToken());
            $request->session()->put('user', $authenticate->getUser());

            return to_route('home');
        }

        return to_route('login-page')->withErrors([$authenticate->getErrors()]);
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

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function logout(Request $request) : RedirectResponse
    {
        if ($request->session()->get('token') == null) {
            return to_route('home', 404);
        }

        $logoutRequest = $this->portfolioApi->logout();

        if ($logoutRequest->isSuccessful()) {
            return to_route('home');
        }

        return to_route('home')->withErrors($logoutRequest->getErrors());
    }
}
