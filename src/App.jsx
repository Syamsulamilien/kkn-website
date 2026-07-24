import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ringkasan from './components/Ringkasan';
import TentangKelompok from './components/TentangKelompok';
import ProgramKerja from './components/ProgramKerja';
import Anggota from './components/Anggota';
import Galeri from './components/Galeri';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <div className="paper-grain pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Ringkasan />
        <TentangKelompok />
        <ProgramKerja />
        <Anggota />
        <Galeri />
        <Footer />
      </div>
    </div>
  );
}

export default App;
