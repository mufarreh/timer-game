import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, name },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
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
});
export default ResultModal;
