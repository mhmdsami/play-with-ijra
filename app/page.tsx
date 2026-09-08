import { Counter, Palette } from "./toys";

export default function Home() {
  return (
    <main>
      <h1>play with ijra</h1>
      <p>A sandbox repo. File a request on ijra and watch the agent change this page.</p>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>Palette</h2>
        <Palette />
      </section>
    </main>
  );
}
