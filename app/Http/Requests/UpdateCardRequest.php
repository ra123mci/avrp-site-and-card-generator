<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'key' => [ 'required', 'string', 'max:32', 'exists:cards,key,first_name,NULL'],
        
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'home_name' => 'nullable|string',
        
            'celphone' => 'nullable|string',
            'email' => 'nullable|email',
        
            'date_of_birth' => 'required|string',
            'place_of_birth' => 'nullable|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
        
            'occupation' => 'nullable|string',
        
            'country' => 'nullable|string',
            'province' => 'nullable|string',
            'city' => 'nullable|string',
            'district' => 'nullable|string',
            'township' => 'nullable|string',
            'neighborhood' => 'nullable|string',
            'address' => 'required|string',
        
            'bio' => 'nullable|string',
        
            'avatar' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
    public function messages()
    {
        return [
            'key.exists' => 'La clef selectionné est déjà utilisé',
        ];
    }
}
