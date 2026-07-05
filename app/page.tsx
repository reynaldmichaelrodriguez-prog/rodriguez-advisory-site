const proofMetrics = [
  { value: "~US$1.6M", label: "overdue AR recovered" },
  { value: "$200M+", label: "P2P volume managed" },
  { value: "18-person", label: "finance operations team led" },
  { value: "14 years", label: "finance ops, payments, AP/AR, collections, BD" },
];

const workflowChips = [
  "CRM-to-Cash visibility",
  "AR & collections",
  "AP exception follow-up",
  "Payment status tracking",
  "Team ownership",
  "AI workflow automation",
];

const focusCards = [
  {
    title: "CRM-to-Cash",
    eyebrow: "Revenue workflow control",
    description:
      "Connect CRM follow-up, billing readiness, invoice status, collections ownership, and renewal actions.",
  },
  {
    title: "AP-to-Payment",
    eyebrow: "Payables execution",
    description:
      "Track blocked invoices, approval queues, PO/GRN issues, vendor document gaps, and payment readiness.",
  },
  {
    title: "AR & Collections",
    eyebrow: "Cash recovery discipline",
    description:
      "Prioritize overdue balances, owner follow-up, dispute resolution, commitments, and escalation paths.",
  },
  {
    title: "AI-Assisted Finance Operations",
    eyebrow: "Human-reviewed support",
    description:
      "Use labeled sample recommendations, summaries, and next-step prompts to speed review without replacing judgment.",
  },
];

const workflowDiagrams = [
  {
    title: "CRM-to-Cash",
    steps: ["BD", "CRM", "Billing", "AR", "Collections", "Cash"],
  },
  {
    title: "AP-to-Payment",
    steps: ["Invoice", "PO/GRN", "Exception", "Approval", "Payment Readiness"],
  },
];

const selectedWork = [
  {
    title: "AI Invoice Intake & AP Flow",
    output: "Exception queue with owners and payment readiness checks.",
    tools: "AP tracker, document checklist, approval view, AI-assisted summaries.",
    why: "Finance sees payment blockers before vendors escalate.",
  },
  {
    title: "AI-Assisted Follow-Up Queue",
    output: "Prioritized overdue actions, owners, due dates, and next steps.",
    tools: "Collections tracker, CRM task view, prompts, review notes.",
    why: "Managers direct daily action instead of chasing updates.",
  },
  {
    title: "CRM-to-Cash Visibility System",
    output: "Shared view from opportunity follow-up through billing and AR.",
    tools: "CRM extract, invoice tracker, AR aging, dashboard, cadence.",
    why: "Revenue leaders spot leakage early and protect collections timing.",
  },
  {
    title: "Revenue Workflow Control Tower",
    output: "Executive view of follow-up, billing readiness, and collections risk.",
    tools: "KPI dashboard, owner matrix, exception log, weekly action report.",
    why: "Leadership gets a clean view of this week's actions.",
  },
];

