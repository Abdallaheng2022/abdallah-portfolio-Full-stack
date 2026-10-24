import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 py-16">
      <div className="wrap">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink">{title}</h2>
        {intro && <p className="mt-2 text-muted">{intro}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
