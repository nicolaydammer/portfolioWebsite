<?php

namespace App\Http\Api\Response;



use Illuminate\Http\Client\Response;

class ApiResponse
{
    protected array $json = [];

    public function __construct(protected Response $response)
    {
        $this->json = $this->response->json() ?? [];
    }

    public function isSuccessful(): bool
    {
        return $this->response->ok();
    }

    public function getErrors(): ?array
    {
        return $this->json['errors'] ?? null;
    }
}
