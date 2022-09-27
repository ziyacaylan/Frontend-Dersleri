![regex-img](https://regexone.com/cs/images/favicon.png)

# Düzenli ifadeler (Regular Expressions | #Regex) Nedir? Nasıl Kullanılır? #JavaScript ile Regex

## Regex Nedir ?

Düzenli olmayan ifadeleri düzenli hale getirmeye yarayan yapıya **regex** denir. _Regex_ bütün programlama dillerinde aynıdır. Yani hangi programlama dilinde kullanırsak kullanalım aynı yapıdadır. Bununla birlikte veri tabanı sistemlerinde de kullanılmaktadır. Sadece farklılık işlenişi yada işleyişi dile göre değişiklik göstermektedir.  
Düzenli ifadeler arama kriteri oluşturmak için kullanılan özel ifadelerdir.
Metin veri türü içerisinde arama yapmak için düzenli ifadeler kullanılır.
Düzenli ifadeler bir karakterden oluşacağı gibi daha karmaşık karakterlerden oluşabilir.  
Düzenli ifadeler metin veri türü içinde arama yapma ve değiştirme işlemleri için kullanılır.

## Regex' e Nede İhtiyacımız Var ?

Düzensiz olan ifadeleri düzenli hale getirmek için regex'e ihtiyacımız vadır. Peki ne demek bu ? . Şöyle örnekler ile açıklamaya çalışalım. Diyelimki elimizde kullanıcıdan veri aldığımız bir formumuz var; aldığımız veriler örneğin bir telefon numarası, bir ulr bilgisi veya bir email bilgisi olasun. Bunların gerçekten bir email adresi mi, bir telefon numarası mı ya da girilen url gerçekten bir url adresi mi kontrolünün sağlanması kısmında regex bizim işlerimizi oldukça kolaylaştırmaktadır. Ya da bir telefon numarasının alan kodunu, operatörün kendisini ve telefon numarasını ayrı ayrı alarak verilerinin kullanmak istiyor olabiliriz.

## Nasıl Kullanılır?

```
/ifade/nitelik;
```

Örneğin:

```
<script>
  let metin = "Merhaba ben YuSuF";
  let sonuc = metin.search(/yusuf/i); ---> yusuf->aranacak kelime, metin-> içerisinde arama yapılan metin, i-> büyük-küçük harf duyarsızlığı
  alert(sonuc);
</script>
```

## Regex Flags

```
/g match All (Metin veri türü içerisinde aranan tüm kelimeler üzerinde işlem yapar.)
/m multiline (	Çok satırlı arama yapar.)
/i case sensitive (	Küçük büyük harf duyarsız arama yapar.)
/u unicode
```

**Anahtar NOT:** Bir regex cümlesi _/_ ile başlar ve _/_ ile biter. Son _/_' dan sonra gelen flag'lerdir.

## Regex Notasyonları Nelerdir?

Niceleyiciler arama niceliğini belirtir.

- ### İlk notasyonumuz **+**

  (one or more) Bir tane veya şarta uyan birden fazla karakteri tek bir ifade olarak seçer.

- ### Opsiyonel karakter **?**

  Opsiyonel olan karakterleri işaretlemekiçin kullanılır.

- ### (zero or more) **\*** notasyonu.
  **+** ve **?** birleşimidir. Opsiyonel olarak mümkün olan eşlesmeyi yine birleşim olarak alir.
- ### . (nokta) Notasyonu
  . (nokta) Notasyonu öncesindeki ya da sonrasindaki yeni satır hariç herhangi bir karakteri temsil eder.
- ### \w Notasyonu
  Boşluk olmayan tüm karakterleri teker teker seçer.
- ### \W negatif versiyon (\w)
  \w' nin tersidir. Sadece boşlukları teker teker seçer. Alphanumeric ve underscore hariç boşlukları
- ### \s Notasyonu
  Boşlukları seçer
- ### \S Negatif versiyon (\s)
  \s' in tersidir. Boşluklar harici tüm karakterleri teker teker seçer.
- ### \d Sayılar
  Sayıları seçer
- ### \D Sayı olmayanlar
  Sayı olmayan karakterleri seçer.

## Regex {} [] () . + ? \* operatörleri

### Aralık Belirleme

{x,y} **x** karakterden oluşsan bir kelimeyi şeçer. **y** belirtilmek zorunda değildir. Belirtilir ise en az **y** karakter kadar olan ve x karakter uzunluktaki gruplar halinde seçer.

### Karakter Gruplama

Aranacak kelimede karakterleri grup halinde belirtebiliriz. Köşeli parantezler içerisinde karakterler belirtili ve dışında devamı olan karakterler yazılır.

```
fat cat hat tat nat Fat Cat 4at 5at
```

Yukarıdaki kelime grubunda

```
[a-tA-T0-5]at // karakter grubundan sonra at ekle ve arama yap
```

### Aralık Belirleme

```
[a-z] [A-Z] [a-zA-Z] [0-9] [a-f]   // aralık belirleme
```

### Gruplama İşlemi (...)

Sadece 1 karakter degil birden fazla karakteri grup şeklinde almayi saglar (t|T)he başındaki karakter t ya da T olabilir sonu he ile biter

### ^ Satır başındaki karakteri belirleme

Satır başındaki karakteribelirlememizi sağlar aşağıdaki örnekte Sokak yada sokak seçimi yapılır.

```
^[Ss]okak
```

### $ Satır sonundaki karakteri belirleme

Satır sonundaki karakteri belirlememizi sağlar

```
eleman. ---> / \.$ /gi
```

### Negatif Lookahead | Seçme - ?!

Belirlediğimiz karakter ile devam etmeyen ifadeleri seçer.

```
/(.?=r)/gm //--> devamında r olan herşeyi seç (pozitifi)
```

```
/(.?!r)/gm //--> devamında r olmayan herşeyi seç (negatifi)
```

_Örnek:_

```
src="url" ----> /...(?=")gm  --> 3 karakter al sonunda tırnak olsun  = rc ve url yi alır.
```

### Look Behind

Öncesinde belirlediğimiz karakter ya da karakter gruplarıyla devam eden yada devam etmeyen ifadeleri seçmemizi sağlar

_Örnek:_

```
(?<=un).   //---> öncesinde un ile başlayan karakterleri seçer
```

```
src="https//www.google.com.tr"
```

Yukarıdaki metinden url'li alma

```
/(?<=src")(.*)(?=")/gm      ---> https//www.google.com.tr
```

**KAYNAKLAR**

- https://regexone.com/
- Youtube --> kablosuzkedi
- https://github.com/gkandemi/regex
- Bolca internet
