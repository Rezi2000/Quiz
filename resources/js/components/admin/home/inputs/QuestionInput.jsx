const QuestionInput = ({handleChange})=>{
    return(
        <>
            <label>Question</label>

            <input type='text' name='question' onChange={handleChange}/>


        </>
    )
}

export default QuestionInput;
