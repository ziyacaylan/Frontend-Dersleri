# <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" />

# İÇİNDEKİLER

1.  [HTML Dersleri](./html.md/#html-dersleri)  
    1.1. [Html nedir?](./html.md/#11-html-nedir)  
    1.2. [Html ne yapar?](./html.md/#12-html-ne-yapar)  
     1.3. [Html Tarihi Hakkında Kısaca](./html.md/#13-html-tarihi-hakkında-kısaca)  
     1.4. [Html yapısı](./html.md/#14-html-yapısı)  
     1.5. [Html etiketi nedir](./html.md/#15-html-etiketi-nedir)  
     1.6. [En çok kullanılan html etiketleri nelerdir](./html.md/#16-en-çok-kullanılan-html-etiketleri-nelerdir)  
     1.7. [Body etiketi](./html.md/#17-body-etiketi)  
     1.8. ['h' etiketleri](./html.md/#18-h-etiketleri)  
     1.9. ['p' etiketi](./html.md/#19-p-etiketi)  
     1.10. ['br' etiketi](./html.md/#110-br-etiketi)  
     1.11. [Html attribute nedir](./html.md/#111-html-attribute-nedir)  
     1.12. ['a' etiketi](./html.md/#112-a-etiketi)  
     1.13. ['strong' ve 'b' etiketi etiketleri](./html.md/#113-strong-ve-b-etiketi-etiketleri)  
     1.14. ['button' etiketi](./html.md/#114-button-etiketi)  
    1.15. ['script' etiketi](./html.md/#115-script-etiketi)  
    1.16. ['img' etiketi](./html.md/#116-img-etiketi)  
    1.17. ['iframe' etiketi](./html.md/#117-iframe-etiketi)  
    1.18. [Yorum satırı](./html.md/#118-yorum-satırı)  
    1.19. ['form' etiketi](./html.md/#119-form-etiketi)  
    1.20. ['input' etiketi](./html.md/#120-input-etiketi)  
    1.21. ['link' etiketi](./html.md/#121-link-etiketi)  
    1.22. ['style' etiketi](./html.md/#122-style-etiketi)  
    1.23. ['meta' etiketleri](./html.md/#123-meta-etiketleri)  
    1.24. ['title' tiketi](./html.md/#124-title-etiketi)  
    1.25. [Listeleme etiketleri](./html.md/#125-listeleme-etiketleri)  
    1.26. [Sıralı listeler](./html.md/#126-sıralı-listeler)  
    1.27. [Blog elementler ve inline elementler](./html.md/#127-blog-elementler-ve-inline-elementler)  
    1.28. [Semantic anlamlandırılmış html etiketleri](./html.md/#128-semantic-anlamlandırılmış-html-etiketleri)  
    1.29. [Kaynaklar](./html.md/#129-kaynaklar)

# 1.HTML Dersleri

## 1.1-Html Nedir?

Html hiper metin işaretleme dili (HyperText Markup Language) olaraktanımlanır. Yani web sayfalarında gördüklerimizin
iskelet yapısını oluşturmak için kullanılan metin işaretleme dilidir. Html bir programlama dili DEĞİLDİR...!

### 1.2-Html Ne yapar ?

- Web sayfalarında gördüğümüz görsel, yazı ve videoların konumlanmasını sağlamak
- Konumlandırılan web sayfalarının tarayıcılar tarafından doğru bir şekilde görüntülenmesi için gerekli olan kuralları belirler.

### 1.3-Html Tarihi Hakkında Kısaca

Html CERN de araştırmacıların dokümanlarını birbirleriyle paylaşabilmeleri için bir sistem kullanmak amaıyla çıkartılmış
1990 yılında da metin işaretleme dili olarak geliştirilmiştir.
Geliştirici : W3C ve WHATWG (Kaynak: wikipedia)

#### 1.4-Html Yapısı

![Html sayfa yapısı](/HTML-Dersleri/assets/img/html-nedir.jpg)

### 1.5-HTML Etiketi Nedir?

Html etiketi, dosya içeriğinin HTML dilinde yazıldığını tarayıcımıza bildirir. Etiket yapısı aşağıdaki gibidir

&#60; etiket &#62;

Yazı yazarken belirli kulrallara ve standartlara uyarak yazılarımızı hazırlamamız gerekir.

### 1.6-En Çok Kullanılan Html Etiketleri Nelerdir?

Html etiketi, dosya içeriğinin html dilinde yazıldığını tarayıcımıza bildirir. Etiketler küçüktür ve büyüktür işaretlerinin
arasına yazılarak başlar ve içeriği yazdıktan sonra etiketi kapatmamız gerekir.(&#60;html&#62; &#60;&#47;html&#62; ) bu etiket altına
mutlaka head ve body etiketlerinin olması gerekir

- &#60;html&#62;
- &#60;head&#62;
- &#60;body&#62;

### HEAD Etiketi

&#60;head&#62; etiketi site ziyaretçieri tarafından görülmesi gerekmekyen kodları içerir. Bu etiket altına yazılan kodlar genelde arama motorları
içindir. Bütün etiketleri bu etiket altında kullanamayız.Bu etiket altına aşağıdaki etiketleri kullanabiliriz.

- &#60;title&#62;
- &#60;meta&#62;
- &#60;style&#62;
- &#60;script&#62;
- &#60;noscript&#62;
- &#60;link&#62;
- &#60;base&#62;

### 1.7-BODY Etiketi

Web sayfamızda görünmesini istediğimiz bütün içeriği bu etiket altında yazarız.

### 1.8-H Etiketleri

Bu etiketler başlık etiketleridir. [Linkteki](/HTML-Dersleri/basliklar.html) örnekte başlık etiketlerini inceleyebilirsiniz.
H etiketleri blok etiketlerdir ve satırı tamamen kaplar. (İleride ele alınacaktır.)

- &#60;h1&#62;
- &#60;h2&#62;
- &#60;h3&#62;
- &#60;h4&#62;
- &#60;h5&#62;
- &#60;h6&#62;

### 1.9-P Etiketi

&#60;p&#62; paragraf etiketidir. [Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte p etiket örneğini inceleyebilirsiniz. P etiketleri blok etiketlerdir ve satırı
tamamen kaplar. (İleride ele alınacaktır.) HTML otomatik olarak Paragraf etiketinin öncesine ve sonrasına satır atlatır.

### 1.10-BR Etiketi

&#60;br &#47;&#62; etiketi satır atlatma etiketidir. Atlamakistediğimiz satır sayısı kadar bu etiketi kullanabiliriz.
[Linkteki](/HTML-Dersleri/html-etiketler.html) örnekten incelenebilir.

### 1.11-HTML attribute Nedir?

HTML özellikleri, öğenin davranışını kontrol etmek için açılış etiketinde kullanılan özel kelimelerdir. HTML özellikleri, bir HTML öğesi türünün değiştiricisidir. Bir öznitelik, bir öğe türünün varsayılan işlevselliğini değiştirir veya bunlar olmadan düzgün çalışamayan belirli öğe türlerine işlevsellik sağlar (Kaynak: wikipedia)

### 1.12-A Etiketi

&#60;a&#62; etiket ile sayfalar linklenebilir. En önemli attribute ü (özelliği) **href** özelliğidir. Etiket içerisindeki yazılan yazı
sayfamızda görünecek href içerisine ise tıklandığında gidilecek olan URL adresi yazılmaktadır.[Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte a
etiket örneğini inceleyebilirsiniz.

### 1.13-STRONG ve B Etiketi Etiketleri

&#60;strong&#62; etiketi arama motorlarına metinin önemli olduğunu bildirmek için kullanılır.Kullanıldığında metini kalın yapar. B etiketi ise
sadece metini kalın yapar. [Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte etiketler kullanılmıştır.

### 1.14-Button Etiketi

&#60;button&#62; etiketi buton oluşturmak için kullanılır. Buton üzerindeki yazmasını istediğimiz içeriği etiketin içerisine yazarız.

### 1.15-Script Etiketi

&#60;script&#62; etiketi JavaScript kodlarını HTML içerisine yazabilmemizi sağlar.

### 1.16-img Etiketi

Sayfamıza resim eklemek için &#60;img&#62; etiketini kullanırız. &#60;img src="resim_adi.jpg" alt="açıklama yazısı" &#47; &#62;
([Bakızın örnek](/HTML-Dersleri/html-etiketler.html)) örnekte etiketler kullanılmıştır.

### 1.17-iframe Etiketi

Bu etiket genelde başka sayfa içerisindeki belge/video v.s. kendi sayfamızda göstermek için kullanırız. Örneğin youtube dan sayfamıza
bir video eklemek istediğimizde bu etiketi kullanarak yapabiliriz. ([Bakızın örnek](/HTML-Dersleri/html-etiketler.html)) örnekte etiketler kullanılmıştır.

### 1.18-Yorum Satırı

Html sayfası içerisinde yorum satırı aşağıdaki gibi oluşturulur.
&#60;&#33;&#45;&#45; (Buraya yorumu yazınız) &#45;&#45;&#62;
[Linkte bolca yorum satırı kullanılmıştır.](/HTML-Dersleri/html-etiketler.html)

### 1.19-Form Etiketi

&#60;form&#62; web sayfalarında kullanıcıdan bilgi almak için kullanılan ve alınan bu bilgilerin işlenmek üzere arka tarafa
(sunucuya) gönderilmesini sağlar.Formlar aşağıdaki etiketleri içerebilir.

- &#60;input&#62;
- &#60;textarea&#62;
- &#60;button&#62;
- &#60;select&#62;
- &#60;option&#62;
- &#60;optgroup&#62;
- &#60;fieldset&#62;
- &#60;label&#62;
- &#60;output&#62;

### 1.20-Input Etiketi

&#60;input&#62; etiketi hmtl sayfalarında kullanıcıdan veri almak için kullanılmaktadır.
Inputlar aşağıdaki gibidir.

- &#60;input type="button"&#62;
- &#60;input type="checkbox"&#62;
- &#60;input type="color"&#62;
- &#60;input type="date"&#62;
- &#60;input type="datetime-local"&#62;
- &#60;input type="email"&#62;
- &#60;input type="file"&#62;
- &#60;input type="hidden"&#62;
- &#60;input type="image"&#62;
- &#60;input type="month"&#62;
- &#60;input type="number"&#62;
- &#60;input type="password"&#62;
- &#60;input type="radio"&#62;
- &#60;input type="range"&#62;
- &#60;input type="reset"&#62;
- &#60;input type="search"&#62;
- &#60;input type="submit"&#62;
- &#60;input type="tel"&#62;
- &#60;input type="text"&#62; (default value)
- &#60;input type="time"&#62;
- &#60;input type="url"&#62;
- &#60;input type="week"&#62;

Aşağıdaki resimde input tipleri gösterilmiştir. İnceleyiniz.
![Inputs](/HTML-Dersleri/assets/img/html-inputs.jpg)

### 1.21-Link Etiketi

&#60;link&#62; etiketi sayfamızın görünmesini istemediğimiz kodları kısmında kullanırız. Bu etiket HTML dokümanımıza farklı
kaynaklardan farklı dosyalardahil etmemizi sağlar. Örneğin:
&#60;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"&#62;&#60;&#45;script&#62;
&#60;link rel="stylesheet" href="styles.css"&#62;

### 1.22-Style Etiketi

Bu etikette sayfamızın head kısmında tanımlanır. Css kodlarının sayfamıza uygulanmasına olanak tanımaktadır.
&#60;style&#62;&#60;&#45;style&#62;

### 1.23-Meta Etiketleri

Mete, genelde bilgisayar bilimleri dünyasında verilerin verisi olarak tanımlanır. Yanı bir veri ile ilgili verileri içermektedir.
Örneğin:
&#60;meta charset="UTF-8"&#62;
[Buradaki sayfa yapısını inceleyiniz.](/HTML-Dersleri/forms%26inputs.html)

### 1.24-Title Etiketi

Sayfamızızn head kısmında tanımladığımız sayfamızın başlığıdır ve kullandığımız browser sekmesini isimlendirir.
[Sayfanın başlığını inceleyiniz.](/HTML-Dersleri/forms%26inputs.html)

### 1.25-Listeleme Etiketleri

Bu etiketler iki çeşittir.

- Sıralı Listeler (ol)
- Sırasız Listeler (ul)

### 1.26-Sıralı Listeler

Sıralı listelerde sıra numarası vermek içi ardışık liste numaraları kullanılır. Yapısı aşağıdaki gibidir.
![Sıralı Liste](/HTML-Dersleri/assets/img/sirali-liste.jpg)
![Sırasız Liste](/HTML-Dersleri/assets/img/sirasiz-liste.jpg)
Ayrıca [Linkteki sayfada örneklenmiştir.](/HTML-Dersleri/lists.html)

### 1.27-Blog Elementler ve Inline Elementler

Html kodlarımızı incelediğimizde kullandığımız etiketlerin bazıları kullandığı satırın tamamını kapladığını bazılarının da sadece kapladığı alan kadar yer kapladığını görürüz. Kullanıldığı satırın tamamını kaplayan elementlere **blog element** sadece kullanıldığı satırda işal ettiği alan kadar yer kaplayan etiketlere ise **inline element** denir.
Hangi etiketler inline hangileri blog etiket olduğunu [bu linkten inceleyebilirsiniz.](https://htmlreference.io)

## 1.28-Semantic (Anlamlandırılmış) Html Etiketleri

Semantic kelimesi anlamlandırma olarak tanımlanabilir. Semantic etikeler, herhangi bir anlamı olan etiketler olarak ifade edilir. Yani hem tarayıcı hem de geliştirici için ne anlama geldiği açıkça bilinir. &#60;div&#62; ve &#60;span&#62; semantik etiketler değildir ve bir anlam ifade etmezler. Ancak aşağıdaki etiketler en çok kullanılan semantic etiketlerdir.
[Semantic Etiket Kullanım Örnek Sayfayı İnceleyiniz](/HTML-Dersleri/semantic.html)

- &#60;article&#62;
- &#60;aside&#62;
- &#60;details&#62;
- &#60;figcaption&#62;
- &#60;figure&#62;
- &#60;footer&#62;
- &#60;header&#62;
- &#60;main&#62;
- &#60;mark&#62;
- &#60;nav&#62;
- &#60;section&#62;
- &#60;summary&#62;
- &#60;time&#62;

## 1.29-Kaynaklar

[https://www.w3schools.com](https://www.w3schools.com)

[www.patika.dev](www.patika.dev)
