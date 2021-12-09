import { useEffect, useState } from 'react';
import Timer from './components/Timer';
import Quiz from './components/Quiz';
import data from "./components/data"
import './App.css';
import audiencePoll from '../src/assets/audience_poll.png'
import fiftyFifty from '../src/assets/fifty_fifty.png'
import flipQuestion from '../src/assets/flip_the_question.png'
import askExpert from '../src/assets/ask_the_expert.png'
import Play from './components/Play';
const App = () => {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(16);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const moneyList = [
    { id: 1, amount: "1,000" },
    { id: 2, amount: "2,000" },
    { id: 3, amount: "3,000" },
    { id: 4, amount: "5,000" },
    { id: 5, amount: "10,000" },
    { id: 6, amount: "20,000" },
    { id: 7, amount: "40,000" },
    { id: 8, amount: "80,000" },
    { id: 9, amount: "160,000" },
    { id: 10, amount: "320,000" },
    { id: 11, amount: "640,000" },
    { id: 12, amount: "1,250,000" },
    { id: 13, amount: "2,500,000" },
    { id: 14, amount: "5,000,000" },
    { id: 15, amount: "10,000,000" },
    { id: 16, amount: "70,000,000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 && setEarned(
      moneyList.find((money) => money.id === questionNumber - 1).amount);
  }, [moneyList, questionNumber]);
  return (
    <>
      <div className='app_container'>
        {
          username 
          ? (
            <>
                <div className="main">
                  {
                    stop
                      ? questionNumber - 1 === data.length
                        ? (
                          <div className="winner">
                            <div>
                              <span className="gold">🏆</span>
                              Congratulations!
                            </div>
                            <div>
                              You earned: <span className="earned_money">&#8377; {earned}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="earned">
                            You earned: <span className="earned_money">&#8377; {earned}</span>
                          </div>
                        )
                      : (
                        <>
                          <div className="top">
                            <Timer setStop={setStop} questionNumber={questionNumber} />
                          </div>
                          <div className="bottom">
                            <Quiz
                              data={data}
                              earned={earned}
                              setStop={setStop}
                              questionNumber={questionNumber}
                              setQuestionNumber={setQuestionNumber}
                            />
                          </div>
                        </>
                      )
                  }

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
                      moneyList.map(({ id, amount }) => {
                        return (
                          <>
                            <li key={id} className={questionNumber === id
                              ? "moneyListItem active" : "moneyListItem"}>
                              <span className='moneyListItemNumber'>{id}</span>
                              <span className='moneyListItemAmount'>{amount}</span>
                            </li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
            </>
          ) : (
            <Play />
          )
        }

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
