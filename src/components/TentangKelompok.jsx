const TentangKelompok = () => {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.3em] text-ochre">Tentang</p>
          <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">Kelompok &amp; Lokasi Pengabdian</h2>

          <p className="mt-6 font-body leading-relaxed text-ink/70">
            Kelompok KKN [Nomor Kelompok] beranggotakan [jumlah anggota] mahasiswa dari
            [sebutkan program studi/fakultas], diterjunkan di [Nama Desa], Kecamatan [Nama Kecamatan],
            Kabupaten [Nama Kabupaten], selama [durasi] mulai [tanggal mulai] hingga [tanggal selesai].
          </p>

          <p className="mt-4 font-body leading-relaxed text-ink/70">
            [Ceritakan singkat kondisi desa: mata pencaharian warga, potensi lokal, atau tantangan
            yang menjadi latar belakang program kerja kelompok.]
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/10 pt-6">
            <div>
              <dt className="font-label text-[0.65rem] uppercase tracking-widest text-ink/50">Universitas</dt>
              <dd className="mt-1 font-body text-sm text-ink">[Nama Universitas]</dd>
            </div>
            <div>
              <dt className="font-label text-[0.65rem] uppercase tracking-widest text-ink/50">Dosen Pembimbing</dt>
              <dd className="mt-1 font-body text-sm text-ink">[Nama DPL]</dd>
            </div>
          </dl>
        </div>

        <div className="flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-ink/25 bg-paper-line/40 md:aspect-auto">
          <p className="max-w-[12rem] text-center font-label text-xs uppercase tracking-widest text-ink/40">
            Ganti dengan foto desa atau kelompok
          </p>
        </div>
      </div>
    </section>
  );
};

export default TentangKelompok;
