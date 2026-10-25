export const metadata = {
  title: "ijra — what this app does",
  description: "What the play with ijra sandbox app does",
};

export default function Ijra() {
  return (
    <main>
      <h1>what is ijra?</h1>
      <p>
        This app is a tiny Next.js sandbox for testing agent-driven changes.
        File a request on ijra and watch the agent change the page.
      </p>
      <section>
        <h2>The idea</h2>
        <p>
          One page, two toy components, no database. A minimal surface for
          trying out edits safely.
        </p>
      </section>
      <section>
        <h2>Counter</h2>
        <p>A client-side button that counts how many times you clicked it.</p>
      </section>
      <section>
        <h2>Palette</h2>
        <p>
          A client-side row of five random color swatches. Hit shuffle to roll
          a new set.
        </p>
      </section>
      <section>
        <h2>How to play</h2>
        <p>
          Open the home page, try the toys, then ask ijra for a change and
          check the result.
        </p>
      </section>
      <p>
        <a className="pill-link" href="/">
          back home
        </a>
      </p>
    </main>
  );
}
