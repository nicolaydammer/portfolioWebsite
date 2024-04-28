<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function post(ContactRequest $request)
    {
        $apiRequest = $this->portfolioApi->postContact($request->validated());

        if ($apiRequest->isSuccessful()) {
            return to_route('home')->with(['success' => ['Contact request submitted successfully']]);
        }

        return to_route('contact')->withErrors($apiRequest->getErrors());
    }
}
