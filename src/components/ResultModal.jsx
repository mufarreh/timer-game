export default function ResultModal({ result, targetTime, name }) {
  return (
    <dialog className="result-modal" open>
      <h2>
        You {result} {name ?? ""}
      </h2>
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with<strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
