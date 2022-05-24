# HTML ve CSS Dersleri

## Html Nedir?

Html hiper metin işaretleme dili (HyperText Markup Language) olaraktanımlanır. Yani web sayfalarında gördüklerimizin
iskelet yapısını oluşturmak için kullanılan metin işaretleme dilidir. Html bir programlama dili DEĞİLDİR...!

### Html Ne yapar ?

- Web sayfalarında gördüğümüz görsel, yazı ve videoların konumlanmasını sağlamak
- Konumlandırılan web sayfalarının tarayıcılar tarafından doğru bir şekilde görüntülenmesi için gerekli olan kuralları belirler.

### Html Tarihi Hakkında Kısaca

Html CERN de araştırmacıların dokümanlarını birbirleriyle paylaşabilmeleri için bir sistem kullanmak amaıyla çıkartılmış
1990 yılında da metin işaretleme dili olarak geliştirilmiştir.
Geliştirici : W3C ve WHATWG (Kaynak: wikipedia)

#### Html Yapısı

![Html sayfa yapısı](https://raw.githubusercontent.com/ziyacaylan/Html-Css-Dersleri/main/assets/img/html-nedir.jpg?token=GHSAT0AAAAAABPUBL2CKI7YHRAKIOWWAX32YUMXNOQ)

### HTML Etiketi Nedir?

Html etiketi, dosya içeriğinin HTML dilinde yazıldığını tarayıcımıza bildirir. Etiket yapısı aşağıdaki gibidir

&#60; etiket &#62;

Yazı yazarken belirli kulrallara ve standartlara uyarak yazılarımızı hazırlamamız gerekir.

### En Çok Kullanılan Html Etiketleri Nelerdir?

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

### BODY Etiketi

Web sayfamızda görünmesini istediğimiz bütün içeriği bu etiket altında yazarız.

### H Etiketleri

Bu etiketler başlık etiketleridir. ![Linkteki](/basliklar.html) örnekte başlık etiketlerini inceleyebilirsiniz.
H etiketleri blok etiketlerdir ve satırı tamamen kaplar. (İleride ele alınacaktır.)

- &#60;h1&#62;
- &#60;h2&#62;
- &#60;h3&#62;
- &#60;h4&#62;
- &#60;h5&#62;
- &#60;h6&#62;

### P Etiketi

&#60;p&#62; paragraf etiketidir. ![Linkteki](/html-etiketler.html) örnekte p etiket örneğini inceleyebilirsiniz. P etiketleri blok etiketlerdir ve satırı
tamamen kaplar. (İleride ele alınacaktır.) HTML otomatik olarak Paragraf etiketinin öncesine ve sonrasına satır atlatır.

### BR Etiketi

&#60;br &#47;&#62; etiketi satır atlatma etiketidir. Atlamakistediğimiz satır sayısı kadar bu etiketi kullanabiliriz.
![Linkteki](/html-etiketler.html) örnekten incelenebilir.

## HTML attribute Nedir?

HTML özellikleri, öğenin davranışını kontrol etmek için açılış etiketinde kullanılan özel kelimelerdir. HTML özellikleri, bir HTML öğesi türünün değiştiricisidir. Bir öznitelik, bir öğe türünün varsayılan işlevselliğini değiştirir veya bunlar olmadan düzgün çalışamayan belirli öğe türlerine işlevsellik sağlar (Kaynak: wikipedia)

### A Etiketi

&#60;a&#62; etiket ile sayfalar linklenebilir. En önemli attribute ü (özelliği) **href** özelliğidir. Etiket içerisindeki yazılan yazı
sayfamızda görünecek href içerisine ise tıklandığında gidilecek olan URL adresi yazılmaktadır.![Linkteki](/html-etiketler.html) örnekte a
etiket örneğini inceleyebilirsiniz.

### STRONG ve B Etiketi Etiketleri

&#60;strong&#62; etiketi arama motorlarına metinin önemli olduğunu bildirmek için kullanılır.Kullanıldığında metini kalın yapar. B etiketi ise
sadece metini kalın yapar. ![Linkteki](/html-etiketler.html) örnekte etiketler kullanılmıştır.

### Button Etiketi

&#60;button&#62; etiketi buton oluşturmak için kullanılır. Buton üzerindeki yazmasını istediğimiz içeriği etiketin içerisine yazarız.

### Script Etiketi

&#60;script&#62; etiketi JavaScript kodlarını HTML içerisine yazabilmemizi sağlar.

### img Etiketi

Sayfamıza resim eklemek için &#60;img&#62; etiketini kullanırız. &#60;img src="resim_adi.jpg" alt="açıklama yazısı" &#47; &#62;
![Bakızın örnek](/html-etiketler.html) örnekte etiketler kullanılmıştır.

### iframe Etiketi

Bu etiket genelde başka sayfa içerisindeki belge/video v.s. kendi sayfamızda göstermek için kullanırız. Örneğin youtube dan sayfamıza
bir video eklemek istediğimizde bu etiketi kullanarak yapabiliriz. ![Bakızın örnek](/html-etiketler.html) örnekte etiketler kullanılmıştır.

### Yorum Satırı

Html sayfası içerisinde yorum satırı aşağıdaki gibi oluşturulur.
&#60;&#33;&#45;&#45; (Buraya yorumu yazınız) &#45;&#45;&#62;
![Linkte bolca yorum satırı kullanılmıştır.](/html-etiketler.html)

### Form Etiketi

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

### Input Etiketi

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
![Inputs](/assets/img/html-inputs.jpg)

### Link Etiketi

&#60;link&#62; etiketi sayfamızın görünmesini istemediğimiz kodları kısmında kullanırız. Bu etiket HTML dokümanımıza farklı
kaynaklardan farklı dosyalardahil etmemizi sağlar. Örneğin:
&#60;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"&#62;&#60;&#45;script&#62;
&#60;link rel="stylesheet" href="styles.css"&#62;

### Style Etiketi

Bu etikette sayfamızın head kısmında tanımlanır. Css kodlarının sayfamıza uygulanmasına olanak tanımaktadır.
&#60;style&#62;&#60;&#45;style&#62;

### Meta Etiketleri

Mete, genelde bilgisayar bilimleri dünyasında verilerin verisi olarak tanımlanır. Yanı bir veri ile ilgili verileri içermektedir.
Örneğin:
&#60;meta charset="UTF-8"&#62;
![Buradaki sayfa yapısını inceleyiniz.](/forms%26inputs.html)

### Title Etiketi

Sayfamızızn head kısmında tanımladığımız sayfamızın başlığıdır ve kullandığımız browser sekmesini isimlendirir.
![Sayfanın başlığını inceleyiniz.](/forms%26inputs.html)
