import { Button } from "@/components/ui/Button";
import NavBar from "@/components/layout/NavBar";

function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className="min-h-screen bg-white px-6 py-12 flex items-center justify-center">
      <section className="w-full max-w-xl p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-text-secondary">
          Heroes UI
        </p>
        <h1 className="m-0 text-4xl font-display font-black text-text-primary text-ink-outline">
          Choose Your Move
        </h1>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            variant="default"
            size="lg"
            className="comic-ui-button comic-ui-button--yellow"
          >
            <span className="inline-block">PLAY NOW</span>
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
            variant="link"
            size="lg"
            className="comic-ui-button comic-ui-button--crimson"
          >
            Cancel
          </Button>
        </div>
      </section>
    </main>
  </>
  );
}

export default App;
