# Website Profil KKN

Dibuat dengan React + Vite + Tailwind CSS v4, animasi dari [React Bits](https://reactbits.dev) (BlurText, DotGrid, CircularText, CountUp, SpotlightCard — sudah dikustomisasi warnanya).

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Untuk build produksi:

```bash
npm run build
```

Hasilnya ada di folder `dist/`, siap di-deploy ke Vercel/Netlify/GitHub Pages (drag & drop folder `dist` juga bisa, misalnya di Netlify Drop).

## Checklist isi yang masih placeholder

Cari teks berformat `[Seperti Ini]` di file-file berikut, lalu ganti dengan data asli:

- `src/components/Navbar.jsx` — nama desa di logo
- `src/components/Hero.jsx` — nama desa, nomor kelompok, tanggal KKN, nama kampus
- `src/components/TentangKelompok.jsx` — deskripsi kelompok, lokasi, dosen pembimbing, dan foto (ganti div placeholder dengan `<img>`)
- `src/components/ProgramKerja.jsx` — nama & deskripsi tiap program kerja (saat ini 6 slot, tambah/kurangi array `programs` sesuai kebutuhan)
- `src/components/Anggota.jsx` — nama & jabatan tiap anggota (8 slot, sesuaikan array `anggota`)
- `src/components/Galeri.jsx` — ganti placeholder foto dengan `<img>` dokumentasi asli
- `src/components/Footer.jsx` — kontak, Instagram, nama kampus
- `src/components/Ringkasan.jsx` — angka statistik (hari, anggota, program, dusun)

## Struktur

```
src/
  components/
    reactbits/       # komponen animasi dari React Bits (sudah direcolor)
    Stempel.jsx       # badge stempel custom (pakai CircularText)
    Navbar.jsx, Hero.jsx, Ringkasan.jsx, TentangKelompok.jsx,
    ProgramKerja.jsx, Anggota.jsx, Galeri.jsx, Footer.jsx
  App.jsx
  index.css           # design tokens (warna, font) via Tailwind @theme
```
