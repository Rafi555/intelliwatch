type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Feature = {
  title: string;
  description: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
};

const metrics: Metric[] = [
  {
    value: 'SOP',
    label: 'step compliance',
    detail: 'Compare actual QC hand movement against approved checking workflows.'
  },
  {
    value: 'Line',
    label: 'visibility',
    detail: 'See which line, operator, garment type, or shift needs supervisor attention.'
  },
  {
    value: 'Video',
    label: 'evidence trail',
    detail: 'Review flagged moments without depending only on manual notes.'
  },
  {
    value: 'Pilot',
    label: 'ready',
    detail: 'Start with one QC point before expanding to multiple lines.'
  }
];

const painPoints: Feature[] = [
  {
    title: 'QC checks are performed, but not always consistently.',
    description:
      'In high-volume garment production, even trained operators can miss steps when pressure rises.'
  },
  {
    title: 'Supervisors cannot watch every garment, every minute.',
    description:
      'A single line can create more visual activity than a supervisor can reliably audit in real time.'
  },
  {
    title: 'Buyer rejection risk often appears after the damage is done.',
    description:
      'When defects are discovered late, factories pay through rework, shipment pressure, and reputation risk.'
  }
];

const workflowSteps: Step[] = [
  {
    number: '01',
    title: 'Capture the QC station',
    description:
      'Connect IntelliWatch to an approved camera view at inline, end-line, or final QC stations.'
  },
  {
    number: '02',
    title: 'Read hand and garment interaction',
    description:
      'Computer vision observes whether the operator is following the expected garment checking sequence.'
  },
  {
    number: '03',
    title: 'Compare against QC SOP',
    description:
      'The system checks the observed movement pattern against the garment-specific QC workflow stored in the database.'
  },
  {
    number: '04',
    title: 'Flag skipped or risky checks',
    description:
      'Supervisors receive structured alerts with timing, line, operator, confidence score, and video evidence.'
  }
];

const useCases: Feature[] = [
  {
    title: 'Inline QC monitoring',
    description: 'Catch process deviation while production is still moving, not only at final inspection.'
  },
  {
    title: 'End-line QC verification',
    description: 'Verify whether required checks are being completed before garments move forward.'
  },
  {
    title: 'Supervisor visibility',
    description: 'Give floor managers a dashboard of where attention is needed now.'
  },
  {
    title: 'Operator training',
    description: 'Use flagged moments to coach teams on missed steps and better checking discipline.'
  },
  {
    title: 'Buyer audit readiness',
    description: 'Create a stronger record of process compliance using visual evidence and timestamps.'
  },
  {
    title: 'Root-cause analysis',
    description: 'See which steps, lines, styles, or shifts repeatedly create QC risk.'
  }
];

