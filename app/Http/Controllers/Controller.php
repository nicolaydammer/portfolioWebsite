<?php

namespace App\Http\Controllers;

use App\Http\Api\PortfolioApi;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected PortfolioApi $portfolioApi;

    public function __construct()
    {
        $this->portfolioApi = new PortfolioApi();
    }
}
