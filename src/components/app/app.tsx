import { component$ } from '@builder.io/qwik';
import { Container } from '../container/container';

export const App = component$(() => {


  return (
    <section class="todoapp">
      <Container />
    </section>
  );
});
