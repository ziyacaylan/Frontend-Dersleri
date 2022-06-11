<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />

# HTML Dersleri

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

![Html sayfa yapısı](/HTML-Dersleri/assets/img/html-nedir.jpg)

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

Bu etiketler başlık etiketleridir. [Linkteki](/HTML-Dersleri/basliklar.html) örnekte başlık etiketlerini inceleyebilirsiniz.
H etiketleri blok etiketlerdir ve satırı tamamen kaplar. (İleride ele alınacaktır.)

+ &#60;h1&#62;
+ &#60;h2&#62;
+ &#60;h3&#62;
+ &#60;h4&#62;
+ &#60;h5&#62;
+ &#60;h6&#62;

### P Etiketi

&#60;p&#62; paragraf etiketidir. [Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte p etiket örneğini inceleyebilirsiniz. P etiketleri blok etiketlerdir ve satırı
tamamen kaplar. (İleride ele alınacaktır.) HTML otomatik olarak Paragraf etiketinin öncesine ve sonrasına satır atlatır.

### BR Etiketi

&#60;br &#47;&#62; etiketi satır atlatma etiketidir. Atlamakistediğimiz satır sayısı kadar bu etiketi kullanabiliriz.
[Linkteki](/HTML-Dersleri/html-etiketler.html) örnekten incelenebilir.

## HTML attribute Nedir?

HTML özellikleri, öğenin davranışını kontrol etmek için açılış etiketinde kullanılan özel kelimelerdir. HTML özellikleri, bir HTML öğesi türünün değiştiricisidir. Bir öznitelik, bir öğe türünün varsayılan işlevselliğini değiştirir veya bunlar olmadan düzgün çalışamayan belirli öğe türlerine işlevsellik sağlar (Kaynak: wikipedia)

### A Etiketi

