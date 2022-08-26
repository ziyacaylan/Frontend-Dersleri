const func1 = () => console.log("ilk fonksiyon çalıştı");

const func2 = () => {
  setTimeout(() => console.log("ikinci fonksiyon çalıştı"), 3000);
};

const func3 = () => {
  setTimeout(() => console.log("üçüncü fonksiyon çalıştı"), 2000);
};

func1();
func2();
func3();
