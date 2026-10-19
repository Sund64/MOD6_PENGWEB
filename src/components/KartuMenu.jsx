import { useState } from "react";
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
    const [catatan, setCatatan] = useState('')
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
    {jumlah >= 5 && <span className="badge">Pesanan Banyak</span>}
    <label>Catatan Pesanan{''}
        <input value={catatan} onChange={(e) => setCatatan(e.target.value)} />
    </label>
    {catatan!== '' && (
    <p>Catatan: {catatan}</p>)}
    <button onClick={onHapus}>Hapus Pesanan</button>
    </div>

  );
}
export default KartuMenu;
