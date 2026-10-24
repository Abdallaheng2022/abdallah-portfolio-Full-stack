import { useState } from "react";
import { LINKS, PROFILE } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${LINKS.email}`;
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-ink py-20 text-paper">
      <div className="wrap">
        <h2 className="max-w-[18ch] font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Have a role or a project in mind?
        </h2>
        <p className="mt-4 max-w-[55ch] text-lg text-paper/75">
          I'm open to full stack roles and freelance work. Email is the fastest way to reach me.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${LINKS.email}`}
            className="btn bg-paper text-ink hover:bg-paper/90"
          >
            Email me
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="btn border border-paper/30 text-paper hover:border-paper"
          >
            {copied ? "Email copied" : "Copy email address"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </div>
        <div className="mt-12 flex flex-wrap gap-6 border-t border-paper/15 pt-6 text-sm">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
            LinkedIn
          </a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
            Resume
          </a>
          <span className="ml-auto text-paper/60">
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
        </div>
      </div>
    </section>
  );
}
