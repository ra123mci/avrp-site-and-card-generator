<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Card extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'key',
        'first_name',
        'last_name',
        'home_name',
        'celphone',
        'email',
        'date_of_birth',
        'place_of_birth',
        'gender',
        'occupation',
        'quality',
        'country',
        'province',
        'city',
        'district',
        'township',
        'neighborhood',
        'address',
        'bio',
        'avatar',
    ];

    /**
     * Get the user that owns the Card
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->attributes['date_of_birth'])->age;
    }

    public function getDateAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->toDate()->format('d-m-Y');
    }
    
    public function expire(): Attribute
    {
        return Attribute::make(
            get: fn() => Carbon::parse($this->attributes['created_at'])->addYear(1)->format('d-m-Y')
        );
    }
    
}
