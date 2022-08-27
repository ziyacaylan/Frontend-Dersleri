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

//Recursion örnek arrow fonksiyon ile gösterilmiştir.
const pow = (x, n) => (n == 1 ? x : x * pow(x, n - 1));

console.log(pow(2, 3));

// Geriye değer döndürecektir. tek kod satrırı kullandığımız için return yazmamıza gerek yoktur.
const hello = (firstName = "") => `Merhaba ${firstName ? firstName : ""}`;

let user = hello("Ziya");
console.log(user); // Merhaba Ziya
