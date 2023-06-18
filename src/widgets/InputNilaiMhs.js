import ComponentInputSelect from '../components/InputSelect';
import ComponentCardProfile from '../components/CardProfile';

const WidgetInputNilaiMhs = ({ idMahasiswa, jumlahAspek }) => {
  // const defaultUrlProfile = 'https://via.placeholder.com/24';
  const defaultUrlProfile = '/profile.jpeg';
  let inputMhs = [];
  inputMhs.push(<ComponentCardProfile idMahasiswa={idMahasiswa} urlProfile={defaultUrlProfile} key={`ComponentCardProfile${0}`} />);
  for (let index = 1; index <= jumlahAspek; index++) {
    inputMhs.push(<ComponentInputSelect idMahasiswa={idMahasiswa} idAspek={index} key={`ComponentInputSelect${index}`} />);
  }

  return (
    <li className="flex-container container-input">
      {inputMhs}
    </li>
  )
}

export default WidgetInputNilaiMhs;