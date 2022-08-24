# <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" />

# İÇİNDEKİLER

---

## 4. Javascript Dersleri

## 4.1-Javascript Nedir?

Javascript web programlama alanında yaygın olarak kullanılan dinamik bir programlama dilidir. Etkileşimli ve dinamik web sayfaları geliştirmeye yardımcı olur. İsminden dolayı Java programala dili ile karıştırılır ancak her iki dilde birbirinden çok farklı birer dildir. Aralarındaki benzerlik; yazım şekli ve standart kütüphanelerı dışında bir bağlantı yoktur.

C programlama dilinden türetilmiş, semantiği ve tasarımı ise Self ve Sheme programlama dillerinden esinlenmiştir.

Javascript dili 1997 yılında Netscape şirketinde çalışan Brendan Eich tarafından gliştirilmiştir. İlk çıktığı yıllarda o deneme iat web tarayıcıların büyük çoğunluğu tarafından yorumlanamıyordu ancak Brendan Eich bu dili geliştirmeye devam etti.Brendan Eich o dönemlerde Mozilla Vakfı’nı kurdu. Bu vakıf günümüzde hâlâ Javascript dilini geliştirmeye devam etmektedir.

### 4.2-ECMAScript'in Ortaya Çıkışı

1996 yılının kasım ayında Netscape firması Javascript'in endüstri standardı olarak belirlenmesi amacıyla ECMA International'a (Avrupa Bilgisayar Üreticileri Birliği) başvuruda bulunduğunu ilan etti. Bunun sonucunda standardize edilen sürüm ECMAJcript olarak isimlendirildi ve 1997 yılının haziran ayında ECMA International, ECMA-262 standartları çerçevesinde ilk sürüm ECMAScript (kısaca ES) yanımlandı.Haziran 1998'de ISO/IEC-16262 standardına uyumlu hale getirilecek değişiklikler yapılarak ECMAScript 2, Aralık 1999'da ise ECMAScript 3 yayınlandı.

ECMAScript 4 üzerinde ciddi bir çalışma yapılmasına rağmen asla tamamlanamadı, ancak beşinci sürüm için önemli bir ilham kaynağı oldu. ECMAScript 5, 2009 yılının Aralık ayında yayınlandı. En son yayınlanan versiyonu ECMAScript 2020, Haziran 2020'de yayınladı.

**ECMAScript Versiyonları**

```
1. ES1 / ECMAScript 1 (Haziran 1997)
2. ES2 / ECMAScript 2 (Haziran 1998)
3. ES3 / ECMAScript 3 (Aralık 1999)
- ES4 / ECMAScript 4 (Yayınlanmadı)
4. ES5 / ECMAScript 5 (Aralık 2009)
5. ES5.1 / ECMAScript 5.1 (Haziran 2011)
6. ES6 / ECMAScript 2015 (Haziran 2015)
7. ES2016 / ECMAScript 2016 (Haziran 2016)
8. ES2017 / ECMAScript 2017 (Haziran 2017)
9. ES2018 / ECMAScript 2018 (Haziran 2018)
10. ES2019 / ECMAScript 2019 (Haziran 2019)
11. ES2020 / ECMAScript 2020 (Haziran 2020)
```

## 4.3-JavaScript Kullanım Alanları

JavaScript'in tarihi konusunda da belirteceğimiz gibi, JavaScript'in ortaya çıkış amacı siteleri interaktif ve fonksiyonel hale getirmekti. Ancak ECMA Standartı ile hızla değişen ve gelişen JavaScript, yazılımcıların talepleri doğrultusunda sürekli üzerine koyarak ve yeni bir dönem başlatan Node.js'in geliştirilmesiyle, oldukça önemli güncellemeler de alarak her alanda kullanabilecek bir dil haline geldi. Böylece tüm dünyanın en çok kullanılan yazılım dili olarak son yıllarda hep ilk sıralarda yer edinmeyi başardı.

**JavaScript'in kullanılabileceği alanlar:**

- Front-end
- Back-end
- Mobil (Mobile)
- Masaüstü (Desktop)
- Oyun (Game)
- Makine Öğrenmesi, Derin Öğrenme ve Yapay Zeka (Machine Learning, Deep Learning & Artificial Intelligence)

## 4.4-Değişken (Variable) Tanımlama

