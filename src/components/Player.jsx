import { useState, useRef } from "react";

export default function Player({ handleClick }) {
  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    if (playerName.current.value) {
      setEnteredName(playerName.current.value);
      playerName.current.value = null;
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
