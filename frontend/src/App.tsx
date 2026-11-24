import { Button } from "./components/ui/Button";

function App() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 flex items-center justify-center">
      <section className="w-full max-w-xl p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-text-secondary">
          Heroes UI
        </p>
        <h1 className="m-0 text-4xl font-display text-text-primary text-ink-outline">
          Choose Your Move
        </h1>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            variant="default"
            size="lg"
            className="comic-ui-button comic-ui-button--yellow"
          >
            Play
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="comic-ui-button comic-ui-button--cyan"
          >
            Dash
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="comic-ui-button comic-ui-button--ink"
          >
            Cast
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="comic-ui-button comic-ui-button--crimson"
          >
            Cancel
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
