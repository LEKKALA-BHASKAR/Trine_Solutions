import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Eye,
  ThumbsUp,
  Calendar,
  Briefcase,
  TrendingUp,
  Shield,
  Target,
  Zap,
  Building2,
  Award,
  UserCheck,
  User,
} from 'lucide-react';
import SEO, { pageSEO } from '@/components/SEO';

const ContractToHiring = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const howItWorks = [
    {
      step: '1',
      title: 'Contract Phase',
      description:
        'Candidate begins as a contractor, embedded in your team and delivery environment while both sides evaluate fit.',
      duration: 'Typically 3–6 months',
    },
    {
      step: '2',
      title: 'Evaluation Period',
      description:
        'Assess skills, delivery quality, stakeholder management, and cultural alignment in real-world scenarios.',
      duration: 'Ongoing assessment',
    },
    {
      step: '3',
      title: 'Conversion Decision',
      description:
        'Using structured feedback and performance data, decide whether to extend a permanent offer.',
      duration: 'End of contract period',
    },
    {
      step: '4',
      title: 'Permanent Hire',
      description:
        'Seamless transition to full-time employee with continuity in role, context, and relationships.',
      duration: 'New beginning',
    },
  ];

  const employerBenefits = [
    {
      icon: Eye,
      title: 'See Real-World Performance',
      description:
        'Observe how talent delivers against real priorities—not just how they interview.',
    },
    {
      icon: Target,
      title: 'Evidence-Based Decisions',
      description:
        'Use performance evidence, stakeholder feedback, and cultural alignment to inform hiring decisions.',
    },
    {
      icon: Users,
      title: 'Cultural & Team Fit',
      description:
        'Understand how individuals collaborate across squads, leaders, and stakeholders before conversion.',
    },
    {
      icon: Shield,
      title: 'Lower Hiring Risk',
      description:
        'Reduce the cost and disruption of mis-hires with a structured evaluation window.',
    },
    {
      icon: Clock,
      title: 'Time to Onboard & Train',
      description:
        'Leverage the contract period to onboard, train, and align talent to your way of working.',
    },
    {
      icon: TrendingUp,
      title: 'Budget & Headcount Flexibility',
      description:
        'Stage financial commitments and headcount decisions in line with portfolio and budget cycles.',
    },
  ];

  const candidateBenefits = [
    {
      icon: Building2,
      title: 'Experience Culture First',
      description:
        'Work with the team, leadership, and stakeholders before deciding on a long-term commitment.',
    },
    {
      icon: Zap,
      title: 'Showcase What You Can Do',
      description:
        'Demonstrate capability through real delivery, not just CVs and interviews.',
    },
    {
      icon: Briefcase,
      title: 'Explore Roles & Domains',
      description:
        'Experience different functions, squads, or domains while maintaining continuity of employment.',
    },
    {
      icon: Award,
      title: 'Earn & Grow Simultaneously',
      description:
        'Build experience, expand your skills, and earn competitive compensation throughout the contract phase.',
    },
    {
      icon: UserCheck,
      title: 'Clear Path to Permanence',
      description:
        'A transparent route to permanent roles, with expectations defined from day one.',
    },
    {
      icon: ThumbsUp,
      title: 'Mutual Choice',
      description:
        'You choose the organization as much as they choose you, with real context and clarity.',
    },
  ];

  const timeline = [
    {
      phase: 'Week 1–2',
      activity: 'Onboarding & Integration',
      color: 'from-trine-orange to-trine-lightblue',
      detail: 'Environment setup, introductions, role clarity, and immediate sprint alignment.',
    },
    {
      phase: 'Month 1–2',
      activity: 'Skills Assessment & Coaching',
      color: 'from-trine-lightblue to-trine-green',
      detail: 'Observe delivery quality, coach where needed, and confirm role alignment.',
    },
    {
      phase: 'Month 3–4',
      activity: 'Performance Deep-Dive',
      color: 'from-trine-green to-trine-orange',
      detail: 'Formalize feedback from managers, peers, and stakeholders against defined outcomes.',
    },
    {
      phase: 'Month 5–6',
      activity: 'Conversion Decision & Offer',
      color: 'from-trine-orange to-trine-green',
      detail: 'Structure the conversion decision, calibrate compensation, and finalize full-time offer.',
    },
  ];

  const stats = [
    { value: '78%', label: 'Average conversion rate' },
    { value: '95%', label: 'Retention after conversion' },
    { value: '60%', label: 'Faster time-to-productivity' },
    { value: '40%', label: 'Reduction in hiring cost' },
  ];

  const successMetrics = [
    {
      category: 'Technology & Digital',
      conversion: '82%',
      retention: '96%',
      avgDuration: '4 months',
    },
    {
      category: 'Healthcare & Life Sciences',
      conversion: '75%',
      retention: '94%',
      avgDuration: '5 months',
    },
    {
      category: 'Finance & Banking',
      conversion: '80%',
      retention: '97%',
      avgDuration: '4.5 months',
    },
  ];

  return (
    <div
      className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-opacity duration-700 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <SEO
        {...pageSEO.contractToHire}
        canonicalUrl="https://trinesolutions.com/consulting/contract-to-hire"
        breadcrumbs={[
          { name: 'Home', url: 'https://trinesolutions.com/' },
          { name: 'Consulting Services', url: 'https://trinesolutions.com/consulting' },
          { name: 'Contract to Hire', url: 'https://trinesolutions.com/consulting/contract-to-hire' },
        ]}
      />

      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-gradient-to-bl from-trine-lightblue/25 via-trine-green/10 to-transparent dark:from-trine-lightblue/25 dark:via-trine-green/10 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-trine-orange/25 via-trine-lightblue/10 to-transparent dark:from-trine-orange/25 dark:via-trine-lightblue/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-[999px] bg-gradient-to-t from-slate-100 via-slate-100 to-transparent dark:from-slate-900 dark:via-slate-900 blur-2xl" />
      </div>

      {/* Hero Section (variation: image/metrics panel left, narrative right) */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:px-6 xl:px-0">
          {/* Left: Experience panel */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-trine-lightblue/40 via-trine-green/20 to-trine-orange/40 opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 dark:from-slate-900/90 via-white dark:via-slate-950/95 to-slate-100 dark:to-slate-950/100 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                      CONTRACT TO HIRE
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                      A controlled path from contract to permanent hire.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-900/80 px-3 py-1 text-[11px] text-trine-lightblue">
                    <Calendar className="mr-1.5 h-3.5 w-3.5" />
                    3–6 month evaluation
                  </span>
                </div>

                {/* Stats */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-300 dark:border-white/5 bg-white dark:bg-white/5 p-3.5 shadow-sm"
                    >
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Snapshot row */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-300 dark:border-white/8 bg-slate-100 dark:bg-slate-950/60 p-4 text-xs text-slate-700 dark:text-slate-300">
                    <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                      <Eye className="mr-1.5 h-3.5 w-3.5 text-trine-lightblue" />
                      EMPLOYER VIEW
                    </p>
                    <p>
                      See how talent performs across sprints, stakeholders, and changing priorities before extending a
                      permanent offer.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-300 dark:border-white/8 bg-slate-100 dark:bg-slate-950/60 p-4 text-xs text-slate-700 dark:text-slate-300">
                    <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                      <User className="mr-1.5 h-3.5 w-3.5 text-trine-green" />
                      CANDIDATE VIEW
                    </p>
                    <p>
                      Experience culture, leadership, and ways of working with full context—then decide on permanence
                      with confidence.
                    </p>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600 dark:text-slate-300">
                  <div className="inline-flex items-center gap-2">
                    <Shield className="h-3.5 w-3.5 text-trine-green" />
                    <span>Governed conversion frameworks</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-trine-orange" />
                    <span>Aligned to portfolio & budget cycles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="flex-1 space-y-7">
            <div className="inline-flex items-center rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 backdrop-blur-sm">
              <CheckCircle2 className="mr-2 h-3.5 w-3.5 text-trine-lightblue" />
              Contract-first. Evidence-based permanent hiring.
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Contract to Hire for
              <span className="bg-gradient-to-r from-trine-lightblue via-trine-green to-trine-orange bg-clip-text pl-2 text-transparent">
                high-confidence hiring decisions
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed">
              Instead of relying solely on interviews, contract-to-hire lets you evaluate real performance, team fit,
              and cultural alignment over time—before making long-term commitments.
            </p>

            <p className="max-w-xl text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              Trine Solutions designs contract-to-hire models that work for both employers and candidates, aligning
              conversion decisions with delivery milestones, budget cycles, and career goals.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-slate-950 dark:bg-white px-7 py-3 text-sm font-semibold text-white dark:text-slate-950 shadow-lg shadow-trine-lightblue/30 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                Discuss a contract-to-hire brief
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600 dark:text-slate-400">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  View all consulting services
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <section className="border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-600 dark:text-slate-400 lg:px-6 xl:px-0">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-slate-100">
              Home
            </Link>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="hover:text-slate-900 dark:hover:text-slate-100">Consulting Services</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">Contract to Hire</span>
          </nav>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <span className="h-1 w-1 rounded-full bg-trine-lightblue" />
            <span>Contract-first, permanent-ready hiring models</span>
          </span>
        </div>
      </section>

      {/* What is Contract to Hire + stats */}
      <section className="relative py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                What is
                <span className="bg-gradient-to-r from-trine-lightblue to-trine-green bg-clip-text pl-2 text-transparent">
                  contract to hire
                </span>
                in a modern enterprise?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed">
                Contract-to-hire is a structured staffing model where talent joins as a contractor first, with a clear
                pathway to permanent employment. It offers a controlled environment for both sides to validate
                capability, culture, and long-term fit.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed">
                For employers, it de-risks critical hiring decisions in transformation and run-the-business roles. For
                candidates, it provides real visibility into how an organization operates before they commit.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                    WHY EMPLOYERS USE IT
                  </p>
                  <p className="mt-2 text-xs text-slate-700 dark:text-slate-200 sm:text-sm">
                    Align hiring decisions with delivery proof points, reduce mis-hires, and maintain flexibility as
                    portfolios change.
                  </p>
                </div>
                <div className="rounded-2xl border border-trine-lightblue/40 dark:border-trine-lightblue/30 bg-trine-lightblue/10 dark:bg-gradient-to-br dark:from-trine-lightblue/10 dark:via-slate-950/80 dark:to-slate-950/95 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-trine-lightblue">
                    WHY CANDIDATES VALUE IT
                  </p>
                  <p className="mt-2 text-xs text-slate-800 dark:text-slate-100 sm:text-sm">
                    Make decisions about long-term roles based on real work, real leadership, and real culture—not just
                    interview impressions.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact metrics card */}
            <div className="space-y-4 rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/70 p-5 shadow-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                    IMPACT SNAPSHOT
                  </p>
                  <p className="mt-1 text-sm text-slate-800 dark:text-slate-200">
                    Contract-to-hire outcomes across our engagements.
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-lightblue/50 via-trine-green/40 to-trine-orange/50">
                  <TrendingUp className="h-4.5 w-4.5 text-white" />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-300 dark:border-white/5 bg-white dark:bg-white/5 p-3 text-left"
                  >
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                Figures represent typical outcomes across multi-role contract-to-hire engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-sided benefits: Employers & Candidates */}
      <section className="relative border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/85 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                TWO-SIDED VALUE
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Designed for both
                <span className="bg-gradient-to-r from-trine-orange to-trine-lightblue bg-clip-text pl-2 text-transparent">
                  employers and candidates
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Contract-to-hire works best when both sides benefit. Our model ensures clarity, structure, and
                transparency across the full engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/80 px-4 py-3 text-xs text-slate-700 dark:text-slate-200">
              <p className="font-medium">Single framework. Two perspectives.</p>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                We orchestrate expectations, touchpoints, and conversion criteria for both organizations and talent.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Employers */}
            <div className="space-y-4 rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/100 p-5">
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-[11px] text-trine-orange">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  For employers
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">Hiring with evidence, not guesswork.</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {employerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-slate-300 dark:border-white/5 bg-slate-50 dark:bg-white/5 p-3.5 hover:border-trine-lightblue/40 hover:bg-slate-100 dark:hover:border-trine-lightblue/40 dark:hover:bg-white/10"
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-orange/40 via-trine-lightblue/30 to-trine-green/40">
                      <benefit.icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">{benefit.title}</p>
                      <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidates */}
            <div className="space-y-4 rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-950/100 p-5">
              <div className="mb-2 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-[11px] text-trine-green">
                  <User className="h-3.5 w-3.5" />
                  For candidates
                </div>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">Careers built on informed choices.</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {candidateBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-slate-300 dark:border-white/5 bg-slate-50 dark:bg-white/5 p-3.5 hover:border-trine-lightblue/40 hover:bg-slate-100 dark:hover:border-trine-lightblue/40 dark:hover:bg-white/10"
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-green/40 via-trine-lightblue/30 to-trine-orange/40">
                      <benefit.icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">{benefit.title}</p>
                      <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works / process */}
      <section className="relative py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
              STRUCTURED JOURNEY
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              How our
              <span className="bg-gradient-to-r from-trine-lightblue to-trine-orange bg-clip-text pl-2 text-transparent">
                contract-to-hire model
              </span>
              works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              A four-stage journey that balances flexibility, clarity, and governance for both organizations and
              talent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="h-full rounded-3xl border border-slate-300 dark:border-white/8 bg-white dark:bg-slate-950/85 p-5 shadow-md hover:border-trine-lightblue/40">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-trine-lightblue/50 via-trine-green/40 to-trine-orange/50 text-sm font-semibold text-white">
                      {step.step}
                    </div>
                    <span className="rounded-full bg-slate-200 dark:bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-700 dark:text-slate-300">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{step.title}</h3>
                  <p className="mt-2 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Micro CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/85 px-4 py-4 text-xs text-slate-600 dark:text-slate-300 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-lightblue/50 via-trine-green/40 to-trine-orange/50">
                <Briefcase className="h-4.5 w-4.5 text-white" />
              </div>
              <p className="max-w-xl text-[11px] sm:text-xs">
                We can design contract-to-hire programs around single roles, full squads, or multi-tower transformation
                initiatives.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-400 dark:border-white/15 px-4 py-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-50 hover:border-trine-lightblue dark:hover:text-white"
            >
              Explore a structured contract-to-hire program
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/85 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
              TYPICAL ENGAGEMENT FLOW
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A clear, predictable
              <span className="bg-gradient-to-r from-trine-orange to-trine-lightblue bg-clip-text pl-2 text-transparent">
                timeline
              </span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              We tailor timelines by role and context, but most contract-to-hire journeys follow this broad pattern.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="pointer-events-none absolute left-[8.5rem] top-0 hidden h-full w-px bg-gradient-to-b from-trine-orange via-trine-lightblue to-trine-green opacity-50 sm:block" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-28 flex-shrink-0 text-right pr-3 text-xs font-semibold text-slate-700 dark:text-slate-200 sm:text-sm">
                    <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.phase}
                    </span>
                  </div>
                  <div
                    className={`mt-1 hidden h-3.5 w-3.5 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} sm:block`}
                  />
                  <div className="flex-grow rounded-2xl border border-slate-300 dark:border-white/8 bg-white dark:bg-slate-950/80 px-4 py-3 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    <p className="font-semibold text-slate-900 dark:text-slate-50">{item.activity}</p>
                    <p className="mt-1 text-[11px] sm:text-xs">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="relative py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
              INDUSTRY OUTCOMES
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Contract-to-hire
              <span className="bg-gradient-to-r from-trine-lightblue to-trine-green bg-clip-text pl-2 text-transparent">
                success metrics
              </span>
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Performance across key sectors where contract-to-hire is deeply integrated into the hiring strategy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/85 p-6 shadow-lg"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 sm:text-base">
                  {metric.category}
                </h3>
                <div className="mt-4 space-y-3 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span>Conversion rate</span>
                    <span className="font-semibold text-trine-lightblue">{metric.conversion}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Post-conversion retention</span>
                    <span className="font-semibold text-trine-green">{metric.retention}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average contract duration</span>
                    <span className="font-semibold text-trine-orange">{metric.avgDuration}</span>
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-slate-600 dark:text-slate-400">
                  Indicative metrics based on multi-engagement data across similar clients and roles.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-200 dark:border-white/5 bg-gradient-to-br from-trine-lightblue via-trine-green to-trine-orange py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-6 xl:px-0">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Ready to make hiring decisions with
            <span className="pl-2 underline decoration-white/40 underline-offset-4">
              more confidence?
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/90 sm:text-base max-w-3xl mx-auto">
            Let&apos;s design a contract-to-hire model around your portfolio, roles, and timelines—so every permanent
            offer is grounded in real performance and real fit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Talk to our consulting team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/consulting/permanent-hiring"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
            >
              Explore permanent hiring options
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractToHiring;
