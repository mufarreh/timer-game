import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }
  function handleStop() {
    setTimerStarted(false);
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result="lost"
        targetTime={targetTime}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {/* <p>{timerExpired ? "you lost!" : ""}</p> */}
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">
          {timerStarted ? "Time is running...." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
