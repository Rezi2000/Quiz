import {useState} from "react";
import Button from "../../../global inputs/Button";

const AnswersInput = ({state,setState,addItem})=>{


    const handleChange = (e, key) => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedArr = state.answers.map((item, index) => {
            if (index === key) {
                return {...item, [name]: value};
            }
            return item;
        });
        setState({...state,answers: updatedArr});
    }

   return (
        <>
            {state.answers.map((item, key) => {
                return <div key={key} className='form-group form'>
                    <label>Answer</label>
                    <input type='text' name='title' onChange={e => handleChange(e, key)}/>

                    <label>Point</label>
                    <input type='text' name='point' onChange={e => handleChange(e, key)}/>

                </div>
            })
            }
            <Button type='button' label='Add answer' onClick={addItem}/>
        </>

   )


}


export default AnswersInput;
