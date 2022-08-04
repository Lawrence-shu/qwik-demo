import { component$, createContext, useContextProvider, useStore } from "@builder.io/qwik";
import { Middle } from "../middle/middle";

export const STEP = createContext<{
  step: number
}>('Test');

export const Container = component$(() => {
  const context = useStore({
    step: 0
  })
  useContextProvider<{
    step: number
  }>(STEP, context)
  return (
    <>
      <Middle />
    </>
  );
});