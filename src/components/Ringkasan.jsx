import CountUp from './reactbits/CountUp';

const stats = [
  { to: 40, label: 'Hari Pengabdian' },
  { to: 10, label: 'Anggota Tim' },
  { to: 8, label: 'Program Kerja' },
  { to: 3, label: 'Dusun Terjangkau' }
];

const Ringkasan = () => {
  return (
    <section id="ringkasan" className="border-y border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-ink/10 px-6 py-14 sm:grid-cols-4 sm:divide-x">
        {stats.map(stat => (
          <div key={stat.label} className="px-2 py-4 text-center sm:py-0">
            <div className="font-display text-4xl text-forest md:text-5xl">
              <CountUp to={stat.to} duration={2} />
            </div>
            <p className="mt-2 font-label text-[0.65rem] uppercase tracking-[0.2em] text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ringkasan;
