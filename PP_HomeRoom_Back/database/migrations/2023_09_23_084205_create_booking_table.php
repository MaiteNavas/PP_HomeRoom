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
        Schema::create('booking', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_customer');
            $table->foreign('id_customer')->references('id')->on('customer');
            $table->unsignedBigInteger('id_room');
            $table->foreign('id_room')->references('id')->on('room');
            $table->unsignedBigInteger('id_booking_status')->default(1);
            $table->foreign('id_booking_status')->references('id')->on('booking_status');
            $table->date('checkin_date');
            $table->date('checkout_date');
            $table->string('total_adults');
            $table->string('total_children');
            $table->string('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking');
    }
};
