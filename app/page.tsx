const proofMetrics = [
  { value: "~US$1.6M", label: "Overdue AR recovered" },
  { value: "$200M+", label: "P2P volume managed" },
  { value: "18-person", label: "Finance operations team led" },
  { value: "14 years", label: "Finance ops, payments, AP/AR, collections, BD" },
];

const workflowChips = [
  "CRM-to-Cash visibility",
  "AR & collections",
  "AP exception follow-up",
  "Payment status tracking",
  "Team ownership and follow-up",
  "AI workflow automation",
];

const solveCards = [
  ["CRM-to-Cash", "Sales follow-up, billing handoff, AR, collections, and cash visibility."],
  ["AP-to-Payment", "Invoice intake, exception follow-up, approvals, and payment readiness."],
  ["AR & Collections", "Aging views, follow-up owners, disputes, promises to pay, and escalation."],
  ["AI-Assisted Finance Operations", "Triage, summaries, drafts, extraction, routing, dashboards, and human review."],
];

const diagrams = [
  { title: "CRM-to-Cash", steps: ["BD", "CRM", "Billing", "AR", "Collections", "Cash"] },
  { title: "AP-to-Payment", steps: ["Invoice", "PO/GRN", "Exception", "Approval", "Payment Readiness"] },
];

const selectedWork = [
  {
    title: "AI Invoice Intake & AP Flow",
    output: "Invoice intake queue, exception routing, approval visibility.",
    tools: "n8n, Gmail, Drive, AI extraction, Sheets, review queues.",
    why: "Keeps AP workflows moving while preserving human review.",
    visual: "table",
  },
  {
    title: "AI-Assisted Follow-Up Queue",
    output: "Daily follow-up queue with owner and next action.",
    tools: "n8n, Gmail, AI summaries, Sheets, Baserow.",
    why: "Turns distributed follow-up into visible daily action.",
    visual: "queue",
  },
  {
    title: "CRM-to-Cash Visibility System",
    output: "Pipeline-to-cash status view across CRM, billing, AR, and collections.",
    tools: "CRM, Sheets, dashboards, workflow rules, AI support.",
    why: "Shows where ownership and follow-up need attention.",
    visual: "steps",
  },
  {
    title: "Revenue Workflow Control Tower",
    output: "Executive view of revenue movement, follow-up, and collection risk.",
    tools: "Dashboards, status definitions, review notes, escalation paths.",
    why: "Gives leaders practical visibility without long reporting cycles.",
    visual: "summary",
  },
];

function Button({ href, children, variant = "primary" }: { href: string; children: string; variant?: "primary" | "secondary" }) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex min-h-11 items-center justify-center rounded-md bg-advisory-gold px-5 py-3 text-sm font-extrabold text-advisory-ink shadow-card transition hover:-translate-y-0.5 hover:bg-[#b98424]"
          : "inline-flex min-h-11 items-center justify-center rounded-md border border-advisory-navy/20 bg-white px-5 py-3 text-sm font-extrabold text-advisory-navy transition hover:-translate-y-0.5 hover:border-advisory-gold"
      }
    >
      {children}
    </a>
  );
}

function WorkflowDiagram({ title, steps }: { title: string; steps: string[] }) {
  return (
    <article className="rounded-lg border border-advisory-slate bg-white p-5 shadow-card">
      <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-advisory-navy">{title}</h3>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-advisory-slate bg-advisory-stone px-3 py-2 text-sm font-bold text-advisory-ink">{step}</span>
            {index < steps.length - 1 ? <span className="text-advisory-gold">→</span> : null}
          </div>
        ))}
      </div>
    </article>
  );
}