&#60;a&#62; etiket ile sayfalar linklenebilir. En önemli attribute ü (özelliği) **href** özelliğidir. Etiket içerisindeki yazılan yazı
sayfamızda görünecek href içerisine ise tıklandığında gidilecek olan URL adresi yazılmaktadır.[Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte a
etiket örneğini inceleyebilirsiniz.

### STRONG ve B Etiketi Etiketleri

&#60;strong&#62; etiketi arama motorlarına metinin önemli olduğunu bildirmek için kullanılır.Kullanıldığında metini kalın yapar. B etiketi ise
sadece metini kalın yapar. [Linkteki](/HTML-Dersleri/html-etiketler.html) örnekte etiketler kullanılmıştır.

### Button Etiketi

&#60;button&#62; etiketi buton oluşturmak için kullanılır. Buton üzerindeki yazmasını istediğimiz içeriği etiketin içerisine yazarız.

### Script Etiketi

&#60;script&#62; etiketi JavaScript kodlarını HTML içerisine yazabilmemizi sağlar.

### img Etiketi

Sayfamıza resim eklemek için &#60;img&#62; etiketini kullanırız. &#60;img src="resim_adi.jpg" alt="açıklama yazısı" &#47; &#62;
([Bakızın örnek](/HTML-Dersleri/html-etiketler.html)) örnekte etiketler kullanılmıştır.

### iframe Etiketi

Bu etiket genelde başka sayfa içerisindeki belge/video v.s. kendi sayfamızda göstermek için kullanırız. Örneğin youtube dan sayfamıza
bir video eklemek istediğimizde bu etiketi kullanarak yapabiliriz. ([Bakızın örnek](/HTML-Dersleri/html-etiketler.html)) örnekte etiketler kullanılmıştır.

### Yorum Satırı

Html sayfası içerisinde yorum satırı aşağıdaki gibi oluşturulur.
&#60;&#33;&#45;&#45; (Buraya yorumu yazınız) &#45;&#45;&#62;
[Linkte bolca yorum satırı kullanılmıştır.](/HTML-Dersleri/html-etiketler.html)

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
![Inputs](/HTML-Dersleri/assets/img/html-inputs.jpg)

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
[Buradaki sayfa yapısını inceleyiniz.](/HTML-Dersleri/forms%26inputs.html)

### Title Etiketi

Sayfamızızn head kısmında tanımladığımız sayfamızın başlığıdır ve kullandığımız browser sekmesini isimlendirir.
[Sayfanın başlığını inceleyiniz.](/HTML-Dersleri/forms%26inputs.html)

### Listeleme Etiketleri

Bu etiketler iki çeşittir.

- Sıralı Listeler (ol)
- Sırasız Listeler (ul)

#### Sıralı Listeler

Sıralı listelerde sıra numarası vermek içi ardışık liste numaraları kullanılır. Yapısı aşağıdaki gibidir.
![Sıralı Liste](/HTML-Dersleri/assets/img/sirali-liste.jpg)
![Sırasız Liste](/HTML-Dersleri/assets/img/sirasiz-liste.jpg)
Ayrıca [Linkteki sayfada örneklenmiştir.](/HTML-Dersleri/lists.html)

### Blog Elementler ve Inline Elementler

Html kodlarımızı incelediğimizde kullandığımız etiketlerin bazıları kullandığı satırın tamamını kapladığını bazılarının da sadece kapladığı alan kadar yer kapladığını görürüz. Kullanıldığı satırın tamamını kaplayan elementlere **blog element** sadece kullanıldığı satırda işal ettiği alan kadar yer kaplayan etiketlere ise **inline element** denir.
Hangi etiketler inline hangileri blog etiket olduğunu [bu linkten inceleyebilirsiniz.](https://htmlreference.io)

## Semantic (Anlamlandırılmış) Html Etiketleri

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

## Kaynaklar

[https://www.w3schools.com](https://www.w3schools.com)

[www.patika.dev](www.patika.dev)

# CSS Dersleri

## Css Nedir ?

Cascading Style Sheets (Basamaklanmış Stil Katmanları) web sayfaları şekillendirmek için kullanılan bir kodlama türüdür.
Css Kullanılarak html sayfalarının görünümlerini ve düzenlerini değiştirebiliriz. Bir web sitesinin bilgisayarda , telefonda
ya da tablet gibi mobil cihazlarda nasıl görüneceğini düzenleyebiliriz. **Css bir programlama dili değildir.**

### Css Nezaman Çıkmıştır?

Css 17-Aralık-1996 da World Wide Web Consortium tarafından geliştirilmiştir.

### CSS Syntax | Css Nasıl Kullanılır?

Html etiketlerinden herhangi birine bir css kodu uygulayacağımız zaman öncelikle o css kodunu seçiyor olmamız gerekmektedir. Yani
Css e html öğesini nasıl bulacağımızı söylememiz gerekmektedir. Bunu **selector** denen bir özellik ile yapabiliriz.
Resimde &#60;h1&#62; etiketine uygulanmış bir css syntax görülmektedir.
![h1 Css Uygulama](/CSS-Dersleri/assets/img/css-syntax.jpg)

## Css Selektörler :

Web sayfalarını oluştururken HTML elementlerine bazı stil özellikleri eklemek isteriz. Yazıların renklerini, font tiplerini, resimlerin büyüklük/küçüklük ayarlarını v.s. farklı şekillerde olmasını isteriz. Bunun için ise css kullanırız. Css yani stil özelliklerini HTML etiketlerine uygulayabilmek için önce bu etiketlere ulaşmamız (yani HTML sayfası içerisinde onu bulup seçmemiz) gerekir. İşte sayfa içerisinde istediğimiz etikete ulaşmak için **selektör**leri kullanırız. Şimdi bunları kısaca inceleyelim.

### Genel Seçici

Bu seçiciyi kullanarak bitin etiletlere CSS uygula demiş oluyoruz. Örneğin p seçicisini kullandığımızda sayfadaki bütün p leri seçmiş oluyoruz ve yazacağımız css kodu bütün p lere uygulanacaktır.

- Genel seçicilerde etiket ismi yazılır. Örneğin: h1,p,body, footer gibi
- - seçicisini kullanırsak bütün sayfaya ve herşeye css kodlarını uygulamış oluruz.
    ![class selekttör](/CSS-Dersleri/assets/img//general-selector.jpg)

### Class Kullanımı

Class seçicisi, HTML üzerinde aynı class’a sahip elemana ulaşmamızı sağlar.

- Class seçici CSS'de . ile belirtilir.
- Bir class’ı birden fazla HTML elementi için kullanabiliriz.
- Bir element birden fazla class a da sahip olabilir.
- Bir element kendini kapsayan (yani parent elementin/etiketin) stil özelliklerine sahip olur.  
  ![class selekttör](/CSS-Dersleri/assets/img/class-selector.jpg)

### id Kullanımı

ID seçici HTML elemanları içerisinde ayni id ye sahip olan elemana ulaşmamızı sağlar.

- CSS'de # işareti ile belirtilir.
- id seçicinin kullanım amacı olarak class lardan herhangi bir farkı yoktur denilerbilir. Ancak id seçicinin class seçiciden bazı farklılıkları vardır.
- Bir id sadece bir HTML etiketine verilebilir. Yani sayfada aynı id ye sahip sadece bir etiket bulunur.
  ![class selekttör](/CSS-Dersleri/assets/img/id-selector.jpg)

  ### Özellik Seçiciler (Attribute Selectors)

  - Bu seçiciler ile özelliğini belirttiğimiz elementlere CSS uygulayabiliriz.
  - Özelliğin içi boş olsa da element bundan etkilenecektir.
  - Özelliğe erişmek için yapmamız gereken &#91;attribute&#93; şeklinde yazmalıyız.

  * - Örnek : &#91;name&#93; özelliği name olan bütün elementler etkilenir.
  * - Örnek : .btn&#91;disabled&#93; classı btn olan ve niteliği(attribute) disabled olan butona CSS uygulanır.

  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-1.jpg)
  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-2.jpg)
  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-3.jpg)

### Grup Seçiciler (Group Selectors)

- Çoğunlukla etiketlere verilen Css özellikleri aynı yada benzer özellikleri bir arada toplamak ve kod tekrarını engellemek için kullanılır.
  Örnek : h1, h1,h3 &#123;color=red&#125; Burada sayfadaki bütün h1,h2 ve h3 lere parantez içerisindeki css özelliği uygulanmaktadır.

### Çocuk Seçiciler (Child Selectors)

- HTML kodlarını yazarken çoğu zaman elementleri iç içe yazarız. Böyle durumlarda bir element kendisini sarmalayan bir üst elementin çocuk (child)
  elementi olarak adlandırılır ve &#62; işareti ile gösterilir.
  Örnek : p &#62; span p altındaki span etiketi seçilir ve burada span etiketi child element olarak adlandırılır.
  div &#62; ul &#62;li&#35;first div altındaki ul listesi altındaki li child elementlerinden id si first olan li etiketine ulaştık.

### :hover

- Seçici ile işaretlenen etiketin üzerine mouse ile gelindiğinde CSS uygalanır ve mouse üzerinde değilken etki kaybolur.

### :active

- Mouse ile tıklandığında CSS uygulanır. Tıklama kaldırıldığında etki kaybolur

### :first-child

- İlk child etikete CSS uygulanır.

### :last-child

- Son child etikete CSS uygular.

### ::before

- Belirtilen etiketin önüne CSS uygular.

### ::after

- Belirtilen etiketin sonuna CSS uygular. Kullanımı ::before ile aynıdır.

### :: first-letter

- Blok seviyesinde bir etiketteki ilk harfe CSS uygular. <span> blok seviyesinde bir etiket olmadığından bu pseudo class uygulanamaz.

### :: first-line

- Blok seviyesinde bir etiketin ilk satırına CSS uygular.

### Css Hangi yöntemler ile yazabiliriz ?

- Inline (Etikete Özel) Css
- Internal (Aynı dosyada) Css
- External (css dosyasında) Css

### Inline Css :

Inline css kodu etikete özel css kodu olarak da tanımlayabiliriz.
Aşağıdaki örnek bir inline css kodu kullanılmıştır.
![Inline css](/CSS-Dersleri/assets/img/inline-css.jpg)

### Internal Css :

Internal CSS, stil kodlarının direk HTML dosyasının içinde &#60;head&#62; bölümünde kullanıldığı bir yöntemdir. &#60;head&#62; bölümünün içinde bir &#60;style&#62; etiketi açtıktan sonra içine gerekli CSS kodlarını yazabilirsiniz.
Aşağıdaki örnek bir internal css kodu kullanılmıştır.
![Internal css](/CSS-Dersleri/assets/img/internal-css.jpg)

### External Css :

External css ise html sayfamızdan bağımsız olarak bir css dosyası olarak bulunur ve html sayfamız içerisinde &#60;head&#62; kısmında bir link ile sayfamıza aşağıdaki resimde görüldiği gibi eklenir.
![External css](/CSS-Dersleri/assets/img/external-css.jpg)

## Bazı Css Komutlarını İnceleyelim:

### color

Metinimizin rengini değiştirmek için kullanırız.

### backgroung-color

Arka plan rengini değiştirmek için kullanılır.

### Font-family

Yazı fontumuzu belirleriz. Değişik yazı fontlarını kullanmak için internet üzerinde
bulunan metin font türlerini kullanabiliriz. En çok kullanılan Google Fonts örnek olarak verilebilir. ([Google Fonts: Browse Fonts](https://fonts.google.com))

- Sayfamızda tasarlarken herhangi bir font belirtmez isek tarayıcı varsayılanı ne ise onunla yazı fontları görüntülenir

### Font-size

Css de metin boyutunu ayarlar. Bir metin boyutu belirtilmez ise metinin normal boyutu tarayıcı default değerlerinde görüntülenir. Bu değer genelde tarayıcılarda 16 pikseldir. Css te bir çok geliştirici piksel yerine "px" yerine "em" kullanmaktadır. 1em, mevcut yazı tipi boyutuna eşittir. Tarayıcılarda varsayılan metin boyutu 16 pikseldir. Yani, 1em'in varsayılan boyutu 16 pikseldir.
[Örnek sayfayı inceleyiniz](/CSS-Dersleri/style.css)

## CSS Kutu Özellikleri (Margin, Padding, Widht, Height) :

Öncelikle kutu modelin ne anlama geldiğini çözmemiz ve bilmemiz gerekir. Bir HTML elementinin kutu modeli resim ile aşağıdaki gibi gösterilir.

![kutu-model](/CSS-Dersleri/assets/img/kutu-model.jpg)

- İçerik(Content) : Elentin içerdiği veridir. Örneğin yazı, resim...
- Padding : İçerik ile border arasındaki boşluktur.
- Border : Padding ile margin i ayıran sınırdır.
- Margin : Kutunun diğer kutularla arasındaki mesafeyi ayarlayan boşluktur.

Yukarıdaki kutu özellikleri dışında kutunun boy ve uzunluğunu ayarlayan widht ve height özellijkleri de vardır.

- width : Kutu modelimizin genişliğini ayarlar
- height : Kutu modelimizin yüksekliğini ayarlar

Yükseklik ve genişlik değerleri px, em veya % ile belirtilir. Örneğin : width : 50px; yada width : 1.25em; yada 50%

![padding-margin](/CSS-Dersleri/assets/img/margin-padding.jpg)

### Borders (Kenarlar):

- Bu css komutu ile elementimize bir kenarlık uygularız.
- [Örneği inceleyiniz](/CSS-Dersleri/borders.html). Border yani kenarlık vermeyi istersek kenar kenar istersek sadece istediğimiz kenarlara verebiliriz.

### Box-sizing:

- iç içe etiketlerde örneğin bir adet div içerisine bir h1 etiketi yada bir p etiketi yerleştirdiğimizde içetike etiketimiz yani child element parent elementin kapladığı alan kadar yer kaplamaktadır. Default olarak belirtmediğimizde box-sizing özelliği content-box olarak gelmektedir.
- Child elementimize box-sizing : content-box verdiğimizde ve ve width:100% yaptığımızda üzerine birde padding yada margin verir isek panrent element dışına taşacaktır.
  [Örneği inceleyiniz](/CSS-Dersleri/box-sizing.html)

### Display:

- display : none | inline | inline-blok | blok olarak özellikler alacaktır. Flex özelliği ise daha sonra ele alınacaktır.
- inline olarak bir elementi işaretlediğimizde element inline elemanın özelliklerine sahip olacaktır.
- inline elemanlara yüksekli ve genişlik değerleri etki etmemektedir. Yani vereceğimiz width ve height değerlerinin elemana uygalanmadığını gözlemleyebiliriz. padding verdiğimizde ise sadece sağdan ve soldan etki edeceğini gözlemleyebiliriz
- display: box olan bir elemanın bu özelliğini değiştirip display : inline yaptığımızda artık bu element de bir inline eleman gibi darvaranacaktır.
- Display:inline-blok Bu kod ile elemente verdiğimiz width ve height değerlerinin geçerli olduğunu dözlemleyebiliriz. Yani içerik kadar yer kaplamayacak bizim verdiğimiz width ve height değerleri geçerli olacaktır.
- display:block özelliği ise eleman bir blok eleman özelliklerine sahip olacaktır. Width ve height değerleri verilebilmektedir. Ancak genişlik satırın tamamını kaplayacak şekilde (100%) verilmemiş ise satırın geri kalanı boş kalacaktır. Diğer elementler yanyana gelmeyecektir.
- display:none özelliği ile eleman sayfa üzerinden kaybedilecek; görünmeyecektir. ve kapladığı alanda silinecektir. Yanındaki ya da alt altalar ise şayet kaybedilen elementin yeri kaydırılarak doldurulacaktır.

- [Örnekteteki kodları inceleyiniz.](/CSS-Dersleri/display.html)

### Visibility :

- visibility: hidden dersek element sayfa üerinden kaybolacak (gizlenecek) ancak sayfa üzerinde kapladığı alan kalacaktır.
- [Örnekteteki kodları inceleyiniz.](/CSS-Dersleri/visibility.html)

### Navbar :

- navbar sayfa üzerinde birçok yerde bulunabilir ve değişik elementler kullanılarak hazırlanabilir.
- [İnceleyiniz](/CSS-Dersleri/navbar.html) Örnekte sayfa üstünde kullanılmış ve düzenlenmiştir.
- İlerleyen konularda dahada farklı şekillerde düzenlemeler yapıalacaktır. Bo düzenleme öğrendiğimiz konular kadarıyla ele alınmıştır.

### Styling List :

- Listelere nasıl css uygulandığına ilişkin örneği inceleyiniz. [Bakınız örnek](/CSS-Dersleri/styling-list.html)

### Background Image :

-[Örneği inceleyininiz.](/CSS-Dersleri/background-image.html) Bu örnekte body içerisinde içeriğin sunulacağı kısıma arka plan resimi uygulanmıştır.

### Floating

Nesneleri sayfa üzerinde konumlandırmak için kullanılan bu komuta başlamadan önce blok eleman, inline ve inline-block elemanları ve özelliklerini kavramamız gerekir.

- Bir elemanı blok eleman olarak tanımladığımızda satırı olduğu gibi kaplamamktadır.
- İnline eleman ise içeriği kadar yer kaplayacaktır. İnline bir elemana genişlik yada yükseklin değeri uygulayamayız.
- İnline-block eleman ise inline eleman olup bir blok elemanmış gibi davranacak ve bir genişlik yada yükseklik değeri atayabiliriz.
- Blok elemanlara bir genişlik ve yükseklik değeri verdiğimizde alt alta geldiğini gözlemleriz.
- İnline ve inline-blok elemanlar ise içerikleri kadar yer kaplayacaklar ve satıra sığdıkları sürece yan yana geleceklerdir.
- Blok elemanlara ise text-align özelliği uygulanamamaktadır. Bu özellik inline yada inline-blok elemanlara uygulanabilir ve satır içerisinde haraket ettirilebilir.

[Örneği inceleyiniz.](/CSS-Dersleri/floating.html)
Sayfamızda bir örneğin parent bir elemana float özelliği kazandırdığımızda normal akışın bozulduğu gözlemlenebilir. Bunu da gözlemlemek için parent elemana bir background
rengi vererek gözlemleyebilirsiniz. Float uygulanan elemanlardan sonra gelen elemanların normal akışı içerisinde devam edebilmeleri için CLEAR uygulanması gerekmektedir.

- Uygulama [Float uygulanarak oluşturulmuş basit bir örnek](/CSS-Dersleri/floating-uygulama.html)

### Positions:

Position: static | relative | absolute | fixed | sticky

Sayfa içerisinde bir elementin position değerini belirtmediğimizde default static olarak gelir. Bu özellik ile bir elementin pozisyonunu belirleyebiliriz.

- position: relative olarak verdiğimizde elementin bulunduğu konuma gore top | bottom | left | right değerleri vererek elementi haraket ettiririz. Yani o anki konumuna göre normal akışı bozmadan haraket etirebiliriz. örneğin top:50px verdiğimizde tepeden 50px aşağı doğru haraket ettirilecektir. Eksi değer verdiğimizde ise ters yönde haraket edecektir. [Örneği inceleyiniz](/CSS-Dersleri/position.html)
- position: absolute olarak verdiğimizde ise verdiğimiz element normal akış içerisinden çıkacak ve parent elenti relative olan var ise o elente göre şayet parenti relative olan yok ise body e göre konum alacaktır.Bu durumda top | bottom | left | right değerleri verdiğimizde parent elementi yada body ye göre konum alacaktır. [Örneği inceleyiniz](/CSS-Dersleri/position.html)
- position:fixed özelliği vererek sayfa üzerinde istediğimiz bir elementi sabitleyebiliyoruz. Aynı zamanda z-index özelliği de verebiliyoruz. Örneğin navar kısmını sitemizin tepesinde sabit kalmasını, sayfamızı aşağı doğru kaydırsak bile navbar bölümümüzün sabit kalmasını sağlamak için position:fixed özelliğini kullanırız. [Örneği inceleyiniz.](/CSS-Dersleri/pisition-fixed.html)
- position:sticky özelliğini vererek absolute gibi elementin davranmasını sağlayabiliriz ancak absolute den farkı ise scroll için belirlediğimiz değere kaydırma ulaştığında fixed olacaktır. [Detayları görmek için örneği inceleyiniz](/CSS-Dersleri/pisition-sticky.html)

### Flexbox

Flexbox nedir? : Flexbox 2017 yılında css e eklenen yeni bir özelliktir. Amacı ise clasik css te kullanmış olduğumuz float, position, display gibi özelliklerin üzerine alternatif olarak çıkmıştır. Aşağıdaki resimi inceleyiniz. Resimdeki gibi bir sayfamızın olduğunu varsayalım. Mavi görünen kapsayıcı bir parent element ve içerisinde yer alan farklı özelliklere sahip etiketler (bu bir p etiketi, h etiketi, span etiketi yada bu bir div olabilir v.b.) olduğunu düşünelim. Bunları sayfa içerisinde istediğimiz konumlarda konumlandırabilmek flex özelliği sayesinde artık çok kolaydır. Bunun için ilk yapmamız gereken parent elenetin display özelliğini flex yapmak.
![how-to-use-flex](/CSS-Dersleri/assets/img/how-to-use-flex.jpg)

Bu özelliği kullanabilmek için:

- Pozisyonlarını ayarlamak istediğimiz elementlerin kapsayıcı elementin display özelliğini flex yapıyoruz. Bu işlem sonunda flex container içerisindeki her bir element; bu bir p etiketi yada bir div olsun farketmez bütün elementler bir flex item a çevrilir. Bu çevirme işleminden sonra elementleri istediğimiz şekilde haraket ettirebiliriz.
  ![flex-container](/CSS-Dersleri/assets/img/flex-container.jpg)

- Parent elementi flex olan kapsayıcı elementimiz içerisindeki elementlerin haraket için izleyecekleri eksenler aşağıdaki resimden inceleyiniz.
  ![flex-main-axis](/CSS-Dersleri/assets/img/flex-main-axis.jpg)

  Main axis : Default ta ufuk çizgisidir.
  cross axis : main ekseni dik kesen çizgidir.

  #### Parent flex Özellikleri:

1.  flex-direction : Parent elementimizin display özelliğini flex yaptığımızda filex-direction kodu ile içerideki elementlerimizi dört farklı şekilde sıralayabiliriz.
    Parent element içerisindeki elementlerimizi örneğin div olsun. Div elementleri blok elementlerdir. Parent elementimizi flex yaptığımızda parent içerisindeki div elemanlarının inline bir element gibi davrandıklarını ve içerik kadar yer kapladıklarını gözlemleyebilirsiniz. Yukarıdaki dizilim eksenini göz önünde bulundurduğumuzda dizilim için herhangi bir değer belirtmediğimizde elementler main axis üzerinde soldan başlayarak sağa doğru (from main-start to main-end) dizilirler.
    - display:flex yapmadan önce dizilim.
      ![before-flex](/CSS-Dersleri/assets/img/before-flex.jpg)
    - display:flex yaptıktan sonra dizilim.
      ![before-flex](/CSS-Dersleri/assets/img//after-flex.jpg)
      [Örneği inceleyiniz.](/CSS-Dersleri/flex-direction.html). Flex özelliğini kapatıp açarak dizilimi gözlemleyiniz.

flex-direction: row | row-reserve | column | column-reserve 2. flex-wrap : 3. justify-content : 4. align-items : 5. align-content :

- flex-direction: row yaptığımızda içerikteki elementlerin soldan sağa satır üzerinde dizileceklerdir. Belirtmediğimizde flex-direction özelliği default ta row olarak gelir.
- flex-direction: row-reserve : bu kod ile içeriklerimiz sağlan sola doğru sıralanacaktır.
- flex-direction: column : bu kod ile içeriklerimiz yukarıdan aşağıya doğru sıralanacaklardır.
- flex-direction: column-reserve : bu kod ile içeriklerimiz aşağıdan yukarıya doğru sıralanacaklardır.

2. flex-wrap : nowrap | wrap | wrap-reverse

   - flex-nowrap : Default olarak gelir. Sayfamız daralmaya başladığında içeriklerimiz sayfaya sığmayacaktır. flex-wrap ile sayfaya içeriklerimiz sığmadığında alt satıra geçeceklerdir. Default olarak gelen nowrap ile taşma esnasında alt satıra geçme sağlanmaz.
   - flex-wrap: wrap: kodumuzu wrap yaptığımızda ise sayfaya sığmayan elementimiz bir alt satıra geçerek görüntülenecektir. [Örneği inceleyiniz.](/CSS-Dersleri/flex-wrap.html)
   - flex-wrap: wrap-reverse bu kodumuz ile sıralama tersten yapılacaktır. [Örneği inceleyiniz.](/CSS-Dersleri/flex-wrap.html)

3. Flexbox Alignments: Elemanları yatayda hizalamak için justify-content, dikeyde hizalamak için ise align-items komutları kullanılır.
   ![flexbox-alignment](/CSS-Dersleri/assets/img/flexbox-alignments.jpg)

   - justify-content : flex-start | flex-end| center | space-between | space-around | space-evenly
     ![justify-content](/CSS-Dersleri/assets/img/justify-content.jpg)

     [Örneği inceleyiniz.](/CSS-Dersleri/flex-alignments.html)

   - align-items : flex-start | flex-end| center | stretch | baseline
     ![justify-content](/CSS-Dersleri/assets/img/align-items.jpg)

     [Örneği inceleyiniz.](/CSS-Dersleri/flex-alignments.html)

     - NOT : flex-direction özelliği defaultta row olarak gelmektedir. Bu özellik row iken elementleri yatayda hizalamak için justify-content dikeyde hizalamak için ise align-items komutu kullanılır.

     flex-direction: column olduğunda ise busefer yatayda hizalamak için align-items, dikeyde hizalamak için ise justify-content komutu kullanılmaktadır.
     ![flex-direction:column](/CSS-Dersleri/assets/img/flexbox-alignments-1.jpg)

     - align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
       ![flex-direction:column](/CSS-Dersleri/assets/img/ align-content.jpg)

     - gap: 10px;
       gap: 10px 20px; **_row-gap column gap_**
       row-gap: 10px;
       column-gap: 20px;

       Gap parent içerisinde yer alan elementlerimiz arasondaki mesafe için kullanılır. Çok kullanılmaz genelde margin ile çözülebilir ancak alternatif olarak sunulmuştur.

       ![gap](/CSS-Dersleri/assets/img/gap.jpg)

#### Flex Items Özellikleri:

1. align-self: auto | flex-start | flex-end | center | baseline | stretch;

   ![align-self](/CSS-Dersleri/assets/img/align-self.jpg)

2. flex-grow : 3 /_ default 0 _/ parent içerisinindeki elementlerden istediğimizin yada istediklerimizin kaplayacağı alanı değiştirmek için kullanırız. 1 tanesine sadece
   bu özelliği atarsak diğer elementler bir ekstra özellik belirtmedikçe içerik dar yer kaplar bu özelliği tatdığımız element ise geri kalan alanı kaplayacaktır. Birden fazla elemente verir ise bu sefer verdiğimiz oranlar çerçevesinde kapladıkları alan belirlenecektir.

   ![flex-grow](/CSS-Dersleri/assets/img/flex-grow.jpg)

3. flex-basis: Bu değeri atadiğimiz element sabit bir kapladığı alan olacaktır. Geri kana elementler ise içerik kadar yada ekstra bir özellik belirtilmişse; örneğin flex-grow
   gibi verilen özellik neticesinde alan kaplarlar.

4. flex-shrink : 0 /_default değer_/ bu değeri değiştirir örneğin 1 yaparsan, flex-basis : 200px olduğunu varsayalım. Bu durunda ilgili element sayfa daralmaya başladığında
   ve yer kalmadığında 200px altına inecektir. Default değeri değiştirmez ise element 200px altına inmeyecek dışarı taşacaktır.

**_NOT :_**

- flex : 0 0 200px; (flex : (flex-grow) (flex-shrink) (flex-basis)) şeklinde kısa kod olarak da yazabiliriz.
- flex : 25%; şeklinde elementlerin kaplayacağı alanı yüzde olarak da belirtebiliriz.

5. order: 0 /_default değer_/ bu değer ile elementin konumunu değiştirebiliriz. default 0 gelir ancak bunu değiştirip 1 yaparsak diğerleri ile oynamazsak element sona
   gidecektir. Eksi değer verir isek ise element en başta konumlanacaktır.

   ![flex-order](/CSS-Dersleri/assets/img/order.jpg)

   ### ÖRNEKLER

   Aşağıdaki linklerde flex kullanılarak tasarlanmaış örnekler mevcuttur.

   [Navbar Tasarımı](/CSS-Dersleri/Uygulama-flex/flex-navbar.html)

   [Site Layout Tasarımı](/CSS-Dersleri/Uygulama-flex/flex-layout.html)

   [Resim Galeri Tasarımı](/CSS-Dersleri/Uygulama-flex//flex-gallery.html)

   **_Proje (Otel Sitesi)_**

   [Resim Galeri Tasarımı](/CSS-Dersleri/Uygulama-flex/Hotel/index.html)

   ### Grid

   #### Css Grid Nedir\_?

   Grid web sayfalarında tasarımlarda kullanılmak üzere geliştirilmiştir. Bir web sayfasının şablonunu css farklı yöntemler ile oluşturulabilmektedir. Yukarıda incelediğimiz float, flex gibi yöntemler ile tasarımını yapacağımız şablunu oluşturubiliyoruz ancak; grid bunların arasında en kolay olanıdır. Örneğin sayfamızı bir tablo gibi düşünürsek,
   ![css_grid](/CSS-Dersleri/assets/img/grid.jpg)

   yukarıdaki resimde de gördüğümüz üzere sayfamız satır ve sütunlara bölerek içeriklerimizi bu satır ve sütunları istediğimiz şekilde birleştirerek sayfamızın tasarımını aşağıdaki resimde de görüldüğü gibi oluşturabiliriz.

   ![css_grid_page_design](/CSS-Dersleri/assets/img/grid_page_design.jpg)
