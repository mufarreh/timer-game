export default function Player({ handleClick, playerName, enteredName }) {
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
