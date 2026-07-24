import Stempel from './Stempel';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-forest-dark py-20 text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[auto_1fr] md:items-center">
        <Stempel text="KKN KELOMPOK [X] • [NAMA DESA] • " size={140} tone="paper" spinDuration={30} />

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-label text-[0.65rem] uppercase tracking-widest text-paper/50">Instansi</p>
            <p className="mt-2 font-body text-sm text-paper/85">[Nama Universitas]</p>
            <p className="font-body text-sm text-paper/85">KKN [Tanggal Mulai] – [Tanggal Selesai]</p>
          </div>

          <div>
            <p className="font-label text-[0.65rem] uppercase tracking-widest text-paper/50">Kontak</p>
            <p className="mt-2 font-body text-sm text-paper/85">[email@contoh.com]</p>
            <p className="font-body text-sm text-paper/85">Instagram @[akun_kkn]</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-6xl px-6 font-label text-[0.65rem] uppercase tracking-widest text-paper/40">
        © {year} Kelompok KKN [Nomor] · [Nama Desa]
      </p>
    </footer>
  );
};

export default Footer;
