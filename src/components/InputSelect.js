import { useDispatch } from 'react-redux';
import {
  deposit,
  withdraw,
  printer,
} from '../reducers/reportSlice';

const ComponentInputSelect = ({ idMahasiswa, idAspek }) => {
  const dispatch = useDispatch();
  const onDeposit = async (amount) => {
    const tempObj = {
      aspek: idAspek,
      mahasiswa: idMahasiswa,
      value: parseInt(amount, 10),
    };
    if (amount > 0) {
      await dispatch(deposit(tempObj));
    } else {
      await dispatch(withdraw(tempObj));
    }
    dispatch(printer());
  };

  const uniqueId = `mhs-${idMahasiswa}-aspek-${idAspek}`;
  let selectOptions = [];
  selectOptions.push(<option value={0} key={`selectOptions${0}`}>Pilih Nilai</option>);
  for (let index = 1; index <= 10; index++) {
    selectOptions.push(<option value={index} key={`selectOptions${index}`}>{index}</option>);
  }
  return <div>
    <select name={uniqueId} id={uniqueId} onChange={e => onDeposit(e.target.value)}> {selectOptions}</select>
  </div>
};

export default ComponentInputSelect;
