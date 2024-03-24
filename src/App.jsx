import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { useState, useRef } from "react";

function App() {
  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    if (playerName.current.value) {
      setEnteredName(playerName.current.value);
      playerName.current.value = null;
    }
  }
  return (
    <>
      <Player
        playerName={playerName}
        handleClick={handleClick}
        enteredName={enteredName}
      />
      <div id="challenges">
        <TimerChallenge
          title="Easy"
          targetTime={1}
          name={enteredName}
        ></TimerChallenge>
        <TimerChallenge
          title="Not Easy"
          targetTime={5}
          name={enteredName}
        ></TimerChallenge>
        <TimerChallenge
          title="Getting Tough"
          targetTime={10}
          name={enteredName}
        ></TimerChallenge>
        <TimerChallenge
          title="Pros Only"
          targetTime={15}
          name={enteredName}
        ></TimerChallenge>
      </div>
    </>
  );
}

export default App;
