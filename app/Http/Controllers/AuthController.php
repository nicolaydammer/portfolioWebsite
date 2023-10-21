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

        return to_route('login-page')->withErrors($authenticate->getErrors());
    }

    public function registerPage() : Response
    {
        return Inertia::render('Register');
    }

    public function register(RegisterRequest $request) : RedirectResponse
    {
        $credentials = $request->validated();

        $registerRequest = $this->portfolioApi->register(
            $credentials['name'],
            $credentials['email'],
            $credentials['password'],
            $credentials['confirmPassword']
        );

        if ($registerRequest->isSuccessful()) {
            session()->put('token', $registerRequest->getToken());
            session()->put('user', $registerRequest->getUser());
            return to_route('home');
        }

        return to_route('register-page')->withErrors($registerRequest->getErrors());
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function logout(Request $request) : RedirectResponse
    {
        $logoutRequest = $this->portfolioApi->logout();

        if ($logoutRequest->isSuccessful()) {
            session()->forget(['user', 'token']);
            session()->save();
            return to_route('home');
        }

        return to_route('home')->withErrors($logoutRequest->getErrors());
    }
}
