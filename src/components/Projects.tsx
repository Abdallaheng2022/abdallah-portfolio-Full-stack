import { useState } from "react";
import { LAYERS, PROJECTS, type Layer } from "../data";
import LayerDots from "./LayerDots";
import Section from "./Section";

type Filter = "all" | "full" | Layer;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full", label: "Full stack" },
  { id: "ui", label: LAYERS.ui.name },
  { id: "api", label: LAYERS.api.name },
  { id: "data", label: LAYERS.data.name },
];

function matches(layers: Layer[], f: Filter) {
  if (f === "all") return true;
  if (f === "full") return layers.length === 3;
  return layers.includes(f);
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = PROJECTS.filter((p) => matches(p.layers, filter));

  return (
    <Section id="projects" title="Projects" intro="Show projects that use:">
      <div className="-mt-2 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              filter === f.id
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {shown.map((p) => (
          <li key={p.title} className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
            <div>
              <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                {p.title}
              </h3>
              {p.year && <p className="mt-1 text-sm text-muted">{p.year}</p>}
              <div className="mt-3">
                <LayerDots layers={p.layers} />
              </div>
            </div>
            <div>
              <p className="max-w-[65ch] text-ink">{p.summary}</p>
              <ul className="mt-4 max-w-[65ch] space-y-1.5 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                <span className="font-semibold text-ink">Built with </span>
                {p.stack.join(", ")}
              </p>
              {(p.repo || p.demo) && (
                <div className="mt-4 flex gap-5 text-sm">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="link">
                      Open live demo
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="link">
                      View code
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
