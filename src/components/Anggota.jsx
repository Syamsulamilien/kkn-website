import SpotlightCard from './reactbits/SpotlightCard';

const anggota = Array.from({ length: 8 }, (_, i) => i);

const Anggota = () => {
  return (
    <section id="anggota" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-label text-xs uppercase tracking-[0.3em] text-ochre">Tim</p>
      <h2 className="mt-4 max-w-lg font-display text-3xl text-ink md:text-4xl">Anggota Kelompok</h2>

      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
        {anggota.map(i => (
          <SpotlightCard key={i} className="flex flex-col items-center p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 font-display text-lg text-forest">
              AB
            </div>
            <h3 className="mt-4 font-body text-sm font-semibold text-ink">[Nama Anggota]</h3>
            <p className="mt-1 font-label text-[0.65rem] uppercase tracking-widest text-ink/50">[Jabatan / Prodi]</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Anggota;
