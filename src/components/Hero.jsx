import DotGrid from './reactbits/DotGrid';
import BlurText from './reactbits/BlurText';
import Stempel from './Stempel';

const Hero = () => {
  return (
    <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden bg-paper">
      {/* dot-grid, like graph paper in a field notebook — quiet until you move the cursor over it */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={2.5}
          gap={22}
          baseColor="#ddcda2"
          activeColor="#b9832e"
          proximity={110}
          shockRadius={180}
          shockStrength={2.5}
          resistance={600}
          returnDuration={1.2}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-32 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-6 font-label text-xs uppercase tracking-[0.3em] text-forest">
            Jurnal Lapangan — Kelompok KKN [06]
          </p>

          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.1] text-ink md:text-6xl">
            <BlurText text="Catatan pengabdian di" delay={80} />{' '}
            <BlurText text="[Nama Desa]." delay={80} className="italic text-forest" />
          </h1>

          <p className="mt-6 max-w-md font-body text-ink/70">
            Dokumentasi program kerja, cerita harian, dan wajah-wajah di balik Kuliah Kerja Nyata
            kami di [Nama Desa, Kecamatan, Kabupaten].
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-label text-xs uppercase tracking-widest text-ink/60">
            <span className="rounded-full border border-ink/20 px-4 py-2">[03 agustus] — [02 september]</span>
            <span className="rounded-full border border-ink/20 px-4 py-2">Universitas Aisyiyah Yogyakarta</span>
          </div>
        </div>

        <div className="hidden justify-self-end md:flex">
          <Stempel text="KKN KELOMPOK [06] • [NAMA DESA] • " size={190} />
        </div>
      </div>

      <a
        href="#ringkasan"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-label text-xs uppercase tracking-widest text-ink/50"
      >
        ↓ Gulir
      </a>
    </section>
  );
};

export default Hero;
