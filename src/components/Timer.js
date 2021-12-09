import {useEffect, useState} from "react";
const Timer = ({setStop, questionNumber}) => {
  const [timer, setTimer] = useState(7);
  useEffect(() => {
    if (timer === 0 ) return setStop(true);
    const interval = setInterval(()=> {
      setTimer((previous) => previous -1 );
    }, 1000)
    return () => clearInterval(interval);
  }, [setStop,timer])

useEffect(() => {
  setTimer(7);
},[questionNumber])

  return <div className="timer ">{timer}</div>;
}
export default Timer;
  