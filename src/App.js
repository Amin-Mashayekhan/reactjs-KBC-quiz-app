import React, {useState} from 'react';
import { Timer } from './Timer';
import { Quiz } from './Quiz';
import './App.css';
import audiencePoll from '../src/assets/audience_poll.png'
import fiftyFifty from '../src/assets/fifty_fifty.png'
import flipQuestion from '../src/assets/flip_the_question.png'
import askExpert from '../src/assets/ask_the_expert.png'
const App = () => {

  const [questionNumber, setQuestionNumber] = useState(1); 

  const moneyList = [
    {id:1, amount: "1,000"}, 
    {id:2, amount: "2,000"}, 
    {id:3, amount: "3,000"}, 
    {id:4, amount: "5,000"}, 
    {id:5, amount: "10,000"}, 
    {id:6, amount: "20,000"}, 
    {id:7, amount: "40,000"}, 
    {id:8, amount: "80,000"}, 
    {id:9, amount: "160,000"}, 
    {id:10, amount: "320,000"}, 
    {id:11, amount: "640,000"}, 
    {id:12, amount: "1,250,000"}, 
    {id:13, amount: "2,500,000"}, 
    {id:14, amount: "5,000,000"}, 
    {id:15, amount: "10,000,000"}, 
    {id:16, amount: "70,000,000"}, 
  ].reverse();
  return (
    <>
      <div className='app_container'>
        <div className="main">
          <div className="top">
            <Timer     />
          </div>
          <div className="bottom">
            <Quiz />
          </div>
        </div>
        <div className="price_list">
          <div className="lifelines">
            <div className="lifeline">
              <img src={audiencePoll} alt="Audience Poll" />
            </div>
            <div className="lifeline">
              <img src={fiftyFifty} alt="Fifty Fifty" />
            </div>
            <div className="lifeline">
              <img src={flipQuestion} alt="Flip Question" />
            </div>
            <div className="lifeline">
              <img src={askExpert} alt="Ask the Expert" />
            </div>
          </div>
          <ul className='moneyList'>
            {
              moneyList.map(({id, amount}) => {
                return ( 
                  <li className='moneyListItem'>
                    <span className='moneyListItemNumber'>{id}</span>
                    <span className='moneyListItemAmount'>{amount}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <footer>
        Guided by:<span> Digital Solutions Master</span>
        <br />
        Designed by <a target="_blank" rel="noreferrer" href='https://github.com/MohammadAmin-Mashayekhan'>Mohammad amin Mashayekhan</a>
      </footer>
    </>

    
  );
}

export default App;

    function salam({}) {
      return (<div className="quiz">
              <div className="question">What is the Capital of Canada?</div>
              <div className="answers">
                <div className="answer">Houston</div>
                <div className="answer">New York</div>
                <div className="answer">Ottawa</div>
                <div className="answer">Glasgow</div>
              </div>
            </div>);
    }

    function input({}) {
      return (<div className="quiz">
              <div className="question">What is the Capital of Canada?</div>
              <div className="answers">
                <div className="answer">Houston</div>
                <div className="answer">New York</div>
                <div className="answer">Ottawa</div>
                <div className="answer">Glasgow</div>
              </div>
            </div>);
    }

    function ask({}) {
      return (<div className="quiz">
              <div className="question">What is the Capital of Canada?</div>
              <div className="answers">
                <div className="answer">Houston</div>
                <div className="answer">New York</div>
                <div className="answer">Ottawa</div>
                <div className="answer">Glasgow</div>
              </div>
            </div>);
    }
      