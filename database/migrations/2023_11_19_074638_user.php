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
        Schema::create('user', function (Blueprint $table) {
            $table->id(); 
            $table->string('username', 255)->index();
            $table->string('password', 255);
            $table->string('email', 100)->index();
            $table->string('firstname', 100);
            $table->string('lastname', 100);
            $table->string('image', 255);
            $table->string('bio', 255);
            $table->timestamps(6);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
