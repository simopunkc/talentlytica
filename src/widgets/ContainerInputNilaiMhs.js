import WidgetInputNilaiMhs from './InputNilaiMhs';
import ComponentButtonSubmit from '../components/ButtonSubmit';
import { useSelector } from 'react-redux';
import {
  selectBalance,
  selectPrinter,
} from '../reducers/reportSlice';

const WidgetContainerInputNilaiMhs = ({ jumlahMhs, jumlahAspek }) => {
  let containerInputMhs = [];
  containerInputMhs.push(
    <li className="flex-container" key={`WidgetInputNilaiMhs${0}`}>
      <div className="profile"></div>
      <div>Aspek<br />penilaian 1</div>
      <div>Aspek<br />penilaian 2</div>
      <div>Aspek<br />penilaian 3</div>
      <div>Aspek<br />penilaian 4</div>
    </li>
  )
  for (let index = 1; index <= jumlahMhs; index++) {
    containerInputMhs.push(<WidgetInputNilaiMhs idMahasiswa={index} jumlahAspek={jumlahAspek} key={`WidgetInputNilaiMhs${index}`} />);
  }

  const balance = useSelector(selectBalance);
  const printer = useSelector(selectPrinter);
  return (
    <div>
      <ul>
        {containerInputMhs}
      </ul>
      <ComponentButtonSubmit />
      <textarea readOnly={true} rows={10} wrap='hard' autoFocus={false} value={JSON.stringify(balance, null, 4)}></textarea>
      <textarea readOnly={true} rows={10} wrap='hard' autoFocus={false} value={JSON.stringify(printer, null, 4).replaceAll('"', '')}></textarea>
    </div>
  )
}

export default WidgetContainerInputNilaiMhs;