<?php

namespace App\Http\Api\Response;

use Illuminate\Support\Collection;

class AuthenticateResponse extends ApiResponse
{
    public function getUser(): array
    {
        return $this->json['user'];
    }

    public function getAbilities(): Collection
    {
        return collect($this->json['abilities']);
    }

    public function getToken(): ?string
    {
        return $this->json['token'] ?? null;
    }

    public function getErrors(): ?array
    {
        return $this->json['errors'];
    }
}
