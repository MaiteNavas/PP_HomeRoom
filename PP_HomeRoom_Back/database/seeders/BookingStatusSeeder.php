<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BookingStatus;

class BookingStatusSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BookingStatus::create(['name' => 'pendiente' ]);
        BookingStatus::create(['name' => 'confirmada' ]);
        BookingStatus::create(['name' => 'pagada' ]);
    }
}
