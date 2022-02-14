<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('question_types')->insert([
           ['title' => 'open question', 'code' => ''],
            ['title' => 'multiple answers', 'code' => ],
            ['title' => 'one']
        ]);
    }
}
