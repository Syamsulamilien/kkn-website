import { useState } from 'react';

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#program', label: 'Program Kerja' },
  { href: '#anggota', label: 'Anggota' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#beranda" className="font-label text-sm tracking-[0.2em] text-ink uppercase">
          KKN <span className="text-ochre">·</span> [Pedukuhan Plagrak Kiyaran, Wukirsari, Cangkringan, Sleman]
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-6 py-4 md:hidden">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-body text-sm text-ink/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
