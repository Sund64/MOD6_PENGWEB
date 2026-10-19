const nama = 'chris';
const n = 75;
const styleJudul = {
  color: '#1F3A5F',
  fontSize: '30px',
  fontWeight: 'bold', 
} 
const jam = 9;
export default function App(){

  return (
    <div>
      <h1 className="judul" style={styleJudul}>
        Kantin {nama}
      </h1>
      <p>{jam < 12 ?'Selamat Siang':'Selamat Pagi'}</p>
      <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
      <button disabled>Bayar</button>
    </div>
  )
}