import foto1 from '../assets/gallery/KKN1.jpeg';
import foto2 from '../assets/gallery/KKN2.jpeg';
import foto3 from '../assets/gallery/KKN3.jpeg';
import foto4 from '../assets/gallery/KKN4.jpeg';
import foto5 from '../assets/gallery/KKN5.jpeg';
import foto6 from '../assets/gallery/KKN6.jpeg';

// Tiap foto dikasih kemiringan beda-beda + aksen "selotip" di atas,
// kayak foto yang ditempel langsung di halaman jurnal.
const photos = [
  { src: foto1, rotate: -3, tape: 'forest' },
  { src: foto2, rotate: 2, tape: 'ochre' },
  { src: foto3, rotate: -1.5, tape: 'batik' },
  { src: foto4, rotate: 2.5, tape: 'stempel' },
  { src: foto5, rotate: -2, tape: 'ochre' },
  { src: foto6, rotate: 1.5, tape: 'forest' }
];

const tapeColor = {
  forest: 'bg-forest/70',
  ochre: 'bg-ochre/70',
  batik: 'bg-batik/70',
  stempel: 'bg-stempel/70'
};

const Galeri = () => {
  return (
    <section id="galeri" className="bg-paper-line/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-ochre">Dokumentasi</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl text-ink md:text-4xl">Galeri</h2>
        <p className="mt-4 max-w-lg font-body text-ink/70">
          Sekilas dokumentasi kelompok selama masa pengabdian.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10">
          {photos.map((photo, i) => (
            <figure
              key={i}
              style={{ transform: `rotate(${photo.rotate}deg)` }}
              className="group relative bg-paper p-3 pb-8 shadow-[0_8px_20px_-6px_rgba(42,33,24,0.35)] transition-transform duration-300 ease-out hover:z-10 hover:rotate-0 hover:scale-105 hover:shadow-[0_14px_28px_-8px_rgba(42,33,24,0.4)]"
            >
              <span
                className={`absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-2 ${tapeColor[photo.tape]}`}
                aria-hidden="true"
              />
              <div className="aspect-[3/4] w-full overflow-hidden bg-ink/5">
                <img
                  src={photo.src}
                  alt={`Dokumentasi kelompok KKN ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center font-label text-[0.6rem] uppercase tracking-widest text-ink/40">
                [Keterangan foto]
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;