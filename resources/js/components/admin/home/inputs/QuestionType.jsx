
const QuestionType = ({onChange})=>{
    return(
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <label htmlFor= 'open'>Change Question Type</label> <br/>
            <input onChange={onChange} type="checkbox" id='open'  name="open" value="open"/> Add Answers
        </div>
    )
}


export default QuestionType;
