export default function Player({ handleClick }) {
  function onChange(event) {
    console.log(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input onChange={onChange} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
