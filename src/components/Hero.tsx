import { LAYERS, LINKS, PROFILE, type Layer } from "../data";
import { LAYER_BG } from "./LayerDots";

const ORDER: Layer[] = ["ui", "api", "data"];

const BORDER: Record<Layer, string> = {
  ui: "border-ui/40",
  api: "border-api/40",
  data: "border-data/40",
};

// The stack diagram: three layers that settle into place on load.
function StackDiagram() {
  return (
    <figure className="w-full" aria-label="The layers I work across">
      <div className="flex flex-col gap-3">
        {ORDER.map((key, i) => {
          const layer = LAYERS[key];
          return (
            <div key={key} className="relative">
              <div
                className={`settle rounded-xl border bg-surface p-4 shadow-[0_1px_0_rgb(var(--line))] ${BORDER[key]}`}
                style={{ animationDelay: `${150 + i * 140}ms` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-3 w-3 rounded-sm ${LAYER_BG[key]}`} aria-hidden="true" />
                  <span className="font-display text-lg font-bold text-ink">
                    {layer.name}
                  </span>
                </div>
                <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
                  {layer.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              {i < ORDER.length - 1 && (
                <span
                  className="absolute -bottom-3 left-7 h-3 w-px bg-line"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
      <figcaption className="mt-3 text-xs text-muted">
        Where I work in a typical project, from what users see to where the data lives.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className="wrap grid gap-12 pb-16 pt-14 md:grid-cols-[1.25fr_1fr] md:items-center md:pt-20">
      <div>
        <p className="font-medium text-cobalt">
          {PROFILE.role} in {PROFILE.location}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">
          {PROFILE.headline}
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-muted">{PROFILE.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            See my projects
          </a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="btn-ghost">
            View resume
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn-ghost">
            GitHub
          </a>
        </div>
      </div>
      <StackDiagram />
    </section>
  );
}
