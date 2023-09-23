<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Console\Application;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Faker\Generator as Faker;


class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    
    /**
     * Display a listing of the resource.
     */
    public function keys()
    {
        return Inertia::render('Admin/Keys', [
            'keys' => Card::select(DB::raw("`key`, CASE WHEN `first_name` IS NOT NULL THEN 'used' ELSE 'free' END AS `state` "))->get(),
        ]);
    }
    
    /**
     * Display a listing of the resource.
     */
    public function registrations()
    {
        return Inertia::render('Admin/Registrations', [
            'keys' => Card::query()->whereNotNull('first_name')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardRequest $request, Faker $faker)
    {
        $data = $request->validated();
        for ($i=0; $i < $data['key_number']; $i++) Card::create($this->generate($data['key_encrypt'], $faker));
    }

    public function generate(String|null $dacs, Faker $faker) {       
        $cocs = sprintf(
            '%s-%s',
            $faker->regexify('[A-Z0-9]{4}'),
            $faker->regexify('[A-Z0-9]{4}'),
            // $faker->regexify('[A-Z0-9]{4}'),
            // $faker->regexify('[A-Z0-9]{4}'),
        );

        $key = $dacs ? $dacs . '-' . $cocs : $cocs;

        return [
            'key' => $key,
        ];
    }
    
    /**
     * Display the specified resource.
     */
    public function show($card)
    {
        $Card = Card::where('key', $card)->firstOrFail();
        return Inertia::render('Card', [
            'cardData' => $Card,
            'cardDate' => $Card->date,
            'cardExpire' => $Card->expire
        ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function profile($card)
    {
        return view('profile', [
            'cardData' => Card::where('key', $card)->firstOrFail()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardRequest $request)
    {
        $data = $request->validated();
        
        $data['avatar'] = $request->file('avatar')->store('avatars', 'public'); // Stockage du fichier
        // Créez le modèle Card avec les données fournies
        Card::where('key', $data['key'])->update($data);
        return redirect()->back()->with('success', 'Your information has saved successfully...');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        //
    }
}