const deployment: Feature[] = [
  {
    title: 'Start with one QC point',
    description: 'Run a pilot on one station, one style, and one workflow before scaling across the floor.'
  },
  {
    title: 'Use existing cameras where possible',
    description: 'Begin with current CCTV or line camera infrastructure when the angle and clarity are usable.'
  },
  {
    title: 'Add dedicated cameras when accuracy matters',
    description: 'For critical QC stations, a fixed camera setup improves hand movement visibility and consistency.'
  }
];

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="IntelliWatch home">
      <span className="logo-mark">
        <span />
      </span>
      <span className="logo-text">IntelliWatch</span>
    </a>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-check">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DashboardMockup() {
  const alertRows = [
    ['Line 04', 'Sleeve seam check skipped', 'High'],
    ['Line 02', 'Collar edge sequence mismatch', 'Medium'],
    ['Line 07', 'Pocket check too short', 'High']
  ];

  return (
    <div className="dashboard-card" aria-label="IntelliWatch dashboard preview">
      <div className="dashboard-topbar">
        <div>
          <p>Factory floor live view</p>
          <strong>QC Risk Monitor</strong>
        </div>
        <span>Live</span>
      </div>

      <div className="dashboard-grid">
        <div className="camera-feed">
          <div className="feed-header">
            <span>CAM 04 / End-line QC</span>
            <span>Confidence 91%</span>
          </div>
          <div className="vision-frame">
            <div className="garment-outline" />
            <div className="hand-path path-a" />
            <div className="hand-path path-b" />
            <div className="alert-zone">Skipped check zone</div>
          </div>
        </div>

        <div className="risk-panel">
          <p className="panel-label">Shift summary</p>
          <div className="score-ring">
            <span>84</span>
            <small>QC score</small>
          </div>
          <div className="mini-bars">
            <span style={{ width: '78%' }} />
            <span style={{ width: '54%' }} />
            <span style={{ width: '88%' }} />
          </div>
        </div>
      </div>

      <div className="alert-table">
        {alertRows.map(([line, issue, severity]) => (
          <div className="alert-row" key={issue}>
            <span>{line}</span>
            <strong>{issue}</strong>
            <em className={severity === 'High' ? 'severity-high' : 'severity-medium'}>{severity}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <main id="home">
      <header className="site-header">
        <div className="container nav-shell">
          <Logo />
          <nav aria-label="Primary navigation">
            <a href="#problem">Problem</a>
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#deployment">Deployment</a>
          </nav>
          <a className="nav-cta" href="#demo">Book pilot</a>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">AI QC intelligence for RMG factories</p>
            <h1>Verify whether garment QC checks are actually being performed.</h1>
            <p className="hero-lede">
              IntelliWatch uses computer vision on production-line video to track QC hand movement,
              compare it with garment-specific SOPs, and flag skipped or risky checking steps before
              defects move forward.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#demo">Start with one QC line</a>
              <a className="button button-secondary" href="#how-it-works">See how it works</a>
            </div>
            <div className="trust-strip" aria-label="Positioning highlights">
              <span>Built for garment QC</span>
              <span>Supervisor dashboard</span>
              <span>Video evidence</span>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="metrics-section">
        <div className="container metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="problem">
        <div className="container split-grid">
          <SectionHeader
            eyebrow="Why now"
            title="Manual QC is important. But manual visibility does not scale."
            body="Factories already know QC matters. The real operational gap is knowing whether each required check was actually performed, consistently, across every line and shift."
          />
          <div className="card-stack">
            {painPoints.map((item, index) => (
              <article className="problem-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="how-it-works">
        <div className="container">
          <SectionHeader
            eyebrow="Workflow"
            title="From camera feed to actionable QC alerts."
            body="IntelliWatch is designed around the factory floor workflow: video capture, hand-movement understanding, SOP comparison, and supervisor action."
          />
          <div className="workflow-grid">
            {workflowSteps.map((step) => (
              <article className="workflow-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-section">
        <div className="container product-grid">
          <div>
            <p className="eyebrow">Product surface</p>
            <h2>One view for QC risk, compliance, and coaching.</h2>
            <p>
              The dashboard is not meant to replace floor managers. It gives them sharper visibility:
              where the risk happened, what step was missed, and which video moment should be reviewed.
            </p>
            <ul className="feature-list">
              <li><CheckIcon /> Line-wise alert queue</li>
              <li><CheckIcon /> Operator and shift comparison</li>
              <li><CheckIcon /> Garment-style SOP mapping</li>
              <li><CheckIcon /> Evidence clips for review</li>
            </ul>
          </div>
          <div className="insight-board">
            <div className="insight-card wide">
              <span>QC compliance</span>
              <strong>Step sequence mismatch detected</strong>
              <p>Line 04, Style: Polo-23, Station: End-line QC</p>
            </div>
            <div className="insight-card">
              <span>Top risk area</span>
              <strong>Sleeve seam</strong>
            </div>
            <div className="insight-card">
              <span>Review clips</span>
              <strong>12</strong>
            </div>
            <div className="timeline-card">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="use-cases">
        <div className="container">
          <SectionHeader
            eyebrow="Use cases"
            title="Designed for QC stations where process discipline matters."
            body="Start narrow, prove value, then expand across the factory floor."
          />
          <div className="usecase-grid">
            {useCases.map((item) => (
              <article className="usecase-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="deployment">
        <div className="container deployment-grid">
          <div>
            <p className="eyebrow">Deployment model</p>
            <h2>Factory-first rollout. No overpromising, no black box.</h2>
            <p>
              IntelliWatch should be sold as a measured pilot first: choose one QC station, define the SOP,
              record baseline behavior, validate alerts with supervisors, then expand only after the signal is reliable.
            </p>
          </div>
          <div className="deployment-cards">
            {deployment.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark proof-section">
        <div className="container proof-grid">
          <div>
            <p className="eyebrow light">Pilot scorecard</p>
            <h2>Measure the pilot using operational signals, not vague AI claims.</h2>
          </div>
          <div className="scorecard">
            <div><span>01</span><p>Skipped-check alerts validated by supervisors</p></div>
            <div><span>02</span><p>Repeat risk by operator, line, style, and shift</p></div>
            <div><span>03</span><p>Reduction in late-stage rework triggers</p></div>
            <div><span>04</span><p>Evidence quality accepted by factory QC leadership</p></div>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="demo">
        <div className="container cta-card">
          <p className="eyebrow">Pilot-ready website copy</p>
          <h2>Run IntelliWatch on one QC line before scaling the system.</h2>
          <p>
            Use this landing page to collect pilot interest from garment factories, buying offices,
            and RMG operators who want stronger QC process visibility.
          </p>
          <div className="hero-actions center-actions">
            <a className="button button-primary" href="mailto:pilot@intelliwatch.ai?subject=IntelliWatch%20pilot%20request">
              Request pilot discussion
            </a>
            <a className="button button-secondary light-button" href="#home">Back to top</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <Logo />
          <p>AI QC intelligence for garment factories.</p>
          <div>
            <a href="#problem">Problem</a>
            <a href="#how-it-works">Workflow</a>
            <a href="#demo">Pilot</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
