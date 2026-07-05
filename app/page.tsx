const proofMetrics = [
  "~US$1.6M overdue AR recovered",
  "$200M+ P2P volume managed",
  "18-person finance operations team led",
  "14 years across finance ops, payments, AP/AR, collections, BD",
];

const workflowChips = [
  "CRM-to-Cash visibility",
  "AR & collections",
  "AP exception follow-up",
  "Payment status tracking",
  "Team ownership and follow-up",
  "AI workflow automation",
];

const focusCards = [
  {
    title: "CRM-to-Cash",
    eyebrow: "Revenue workflow control",
    description:
      "Connect CRM follow-up, billing readiness, invoice status, collections ownership, and renewal actions in one leadership view.",
  },
  {
    title: "AP-to-Payment",
    eyebrow: "Payables execution",
    description:
      "Track blocked invoices, approval queues, PO/GRN issues, vendor document gaps, payment readiness, and release timing.",
  },
  {
    title: "AR & Collections",
    eyebrow: "Cash recovery discipline",
    description:
      "Prioritize overdue balances, owner follow-up, dispute resolution, customer commitments, and escalation paths.",
  },
  {
    title: "AI-Assisted Finance Operations",
    eyebrow: "Human-reviewed workflow support",
    description:
      "Use clearly labeled sample recommendations, summaries, and next-step prompts to speed review without replacing finance judgment.",
  },
];

const selectedWork = [
  {
    title: "AI Invoice Intake & AP Flow",
    output: "Invoice intake queue with exception status, owners, and payment readiness checks.",
    tools: "AP tracker, document checklist, approval view, AI-assisted summaries.",
    why: "Finance teams see what is blocking payment before vendors escalate.",
  },
  {
    title: "AI-Assisted Follow-Up Queue",
    output: "Prioritized follow-up list for overdue actions, owners, due dates, and next steps.",
    tools: "Collections tracker, CRM task view, prompts, review notes.",
    why: "Managers can direct daily action instead of chasing updates across tools.",
  },
  {
    title: "CRM-to-Cash Visibility System",
    output: "Shared view from opportunity follow-up through billing, AR, collections, and renewal signals.",
    tools: "CRM extract, invoice tracker, AR aging, dashboard, operating cadence.",
    why: "Revenue leaders can spot leakage early and protect collections timing.",
  },
  {
    title: "Revenue Workflow Control Tower",
    output: "Executive dashboard for revenue follow-up, billing readiness, collections risk, and accountability.",
    tools: "KPI dashboard, owner matrix, exception log, weekly action report.",
    why: "Leadership gets a clean view of what needs action this week.",
  },
];

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
            <a href="#workflows" className="hover:text-advisory-blue">Solutions</a>
            <a href="#proof" className="hover:text-advisory-blue">Proof</a>
            <a href="#ai" className="hover:text-advisory-blue">AI Assistant</a>
            <a href="#contact" className="hover:text-advisory-blue">Contact</a>
          </div>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 pb-10 pt-20 lg:grid-cols-[1.03fr_0.97fr] lg:pt-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-advisory-blue/20 bg-white px-4 py-2 text-sm font-semibold text-advisory-blue shadow-sm">
              CRM-to-Cash. AP-to-Payment. AI-assisted where it helps.
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-advisory-navy sm:text-6xl lg:text-7xl">
              Finance operations visibility from CRM follow-up to cash collection.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Turn scattered CRM, AP, AR, collections, and payment workflows into clear dashboards, repeatable follow-up systems, and AI-assisted operating workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-advisory-navy px-6 py-3 text-center text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-advisory-blue">
                Book a discovery call
              </a>
              <a href="#proof" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-advisory-navy transition hover:-translate-y-0.5 hover:border-advisory-blue">
                View proof
              </a>
            </div>
          </div>

          <div id="ai" className="rounded-[2rem] border border-white bg-white/90 p-5 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-advisory-navy p-6 text-white">
              <div className="border-b border-white/15 pb-5">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">AI Workflow Assistant</p>
                <h2 className="mt-2 text-2xl font-bold">Choose one workflow you want to improve.</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {workflowChips.map((chip) => (
                  <button key={chip} type="button" className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-left text-xs font-semibold text-blue-50 transition hover:bg-white/20">
                    {chip}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input aria-label="Workflow issue" placeholder="Type your workflow issue..." className="min-h-12 flex-1 rounded-full border border-white/15 bg-white px-4 text-sm text-advisory-navy placeholder:text-slate-400 outline-none" />
                <button type="button" className="rounded-full bg-advisory-teal px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
                  Generate recommendation
                </button>
              </div>
              <p className="mt-3 text-xs font-semibold text-blue-100">Do not enter sensitive financial data.</p>
              <article className="mt-5 rounded-2xl border border-white/10 bg-white p-5 text-advisory-navy">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-advisory-blue">Sample recommendation</p>
                <h3 className="mt-3 text-xl font-black">Recommended system: AP Exception Tracker</h3>
                <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <div><dt className="font-bold text-advisory-navy">Best for:</dt><dd>blocked invoices, missing documents, approvals, PO/GRN issues, and payment readiness.</dd></div>
                  <div><dt className="font-bold text-advisory-navy">Typical build:</dt><dd>exception queue, owner tracker, payment readiness view, AI summaries, human review.</dd></div>
                  <div><dt className="font-bold text-advisory-navy">Best next step:</dt><dd>book a discovery call to scope one workflow.</dd></div>
                </dl>
              </article>
            </div>
          </div>
        </div>

        <div id="proof" className="mx-auto grid max-w-7xl gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((metric) => (
            <div key={metric} className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-lg font-black text-advisory-navy">{metric}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflows" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-gold">What We Solve</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-advisory-navy sm:text-5xl">
              Finance workflows that need ownership, timing, and proof.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {focusCards.map((card) => (
              <article key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-advisory-blue">{card.eyebrow}</p>
                <h3 className="mt-5 text-2xl font-black text-advisory-navy">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-advisory-navy px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Selected Work</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Proof-led systems for finance operations teams.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {selectedWork.map((work) => (
              <article key={work.title} className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <h3 className="text-xl font-black">{work.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-6 text-blue-50">
                  <p><span className="font-bold text-white">Output:</span> {work.output}</p>
                  <p><span className="font-bold text-white">Tools:</span> {work.tools}</p>
                  <p><span className="font-bold text-white">Why it matters:</span> {work.why}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="flex aspect-square items-center justify-center rounded-[2rem] border border-dashed border-advisory-blue/40 bg-blue-50 text-center text-sm font-bold uppercase tracking-[0.22em] text-advisory-blue">
            Founder photo placeholder
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-teal">About Mike</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-advisory-navy">Finance operations visibility adviser.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Reynald Michael “Mike” Rodriguez is a Philippines-based Finance Operations Visibility Adviser with 14 years across finance operations, AP/AR, payments, collections, reconciliation, workflow design, BPO, e-commerce, and BD.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              He has led an 18-person finance operations team, managed $200M+ in P2P volume, and recovered approximately US$1.6M in overdue AR.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-teal">Ready when finance needs line of sight</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-advisory-navy">Book a discovery call.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Scope one workflow, define the dashboard, and agree the follow-up system your team can operate every week.
          </p>
          <a href="mailto:mike@rodriguezadvisory.tech" className="mt-8 inline-flex rounded-full bg-advisory-blue px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-advisory-navy">
            mike@rodriguezadvisory.tech
          </a>
        </div>
      </section>
    </main>
  );
}
