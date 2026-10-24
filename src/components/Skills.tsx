import { SKILLS } from "../data";
import { LAYER_BG } from "./LayerDots";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {SKILLS.map((s) => (
          <div key={s.group}>
            <dt className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
              <span
                className={`h-3 w-3 rounded-sm ${s.layer ? LAYER_BG[s.layer] : "border border-muted"}`}
                aria-hidden="true"
              />
              {s.group}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-ink"
                >
                  {it}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
