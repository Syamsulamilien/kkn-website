import SpotlightCard from './reactbits/SpotlightCard';

const programs = [1, 2, 3, 4, 5, 6];

const ProgramKerja = () => {
  return (
    <section id="program" className="bg-paper-line/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-ochre">Log Kegiatan</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl text-ink md:text-4xl">Program Kerja</h2>
        <p className="mt-4 max-w-lg font-body text-ink/70">
          Rangkaian program kerja yang dijalankan selama masa pengabdian, dicatat sesuai urutan pelaksanaan.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(n => (
            <SpotlightCard key={n} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs tracking-widest text-ink/40">
                  PROGRAM {String(n).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-stempel/10 px-3 py-1 font-label text-[0.6rem] uppercase tracking-widest text-stempel">
                  Selesai
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl text-ink">[Nama Program Kerja {n}]</h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/65">
                [Deskripsi singkat program: tujuan, sasaran warga, dan hasil yang dicapai.]
              </p>

              <p className="mt-4 font-label text-[0.65rem] uppercase tracking-widest text-ink/40">
                [Dusun/lokasi] · [Tanggal pelaksanaan]
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramKerja;