function MiniMockup({ type }: { type: string }) {
  if (type === "table") {
    return <div className="space-y-2 rounded-md border border-advisory-slate bg-advisory-stone p-3"><div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase text-advisory-navy/70"><span>Invoice</span><span>Status</span><span>Owner</span></div>{["Exception", "Review", "Ready"].map((s) => <div key={s} className="grid grid-cols-3 gap-2 rounded bg-white p-2 text-xs"><span>AP-{s[0]}2</span><span className="font-bold text-advisory-gold">{s}</span><span>Finance</span></div>)}</div>;
  }
  if (type === "queue") {
    return <div className="rounded-md border border-advisory-slate bg-advisory-stone p-3"><div className="mb-3 h-2 w-20 bg-advisory-gold" />{["Call owner", "Send draft", "Escalate"].map((s) => <div key={s} className="mb-2 flex items-center justify-between rounded bg-white p-2 text-xs"><span>{s}</span><span className="rounded bg-advisory-navy px-2 py-1 text-white">Today</span></div>)}</div>;
  }
  if (type === "steps") {
    return <div className="rounded-md border border-advisory-slate bg-advisory-stone p-3"><div className="flex items-center justify-between gap-2 text-xs font-bold">{["CRM", "Bill", "AR", "Cash"].map((s, i) => <span key={s} className={i === 2 ? "rounded bg-advisory-gold px-2 py-2 text-advisory-ink" : "rounded bg-white px-2 py-2 text-advisory-navy"}>{s}</span>)}</div><div className="mt-3 rounded bg-white p-2 text-xs text-advisory-navy">Owner review required</div></div>;
  }
  return <div className="rounded-md border border-advisory-slate bg-advisory-stone p-3"><div className="grid grid-cols-2 gap-2">{["Review", "Owners", "Notes", "Escalate"].map((s) => <div key={s} className="rounded bg-white p-3 text-xs font-bold text-advisory-navy"><span className="mb-2 block h-1.5 w-10 bg-advisory-gold" />{s}</div>)}</div></div>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-advisory-slate bg-advisory-stone/95 px-5 py-4 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#top" className="leading-tight"><span className="block text-base font-black text-advisory-navy">Rodriguez Advisory</span><span className="block text-sm font-semibold text-advisory-ink/70">Finance Operations Visibility</span></a>
          <div className="hidden items-center gap-7 text-sm font-bold text-advisory-navy md:flex"><a href="#solve">What We Solve</a><a href="#selected-work">Selected Work</a><a href="#about">About</a><a href="#contact">Book a Call</a></div>
          <Button href="mailto:mike@rodriguezadvisory.tech">Book a Call</Button>
        </nav>
      </header>

      <section id="top" className="px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-advisory-gold">CRM-to-Cash. AP-to-Payment. AI-assisted where it helps.</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-advisory-navy sm:text-6xl">Finance operations visibility from CRM follow-up to cash collection.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-advisory-ink/75">Turn scattered CRM, AP, AR, collections, and payment workflows into clear dashboards, repeatable follow-up systems, and AI-assisted operating workflows.</p>
            <p className="mt-5 max-w-2xl border-l-4 border-advisory-gold pl-4 text-base font-semibold leading-7 text-advisory-navy">Built for owners and finance teams that need visibility, ownership, follow-up, and human review where controls matter.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="mailto:mike@rodriguezadvisory.tech">Book a discovery call</Button><Button href="#proof" variant="secondary">View proof</Button></div>
            <div className="mt-8 grid gap-3 text-sm font-extrabold text-advisory-navy sm:grid-cols-3"><span>~US$1.6M overdue AR recovered</span><span>$200M+ P2P volume managed</span><span>18-person finance ops team led</span></div>
          </div>

          <aside className="rounded-lg border border-advisory-slate bg-white p-4 shadow-soft" aria-label="AI Workflow Assistant">
            <div className="flex items-center justify-between border-b border-advisory-slate pb-4"><div><h2 className="text-xl font-black text-advisory-navy">AI Workflow Assistant</h2><p className="text-sm font-bold text-advisory-gold">Practical AI with human review</p></div><span className="rounded-full bg-advisory-navy px-3 py-2 text-sm font-black text-white">RA</span></div>
            <div className="space-y-4 pt-5"><div className="flex gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-advisory-navy text-sm font-black text-white">RA</span><p className="rounded-lg rounded-tl-none bg-advisory-stone p-4 text-sm font-semibold leading-6 text-advisory-ink">Tell me where follow-up is getting hard to see. I’ll suggest the right workflow system.</p></div><div className="flex flex-wrap gap-2">{workflowChips.map((chip) => <button key={chip} className="rounded-md border border-advisory-slate bg-white px-3 py-2 text-xs font-bold text-advisory-navy hover:border-advisory-gold" type="button">{chip}</button>)}</div><div className="flex flex-col gap-2 rounded-lg border border-advisory-slate bg-advisory-stone p-2 sm:flex-row"><input className="min-h-11 flex-1 rounded-md border border-advisory-slate bg-white px-3 text-sm outline-none" aria-label="Workflow issue" placeholder="Type your workflow issue..." /><button className="rounded-md bg-advisory-gold px-4 py-3 text-sm font-black text-advisory-ink" type="button">Generate recommendation</button></div><p className="text-xs font-semibold text-advisory-ink/60">Do not enter sensitive financial data.</p><div className="rounded-lg border border-advisory-navy/20 bg-white p-4 shadow-card"><p className="text-xs font-black uppercase tracking-[0.16em] text-advisory-gold">Recommended system:</p><h3 className="mt-2 text-xl font-black text-advisory-navy">AP Exception Tracker</h3><dl className="mt-4 space-y-3 text-sm leading-6"><div><dt className="font-black text-advisory-navy">Best for:</dt><dd>Blocked invoices, missing documents, approvals, PO/GRN issues, and payment readiness.</dd></div><div><dt className="font-black text-advisory-navy">Typical build:</dt><dd>Exception queue · Owner tracker · Payment readiness view · AI summaries · Human review</dd></div></dl><p className="mt-4 text-sm font-bold text-advisory-navy">Best next step: book a discovery call to scope one workflow.</p><div className="mt-4 flex flex-col gap-2 sm:flex-row"><Button href="mailto:mike@rodriguezadvisory.tech">Book discovery call</Button><Button href="mailto:mike@rodriguezadvisory.tech?subject=Workflow%20summary" variant="secondary">Send summary to Mike</Button></div></div><div className="rounded-md border border-advisory-slate bg-advisory-stone px-3 py-2 text-xs font-black text-advisory-navy">Human review where controls matter</div></div>
          </aside>
        </div>
      </section>

      <section id="proof" className="px-5 pb-16 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{proofMetrics.map((m) => <article key={m.value} className="rounded-lg border border-advisory-slate bg-white p-6 shadow-card"><p className="text-4xl font-black tracking-[-0.04em] text-advisory-gold">{m.value}</p><p className="mt-3 text-base font-extrabold leading-6 text-advisory-navy">{m.label}</p></article>)}</div></section>

      <section id="solve" className="bg-white px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black tracking-[-0.04em] text-advisory-navy sm:text-5xl">What We Solve</h2><p className="mt-4 text-lg text-advisory-ink/70">Visibility, ownership, and follow-up across revenue and finance operations.</p><div className="mt-10 grid gap-5 lg:grid-cols-2">{diagrams.map((d) => <WorkflowDiagram key={d.title} {...d} />)}</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{solveCards.map(([title, desc]) => <article key={title} className="rounded-lg border border-advisory-slate bg-advisory-stone p-6"><h3 className="text-xl font-black text-advisory-navy">{title}</h3><p className="mt-4 leading-7 text-advisory-ink/75">{desc}</p></article>)}</div></div></section>

      <section id="selected-work" className="bg-advisory-navy px-5 py-16 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Selected Work</h2><p className="mt-4 max-w-3xl text-lg text-white/75">Practical workflow systems built around visibility, ownership, follow-up, and AI-assisted operations.</p><div className="mt-10 grid gap-5 lg:grid-cols-4">{selectedWork.map((w) => <article key={w.title} className="rounded-lg border border-white/15 bg-white p-5 text-advisory-ink shadow-card"><MiniMockup type={w.visual} /><h3 className="mt-5 text-xl font-black leading-tight text-advisory-navy">{w.title}</h3><div className="mt-5 space-y-4 text-sm leading-6"><p><span className="block font-black text-advisory-gold">Output</span>{w.output}</p><p><span className="block font-black text-advisory-gold">Tools</span>{w.tools}</p><p><span className="block font-black text-advisory-gold">Why it matters</span>{w.why}</p></div></article>)}</div></div></section>

      <section id="about" className="px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-advisory-slate bg-white p-6 shadow-card md:grid-cols-[0.75fr_1.25fr] md:p-10"><div className="rounded-lg border border-advisory-slate bg-advisory-stone p-6"><div className="flex aspect-[4/5] flex-col items-center justify-center rounded-lg border border-advisory-navy/15 bg-white text-center"><div className="flex h-28 w-28 items-center justify-center rounded-full bg-advisory-navy text-4xl font-black text-white">MR</div><p className="mt-6 text-lg font-black text-advisory-navy">Founder-led advisory</p><p className="mt-2 text-sm font-semibold text-advisory-ink/60">Photo to be added</p></div></div><div><h2 className="text-4xl font-black tracking-[-0.04em] text-advisory-navy sm:text-5xl">About Mike</h2><p className="mt-6 leading-7 text-advisory-ink/75">Reynald Michael “Mike” Rodriguez is a Philippines-based Finance Operations Visibility Adviser with 14 years across finance operations, AP/AR, payments, collections, reconciliation, workflow design, BPO, e-commerce, and BD.</p><p className="mt-4 leading-7 text-advisory-ink/75">He has led an 18-person finance operations team, managed $200M+ in P2P volume, and recovered approximately US$1.6M in overdue AR.</p><p className="mt-4 leading-7 text-advisory-ink/75">He combines finance operations experience with practical AI, n8n automation, dashboards, and human-reviewed workflow design.</p><div className="mt-7 flex flex-wrap gap-3">{["INSEAD Leadership Communication with Impact", "McKinsey Forward Program", "DeepLearning.AI AI Workflow Learning"].map((c) => <span key={c} className="rounded-md border border-advisory-slate bg-advisory-stone px-3 py-2 text-sm font-bold text-advisory-navy">{c}</span>)}</div></div></div></section>

      <footer id="contact" className="bg-advisory-navy px-5 py-14 text-white sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]"><div><h2 className="text-4xl font-black tracking-[-0.04em]">Start with one workflow.</h2><p className="mt-4 max-w-xl text-lg leading-8 text-white/75">Choose one workflow where visibility, ownership, follow-up, or AI-assisted automation can improve performance.</p><div className="mt-7"><Button href="mailto:mike@rodriguezadvisory.tech">Book a discovery call</Button></div></div><div className="md:text-right"><p className="text-xl font-black">Rodriguez Advisory</p><p className="mt-2 font-semibold text-white/75">Finance Operations Visibility</p><p className="mt-2 text-white/75">CRM-to-Cash. AP-to-Payment. AI-assisted where it helps.</p><div className="mt-6 space-y-2 text-sm font-semibold text-white/80"><p><a href="mailto:mike@rodriguezadvisory.tech">mike@rodriguezadvisory.tech</a></p><p><a href="https://linkedin.com/in/reynaldmichaelrodriguez">linkedin.com/in/reynaldmichaelrodriguez</a></p><p><a href="https://upwork.com/freelancers/~010ade77a1a26c8c88">upwork.com/freelancers/~010ade77a1a26c8c88</a></p></div></div></div></footer>
    </main>
  );
}