Programlama dillerinde sıkça verileri bellek yani RAM de saklamamız gerekir. RAM işlem yapmak için son derece hızlı bir donanımdır.
Basitçe, bellke içerisindeki bir alanın adlandırılmasına ve ayrılmasına değişken tanımlamak denir.

- Değişken isimleri harf, \_ veya $ işareti ile başlayabilir. Fakat ES5 (ECMAScript 5) birlikte gelen özellikle UNICODE kodları kullanılırken kaçış karakteri olarak kullanılan \ işareti ilk karakter olarak kullanılabilir.
- İlk harften sonra değişken isimlerinde rakamlar da kullanılabilir. $ ve \_ dışında başka noktalama işaretleri kullanılamaz
- Değişken ismindeki harfler arasında boşluk kullanılamaz.

## 4.5-Değişkene Değer Atama ve Veri Türleri

Değişkenlere değer atama = operatörü ile yapılır.  
JavaScript loosely typed bir programlama dilidir. Yani bir değişkeni tanımlarken değişkenin türünü (sayısal, metinsel, boolean) belirtmemize gerek yoktur.  
Bir değişkene aşağıdaki veri tiplerini atayabiliriz.

- Boolean = Mantıksal ifadedir. _true_ veya _false_ değeri atanabilir
- Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.
- BigInt = 2^53-1 değerinden büyük değerleri atayabilir.
- String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade “ ” veya ‘ ’ işaretleri arasına yazılır.
- Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir.

**var ile değişken tanımlama**
Global scope veya function scope'ta deklarasyon sağlayamaya yarayan keyword'dur. Scope özelliklerini daha sonra örneklerle açıklayacağız. var ile tanımlanan değişkenlerin özellikleri şunlardır.

- Değişken değerleri değiştirilebilir.
- Aynı isimle tekrardan tanımlanabilirler.
- var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir.

**Anahtar Notlar :**  
ES6 ile birlikte var kullanımı _decepricate_ olmuştur ve yerine _let_ ve _const_ gelmiştir. Bu keyword ler bize _var_ ın sağlayamadığı özellikleride sağlamaktadır.

**let ile değişken tanımlama**
Değişkenleri block scope'ta tanımlayan deklarasyondur. let ile tanımlanan değişkenlerin özellikleri şunlardır.

- Değişken değerleri değiştirilebilir.
- Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı block'larda aynı isimle tanımlanabilir.

**const ile değişken tanımlama**
Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword'dür.

- Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı
- geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.

## 4.6-Hoisting

Değişkenlerden bahsederken, değişkenleri kullanıp daha sonra tanımlamamızı sağlayan hoisting kavramından da bahsetmemiz gerekir. JavaScript’te tanımlanan değişkenler yorumlanırken tanımladığınız değişkenler fonksiyon veya ifadenin yukarısına alınarak yorumlanır. Buna hoisting (yukarı alma) denir. Yukarıya alınan değişkenler var ile deklare edildiyse atandıkları değer yerine undefined değerini alır. let veya const ile deklare edildi ise ReferanceError hatası verir. let ve const ile deklare edilen değişkenler bloğun başlangıcından itibaren tanımının yapıldığı yere kadar kadar geçici (temporal dead zone) bölgededir.

## 4.7- Javascript Veri Türleri

Veri türleri her programlama dili için oldukça önemli bir kavramdır. Veri türü, değişkenler içinde saklanacak verinin türüne göre sınıflandırılması işlemidir.

JavaScript, C# veya Java gibi diğer programa dillerine benzer veri tiplerini içerir. Genel olarak iki veri türü olarak sınıflandırabiliriz;

1- İlkel (Primitive) Veri Türleri

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Bigint

2- İlkel Olmayan (Reference) Veri Türleri

- Object
- Array
- Function

JavaScript dinamik bir dildir, yani bir değişken herhangi bir zamanda herhangi bir veri türünü tutabilir. Örneğin :

```
var x = 100;
x = "javascript";
x = false;
x = null;
x = undefined;

alert(x); // undefined
```

x değişkeni en son atanmış undefined değerini tutacaktır.

**typeof** operatörü ile bir değişkenin veri tipini öğrenebiliriz. Eğer ki object içindeki herhangi bir yapısal tipi kontrol etmek istersek, bunun için _typeof_ kullanmak anlamsız olur, çünkü her zaman “object” çıktısını alırız. Bu tarz bir durumda kesin bir sonuç alınamasa da **instanceof** operatörünü kullanmak mantıklı olabilir.

