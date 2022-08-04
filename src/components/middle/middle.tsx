import { component$, mutable } from "@builder.io/qwik";
import {Counter} from '../counter/counter'
export const Middle = component$(() => {
  return (
    <>
     <Counter name={mutable("infra")}/>
    </>
  );
});