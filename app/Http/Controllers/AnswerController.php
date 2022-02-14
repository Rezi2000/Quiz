<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnswerRequest;
use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function store(AnswerRequest $request)
    {
        $questionTitle = $request->get('title');
        $answers = $request->get('answers');

        $question = Question::create([
            'title' => $questionTitle
        ]);

//
//        foreach ($answers as $answer) {
//            Answer::create([
//                'title' => $answer['title'],
//                'point' => $answer['point'],
//                'question_id'=> $question->
//
//            ]);
//        }

        foreach ($answers as $answer) {
            $question->answers()->create([
                'title' => $answer['title'],
                'point' => $answer['point']
            ]);
        }
        return response([
           "message" => "Question has Created"
        ]);
    }
}
