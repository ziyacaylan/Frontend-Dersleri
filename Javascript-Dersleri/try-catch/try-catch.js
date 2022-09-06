try {
  hello();
} catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}

function valid() {
  try {
    if (document.querySelector("#dogumTarihi").value == "") {
      throw "Doğum tarihini boş geçemezsiniz";
    }
  } catch (err) {
    alert(err);
  }
}
