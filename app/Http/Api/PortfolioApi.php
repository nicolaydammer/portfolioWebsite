<?php

namespace App\Http\Api;

use App\Exceptions\PortfolioApiException;
use App\Http\Api\Response\AuthenticateResponse;
use App\Http\Api\Response\LogoutResponse;
use App\Http\Api\Response\RegisterResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class PortfolioApi
{

    protected string $apiUrl;

    /**
     * @throws PortfolioApiException
     */
    public function __construct()
    {
        $this->apiUrl = config('api.url');

        if (empty($this->apiUrl)) {
            throw new PortfolioApiException();
        }
    }

    public function authenticate(string $email, string $password): AuthenticateResponse
    {
        return new AuthenticateResponse(
            Http::post($this->apiUrl . '/login', [
                'email' => $email,
                'password' => $password
            ])
        );
    }

    public function register(string $username, string $email, string $password, string $confirmPassword): RegisterResponse
    {
        return new RegisterResponse(
            Http::post($this->apiUrl . '/register', [
                'name' => $username,
                'email' => $email,
                'password' => $password,
                'confirmPassword' => $confirmPassword
            ])
        );
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function logout(): LogoutResponse
    {
        return new LogoutResponse(
            Http::withToken(session()->get('token'))->post($this->apiUrl . '/logout')
        );
    }
}
