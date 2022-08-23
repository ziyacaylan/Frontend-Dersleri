// örnekte template literal kullanılarak verilen 2 adet kitap tablo içerisinde sayfada görüntülenmiştir.

const kitap = [
  {
    ad: `Fırtına`,
    yazar: `Shakespeare`,
    tarih: 1610,
  },
  {
    ad: `Da Vinci Şifresi`,
    yazar: `Dawn Brown`,
    tarih: `2003`,
  },
];

const bookTable = `<table border> 
  <tbody> 
  <tr>   
  <td>   Kitap   </td>  
  <td>  Yazar   </td>     
  <td>   Tarih   </td>   
  </tr> 

  <tr>
  <td>   ${kitap[0].ad}  </td>
  <td>   ${kitap[0].yazar}  </td>
  <td>   ${kitap[0].tarih}  </td>
  </tr>
  <tr>
  <td>   ${kitap[1].ad}  </td>
  <td>   ${kitap[1].yazar}  </td>
  <td>   ${kitap[1].tarih}  </td>
  </tr>

   </tbody> 
  </table>`;
document.body.innerHTML = bookTable;