## 4.8-Number Veri Türü Kullanımı, Temel Aritmetik İşlemler ve İşlem Önceliği ve Arttırma ve Azaltma İşlemleri

**Number (Sayı) Veri Türü**

JavaScript dili weakly-typed yani güçsüz türlü bir dildir. Değişkenlerin ve parametrelerin türlerini bildirmek gerekmez. Tür kullanımdan dolaylı olarak çıkartılır.  
Örneğin:

```
let x = 3;
```

şeklindeki tanımlamada değişkenin değeri tam sayı (integer), aşağıdaki örnekte ise

```
let y = 3.14;
```

y değişkenin değer türü kayan sayı (float) türündedir. Sayının integer veya float olup olmadığı nokta (.) olup olmamasından anlaşılır.

**Aritmetik Operatörler**

- Toplama: +
- Çıkarma: -
- Çarpma: \*
- Üs Alma: \*\*
- Bölme: /
- Mod Alma: %
- Arttırma: ++
- Eksiltme: --

**Toplama:** Sayıları toplama işlemini gerçekleştirir. İşlem yönü soldan sağadır.

```
    var result = 3+5;
    console.log(result);
    //8
```

**Çıkarma:** İki sayıyı çıkarma işlemini gerçekleştirir. İşlem yönü soldan sağadır.

```
    var result = 5-2;
    console.log(result);
    //3
```

**Çarpma:** İki sayıyı çarpma işlemini gerçekleştirir. İşlem yönü soldan sağadır.

```
    var result = 5*2;
    console.log(result);
    //10
```

**Üs Alma:** ECMAScript6 ile gelmiştir. Soldaki değerin, sağdaki rakam veya sayı baz alınarak kendisiyle çarpılması şeklinde gerçekleşir.

```
    var result = 5**2;
    console.log(result);
    //25
```

**Bölme:** İki sayıyı bölme işlemini gerçekleştirir. İşlem yönü soldan sağadır.

```
    var result = 6/3;
    console.log(result);
    //2
```

**Mod Alma:** Operatörün solundaki değerin sağdakine kalanını bulmak için kullanılmaktadır. İşlem yönü soldan sağadır.

```
    var result = 6%3;
    console.log(result);
    //0
```

**Azaltma:** Bir sayıyı azaltmak için kullanırız. Değeri 1 azaltır. For ve While döngüleri içinde sık sık kullanılır. Arttırma operatöründe anlatılan başa veya sonraya operatör ekleme işlemi sonunda gerçekleşen durum azaltma operatörü içinde geçerlidir.

```
    let counter = 1;
    let a = --counter;
    alert(a); // 0
```

## 4.9-Boolean Veri Türü

Program yazarken sadece iki ifade ile çalışmak (evet yada hayır, _0_ yada _1_ gibi) programın anlaşılabilmesi ve yazım kolaylığı açısından çok işimize yarar. İşte bu veri türünde ise iki ifade vardır. Bunlar _true_ ve _false_ tir.

```
Boolean(10>9); // true
```

```
Boolean(10>11); // false
```

```
const b1 = Boolean(100); // true
const b2 = Boolean(3.14); // true
const b3 = Boolean(-15); // true
const b4 = Boolean("Hello"); // true
const b5 = Boolean('false'); // true
const b6 = Boolean(1 + 7 + 3.14); // true
```

```
const c1 = Boolean(undefined); // false
const c2 = Boolean(null); // false
const c3 = Boolean(""); // false
const c4 = Boolean(false); // false
const c5 = Boolean(NaN); // false
const c6 = Boolean(0); // false
const c6 = Boolean(-0); // false
```

## 4.10-Değişken Türünü Kontrol Etme

Çalıştığımız veriler her zaman kodumuz için uygun olmayabilir. Verilerin kontrolünü sağlayıp ona uygun kod yazabiliriz veya istediğimiz türe dönüştürerek ilerleyebiliriz.

Bu kontrolleri yaparken sıkça _typeof_ kullanılır.

```
console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"
```

**Anahtar Notlar :**
Bir başka şekilde isInteger( ), isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.

```
//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true
```

