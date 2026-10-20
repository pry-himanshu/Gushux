import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/_authenticated/app/")({
  component: EmptyState,
});

function EmptyState() {
  return (
    <div className="section-reveal relative grid min-h-full place-items-center overflow-hidden px-5 py-10 text-center sm:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="birthday-orb birthday-orb-one" />
        <span className="birthday-orb birthday-orb-two" />
        <span className="birthday-orb birthday-orb-three" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xl">
        <div className="birthday-welcome-card">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            <span className="birthday-line" />
            <span>A little moment of magic</span>
            <span className="birthday-line" />
          </div>

          <div className="birthday-logo-wrap mx-auto mb-6 grid place-items-center">
            <div className="birthday-logo-glow" />
            <Logo size={116} />
            <span className="birthday-cake-badge" aria-hidden="true">🎂</span>
          </div>

          <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-2xl" aria-label="Birthday decorations">
            <span className="birthday-float birthday-float-one">🎈</span>
            <span className="birthday-float birthday-float-two">✨</span>
            <span className="birthday-float birthday-float-three">💗</span>
            <span className="birthday-float birthday-float-four">🕯️</span>
            <span className="birthday-float birthday-float-five">🎉</span>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Made for moments that matter
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Every hello is <span className="birthday-gradient-text">a little gift.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            Your favourite conversations, your sweetest memories, and the people who make ordinary days feel special — they all belong here.
          </p>

          <div className="birthday-divider mx-auto my-7" />

          <div className="birthday-note mx-auto max-w-md">
            <span className="birthday-note-heart" aria-hidden="true">♡</span>
            <p className="font-display text-xl leading-relaxed sm:text-2xl">
              “The best moments aren’t things. They’re the people we share them with.”
            </p>
            <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
              Start a conversation. Make someone’s day. 💌
            </p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Pick a chat from the sidebar, or search a username to say hello.
          </p>
        </div>
      </div>

      <style>{`
        .birthday-welcome-card {
          position: relative;
          padding: clamp(1.5rem, 5vw, 3rem);
          border: 1px solid color-mix(in srgb, var(--birthday-rose), var(--border) 78%);
          border-radius: 2rem;
          background:
            radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--birthday-rose), transparent 91%), transparent 68%),
            color-mix(in srgb, var(--card), transparent 16%);
          box-shadow: 0 28px 90px -58px color-mix(in srgb, var(--birthday-rose), transparent 35%),
                      inset 0 1px 0 color-mix(in srgb, white, transparent 25%);
          backdrop-filter: blur(12px);
        }
        .birthday-logo-wrap { position: relative; width: 140px; height: 140px; }
        .birthday-logo-glow {
          position: absolute; inset: 8px; border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--birthday-gold), transparent 62%), color-mix(in srgb, var(--birthday-rose), transparent 90%) 66%, transparent 72%);
          filter: blur(7px);
          animation: birthday-glow-breathe 4s ease-in-out infinite;
        }
        .birthday-logo-wrap > *:not(.birthday-logo-glow) { position: relative; z-index: 1; }
        .birthday-cake-badge {
          position: absolute; right: -2px; bottom: 7px; z-index: 2;
          display: grid; place-items: center; width: 38px; height: 38px;
          border: 1px solid color-mix(in srgb, var(--birthday-gold), var(--border) 30%);
          border-radius: 50%; background: var(--card);
          box-shadow: 0 5px 20px -8px color-mix(in srgb, var(--birthday-gold), transparent 10%);
          font-size: 19px;
        }
        .birthday-gradient-text {
          background: linear-gradient(100deg, var(--birthday-rose), var(--birthday-gold) 58%, var(--birthday-lilac));
          background-clip: text; -webkit-background-clip: text; color: transparent;
        }
        .birthday-line { width: 24px; height: 1px; background: linear-gradient(90deg, transparent, var(--birthday-gold)); }
        .birthday-line:last-child { transform: rotate(180deg); }
        .birthday-divider { width: min(220px, 70%); height: 1px; background: linear-gradient(90deg, transparent, var(--birthday-rose), var(--birthday-gold), var(--birthday-lilac), transparent); }
        .birthday-note { position: relative; padding: 1.25rem 1rem 1.1rem; border-radius: 1.25rem; background: color-mix(in srgb, var(--birthday-rose), transparent 95%); }
        .birthday-note-heart { display: block; margin-bottom: .5rem; color: var(--birthday-rose); font-size: 1.5rem; line-height: 1; }
        .birthday-float { display: inline-block; animation: birthday-float 3.6s ease-in-out infinite; filter: drop-shadow(0 4px 8px color-mix(in srgb, var(--birthday-rose), transparent 82%)); }
        .birthday-float-two { animation-delay: -.7s; }
        .birthday-float-three { animation-delay: -1.4s; }
        .birthday-float-four { animation-delay: -2.1s; }
        .birthday-float-five { animation-delay: -2.8s; }
        .birthday-orb { position: absolute; display: block; width: 8rem; height: 8rem; border-radius: 50%; filter: blur(50px); opacity: .22; }
        .birthday-orb-one { top: 10%; left: 8%; background: var(--birthday-rose); }
        .birthday-orb-two { top: 24%; right: 8%; background: var(--birthday-gold); }
        .birthday-orb-three { bottom: 6%; left: 42%; background: var(--birthday-lilac); }
        @keyframes birthday-float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-7px) rotate(2deg); } }
        @keyframes birthday-glow-breathe { 0%,100% { opacity: .65; transform: scale(.96); } 50% { opacity: 1; transform: scale(1.06); } }
        @media (prefers-reduced-motion: reduce) {
          .birthday-logo-glow, .birthday-float { animation: none !important; }
        }
        @media (max-width: 640px) {
          .birthday-welcome-card { border-radius: 1.5rem; backdrop-filter: none; }
          .birthday-orb { opacity: .13; }
        }
      `}</style>
    </div>
  );
}
