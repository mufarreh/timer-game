import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, name, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const dialog = useRef();
  const score = 100 - Math.round(remainingTime / (targetTime * 10));
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost ? (
        <h2>You lost {name ?? ""}</h2>
      ) : (
        <h2>
          {name ? name + "'s " : ""}Score : {score}
        </h2>
      )}
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
