import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div style={{ textAling: "center" }}>
      <h1>Oopss..... Sayfa Bulunamadı...</h1>
      <Link to="/">Anasayfaya Dön</Link>
    </div>
  );
}
