import LabelHarga from "./LabelHarga";

function KartuMenu({
    nama, 
    harga,
    kategori = 'Makanan',
    tambah,
    jumlah,
    kurang,
    onTambah,
    onHapus,
    onKurang,
}) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>      
      <p>Kategori: {kategori}</p>
      <LabelHarga nilai={harga}/>
    <div className="control">
        <button onClick={onKurang} disabled={jumlah === 0}>-</button>
        <span>{jumlah}</span>
        <button onClick={onTambah}>+</button>
    </div>
    {jumlah === 0?(<p>Belum dipesan</p>):(<p>Subtotal: Rp.{(harga * jumlah).toLocaleString('id-ID')}</p>)}
    </div>

  );
}
export default KartuMenu;
