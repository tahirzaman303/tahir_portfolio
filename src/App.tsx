import { Linkedin, Mail, MapPin } from 'lucide-react';

const focusAreas = [
  'Network Engineering',
  'System Administration',
  'IT Infrastructure',
  'Cisco Networking',
  'Windows Server',
  'VMware',
  'Azure & Cloud',
  'Applied AI',
];

function App() {
  return (
    <main className="min-h-screen bg-[#071019] text-slate-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Portfolio</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Tahir Zaman</h1>
        <p className="mt-4 text-xl text-slate-300">
          Telecommunication Engineering student developing practical capability across enterprise
          networking, systems, infrastructure, cloud, and applied AI.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-100"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-4 text-slate-300 sm:flex-row sm:gap-8">
          <a href="mailto:tahirzaman22487@gmail.com" className="flex items-center gap-2 hover:text-cyan-300">
            <Mail size={18} /> tahirzaman22487@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tahir-zaman-106787312"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-300"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} /> Mardan, Khyber Pakhtunkhwa, Pakistan
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
