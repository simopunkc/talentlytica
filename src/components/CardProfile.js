const ComponentCardProfile = ({ idMahasiswa, urlProfile }) => {
  return <div className="profile">
    <img src={urlProfile} alt={`Foto Profil Mahasiswa ${idMahasiswa}`} />
    <span>{`Mahasiswa ${idMahasiswa}`}</span>
  </div>;
};

export default ComponentCardProfile;
