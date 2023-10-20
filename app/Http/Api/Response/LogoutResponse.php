<?php

namespace App\Http\Api\Response;

class LogoutResponse extends ApiResponse
{
    public function getErrors(): ?array
    {
        return $this->json['errors'] ?? null;
    }
}
