import { component$, useContext, useStore } from "@builder.io/qwik";
import { STEP } from "../container/container";

export const Counter = component$(({
  name
}: {
  name: string
}) => {
  const state = useStore({
    count: 0
  });
  const store = useContext(STEP)
  return (
    <div>
      <div>count: {state.count}</div>
      <p>name: {name}</p>
      <p>step: {store.step}</p>
      <button onClick$={() => state.count += 1}>
        Click Me To InCrease Count
      </button>
      <button onClick$={() => store.step += 1}>
        Click Me To InCrease Step
      </button>
    </div>
  );
});