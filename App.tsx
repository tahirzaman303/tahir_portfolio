import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Download, ExternalLink, Linkedin, Mail, MapPin, Menu, Network, Server, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import { certifications, education, experience, projects, skillGroups, training, type Project } from '@/data';
import profileImage from '@/assets/images/tahir.jpg';

const CV_PATH = '/Tahir-Zaman-CV.pdf';

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Education', 'Contact'];
const filters = ['All', 'Networking', 'System Administration', 'Virtualization', 'AI & Automation'];
const approach = [
  ['01', 'Identify', 'Understand the technical problem.'],
  ['02', 'Design', 'Plan the architecture and solution.'],
  ['03', 'Implement', 'Configure the required systems.'],
  ['04', 'Test', 'Validate connectivity, services, and behavior.'],
  ['05', 'Troubleshoot', 'Analyze failures with logs, packets, and configuration review.'],
  ['06', 'Improve', 'Optimize reliability, security, performance, and maintainability.']
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-[#5eead4]" />
        <p className="font-mono text-[11px] tracking-[0.24em] text-[#5eead4]">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[#f0f9fb] sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 max-w-xl text-base leading-8 text-[#8ba5b4]">{copy}</p>}
    </div>
  );
}

function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[530px] overflow-hidden rounded-[2rem] border border-[#1e3a4d] bg-[#0b1825] p-6 shadow-2xl shadow-black/40 sm:p-10" aria-label="Abstract network topology visual">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#5eead4]/70 to-transparent animate-line" />
      <div className="absolute left-1/2 top-1/2 h-[68%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#5eead4]/50 to-transparent animate-line" />
      <div className="absolute left-[20%] top-[26%] h-px w-[64%] rotate-[27deg] bg-[#3a7a8e]/50" />
      <div className="absolute bottom-[27%] left-[19%] h-px w-[65%] -rotate-[25deg] bg-[#3a7a8e]/50" />
      {([
        { position: 'left-[11%] top-[18%]', label: 'Network', Icon: Network },
        { position: 'right-[10%] top-[18%]', label: 'Server', Icon: Server },
        { position: 'left-[11%] bottom-[17%]', label: 'Security', Icon: ShieldCheck },
        { position: 'right-[10%] bottom-[17%]', label: 'Cloud / AI', Icon: Sparkles }
      ] as const).map(({ position, label, Icon }) => (
        <div key={label} className={`absolute ${position} flex flex-col items-center gap-3`}>
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#2a4d63] bg-[#0e1f2e] text-[#5eead4] shadow-[0_0_28px_rgba(94,234,212,0.14)] animate-float">
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6b8a99]">{label}</span>
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#5eead4]/60 bg-[#0e1f2e] shadow-[0_0_55px_rgba(94,234,212,0.18)]">
        <div className="grid h-14 w-14 place-items-center rounded-full border border-[#5eead4]/30 bg-[#0b1825]">
          <Zap size={24} className="text-[#5eead4]" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[#1e3a4d] pt-4 font-mono text-[9px] uppercase tracking-[0.17em] text-[#6b8a99]">
        <span>Topology / 04 nodes</span>
        <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] animate-blink" />Signal stable</span>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Rotating glow ring */}
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#5eead4]/20 via-transparent to-[#5eead4]/10 blur-md" />
      <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-conic from-[#5eead4]/40 via-transparent to-[#5eead4]/40 animate-glow-ring opacity-60" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(94,234,212,0.3) 25%, transparent 50%, rgba(94,234,212,0.3) 75%, transparent 100%)' }} />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-[#5eead4]/40 bg-[#0b1825] animate-glow">
        {/* Scan line effect */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-[#5eead4]/8 to-transparent" style={{ animation: 'scan-line 4s ease-in-out infinite' }} />
        </div>
        {/* Corner accents */}
        <div className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l-2 border-t-2 border-[#5eead4]/60" />
        <div className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r-2 border-t-2 border-[#5eead4]/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-5 w-5 border-b-2 border-l-2 border-[#5eead4]/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 border-b-2 border-r-2 border-[#5eead4]/60" />

        <img
          src={profileImage}
          alt="Tahir Zaman — Telecommunication Engineering Student"
          className="aspect-[3/4] w-full object-cover object-top"
          loading="eager"
        />
        {/* Bottom gradient overlay for readability */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#0b1825] via-[#0b1825]/60 to-transparent pt-12">
          <div className="px-5 pb-5">
            <p className="font-bold text-[#f0f9fb]">Tahir Zaman</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#5eead4]">Telecom Engineering · Networks</p>
          </div>
        </div>
      </div>

      {/* Status bar below image */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#1e3a4d] bg-[#08111c] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#6b8a99]">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] animate-blink" />Online</span>
        <span>UET Mardan / 7th Sem</span>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter || (filter === 'Virtualization' && project.category === 'System Administration'));

  useEffect(() => { document.body.style.overflow = selectedProject ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050b12] text-[#c4d8e2]">
      {/* Global background layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="absolute left-[10%] top-[5%] h-[400px] w-[400px] rounded-full bg-[#0d5261]/12 blur-[140px]" />
        <div className="absolute right-[5%] top-[40%] h-[350px] w-[350px] rounded-full bg-[#1a4d5e]/10 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-[#0d4a4a]/8 blur-[120px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#1e3a4d]/60 bg-[#050b12]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#5eead4] font-mono text-sm font-bold text-[#050b12]">TZ</span>
            <span className="hidden text-[15px] font-bold tracking-[0.06em] text-[#f0f9fb] sm:block" style={{ fontSize: '15px' }}>TAHIR ZAMAN</span>
          </a>
          <nav className={`${menuOpen ? 'absolute left-4 right-4 top-[64px] flex' : 'hidden'} flex-col gap-2 rounded-2xl border border-[#1e3a4d] bg-[#08111c] p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8ba5b4] transition hover:bg-[#0e1f2e] hover:text-[#5eead4] focus:outline-none focus:ring-2 focus:ring-[#5eead4]">{item}</a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-lg border border-[#1e3a4d] text-[#c4d8e2] md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-28">
          <div className="absolute inset-0 -z-10 dot-bg opacity-20" />
          <div className="reveal-left max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#2a4d63] bg-[#08111c] px-4 py-2 font-mono text-[10px] tracking-[0.17em] text-[#5eead4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] shadow-[0_0_12px_#5eead4] animate-blink" /> AVAILABLE FOR EARLY-CAREER OPPORTUNITIES
            </div>
            <p className="mb-6 font-mono text-[11px] tracking-[0.22em] text-[#6b8a99]">TELECOMMUNICATION ENGINEERING · NETWORKING · IT INFRASTRUCTURE</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-0.065em] text-[#f0f9fb] sm:text-7xl">
              Building reliable <span className="shimmer-text">networks,</span> systems &amp; intelligent infrastructure.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[#c4d8e2]">Tahir Zaman — Telecommunication Engineering student specializing in Network Engineering, System Administration, IT Infrastructure, Cloud, and Applied AI.</p>
            <p className="mt-5 max-w-xl leading-7 text-[#8ba5b4]">I build and troubleshoot practical networking and infrastructure environments while developing complementary capabilities in cloud and AI automation.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-xl bg-[#5eead4] px-5 py-3.5 text-sm font-bold text-[#050b12] transition hover:bg-[#a7f3d0] hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] focus:outline-none focus:ring-2 focus:ring-[#f0f9fb]">View my projects <ArrowDownRight size={17} /></a>
              <a href={CV_PATH} target="_blank" rel="noreferrer" download="Tahir-Zaman-CV.pdf" className="inline-flex items-center gap-3 rounded-xl border border-[#2a4d63] bg-[#08111c] px-5 py-3.5 font-bold text-[#c4d8e2] transition hover:border-[#5eead4] hover:text-[#5eead4] hover:shadow-[0_0_20px_rgba(94,234,212,0.12)] focus:outline-none focus:ring-2 focus:ring-[#5eead4]" style={{ fontSize: '18px' }}>Download CV <Download size={17} /></a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6b8a99]">
              <span className="flex items-center gap-2"><MapPin size={13} className="text-[#5eead4]" /> Mardan, Pakistan</span>
              <span className="flex items-center gap-2"><Network size={13} className="text-[#5eead4]" /> Network / Systems focus</span>
            </div>
          </div>

          {/* Profile image + network visual */}
          <div className="reveal-right relative" style={{ animationDelay: '0.12s' }}>
            <div className="relative">
              <NetworkVisual />
              <div className="absolute -bottom-6 -right-2 sm:-right-6">
                <ProfileCard />
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-[#1e3a4d] bg-[#08111c]/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#1e3a4d] sm:grid-cols-4 lg:px-10">
            {[['7th', 'Semester'], ['3.55', 'CGPA / 4.00'], ['CCNA', 'Networking'], ['2026', 'Sys. Admin training']].map(([value, label]) => (
              <div key={label} className="px-5 py-6 transition hover:bg-[#0e1f2e]/50 sm:px-8 lg:py-7">
                <div className="font-mono text-xl font-medium text-[#5eead4] sm:text-2xl">{value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.17em] text-[#6b8a99]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="01 / ABOUT" title="Engineering systems. Solving infrastructure problems." copy="My work sits at the intersection of telecommunications, enterprise networking, system administration, and practical infrastructure." />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 text-[#9eb3bd] leading-8 sm:grid-cols-2">
              <p>I am a Telecommunication Engineering student at UET Mardan, currently in my 7th semester. My strongest direction is Network Engineering + System Administration + IT Infrastructure.</p>
              <p>I work with routing and switching, Windows Server, Active Directory, VMware, virtualization, network security, Microsoft Azure, and applied AI automation.</p>
              <p className="sm:col-span-2">I am building toward roles in network administration, NOC operations, systems, infrastructure, and network security — with cloud and automation as supporting capabilities.</p>
            </div>
            <div className="rounded-3xl border border-[#1e3a4d] bg-[#0b1825] p-7 sm:p-9">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5eead4]">Engineering workflow</span>
                <Network size={20} className="text-[#5eead4]" />
              </div>
              <div className="space-y-4">
                {(['Identify', 'Design', 'Implement', 'Test', 'Troubleshoot', 'Improve'] as const).map((step, index) => (
                  <div key={step} className="flex items-center gap-4 border-b border-[#1e3a4d] pb-4 last:border-0 last:pb-0 transition hover:pl-1">
                    <span className="font-mono text-xs text-[#4a6a78]">0{index + 1}</span>
                    <span className="font-semibold text-[#c4d8e2]">{step}</span>
                    <ArrowUpRight size={15} className="ml-auto text-[#5eead4]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y border-[#1e3a4d] bg-[#08111c]/60">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Learning by working through real systems." copy="A developing record across network administration, system administration, and project-based cloud and AI work." />
            <div className="relative ml-2 border-l border-[#2a4d63]">
              {experience.map((item, index) => (
                <article key={item.role} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#5eead4] bg-[#08111c] shadow-[0_0_15px_rgba(94,234,212,0.4)]" />
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5eead4]">
                    <span>{item.date}</span>
                    <span className="text-[#4a6a78]">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f0f9fb] sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 font-medium text-[#8ba5b4]">{item.company}</p>
                  <p className="mt-4 max-w-2xl leading-7 text-[#8ba5b4]">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => <span key={tag} className="rounded-full border border-[#1e3a4d] bg-[#0b1825] px-3 py-1.5 text-[11px] text-[#9eb3bd]">{tag}</span>)}
                  </div>
                  {index === 1 && <span className="absolute right-0 top-0 hidden rounded-full border border-[#5eead4]/30 bg-[#5eead4]/10 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-[#5eead4] sm:block">CAREER DIRECTION</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="03 / SELECTED PROJECTS" title="Infrastructure thinking, made tangible." copy="Technical work across enterprise networks, systems, virtualization, cloud, and applied AI automation." />
          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#5eead4] ${filter === item ? 'border-[#5eead4] bg-[#5eead4] text-[#050b12] shadow-[0_0_20px_rgba(94,234,212,0.2)]' : 'border-[#1e3a4d] bg-[#0b1825] text-[#8ba5b4] hover:border-[#5eead4] hover:text-[#5eead4]'}`} role="tab" aria-selected={filter === item}>{item}</button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article key={project.id} className="group card-hover flex min-h-[330px] flex-col rounded-3xl border border-[#1e3a4d] bg-[#0b1825] p-6 hover:border-[#5eead4]/50">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#5eead4]">0{index + 1} / {project.category.toUpperCase()}</span>
                  <ArrowUpRight size={18} className="text-[#4a6a78] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#5eead4]" />
                </div>
                <h3 className="mt-7 text-xl font-bold leading-snug text-[#f0f9fb]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#8ba5b4]">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.map((tag) => <span key={tag} className="rounded-md bg-[#0e1f2e] px-2.5 py-1.5 font-mono text-[10px] text-[#9eb3bd]">{tag}</span>)}
                </div>
                <button onClick={() => setSelectedProject(project)} className="mt-6 flex items-center gap-2 text-left text-sm font-bold text-[#5eead4] focus:outline-none focus:ring-2 focus:ring-[#5eead4]">View project details <ArrowUpRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-[#1e3a4d] bg-[#08111c]/60">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <SectionHeading eyebrow="04 / TECHNICAL CAPABILITY" title="A practical systems toolkit." copy="No subjective percentages — just the technologies and concepts I am actively developing through coursework, training, internships, and projects." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="card-hover rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-6 hover:border-[#5eead4]/40">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-bold text-[#f0f9fb]">{group.title}</h3>
                    <span className={`h-2 w-2 rounded-full ${group.accent === 'red' ? 'bg-[#f18b76]' : group.accent === 'amber' ? 'bg-[#e5c47b]' : group.accent === 'green' ? 'bg-[#83d1a6]' : 'bg-[#5eead4]'} shadow-[0_0_8px_currentColor]`} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-[#1a3340] px-2.5 py-1.5 text-[11px] text-[#9eb3bd] transition hover:border-[#5eead4]/40 hover:text-[#c4d8e2]">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="05 / CREDENTIALS" title="Structured learning, honestly presented." copy="Certifications and training are separated clearly, with dates left open where final verification is still needed." />
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-[#5eead4]"><span className="h-px w-8 bg-[#5eead4]" /> CERTIFICATIONS</h3>
              <div className="space-y-3">
                {certifications.filter((item) => item.label === 'Certification').map((item) => (
                  <div key={item.title} className="card-hover rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5 hover:border-[#5eead4]/40">
                    <div className="flex gap-4">
                      <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0e1f2e] text-[#5eead4]"><Check size={15} /></div>
                      <div>
                        <h4 className="font-bold text-[#e5f2f5]">{item.title}</h4>
                        <p className="mt-1 text-sm text-[#8ba5b4]">{item.issuer}</p>
                        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.13em] text-[#5eead4]">{item.date} · {item.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-[#5eead4]"><span className="h-px w-8 bg-[#5eead4]" /> PROFESSIONAL TRAINING</h3>
              <div className="space-y-3">
                {[...certifications.filter((item) => item.label === 'Professional Training').map((item) => ({ title: item.title, org: item.issuer, date: item.date, note: item.note })), ...training.map((item) => ({ title: item.title, org: item.org, date: item.date, note: item.topics.slice(0, 5).join(' · ') }))].map((item) => (
                  <div key={item.title} className="card-hover rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5 hover:border-[#5eead4]/40">
                    <h4 className="font-bold text-[#e5f2f5]">{item.title}</h4>
                    <p className="mt-1 text-sm text-[#8ba5b4]">{item.org}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.13em] text-[#5eead4]">{item.date}</p>
                    <p className="mt-3 text-xs leading-6 text-[#6b8a99]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-y border-[#1e3a4d] bg-[#08111c]/60">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading eyebrow="06 / EDUCATION" title="A strong engineering foundation." copy="Telecommunication engineering provides the foundation; practical labs and work build the systems direction." />
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={item.title} className="card-hover flex gap-5 rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5 hover:border-[#5eead4]/40 sm:gap-7 sm:p-7">
                    <div className="font-mono text-[10px] tracking-[0.14em] text-[#5eead4]">0{index + 1}</div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] tracking-[0.13em] text-[#6b8a99]">{item.years}</p>
                      <h3 className="mt-2 font-bold text-[#f0f9fb] sm:text-lg">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#8ba5b4]">{item.school}</p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#5eead4]"><span>{item.detail}</span><span>{item.result}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where I'm heading */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2a4d63] bg-[#0b1825] p-7 sm:p-12 lg:p-16">
            <div className="absolute inset-0 dot-bg opacity-15" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#5eead4]/8 blur-[100px]" />
            <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-[#5eead4]">07 / WHERE I&apos;M HEADING</p>
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[#f0f9fb] sm:text-5xl">Networking + systems + cloud + automation + AI.</h2>
              </div>
              <div>
                <p className="max-w-2xl leading-8 text-[#9eb3bd]">I am building toward professional opportunities in Network Engineering, Network Administration, NOC Operations, System Administration, IT Infrastructure, Network Security, and Cloud Infrastructure.</p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {['Network Engineering', 'NOC Operations', 'System Administration', 'IT Infrastructure', 'Network Security', 'Cloud Infrastructure'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#c4d8e2]"><span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] shadow-[0_0_8px_#5eead4]" />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I solve problems */}
        <section className="border-y border-[#1e3a4d] bg-[#08111c]/60">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="08 / HOW I SOLVE TECHNICAL PROBLEMS" title="Engineered, not decorated." />
              <span className="hidden font-mono text-[10px] tracking-[0.2em] text-[#4a6a78] sm:block">IDENTIFY → IMPROVE</span>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#1e3a4d] bg-[#1e3a4d] sm:grid-cols-2 lg:grid-cols-3">
              {approach.map(([number, title, copy]) => (
                <div key={number} className="group bg-[#0b1825] p-6 transition hover:bg-[#0e1f2e]">
                  <span className="font-mono text-xs text-[#5eead4]">{number}</span>
                  <h3 className="mt-9 text-lg font-bold text-[#eaf4f7]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8ba5b4]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-[#0d5261]/15 blur-[120px]" />
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-[#5eead4]">09 / CONTACT</p>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.05em] text-[#f0f9fb] sm:text-6xl">Let&apos;s build better infrastructure.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#8ba5b4]">For networking, infrastructure, system administration, technical collaboration, or early-career opportunities, feel free to connect.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/tahir-zaman-106787312" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-[#5eead4] px-5 py-3.5 text-sm font-bold text-[#050b12] transition hover:bg-[#a7f3d0] hover:shadow-[0_0_30px_rgba(94,234,212,0.3)]">Connect on LinkedIn <Linkedin size={17} /></a>
                <a href={CV_PATH} target="_blank" rel="noreferrer" download="Tahir-Zaman-CV.pdf" className="inline-flex items-center gap-3 rounded-xl border border-[#2a4d63] bg-[#08111c] px-5 py-3.5 text-sm font-bold text-[#c4d8e2] transition hover:border-[#5eead4] hover:text-[#5eead4] hover:shadow-[0_0_20px_rgba(94,234,212,0.12)]">Download CV <Download size={17} /></a>
              </div>
            </div>
            <div className="space-y-3">
              <a href="mailto:tahirzaman22487@gmail.com" className="card-hover flex items-center gap-4 rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5 hover:border-[#5eead4]/50">
                <Mail className="text-[#5eead4]" size={20} />
                <span><span className="block text-[10px] uppercase tracking-[0.16em] text-[#6b8a99]">Email</span><span className="mt-1 block text-sm font-semibold text-[#c4d8e2]">tahirzaman22487@gmail.com</span></span>
                <ArrowUpRight className="ml-auto text-[#4a6a78]" size={16} />
              </a>
              <a href="https://www.linkedin.com/in/tahir-zaman-106787312" target="_blank" rel="noreferrer" className="card-hover flex items-center gap-4 rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5 hover:border-[#5eead4]/50">
                <Linkedin className="text-[#5eead4]" size={20} />
                <span><span className="block text-[10px] uppercase tracking-[0.16em] text-[#6b8a99]">LinkedIn</span><span className="mt-1 block text-sm font-semibold text-[#c4d8e2]">tahir-zaman-106787312</span></span>
                <ExternalLink className="ml-auto text-[#4a6a78]" size={16} />
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-[#1e3a4d] bg-[#0b1825] p-5">
                <MapPin className="text-[#5eead4]" size={20} />
                <span><span className="block text-[10px] uppercase tracking-[0.16em] text-[#6b8a99]">Location</span><span className="mt-1 block text-sm font-semibold text-[#c4d8e2]">Mardan, Khyber Pakhtunkhwa, Pakistan</span></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#1e3a4d] bg-[#040a10]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-bold text-[#eaf4f7]">Tahir Zaman</p>
            <p className="mt-1 text-xs text-[#6b8a99]">Network Engineering · System Administration · IT Infrastructure · Cloud · Applied AI</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[#7e98a5]" style={{ fontSize: '15px' }}>
            <a href="https://www.linkedin.com/in/tahir-zaman-106787312" target="_blank" rel="noreferrer" className="transition hover:text-[#5eead4]">LinkedIn</a>
            <a href="mailto:tahirzaman22487@gmail.com" className="transition hover:text-[#5eead4]">Email</a>
            <span>© 2026</span>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#02080c]/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#2a4d63] bg-[#0b1825] p-6 shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.19em] text-[#5eead4]">{selectedProject.eyebrow}</p>
                <h2 id="project-title" className="mt-4 text-2xl font-bold leading-tight text-[#f0f9fb] sm:text-4xl">{selectedProject.title}</h2>
              </div>
              <button onClick={() => setSelectedProject(null)} className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#2a4d63] text-[#9cb3bd] transition hover:border-[#5eead4] hover:text-[#5eead4]" aria-label="Close project details"><X size={19} /></button>
            </div>
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {([['Problem', selectedProject.problem], ['Architecture', selectedProject.architecture], ['Implementation', selectedProject.implementation], ['Troubleshooting', selectedProject.troubleshooting], ['Outcome', selectedProject.outcome]] as const).map(([label, copy]) => (
                <div key={label} className="sm:last:col-span-2">
                  <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5eead4]">{label}</h3>
                  <p className="text-sm leading-7 text-[#9eb3bd]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-[#1e3a4d] pt-6">
              {selectedProject.areas.map((area) => <span key={area} className="rounded-full border border-[#2a4d63] px-3 py-1.5 text-xs text-[#9eb3bd]">{area}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
