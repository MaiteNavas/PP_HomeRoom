<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create(['name' => 'Admin', 'email' => 'admin@admin.com', 'password' => 'Admin1234.']);
        User::create(['name' => 'Admin2', 'email' => 'admin2@admin2.com', 'password' => 'Admin1234.']);
        User::create(['name' => 'Admin3', 'email' => 'admin3@admin3.com', 'password' => 'Admin1234.']);
    }
}
