import { useSelector } from 'react-redux';
import {
  selectPrinter,
} from '../reducers/reportSlice';

const ComponentButtonSubmit = () => {
  const printer = useSelector(selectPrinter);

  const onPrint = () => {
    let tempLink = document.createElement("a");
    tempLink.download = "nilai_mahasiswa.json";
    tempLink.href = URL.createObjectURL(new Blob([JSON.stringify(printer, null, 4).replaceAll('"', '')]));
    tempLink.click();
  };
  return <div className='text-right'><button className='tombol-simpan' title='Download Nilai Mahasiswa' onClick={onPrint}>Simpan</button></div>
};

export default ComponentButtonSubmit;
