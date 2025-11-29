import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  DollarSign,
  Shield,
  Target,
  TrendingUp,
  Building2,
  Briefcase,
  HeartPulse,
  Landmark,
  Cog,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Search,
  UserCheck,
  FileCheck,
  Handshake,
} from 'lucide-react';
import SEO, { pageSEO } from '@/components/SEO';

const ContingentStaffing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Elastic Capacity',
      description:
        'Expand or contract your workforce in days, not months, aligned with project timelines and market conditions.',
      tag: 'Workforce Agility',
    },
    {
      icon: DollarSign,
      title: 'Optimized Cost Structure',
      description:
        'Convert fixed costs into variable costs. Reduce overhead from benefits, training, and long hiring cycles.',
      tag: 'Cost Efficiency',
    },
    {
      icon: Target,
      title: 'Specialized Expertise',
      description:
        'Deploy niche skills on demand for transformation programs, without long-term headcount commitments.',
      tag: 'Skill Access',
    },
    {
      icon: Shield,
      title: 'Governed & Compliant',
      description:
        'Mitigate employment, legal, and compliance risk with a governed contingent talent operating model.',
      tag: 'Risk Reduction',
    },
  ];

  const processSteps = [
    {
      icon: Search,
      title: 'Define Demand',
      description:
        'We co-design role profiles, skill matrices, and engagement models based on your portfolio and roadmap.',
    },
    {
      icon: Users,
      title: 'Source Intelligence',
      description:
        'We tap into curated talent networks, referrals, and market data to surface high-fit candidates fast.',
    },
    {
      icon: UserCheck,
      title: 'Rigorous Evaluation',
      description:
        'Multi-layer screening, technical assessments, and culture-fit checks to ensure confidence at selection.',
    },
    {
      icon: FileCheck,
      title: 'Seamless Onboarding',
      description:
        'We orchestrate contracts, compliance, and day-one readiness so talent can contribute from day one.',
    },
    {
      icon: Handshake,
      title: 'Managed Performance',
      description:
        'Continuous touchpoints, feedback loops, and governance to keep delivery outcomes on track.',
    },
  ];

  const industries = [
    {
      icon: Building2,
      name: 'Technology & Digital',
      roles: 'Developers, Cloud & DevOps, Data Engineers, QA, Product Teams',
    },
    {
      icon: HeartPulse,
      name: 'Healthcare & Life Sciences',
      roles: 'Clinical Support, HealthTech Specialists, Operations & Admin',
    },
    {
      icon: Landmark,
      name: 'Financial Services',
      roles: 'Risk & Compliance, Business Analysts, Transformational PMOs',
    },
    {
      icon: Cog,
      name: 'Engineering & Manufacturing',
      roles: 'Mechanical, Electrical, Industrial Engineers, Project Teams',
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      roles: 'Consultants, Strategy & Ops, Change Management, PMO Leads',
    },
    {
      icon: GraduationCap,
      name: 'Education & Public Sector',
      roles: 'Digital Enablement, IT Support, Program & Project Governance',
    },
  ];

  const stats = [
    { value: '50+', label: 'Annual Contingent Placements' },
    { value: '92%', label: 'Success Rate' },
    { value: '48 hrs', label: 'Average Shortlist Turnaround' },
    { value: '85%', label: 'Engagement Retention Rate' },
  ];



  return (
    <div
      className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-opacity duration-700 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <SEO
        {...pageSEO.contingentStaffing}
        canonicalUrl="https://trinesolutions.com/consulting/contingent-staffing"
        breadcrumbs={[
          { name: 'Home', url: 'https://trinesolutions.com/' },
          { name: 'Consulting Services', url: 'https://trinesolutions.com/consulting' },
          { name: 'Contingent Staffing', url: 'https://trinesolutions.com/consulting/contingent-staffing' },
        ]}
      />

      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-trine-orange/25 via-trine-lightblue/5 to-transparent dark:from-trine-orange/25 dark:via-trine-lightblue/5 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-trine-lightblue/25 via-trine-green/10 to-transparent dark:from-trine-lightblue/25 dark:via-trine-green/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-[999px] bg-gradient-to-t from-slate-100 via-slate-100 to-transparent dark:from-slate-900 dark:via-slate-900 blur-2xl" />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:px-6 xl:px-0">
          {/* Left: Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 dark:text-slate-200 backdrop-blur-sm">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-trine-orange to-trine-lightblue">
                <Users className="h-3.5 w-3.5 text-white" />
              </span>
              Contingent Talent. Enterprise-grade governance.
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Contingent Staffing for
              <span className="bg-gradient-to-r from-trine-orange via-trine-lightblue to-trine-green bg-clip-text pl-2 text-transparent">
                modern transformation teams
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed">
              Build an elastic, high-performing workforce without compromising on governance, compliance, or quality.
              Trine Solutions connects you to curated contingent talent across technology, operations, and change.
            </p>

            {/* Key points */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-trine-green" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Designed for digital & cloud programs
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    From transformation offices to product squads and managed services.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-trine-lightblue" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Governance baked into the model
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Clear engagement structures, SLAs, and ongoing performance management.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-slate-950 dark:bg-white px-7 py-3 text-sm font-semibold text-white dark:text-slate-950 shadow-lg shadow-trine-lightblue/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                Start a Contingent Talent Brief
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1">
                  <Clock className="mr-1.5 h-3.5 w-3.5" />
                  48 hrs shortlist for core roles
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  Explore all services
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Hero panel */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-trine-orange/40 via-trine-lightblue/20 to-trine-green/40 opacity-60 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 dark:from-slate-900/80 via-white dark:via-slate-900/90 to-slate-100 dark:to-slate-950/90 p-6 shadow-2xl backdrop-blur-xl">
                {/* Top badges */}
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      CONTINGENT TALENT DASHBOARD
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                      At-a-glance view of your extended workforce.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-xs text-trine-green">
                    <Shield className="mr-1.5 h-3.5 w-3.5" />
                    Governed
                  </span>
                </div>

                {/* Stats */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-300 dark:border-white/5 bg-white dark:bg-white/5 p-3.5 text-left shadow-sm"
                    >
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Pipeline bar */}
                <div className="mt-6 space-y-3 rounded-2xl border border-slate-300 dark:border-white/5 bg-slate-100 dark:bg-slate-950/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-xs font-medium text-slate-800 dark:text-slate-200">
                      <Users className="mr-1.5 h-3.5 w-3.5 text-trine-lightblue" />
                      Active contingent pipeline
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">Real-time engagement view</span>
                  </div>
                  <div className="space-y-2 text-[11px] text-slate-700 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Technology & Digital</span>
                      <span className="text-slate-500 dark:text-slate-400">72% capacity</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-trine-orange to-trine-lightblue" />
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                      <span>Operations & Change</span>
                      <span className="text-slate-500 dark:text-slate-400">54% capacity</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800">
                      <div className="h-full w-[54%] rounded-full bg-gradient-to-r from-trine-lightblue to-trine-green" />
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <TrendingUp className="h-3.5 w-3.5 text-trine-orange" />
                    <span>Built for multi-project portfolios</span>
                  </div>
                  <Link
                    to="/consulting/contract-to-hire"
                    className="inline-flex items-center rounded-full border border-slate-300 dark:border-white/10 px-3 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-100 hover:border-trine-lightblue hover:text-slate-900 dark:hover:text-white"
                  >
                    Explore contract-to-hire
                    <ArrowRight className="ml-1.5 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <section className="border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-600 dark:text-slate-400 lg:px-6 xl:px-0">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-slate-100">
              Home
            </Link>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="hover:text-slate-900 dark:hover:text-slate-100">Consulting Services</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">Contingent Staffing</span>
          </nav>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <span className="h-1 w-1 rounded-full bg-trine-green" />
            <span>Enterprise-ready engagement models</span>
          </span>
        </div>
      </section>

      {/* Section: What is contingent staffing + value narrative */}
      <section className="relative py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                A modern approach to
                <span className="bg-gradient-to-r from-trine-orange to-trine-lightblue bg-clip-text pl-2 text-transparent">
                  contingent staffing
                </span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed">
                Contingent staffing shifts your workforce from a static model to an adaptive one. Instead of forcing
                every business requirement into a permanent role, you assemble agile teams with a blend of core and
                contingent talent.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base leading-relaxed">
              At Trine Solutions, we operate as an extension of your talent and delivery functions - curating skills,
              managing engagement, and embedding governance so contingent talent can deliver outcomes, not just fill
              seats.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-900/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                    WHY IT MATTERS
                  </p>
                  <p className="mt-2 text-sm text-slate-800 dark:text-slate-200">
                    Digital roadmaps, cloud migrations, and transformation programs rarely align neatly to permanent
                    headcount plans.
                  </p>
                </div>
                <div className="rounded-2xl border border-trine-lightblue/40 dark:border-trine-lightblue/20 bg-trine-lightblue/10 dark:bg-gradient-to-br dark:from-trine-lightblue/10 dark:via-slate-900/70 dark:to-slate-950/80 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-trine-lightblue">
                    THE TRINE DIFFERENCE
                  </p>
                  <p className="mt-2 text-sm text-slate-800 dark:text-slate-100">
                    We combine talent intelligence, delivery experience, and compliance rigor to make contingent talent
                    a strategic lever - not a last-minute fix.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits - premium grid */}
            <div className="space-y-5 rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/60 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                  CORE ADVANTAGES
                </p>
                <span className="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-700 dark:text-slate-200">
                  <TrendingUp className="mr-1 h-3 w-3 text-trine-orange" />
                  Built for scale
                </span>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/5 p-3.5 hover:border-trine-lightblue/40 hover:bg-slate-50 dark:hover:border-trine-lightblue/40 dark:hover:bg-white/10"
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-orange/40 via-trine-lightblue/30 to-trine-green/40">
                      <benefit.icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{benefit.title}</p>
                        <span className="rounded-full bg-slate-200 dark:bg-slate-950/70 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-300">
                          {benefit.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                We design contingent models that align with your HR, finance, and transformation governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/80 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                INDUSTRY COVERAGE
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Designed for complex
                <span className="bg-gradient-to-r from-trine-green to-trine-lightblue bg-clip-text pl-2 text-transparent">
                  enterprise environments
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Our contingent staffing solutions are tailored for regulated, high-stakes, and fast-moving industries
                where delivery quality and compliance cannot be compromised.
              </p>
            </div>
            <div className="rounded-2xl border border-trine-green/40 dark:border-trine-green/30 bg-trine-green/20 dark:bg-gradient-to-br dark:from-trine-green/10 dark:via-slate-900/80 dark:to-slate-950/90 px-4 py-3 text-xs text-slate-800 dark:text-slate-100">
              <p className="font-medium">Embedded with your delivery model</p>
              <p className="mt-1 text-[11px] text-slate-700 dark:text-slate-300">
                We work alongside your PMO, HR, and finance to align talent models with portfolio priorities.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-300 dark:border-white/5 bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-950/95 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-trine-lightblue/40"
              >
                <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-gradient-to-br from-trine-green/25 via-trine-lightblue/10 to-transparent opacity-70 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-green/40 via-trine-lightblue/40 to-trine-orange/40">
                    <industry.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{industry.name}</h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{industry.roles}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Shield className="h-3 w-3 text-trine-green" />
                    Governed engagements
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 xl:px-0">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
              DELIVERY FRAMEWORK
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A structured, transparent
              <span className="bg-gradient-to-r from-trine-orange to-trine-green bg-clip-text pl-2 text-transparent">
                5-step process
              </span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              From first conversation to sustained performance, our approach is designed to be predictable, transparent,
              and aligned to your operating model.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-0.5 w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-trine-orange via-trine-lightblue to-trine-green opacity-40 lg:block" />
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="relative h-full rounded-3xl border border-slate-300 dark:border-white/8 bg-white dark:bg-slate-950/80 p-5 shadow-md hover:border-trine-lightblue/40">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-orange/40 via-trine-lightblue/40 to-trine-green/40">
                        <step.icon className="h-4.5 w-4.5 text-white" />
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 text-[11px] font-semibold text-slate-700 dark:text-slate-100">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{step.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/80 px-4 py-4 text-xs text-slate-600 dark:text-slate-300 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-trine-orange/50 via-trine-lightblue/40 to-trine-green/50">
                <Briefcase className="h-4.5 w-4.5 text-white" />
              </div>
              <p className="max-w-xl text-[11px] sm:text-xs">
                We can plug into a single high-priority program or design a multi-tower contingent talent strategy
                across your portfolio.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-400 dark:border-white/15 px-4 py-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-50 hover:border-trine-lightblue dark:hover:text-white"
            >
              Discuss a contingent talent strategy
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ - Removed */}

      {/* Bottom CTA */}
      <section className="relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/85 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 xl:px-0">
          <div className="rounded-3xl border border-trine-lightblue/40 bg-gradient-to-br from-trine-lightblue/20 dark:from-trine-lightblue/10 via-white dark:via-slate-950 to-slate-100 dark:to-slate-950 px-5 py-6 text-center sm:px-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
              Ready to design your contingent talent model?
            </h3>
            <p className="mt-2 text-xs text-slate-700 dark:text-slate-200 sm:text-sm">
              Share your current portfolio, hiring challenges, and timelines. We&apos;ll respond with a structured
              approach - not just profiles.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 dark:bg-white px-6 py-2.5 text-xs font-semibold text-white dark:text-slate-950 shadow-lg shadow-trine-lightblue/30 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                Talk to our consulting team
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
              <Link
                to="/consulting/contract-to-hire"
                className="inline-flex items-center justify-center rounded-full border border-slate-400 dark:border-white/20 px-5 py-2 text-[11px] font-semibold text-slate-700 dark:text-slate-50 hover:border-trine-green dark:hover:text-white"
              >
                Explore contract-to-hire options
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContingentStaffing;
