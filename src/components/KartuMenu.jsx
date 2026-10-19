function KartuMenu({
    nama, 
    harga,
    kategori = 'Makanan'
}) {
  return (
    <div className="kartu">
      <h3>{props.nama}</h3>
      <p>{props.harga}</p>
      <p>Kategori: {props.kategori}</p>
    </div>
  );
}
export default KartuMenu;