## 4.11-Değişken Türünü Değiştirmek (Type Coercion)

Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. İki tipi vardır. Bunlar explicit ve implicit dönüşümlerdir. Explicit için metodlarla yapılan dönüşüm denilebilir. Implicit ise operatörler ile veya Javascript in kendi yaptığı dönüşüm diyebiliriz.

**Explicit Coercion**

```
String(123) // “123”
ParseInt(“123”) // 12
```

**Implicit Coercion**

```
If(3<5) // true
console.log(‘ ’+123) // “123”
12/”6” // 2
```

**String Dönüşümü**

Bir değeri string e dönüştermek için String() fonksiyonu kullanılır. Binary (kili) ifatede _+_ operatörü birstring ifadeye uygulandığında ise implicit dönüşüm tetiklenir.

```
String(123) // “123” explicit
123 + ''    // “123”    implicit
```

**NOTLAR:**
Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.

```
String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown
```

**Boolean Dönüşümü**  
Bir değeri explicit boolean a dönüştürmek için Boolean() metodu kullanılır.  
İmplicit coercion dönüşüm ise mantıksal operatörlerin kullanıldığında tetiklenir.

```
Boolean(2) // explicit
var a=!!2 //explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator
```

**Örekler**

```
Boolean('') // false
Boolean(0) // false
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true
```

**Nesneler (Objects) için Type Coercion**
Javascript te nesneler referans tipler olduğundan üzerlerinde değişiklik yapmak biraz zordur. Değişiklik yapabilmemiz için elimizde primitif tip olması gerekir. Yani referans tipler primitif tiplere zorlanır. Primitif olmayan herhangi bir değer yada obje (object veya array) dolu yada boş farketmez true değere dönecektir.

```
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true
```

## 4.12-Template Literals Kullanımı

Template literals (öneki adı template Strings), kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.

**Sağladığı faydalar**

- Çok satırlı dize yazımı

```
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`
```

- İnterpolasyon : metin içerisinde değişken kullanmak anlamına gelir.

```
let ad= `Ziya`;
let soyad= `ÇAYLAN`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);
```

- Html Şablonları : Çok satırlı dizeleri kolaylıkla kullanmak ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz.

```
//Değişkenlerimizi tanımlayalım
const ad =`Ziya`
const soyad =`ÇAYLAN`
const gozRengi =`Kahverengi`
const yas =39


const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//Bu kullanım daha az karmaşık ve okunabilir.
```

**Kısaca Faydalarını sıralarsak**

- Kod okunabilirliğini kolaylaştırır
- String ifadeler içerisinde değişken yazma kolaylığı sağlar,
- Şablon etiketlerini daha karmaşık hale getirir.

[Linkteki örneği inceleyiniz.](./Javascript-Dersleri/template-literal-example/template-literal.js). Örnekte template literal kullanılarak web sayfasında kitaplar listelenmiştir.

## 4.13-String Veri Türü İşlemleri

**String nedir ?**

Javascript e metinlerin tümü _string_ veri tipinde tutulur.

**Length Özelliği**

String ifadenin uzunluğunu bize verir. Aşağıdaki örneği inceleyiniz.

```
const str = "javascript";
// bu ifadenin sonucu konsol ekranında 10 olarak görüntülenecektir.
console.log(str.length);
```

**indexOf Özelliği**

Metin içerisinde arama yapmak istediğimizde bize aradığımız değerin index numarasını verir.

```
const str = "Ziya çaylan";
// 'ya' nın başladığı index numarasını geri döner yani 2
console.log(str.indexOf("ya"));
```

**lastIndexOf Özelliği**

indexOf ile aynı çalışır ancak arasındaki fark; metin içerisinde arama yapmak istediğimizde aradığımız değerin en son karşılaştığı index numarasını geri döner. Aşağıdaki örnekte olduğu gibi

```
const str = "Ziya çaylan";
// 'a' nın en son görüldüğü index numarasını geri döner yani 9
console.log(str.indexOf("a"));
```

**Search - Metin İçerisinde Arama Yapma**

indexOf ile aynı şekilde çalışır ve _"Regular Expressions"_ işlemlerinde çok kullanılmaktadır.

```
const str = "Ziya çaylan";
// 'ya' index numarasını geri döner yani 2
console.log(
  `Search ile "ya" yı aradığımızda geri dönen değer ${str.search("ya")}`  // konsolda : Search ile "ya" yı aradığımızda geri dönen değer 2
);
```

**Slice - Metinden Parça Alma**
