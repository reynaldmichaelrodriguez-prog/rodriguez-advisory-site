const pillars = [
  {
    title: "CRM-to-Cash",
    eyebrow: "Revenue operations clarity",
    description:
      "Trace every handoff from signed opportunity to invoice, collections, and renewal signals so leaders can spot leakage before month-end.",
  },
  {
    title: "AP-to-Payment",
    eyebrow: "Spend flow confidence",
    description:
      "Bring purchase requests, approvals, vendor bills, payment timing, and cash impact into one operating view.",
  },
  {
    title: "AI-assisted where it helps",
    eyebrow: "Mock AI responses only",
    description:
      "Use lightweight AI-style summaries, exception flags, and next-step prompts without adding Grok or live model dependencies yet.",
  },
];

const mockInsights = [
  "Three enterprise invoices are 12+ days past target approval; assign a collections owner today.",
  "Vendor payment batches show a duplicate approval pattern worth reviewing before Friday's run.",
  "CRM stage dates and billing dates disagree on two renewals; reconcile before forecast lock.",
];

const workflowSteps = ["Map", "Instrument", "Prioritize", "Operate"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_36%),linear-gradient(135deg,_#f8fafc_0%,_#eef4ff_48%,_#f8fafc_100%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-5 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="text-sm font-bold tracking-[0.24em] text-advisory-navy">
            RODRIGUEZ ADVISORY
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#workflows" className="hover:text-advisory-blue">Workflows</a>
            <a href="#ai" className="hover:text-advisory-blue">Mock AI</a>
            <a href="#contact" className="hover:text-advisory-blue">Contact</a>
          </div>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-advisory-blue/20 bg-white px-4 py-2 text-sm font-semibold text-advisory-blue shadow-sm">
              Finance Operations Visibility
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-advisory-navy sm:text-6xl lg:text-7xl">
              CRM-to-Cash. AP-to-Payment. AI-assisted where it helps.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Rodriguez Advisory builds practical operating dashboards and process instrumentation for finance teams that need trustworthy visibility without over-engineered transformation programs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-advisory-navy px-6 py-3 text-center text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-advisory-blue">
                Start a visibility review
              </a>
              <a href="#workflows" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-advisory-navy transition hover:-translate-y-0.5 hover:border-advisory-blue">
                See the operating model
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/85 p-5 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-advisory-navy p-6 text-white">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Visibility board</p>
                  <h2 className="mt-2 text-2xl font-bold">July finance pulse</h2>
                </div>
                <span className="rounded-full bg-advisory-teal px-3 py-1 text-xs font-bold">Mock AI</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["92%", "18", "$1.4M"].map((metric, index) => (
                  <div key={metric} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">{metric}</p>
                    <p className="mt-1 text-xs text-blue-100">{["invoice readiness", "open exceptions", "cash at risk"][index]}</p>
                  </div>
                ))}
              </div>
              <div id="ai" className="mt-6 space-y-3">
                {mockInsights.map((insight) => (
                  <div key={insight} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-blue-50">
                    <span className="font-bold text-white">Mock response:</span> {insight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflows" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-gold">Operating focus</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-advisory-navy sm:text-5xl">
              See the work, not just the accounting result.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-advisory-blue">{pillar.eyebrow}</p>
                <h3 className="mt-5 text-2xl font-black text-advisory-navy">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-advisory-navy px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Engagement rhythm</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">A practical path from messy handoffs to reliable cadence.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm font-bold text-blue-200">0{index + 1}</p>
                <h3 className="mt-10 text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-teal">Ready when finance needs line of sight</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-advisory-navy">Book a Rodriguez Advisory visibility review.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Start with one revenue workflow, one payment workflow, and a mock AI insight layer that helps your team decide what to fix next.
          </p>
          <a href="mailto:hello@rodriguezadvisory.example" className="mt-8 inline-flex rounded-full bg-advisory-blue px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-advisory-navy">
            hello@rodriguezadvisory.example
          </a>
        </div>
      </section>
    </main>
  );
}