function WorkflowDiagram({ title, steps }: { title: string; steps: string[] }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-black uppercase tracking-[0.22em] text-advisory-navy">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="rounded-full border border-advisory-blue/15 bg-blue-50 px-4 py-2 text-sm font-bold text-advisory-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="hidden text-advisory-blue/50 sm:inline">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <section className="relative isolate px-5 py-6 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,_rgba(37,99,235,0.20),_transparent_32%),radial-gradient(circle_at_86%_18%,_rgba(15,118,110,0.14),_transparent_28%),linear-gradient(135deg,_#fbfdff_0%,_#edf4ff_48%,_#f8fafc_100%)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/80 px-4 py-3 shadow-[0_18px_60px_rgba(16,35,63,0.10)] backdrop-blur sm:px-5">
          <a href="#top" className="text-xs font-black tracking-[0.22em] text-advisory-navy sm:text-sm">
            RODRIGUEZ ADVISORY
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 sm:flex">
            <a href="#workflows" className="hover:text-advisory-blue">Solutions</a>
            <a href="#proof" className="hover:text-advisory-blue">Proof</a>
            <a href="#ai" className="hover:text-advisory-blue">AI Assistant</a>
            <a href="#contact" className="hover:text-advisory-blue">Contact</a>
          </div>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-10 pb-8 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-advisory-blue/15 bg-white/90 px-4 py-2 text-sm font-bold text-advisory-blue shadow-sm">
              CRM-to-Cash. AP-to-Payment. AI-assisted where it helps.
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.97] tracking-[-0.05em] text-advisory-navy sm:text-6xl lg:text-7xl">
              Finance operations visibility from CRM follow-up to cash collection.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
              Clear dashboards, repeatable follow-up, and human-reviewed AI workflow support for finance teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-advisory-navy px-6 py-3 text-center text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-advisory-blue">
                Book a discovery call
              </a>
              <a href="#proof" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-advisory-navy transition hover:-translate-y-0.5 hover:border-advisory-blue">
                View proof
              </a>
            </div>
          </div>

          <div id="ai" className="rounded-[2rem] border border-white bg-white/85 p-3 shadow-soft backdrop-blur sm:p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800/10 bg-advisory-navy text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-200">AI Workflow Assistant</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">Mock response · human review</p>
                </div>
                <span className="rounded-full bg-advisory-teal px-3 py-1 text-xs font-black">Online</span>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 p-4">
                  <h2 className="text-lg font-black">Which workflow needs attention?</h2>
                  <p className="mt-2 text-sm leading-6 text-blue-100">Pick a prompt or describe the blocker.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {workflowChips.map((chip) => (
                    <button key={chip} type="button" className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-left text-xs font-bold text-blue-50 transition hover:bg-white/20">
                      {chip}
                    </button>
                  ))}
                </div>
                <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-white p-5 text-advisory-navy shadow-lg">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-advisory-blue">Sample recommendation</p>
                  <h3 className="mt-3 text-xl font-black">Build an AP Exception Tracker.</h3>
                  <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    <div><dt className="font-bold text-advisory-navy">Best for</dt><dd>Blocked invoices, PO/GRN gaps, approvals, and payment readiness.</dd></div>
                    <div><dt className="font-bold text-advisory-navy">Build</dt><dd>Exception queue, owner tracker, readiness view, AI summaries.</dd></div>
                    <div><dt className="font-bold text-advisory-navy">Next step</dt><dd>Scope one workflow in a discovery call.</dd></div>
                  </dl>
                </div>
                <div className="flex flex-col gap-3 rounded-full border border-white/10 bg-white/10 p-2 sm:flex-row">
                  <input aria-label="Workflow issue" placeholder="Type your workflow issue..." className="min-h-12 flex-1 rounded-full border border-white/10 bg-white px-4 text-sm text-advisory-navy placeholder:text-slate-400 outline-none" />
                  <button type="button" className="rounded-full bg-advisory-teal px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
                    Generate
                  </button>
                </div>
                <p className="text-xs font-semibold text-blue-100">Do not enter sensitive financial data.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="proof" className="mx-auto grid max-w-7xl gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((metric) => (
            <div key={metric.value} className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(16,35,63,0.10)] backdrop-blur">
              <p className="text-3xl font-black tracking-[-0.04em] text-advisory-navy sm:text-4xl">{metric.value}</p>
              <p className="mt-3 text-sm font-bold uppercase leading-6 tracking-[0.12em] text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflows" className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-gold">What We Solve</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-advisory-navy sm:text-5xl">
              Finance workflows that need ownership, timing, and proof.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {focusCards.map((card) => (
              <article key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-advisory-blue">{card.eyebrow}</p>
                <h3 className="mt-5 text-2xl font-black text-advisory-navy">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workflowDiagrams.map((diagram) => (
              <WorkflowDiagram key={diagram.title} title={diagram.title} steps={diagram.steps} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-advisory-navy px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Selected Work</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Proof-led systems for finance operations teams.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {selectedWork.map((work, index) => (
              <article key={work.title} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:bg-white/[0.12]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-200">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black leading-tight">{work.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-6 text-blue-50">
                  <p><span className="block text-xs font-black uppercase tracking-[0.18em] text-white/60">Output</span>{work.output}</p>
                  <p><span className="block text-xs font-black uppercase tracking-[0.18em] text-white/60">Tools</span>{work.tools}</p>
                  <p><span className="block text-xs font-black uppercase tracking-[0.18em] text-white/60">Why it matters</span>{work.why}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-advisory-navy/10 bg-gradient-to-br from-advisory-navy via-slate-800 to-advisory-blue p-6 text-white shadow-[0_24px_80px_rgba(16,35,63,0.22)]">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-white/15 bg-[radial-gradient(circle_at_50%_26%,_rgba(255,255,255,0.26),_transparent_20%),linear-gradient(180deg,_rgba(255,255,255,0.10),_rgba(255,255,255,0.03))] p-5">
              <div className="flex h-full flex-col justify-end rounded-[1rem] border border-white/10 p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-100">Founder Photo</p>
                <p className="mt-2 text-2xl font-black">Mike Rodriguez</p>
                <p className="mt-2 text-sm leading-6 text-blue-100">Placeholder for a future portrait. No stock photo used.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-teal">About Mike</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-advisory-navy sm:text-5xl">Finance operations visibility adviser.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Reynald Michael “Mike” Rodriguez is a Philippines-based adviser with 14 years across finance operations, AP/AR, payments, collections, reconciliation, workflow design, BPO, e-commerce, and BD.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              He has led an 18-person finance operations team, managed $200M+ in P2P volume, and recovered approximately US$1.6M in overdue AR.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 sm:px-10 sm:pb-20 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-advisory-teal">Ready when finance needs line of sight</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-advisory-navy sm:text-5xl">Book a discovery call.</h2>
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
