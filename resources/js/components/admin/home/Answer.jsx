import {useState} from "react";
import axios from 'axios';
import QuestionInput from "./inputs/QuestionInput";
import AnswersInput from "./inputs/AnswersInput";
import Button from "../../global inputs/Button";
import QuestionType from "./inputs/QuestionType";

const Answer = () => {

    const [question, setQuestion] = useState({
        title: "",
        answers: [],
    })

    const handleQuestChange = (e) =>{
         setQuestion({...question,title: e.target.value})

    }

    const handleSubmit = (e) => {
        console.log(question)
        e.preventDefault();

        // axios.post('/api/admin/questions', question)
        //     .then(res =>{
        //          console.log(res.data);
        //     }).catch(err => console.log(err))
    }

    const [answerQuestion,setanswerQuestion] = useState(false   );

    const changeCheckbox = ()=>{
        setanswerQuestion(!answerQuestion)
        setQuestion({...question,answers: []})
    }


    const addItem = () => {

        const updatedArr = [...question.answers, {title: "", point: ""}];
        setQuestion({...question,answers: updatedArr});
    }

    return (
        <>

        <div className="content-wrapper">

            <section className="content">

                <div className="card ">
                    <div className="card-header">
                        <h3 className="card-title">Enter a Question!</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus"></i>
                            </button>

                        </div>
                    </div>


                    <div className="card-body">

                        <QuestionType onChange={changeCheckbox}/>

                        <form>

                            <QuestionInput handleChange={handleQuestChange}/>

                            {answerQuestion ? <AnswersInput state={question} setState={setQuestion} addItem={addItem} /> : ""}


                        </form>

                        <Button type='submit' label='Submit' onClick={handleSubmit}/>


                    </div>
                </div>

            </section>
        </div>

        </>
    )

}





export default Answer;
