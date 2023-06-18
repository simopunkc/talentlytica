import './App.css';
import WidgetContainerInputNilaiMhs from './widgets/ContainerInputNilaiMhs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplikasi Penilaian Mahasiswa</h1>
      </header>
      <WidgetContainerInputNilaiMhs jumlahMhs={10} jumlahAspek={4} />
    </div>
  );
}

export default App;
