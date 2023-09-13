<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
   
            Schema::create('room', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_house');
                $table->foreign('id_house')->references('id')->on('house');
                $table->string('name');
                $table->string('description');
                $table->string('room_img');   
            });
  
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room');
    }
};
