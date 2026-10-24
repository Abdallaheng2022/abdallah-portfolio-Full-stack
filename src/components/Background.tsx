import { EDUCATION, EXPERIENCE } from "../data";
import Section from "./Section";

export default function Background() {
  return (
    <Section id="experience" title="Experience and education">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          {EXPERIENCE.map((e) => (
            <article key={e.title} className="border-l-2 border-cobalt pl-5">
              <h3 className="font-display text-xl font-bold text-ink">{e.title}</h3>
              <p className="text-sm text-muted">
                {e.org}, {e.period}
              </p>
              <ul className="mt-3 max-w-[65ch] space-y-2 text-muted">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="space-y-8">
          {EDUCATION.map((ed) => (
            <article key={ed.title} className="border-l-2 border-line pl-5">
              <h3 className="font-display text-xl font-bold text-ink">{ed.title}</h3>
              <p className="text-sm text-muted">
                {ed.org}, {ed.period}
              </p>
              <p className="mt-2 text-muted">{ed.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
