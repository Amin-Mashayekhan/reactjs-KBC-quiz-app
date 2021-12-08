import {useEffect, useState} from 'react';

const Quiz = ({data, questionNumber, setQuestionNumber}) => {
    const[question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    },[data, questionNumber]);


    return <div className="quiz">
        <div className="question">{question?.question}</div>
        {/* // '?' means optional means question may be exist or not */}
        <div className="answers">
            {
                question?.answers.map((answer, index ) => {
                    return (
                        <div key={index} className="answer">
                            <span className="option"> &#x2756;{answer.option}</span> :
                            {answer.text}
                        </div>
                    )
                }) 
            } 
        </div>
    </div>;
}
export default Quiz;