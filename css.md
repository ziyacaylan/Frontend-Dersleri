# <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" />

# 2-CSS Dersleri

## 2.1-Css Nedir ?

Cascading Style Sheets (Basamaklanmış Stil Katmanları) web sayfaları şekillendirmek için kullanılan bir kodlama türüdür.
Css Kullanılarak html sayfalarının görünümlerini ve düzenlerini değiştirebiliriz. Bir web sitesinin bilgisayarda , telefonda
ya da tablet gibi mobil cihazlarda nasıl görüneceğini düzenleyebiliriz. **Css bir programlama dili değildir.**

### 2.2-Css Nezaman Çıkmıştır?

Css 17-Aralık-1996 da World Wide Web Consortium tarafından geliştirilmiştir.

### 2.3-CSS Syntax | Css Nasıl Kullanılır?

Html etiketlerinden herhangi birine bir css kodu uygulayacağımız zaman öncelikle o css kodunu seçiyor olmamız gerekmektedir. Yani
Css e html öğesini nasıl bulacağımızı söylememiz gerekmektedir. Bunu **selector** denen bir özellik ile yapabiliriz.
Resimde &#60;h1&#62; etiketine uygulanmış bir css syntax görülmektedir.
![h1 Css Uygulama](/CSS-Dersleri/assets/img/css-syntax.jpg)

## 2.4-Css Selektörler :

Web sayfalarını oluştururken HTML elementlerine bazı stil özellikleri eklemek isteriz. Yazıların renklerini, font tiplerini, resimlerin büyüklük/küçüklük ayarlarını v.s. farklı şekillerde olmasını isteriz. Bunun için ise css kullanırız. Css yani stil özelliklerini HTML etiketlerine uygulayabilmek için önce bu etiketlere ulaşmamız (yani HTML sayfası içerisinde onu bulup seçmemiz) gerekir. İşte sayfa içerisinde istediğimiz etikete ulaşmak için **selektör**leri kullanırız. Şimdi bunları kısaca inceleyelim.

### 2.5-Genel Seçici

Bu seçiciyi kullanarak bitin etiletlere CSS uygula demiş oluyoruz. Örneğin p seçicisini kullandığımızda sayfadaki bütün p leri seçmiş oluyoruz ve yazacağımız css kodu bütün p lere uygulanacaktır.

- Genel seçicilerde etiket ismi yazılır. Örneğin: h1,p,body, footer gibi
- - seçicisini kullanırsak bütün sayfaya ve herşeye css kodlarını uygulamış oluruz.
    ![class selekttör](/CSS-Dersleri/assets/img//general-selector.jpg)

### 2.6-Class Kullanımı

Class seçicisi, HTML üzerinde aynı class’a sahip elemana ulaşmamızı sağlar.

- Class seçici CSS'de . ile belirtilir.
- Bir class’ı birden fazla HTML elementi için kullanabiliriz.
- Bir element birden fazla class a da sahip olabilir.
- Bir element kendini kapsayan (yani parent elementin/etiketin) stil özelliklerine sahip olur.  
  ![class selekttör](/CSS-Dersleri/assets/img/class-selector.jpg)

### 2.7-id Kullanımı

ID seçici HTML elemanları içerisinde ayni id ye sahip olan elemana ulaşmamızı sağlar.

- CSS'de # işareti ile belirtilir.
- id seçicinin kullanım amacı olarak class lardan herhangi bir farkı yoktur denilerbilir. Ancak id seçicinin class seçiciden bazı farklılıkları vardır.
- Bir id sadece bir HTML etiketine verilebilir. Yani sayfada aynı id ye sahip sadece bir etiket bulunur.
  ![class selekttör](/CSS-Dersleri/assets/img/id-selector.jpg)

  ### 2.8-Özellik Seçiciler (Attribute Selectors)

  - Bu seçiciler ile özelliğini belirttiğimiz elementlere CSS uygulayabiliriz.
  - Özelliğin içi boş olsa da element bundan etkilenecektir.
  - Özelliğe erişmek için yapmamız gereken &#91;attribute&#93; şeklinde yazmalıyız.

  * - Örnek : &#91;name&#93; özelliği name olan bütün elementler etkilenir.
  * - Örnek : .btn&#91;disabled&#93; classı btn olan ve niteliği(attribute) disabled olan butona CSS uygulanır.

  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-1.jpg)
  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-2.jpg)
  ![class selekttör](/CSS-Dersleri/assets/img/attribute-selectors-3.jpg)

### 2.9-Grup Seçiciler (Group Selectors)

- Çoğunlukla etiketlere verilen Css özellikleri aynı yada benzer özellikleri bir arada toplamak ve kod tekrarını engellemek için kullanılır.
  Örnek : h1, h1,h3 &#123;color=red&#125; Burada sayfadaki bütün h1,h2 ve h3 lere parantez içerisindeki css özelliği uygulanmaktadır.

### 2.10-Çocuk Seçiciler (Child Selectors)

- HTML kodlarını yazarken çoğu zaman elementleri iç içe yazarız. Böyle durumlarda bir element kendisini sarmalayan bir üst elementin çocuk (child)
  elementi olarak adlandırılır ve &#62; işareti ile gösterilir.
  Örnek : p &#62; span p altındaki span etiketi seçilir ve burada span etiketi child element olarak adlandırılır.
  div &#62; ul &#62;li&#35;first div altındaki ul listesi altındaki li child elementlerinden id si first olan li etiketine ulaştık.

### 2.11- :hover

- Seçici ile işaretlenen etiketin üzerine mouse ile gelindiğinde CSS uygalanır ve mouse üzerinde değilken etki kaybolur.

### 2.12- :active

- Mouse ile tıklandığında CSS uygulanır. Tıklama kaldırıldığında etki kaybolur

### 2.13- :first-child

- İlk child etikete CSS uygulanır.

### 2.14- :last-child

- Son child etikete CSS uygular.

### 2.15- ::before

- Belirtilen etiketin önüne CSS uygular.

### 2.16- ::after

- Belirtilen etiketin sonuna CSS uygular. Kullanımı ::before ile aynıdır.

### 2.17- :: first-letter

- Blok seviyesinde bir etiketteki ilk harfe CSS uygular. <span> blok seviyesinde bir etiket olmadığından bu pseudo class uygulanamaz.

### 2.18- :: first-line

- Blok seviyesinde bir etiketin ilk satırına CSS uygular.

### 2.19- Css Hangi yöntemler ile yazabiliriz ?

- Inline (Etikete Özel) Css
- Internal (Aynı dosyada) Css
- External (css dosyasında) Css

### 2.20- Inline Css :

Inline css kodu etikete özel css kodu olarak da tanımlayabiliriz.
Aşağıdaki örnek bir inline css kodu kullanılmıştır.
![Inline css](/CSS-Dersleri/assets/img/inline-css.jpg)

### 2.21- Internal Css :

Internal CSS, stil kodlarının direk HTML dosyasının içinde &#60;head&#62; bölümünde kullanıldığı bir yöntemdir. &#60;head&#62; bölümünün içinde bir &#60;style&#62; etiketi açtıktan sonra içine gerekli CSS kodlarını yazabilirsiniz.
Aşağıdaki örnek bir internal css kodu kullanılmıştır.
![Internal css](/CSS-Dersleri/assets/img/internal-css.jpg)

### 2.22- External Css :

External css ise html sayfamızdan bağımsız olarak bir css dosyası olarak bulunur ve html sayfamız içerisinde &#60;head&#62; kısmında bir link ile sayfamıza aşağıdaki resimde görüldiği gibi eklenir.
![External css](/CSS-Dersleri/assets/img/external-css.jpg)

## 2.23- Bazı Css Komutlarını İnceleyelim:

### 2.24- color

Metinimizin rengini değiştirmek için kullanırız.

### 2.25- backgroung-color

Arka plan rengini değiştirmek için kullanılır.

### 2.26- Font-family

Yazı fontumuzu belirleriz. Değişik yazı fontlarını kullanmak için internet üzerinde
bulunan metin font türlerini kullanabiliriz. En çok kullanılan Google Fonts örnek olarak verilebilir. ([Google Fonts: Browse Fonts](https://fonts.google.com))

- Sayfamızda tasarlarken herhangi bir font belirtmez isek tarayıcı varsayılanı ne ise onunla yazı fontları görüntülenir

### 2.27- Font-size

Css de metin boyutunu ayarlar. Bir metin boyutu belirtilmez ise metinin normal boyutu tarayıcı default değerlerinde görüntülenir. Bu değer genelde tarayıcılarda 16 pikseldir. Css te bir çok geliştirici piksel yerine "px" yerine "em" kullanmaktadır. 1em, mevcut yazı tipi boyutuna eşittir. Tarayıcılarda varsayılan metin boyutu 16 pikseldir. Yani, 1em'in varsayılan boyutu 16 pikseldir.
[Örnek sayfayı inceleyiniz](/CSS-Dersleri/style.css)

## 2.28- CSS Kutu Özellikleri (Margin, Padding, Widht, Height) :

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

### 2.29-Borders (Kenarlar):

- Bu css komutu ile elementimize bir kenarlık uygularız.
- [Örneği inceleyiniz](/CSS-Dersleri/borders.html). Border yani kenarlık vermeyi istersek kenar kenar istersek sadece istediğimiz kenarlara verebiliriz.

### 2.30-Box-sizing:

- iç içe etiketlerde örneğin bir adet div içerisine bir h1 etiketi yada bir p etiketi yerleştirdiğimizde içetike etiketimiz yani child element parent elementin kapladığı alan kadar yer kaplamaktadır. Default olarak belirtmediğimizde box-sizing özelliği content-box olarak gelmektedir.
- Child elementimize box-sizing : content-box verdiğimizde ve ve width:100% yaptığımızda üzerine birde padding yada margin verir isek panrent element dışına taşacaktır.
  [Örneği inceleyiniz](/CSS-Dersleri/box-sizing.html)

### 2.31-Display:

- display : none | inline | inline-blok | blok olarak özellikler alacaktır. Flex özelliği ise daha sonra ele alınacaktır.
- inline olarak bir elementi işaretlediğimizde element inline elemanın özelliklerine sahip olacaktır.
- inline elemanlara yüksekli ve genişlik değerleri etki etmemektedir. Yani vereceğimiz width ve height değerlerinin elemana uygalanmadığını gözlemleyebiliriz. padding verdiğimizde ise sadece sağdan ve soldan etki edeceğini gözlemleyebiliriz
- display: box olan bir elemanın bu özelliğini değiştirip display : inline yaptığımızda artık bu element de bir inline eleman gibi darvaranacaktır.
- Display:inline-blok Bu kod ile elemente verdiğimiz width ve height değerlerinin geçerli olduğunu dözlemleyebiliriz. Yani içerik kadar yer kaplamayacak bizim verdiğimiz width ve height değerleri geçerli olacaktır.
- display:block özelliği ise eleman bir blok eleman özelliklerine sahip olacaktır. Width ve height değerleri verilebilmektedir. Ancak genişlik satırın tamamını kaplayacak şekilde (100%) verilmemiş ise satırın geri kalanı boş kalacaktır. Diğer elementler yanyana gelmeyecektir.
- display:none özelliği ile eleman sayfa üzerinden kaybedilecek; görünmeyecektir. ve kapladığı alanda silinecektir. Yanındaki ya da alt altalar ise şayet kaybedilen elementin yeri kaydırılarak doldurulacaktır.

- [Örnekteteki kodları inceleyiniz.](/CSS-Dersleri/display.html)

### 2.32-Visibility :

- visibility: hidden dersek element sayfa üerinden kaybolacak (gizlenecek) ancak sayfa üzerinde kapladığı alan kalacaktır.
- [Örnekteteki kodları inceleyiniz.](/CSS-Dersleri/visibility.html)

### 2.33-Navbar :

- navbar sayfa üzerinde birçok yerde bulunabilir ve değişik elementler kullanılarak hazırlanabilir.
- [İnceleyiniz](/CSS-Dersleri/navbar.html) Örnekte sayfa üstünde kullanılmış ve düzenlenmiştir.
- İlerleyen konularda dahada farklı şekillerde düzenlemeler yapıalacaktır. Bo düzenleme öğrendiğimiz konular kadarıyla ele alınmıştır.

### 2.34-Styling List :

- Listelere nasıl css uygulandığına ilişkin örneği inceleyiniz. [Bakınız örnek](/CSS-Dersleri/styling-list.html)

### 2.35-Background Image :

-[Örneği inceleyininiz.](/CSS-Dersleri/background-image.html) Bu örnekte body içerisinde içeriğin sunulacağı kısıma arka plan resimi uygulanmıştır.

### 2.36-Floating

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

### 2.37-Positions:

Position: static | relative | absolute | fixed | sticky

Sayfa içerisinde bir elementin position değerini belirtmediğimizde default static olarak gelir. Bu özellik ile bir elementin pozisyonunu belirleyebiliriz.

- position: relative olarak verdiğimizde elementin bulunduğu konuma gore top | bottom | left | right değerleri vererek elementi haraket ettiririz. Yani o anki konumuna göre normal akışı bozmadan haraket etirebiliriz. örneğin top:50px verdiğimizde tepeden 50px aşağı doğru haraket ettirilecektir. Eksi değer verdiğimizde ise ters yönde haraket edecektir. [Örneği inceleyiniz](/CSS-Dersleri/position.html)
- position: absolute olarak verdiğimizde ise verdiğimiz element normal akış içerisinden çıkacak ve parent elenti relative olan var ise o elente göre şayet parenti relative olan yok ise body e göre konum alacaktır.Bu durumda top | bottom | left | right değerleri verdiğimizde parent elementi yada body ye göre konum alacaktır. [Örneği inceleyiniz](/CSS-Dersleri/position.html)
- position:fixed özelliği vererek sayfa üzerinde istediğimiz bir elementi sabitleyebiliyoruz. Aynı zamanda z-index özelliği de verebiliyoruz. Örneğin navar kısmını sitemizin tepesinde sabit kalmasını, sayfamızı aşağı doğru kaydırsak bile navbar bölümümüzün sabit kalmasını sağlamak için position:fixed özelliğini kullanırız. [Örneği inceleyiniz.](/CSS-Dersleri/pisition-fixed.html)
- position:sticky özelliğini vererek absolute gibi elementin davranmasını sağlayabiliriz ancak absolute den farkı ise scroll için belirlediğimiz değere kaydırma ulaştığında fixed olacaktır. [Detayları görmek için örneği inceleyiniz](/CSS-Dersleri/pisition-sticky.html)

### 2.38-Flexbox

Flexbox nedir? : Flexbox 2017 yılında css e eklenen yeni bir özelliktir. Amacı ise clasik css te kullanmış olduğumuz float, position, display gibi özelliklerin üzerine alternatif olarak çıkmıştır. Aşağıdaki resimi inceleyiniz. Resimdeki gibi bir sayfamızın olduğunu varsayalım. Mavi görünen kapsayıcı bir parent element ve içerisinde yer alan farklı özelliklere sahip etiketler (bu bir p etiketi, h etiketi, span etiketi yada bu bir div olabilir v.b.) olduğunu düşünelim. Bunları sayfa içerisinde istediğimiz konumlarda konumlandırabilmek flex özelliği sayesinde artık çok kolaydır. Bunun için ilk yapmamız gereken parent elenetin display özelliğini flex yapmak.
![how-to-use-flex](/CSS-Dersleri/assets/img/how-to-use-flex.jpg)

Bu özelliği kullanabilmek için:

- Pozisyonlarını ayarlamak istediğimiz elementlerin kapsayıcı elementin display özelliğini flex yapıyoruz. Bu işlem sonunda flex container içerisindeki her bir element; bu bir p etiketi yada bir div olsun farketmez bütün elementler bir flex item a çevrilir. Bu çevirme işleminden sonra elementleri istediğimiz şekilde haraket ettirebiliriz.
  ![flex-container](/CSS-Dersleri/assets/img/flex-container.jpg)

- Parent elementi flex olan kapsayıcı elementimiz içerisindeki elementlerin haraket için izleyecekleri eksenler aşağıdaki resimden inceleyiniz.
  ![flex-main-axis](/CSS-Dersleri/assets/img/flex-main-axis.jpg)

  Main axis : Default ta ufuk çizgisidir.
  cross axis : main ekseni dik kesen çizgidir.

  #### 2.39-Parent flex Özellikleri:

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

#### 2.40-Flex Items Özellikleri:

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

   ### 2.41-Grid

   ### 2.42-Css Grid Nedir ?

   Grid web sayfalarında tasarımlarda kullanılmak üzere geliştirilmiştir. Bir web sayfasının şablonunu css farklı yöntemler ile oluşturulabilmektedir. Yukarıda incelediğimiz float, flex gibi yöntemler ile tasarımını yapacağımız şablunu oluşturubiliyoruz ancak; grid bunların arasında en kolay olanıdır. Örneğin sayfamızı bir tablo gibi düşünürsek,
   ![css_grid](/CSS-Dersleri/assets/img/grid.jpg)

   yukarıdaki resimde de gördüğümüz üzere sayfamız satır ve sütunlara bölerek içeriklerimizi bu satır ve sütunları istediğimiz şekilde birleştirerek sayfamızın tasarımını aşağıdaki resimde de görüldüğü gibi oluşturabiliriz.

   ![css_grid_page_design](/CSS-Dersleri/assets/img/grid_page_design.jpg)

#### 2.43-Grid Container

Row, column, cell gibi yapıların oluşumunu sağlayan ana kutuya denir.  
[Örneği inceleyiniz.](/CSS-Dersleri/grid-container-column-row.html)

#### 2.44-Grid Line

Yatay ya da dikey çizgiler olarak da düşünebilirsiniz. Numara ile adlandırılırlar. (google chrome browserda mouse ile sağ tıklayıp 'incele' dediğimizde 'Layout' kısmına geldiğimizde grid için ilgili sekmeyi işaretlediğimizde bı çizgiler ve grip yapısı görünecektir...)  
![grid line](/CSS-Dersleri/assets/img/grid-line.jpg)

#### 2.45-Grid Row

Yatay kısımlardan oluşan yapılardır.  
![grid row](/CSS-Dersleri/assets/img/grid-row.jpg)  
[Örneği inceleyiniz.](/CSS-Dersleri/grid-container-column-row.html)

#### 2.46-Grid Column

Dikey kısımlardan oluşan yapılardır.  
![grid column](/CSS-Dersleri/assets/img/grid-column.jpg)  
[Örneği inceleyiniz.](/CSS-Dersleri/grid-container-column-row.html)

#### 2.47-Grid Cell

Gridin en küçük birimidir. 4 tane grid line arasında bulunur.  
![grid cell](/CSS-Dersleri/assets/img/grid-cell.jpg)

#### 2.48-Grid Area

Birçok birimden(grid cell) oluşan yapıdır.  
![grid area](/CSS-Dersleri/assets/img/grid-area.jpg)  
Şöyle güzel bir yanıda tek satırda hem satır hem de sütun bilgilerini yazabiliriz.  
grid-area: row-start / column-start / row-end / column-end  
[Örnekte konuya değinilmiştir. İnceleyiniz.](/CSS-Dersleri/grid-gaps-spannig.html)

#### 2.49-Grid Gap

Column ya da row arasındaki boşluklardır.  
![grid gap](/CSS-Dersleri/assets/img/grid-gap.jpg)  
[Örneği inceleyiniz.](/CSS-Dersleri/grid-gaps-spannig.html)

#### 2.50- repeat () & fr Unit

Grid ile birlikte bazı fonksiyonlarda gelmiştir. Bunlardan bir tanesi de 'repeat ()' fonksiyonudur. Örneğin satır bilgisini belirtirken tekrar eden yani ayni özellikteki satırlarda tekrar tekrar yazmak yerine bu fonksiyonu kullanırız. //grid-template-columns: 150px 150px 150px; yerine grid-template-columns: repeat(3, 150px); kodunu yazabiliriz. bu kısaltmafonksiyonlar işimizi kolaylaştırmaktadır.  
fr(fraction): Bu birim css grid ile birlikte geldi. Kullanılabilinir alanı ifade ediyor. Örneğin; grid-template-columns: 1fr 2fr 3fr; kodumuzda satırımız tane olup oranları toplam 6 birim yani fr, satır oranları ise 1 / 2 / 3 birim şeklindedir.  
[Örnekte konuya değinilmiştir. İnceleyiniz.](/CSS-Dersleri/grid-gaps-spannig.html)

#### 2.51- Naming Grid Areas:

Bu kısımda ise isimlendirme yapılarak bir template nasıl yapılıyor öğrenelim. Klasik display:grid; ve grid-template-columns & grid-template-rows yapımızı oluşturduktan sonra içeriklerimizi konumlandırmak için template oluşturuyoruz. Örnek bir kod aşağıdaki gibidir.  
![grid gap](/CSS-Dersleri/assets/img/grid-template-area.jpg)

Yukarıdaki gibi kodumuzu hazırladıktan sonra isimlendirmeleri de elementlerimize veriyoruz.  
![grid gap](/CSS-Dersleri/assets/img/grid-template-area-1.jpg)

Aşağıdaki örnekte bu konu işlenmiştir. Örneğe [buradan ulaşabilirsiniz.](/CSS-Dersleri/grid-naming-grid-areas.html)  
![grid gap](/CSS-Dersleri/assets/img/naming-grid-areas-html-codes-screenshot.jpg)  
Yukarıdaki resimde html kodları görülmektedir.

![grid gap](/CSS-Dersleri/assets/img/naming-grid-areas-css-codes-screenshot.jpg)  
Yukarıdaki resimde css kodları görülmektedir.

![grid gap](/CSS-Dersleri/assets/img/naming-grid-areas-screenshot.jpg)  
Yukarıdaki resimde sayfa konumlandırması görülmektedir.

#### 2.52- . (nokta) :

Boş bir cell anlamına geliyor ve template’inizde . koyduğunuz yer boş kalıyor. Grid ile konumlandırma yaparken grid-template-areas komutunda hangi konuma nelerin gelmesinin istediğimiz bölümlere isimleri yazdıktan sonra diğer alanlara . (nokta ) koyduğumuzda o alanlara sıraki element yerleşecektir.

#### 2.53-max-content, min-content, minmax()

**max-content:** içerik kadar genişlik ya da yüksekliği kaplar.  
**min-content:** en geniş kelime kadar min yer kaplar.  
**minmax() :** aynı anda hem min hem max değer girmeyi sağlar.

#### 2.54-auto-fill, auto-fit

**auto-fill:** Satırı sığabildiği kadar çok sütunla doldurur. Örnek olarak grid-template-columns: repeat(auto-fill, 100px) örneğimizde 100px genişlikte elementler ile dolduracaktır. Sayfamızı genişlettiğimizde ise şayet 100px i geçmişisek satıra bir tane daha element geleektir. Ancak mevcut elementler bu alana yayılmayacaktır.Sayfayı daralttığımızda ise kalan alan 100px altına indiğinde satıra sığmayan element bir alt satıra geçerek konumlanacaktır.

**auto-fit:** Mevcut tüm alanları kaplayacak şekilde davranış gösterir. grid-template-columns: repeat(auto-fit, 1fr) bu kodumuzda sayfamız mevtut elementlerimizle doldurulacak kalan boşluklar ise elementlerimiz tarafından eşit bir şekilde paylaşılacaktır. Sayfamızı daralttığımızda içerik sığmayacak ise bir alt satıra geçerek konumlanacaktır.

#### 2.55-Grid items Alignment

GRid konteynır içerisindeki elementlerimizi hizalamak için **_align-items_** , **_justify-items_** ve **_place-items_** propertyleri kullanılmaktadır.  
**align-items:** Grid itemların (row) yatay eksende hizalama yapmasını sağlar.  
align-items: start | end | center | stretch(default değer)

**justify-items:** Grid itemların (col) dikey eksende hizalama yapmasını sağlar.  
justify-items: start | end | center | stretch(default değer)

**place-items:** Her iki eksendeki hizalamaları tek bir seferde yapmasını sağlar.  
place-items: align-items — justify-items

Grid kullanılarak geliştirilmiş uygulama projemize [buradan ulaşabilirsiniz.](/CSS-Dersleri/Uygyulama-Grid-Site-News/index.html)

### 2.56-Css Transition

Transition bir elemanın iki state’i arasında transition, yani geçiş yapmanızı sağlar. Kısaca geçiş efekti olarak bilinmektedir.

**Transition Özellikleri**

- **transition-property:** transition’ı uygulamak istediğimiz bir veya birden fazla CSS property’sini belirtiriz.

- **transition-duration:** Transition işleminin ne kadar sürede gerçekleşeceğini belirtiriz. Tanımladığınız her bir transition-property için dilerseniz tek bir duration
  belirtebilirsiniz. Yada her bir property için ayrı ayrı transition süresi belirtebilirsiniz.

- **transition-timing-function:** ransition’ın süresince hangi hızda ve hangi aşamada olacağını belirtiriz.

- **transition-delay:** Bir geçişin başlamadan önce ne kadar süre bekletileceğini belirleyebilirsiniz.

**Geçişler için zaman belirlemek**

CSS3 **_transition-timing-function_** özelliğiyle geçişler için zaman belirleyebiliriz.  
Alacağı değerler

- ease – Yavaş bir başlangıç, ardından hızlı, daha sonra yavaş yavaş sona eren geçiş efekti belirtir. (Varsayılan)
- linear – Başlangıç ve bitişi aynı hızda bir geçiş efekti belirtir.
- ease-in – Yavaş bir başlangıç geçiş efekti belirtir.
- ease-out – Yavaş bir bitiş geçiş efekti belirtir.
- ease-in-out – Yavaş başlangıç-bitiş geçiş efekti belirtir.
- cubic-bezier(n,n,n,n) – Bezier yöntemi ile zaman belirlememizi sağlar.

**Geçişlerleri zamanlamak**
Bazen geçiş efektini belli bir süre sonrasında çalışmasını isteyebiliriz.

Bunun için **_transition-delay_** özelliğini kullanabiliriz.

En baştaki örneğe t**_ransition-delay_** özelliği ve **_1s_** değerini ekledik.

Artık geçiş efekti belirlediğimiz süre sonrasında başlayacaktır.

**CSS3 transition özelliğinin uygulanması**
Geçiş efektlerini her biri ayrı özellik belirterek kullanabiliriz.

```
div {
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
}
```

Tek özellik satırı ile kısaltılmış olarak da kullanabiliriz.

```
div {
    transition: width 2s linear 1s;
}
```

Örnek :  
Html kodları

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <div class="bg-color">
        <div class="box first-box">
            <div class="center">
                <a href="#">ease (default)</a>
            </div>
        </div>
        <div class="box second-box">
            <div class="center">
                <a href="#">ease-in</a>
            </div>
        </div>
        <div class="box third-box">
            <div class="center">
                <a href="#">ease-in-out</a>
            </div>
        </div>
        <div class="box fourth-box">
            <div class="center">
                <a href="#">ease-out</a>
            </div>
        </div>
        <div class="box fifth-box">
            <div class="center">
                <a href="#">linear</a>
            </div>
        </div>
        <div class="box sixth-box">
            <div class="center">
                <a href="#">steps(4)</a>
            </div>
        </div>
        <div class="box seventh-box">
            <div class="center">
                <a href="#">cubic-bezier(.11,-0.17,1,.21)</a>
            </div>
        </div>
    </div>
</body>

</html>
```

Css Kodları

```
body {
  margin: 0;
  padding: 0;
}

.bg-color {
  background-color: #5172ea;
}

.box {
  position: relative;
  width: 200px;
  height: 100px;
  cursor: pointer;
}

.box a {
  text-decoration: underline;
  color: #fff;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%);
}

.first-box {
  background: #cddc39;
  transition: width 1s ease;
}

.first-box:hover {
  width: 100%;
}

.second-box {
  background: #07eb38;
  transition: width 1s ease-in;
}

.second-box:hover {
  width: 100%;
}

.third-box {
  background: #0bd18f;
  transition: width 1s ease-in-out;
}

.third-box:hover {
  width: 100%;
}

.fourth-box {
  background: #af0e87;
  transition: width 1s ease-out;
}

.fourth-box:hover {
  width: 100%;
}

.fifth-box {
  background: #d3a409;
  transition: width 1s linear;
}

.fifth-box:hover {
  width: 100%;
}


.sixth-box {
  background: #fa0154;
  transition: width 1s steps(4);
}

.sixth-box:hover {
  width: 100%;
}

.seventh-box {
  background: #00bcd4;
  transition: width 1s cubic-bezier(.11, -0.17, 1, .21);
}

.seventh-box:hover {
  width: 100%;
}

```

Yukarıdaki örnek animasyon ile animasyonlu navbar yada sidebar gibi gösterişli menüler hazırlayabilirsiniz...!  
Örneğimize [buradan ulaşabilirsiniz.](/CSS-Dersleri/Animations-Scss/transion.html)

### 2.57-Css Transform

Transform özelliği ile bir Html etiketi üzerinde döndürme, boyutlandırma, eğme gibi işlemleri gerçekleştirebiliriz. Bu işlemleri 2D (2 boyutlu) ve 3D (3 boyutlu) olmak üzere 2 farklı şekilde yapabiliyoruz. Şimdi sırasıyla bu işlemleri nasıl yapabileceğimize bakalım.

**Translate Yöntemi**

- **translateX :** X eksenindeki konumunu değiştirmek için

- **translateY :** Y eksenindeki konumunu değiştirmek için

- **translateZ :** Z eksenindeki konumunu değiştirmek için

- **translate :** X ve Y eksenlerindeki konumunu değiştirmek için kullanılır. Birinci parametre X ekseni için, ikinci parametre Y ekseni için uygulanır.

- **translate3d :** X, Y ve Z eksenlerindeki konumunu değiştirmek için kullanılır. Birinci parametre X ekseni, ikinci parametre Y ve üçüncü parametre Z ekseni için uygulanır.

**NOT :** Vereceğimiz değerler negatif olabilir. Negatif olduğunda tam tersi yönde hareket eder.

Örnek kodları inceleyiniz

```
<style>
div {
    width:120px;
    height:50px;
    background-color:cornflowerblue;
    color:#fff;
    text-align: center;
    margin:20px;
    padding:10px;
    transition:transform 2s;
}

#translateX:hover{
    transform:translateX(50px);
}

#translateY:hover{
    transform:translateY(50px);
}

#translate:hover{
    transform:translate(50px, -50px);
}
</style>

<div id="translateX">X ekseninde 50px kaydır</div>
<div id="translateY">Y ekseninde 50px kaydır</div>
<div id="translate">X ekseninde 50px, Y ekseninde -50px kaydır</div>
```

**Rotate Yöntemi**

2 boyutlu kullanıldığında, Html etiketini saat yönünde veya tam tersi yönde döndürmek için kullanılır.

3 boyutluda ise döndürme işlemi 3 boyutlu olacak şekilde uygulanır.

- **rotateX :** Html etiketini, 3 boyutlu olarak X ekseninde döndürür.

- **rotateY :** Html etiketini, 3 boyutlu olarak Y ekseninde döndürür.

- **rotateZ :** Html etiketini, 3 boyutlu olarak Z ekseninde döndürür.

- **rotate :** Pozitif değer verildiğinde, Html etiketini 2 boyutlu olarak saat yönünde döndürür. Negatif değer verildiğinde, Html etiketini 2 boyutlu olarak saat yönünün tersine döndürür.

**NOT :** Vereceğimiz değerler negatif olabilir. Negatif olduğunda saat yönünün tersine döner.  
Örnek kodları inceleyiniz

```
<style>
div {
    width: 120px;
    height: 50px;
    background-color: blueviolet;
    color: #fff;
    text-align: center;
    margin: 60px;
    padding: 10px;
    transition: transform 2s;
}

#rotateP:hover {
    transform: rotate(90deg);
}

#rotateN:hover {
    transform: rotate(-90deg);
}

#rotateX:hover {
    transform: rotateX(180deg);
}

#rotateY:hover {
    transform: rotateY(180deg);
}
</style>

<div id="rotateP">Saat yönünde 90 derece döndür</div>
<div id="rotateN">Saat yönünün tersine 90 derece döndür</div>
<div id="rotateX">3 boyutlu olarak X ekseninde 180 derece döndür</div>
<div id="rotateY">3 boyutlu olarak Y ekseninde 180 derece döndür</div>
```

Örneğimize [buradan ulaşabilirsiniz.](/CSS-Dersleri/Animations-Scss/transform-rotate.html)

**Scale Yöntemi**

Bir Html etiketini vereceğimiz oranlar ölçüsünde büyütmek veya küçültmek için kullanılır.

- **scaleX :** Genişliği belirtilen oranda büyütmek veya küçültmek için

- **scaleY :** Yüksekliği belirtilen oranda büyütmek veya küçültmek için

- **scale :** Genişliği ve yüksekliği belirtilen oranda büyütmek veya küçültmek için kullanılır. Birinci parametre genişlik için, ikinci parametre yükseklik için uygulanır.

Örnek kodları inceleyiniz

```
<style>
div {
    width: 120px;
    height: 50px;
    background-color: blueviolet;
    color: #fff;
    text-align: center;
    margin: 60px;
    padding: 10px;
    transition: transform 2s;
}

#scaleP:hover {
    transform: scale(1.2, 2);
}

#scaleN:hover {
    transform: scale(0.5, 0.5);
}
</style>

<div id="scaleP">Genişliğini 1.2 , yüksekliğini 2 katına çıkar</div>
<div id="scaleN">Genişliğini ve yüksekliğini yarı katına düşür.</div>
```

**Skew Yöntemi**

Bir Html etiketinin, X ve Y ekseninde belirtilen derece kadar eğilmesini sağlar.

- **skewX :** X eksenindeki eğilmeyi sağlar.

- **skewY :** Y eksenindeki eğilmeyi sağlar.

- **skew :** X ve Y eksenlerindeki eğilmeyi sağlar. Birinci parametre X ekseni için, ikinci parametre Y ekseni için uygulanır.

Örnek kodları inceleyiniz

```
<style>
div {
    width:120px;
    height:80px;
    background-color:cornflowerblue;
    color:#fff;
    text-align: center;
    margin:20px;
    padding:10px;
    transition:transform 2s;
}

#skewX:hover{
    transform:skewX(30deg);
}

#skewY:hover{
    transform:skewY(30deg);
}

#skew:hover{
    transform:skew(30deg, -20deg);
}
</style>

<div id="skewX">X ekseni ile 30 derecelik açı oluştur</div>
<div id="skewY">Y ekseni ile 30 derecelik açı oluştur</div>
<div id="skew">X ekseni ile 30, Y ekseni ile -20 derecelik açı oluştur</div>
```

YUkarıda transform özelliklerine değindim. Şimdi de bu özelliklerin birlikte kullanılması durumuna örnek oluşturalım.

```
<style>
div {
    width: 80px;
    height: 80px;
    background-color: cornflowerblue;
    margin: 20px;
    transition: all 2s;
}

div:hover {
    transform: translate(50px, 50px) rotate(360deg) scale(1.5);
    background-color:greenyellow;
    border-radius:50%;
}
</style>

<div></div>
```

### 2.58-Css Animation

Animasyon web sayfalarında flash ve javascript tarafından oluşturulan animasyonun yerine kullanılır. Css animasyon özelliği, bir özellik kümesinden diğerine geçiş sağlamak içindir.CSS özelliklerini istediğiniz gibi değiştirebilir animasyon özelliği katabiliriz. Animasyon yapmak için önce animasyon adımlarını @keyframes ile oluşturmamız gerekiyor. CSS3 @keyframes öğenin belirli zamanlarda hangi stillerin uygulanacağını belirtir. Animasyinon aşağıdaki özelliklerini inceleyelim.

- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode
- animation

**@keyframes**

CSS3 @keyframes ile oluşturacağımız animasyonun kare kurallarını belirlememize imkan verir. Daha sonraki adımda ise oluşturduğumuz animasyon karesini HTML elemanına bağlamamız yeterli olacaktır.  
Aşağıdaki örnekte ornek animasyonu 5 saniye sürecek ve <div> elemanının arka plan rengini belirlenen sürede kırmızıdan sarıya değiştirecektir.

```
@keyframes ornek{
    from {background-color: blue;}
    to {background-color: yellow;}
}

div {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation-name: ornek;
    animation-duration: 5s;
}
```

Yukarıdaki örnekte from ve to anahtar kelimelerini kullanarak stilin ne zaman değişeceğini belirttik. Animasyon karelerini yüzde kullanarak uygulayabiliriz. Yüzdeyi kullanarak istediğimiz kadar stil değişikliği adımı ekleyebilirsiniz. Yukardaki örnekte from yerine %0, to yerine 100% kullanabiliriz. Aşağıdaki örnek, animasyon süresinin %25‘i tamamlandığında, %50‘si tamamlandığında ve animasyonun %100‘ü tamamlandığında <div> elemanının arka plan rengini değiştirecektir.

```
@keyframes ornek {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}

div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: ornek;
    animation-duration: 4s;
}
```

Aşağıdaki örnek elemanının arka plan rengini ve konumunu değiştirecektir.

```
@keyframes ornek {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
}

div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: ornek;
    animation-duration: 4s;
}
```

**Animasyonu Zamanlamak- animation-delay**

Animasyonu belirlediğimiz süreden sonra başlamasını animation-delay ile belirleyebiliriz.  
Aşağıdaki örnekte animasyon 2 saniye sonra başlayacaktır.

```
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 5s;
    animation-delay: 2s;
}
```

**Animasyon Tekrar Sayısını Belirlemek- aanimation-iteration-count**

Oluşturduğumuz animasyonu animation-iteration-count ile istediğimiz kadar tekrarlanmasını sağlayabiliriz.  
Aşağıdaki örnek animasyonu 4 kez çalıştıracaktır.

```
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: blue;
    animation-name: example;
    animation-duration: 5s;
    animation-iteration-count: 4;
}
```

Animasyonun sürekli olarak tekrarlanmasını sağlamak için **_infinite_** değerini kullanabiliriz.

```
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: blue;
    animation-name: example;
    animation-duration: es;
    animation-iteration-count: infinite;
}
```

**Animasyonu yönünü belirlemek - animation-direction**

Animasyona herhangi bir yön belirlemediğimizde animasyon başlangıçtan sona doğru hareket edecektir. Animasyon yönünü belirlemek için animation-direction özelliğini kullanabiliriz. Aşağıdaki örnek animasyon karelerini ters yönde çalıştıracaktır.

```
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: blue;
    animation-name: example;
    animation-duration: 5s;
    animation-iteration-count: 4;
    animation-direction: reverse;
}
```

Animasyonu ilk önce ileriye, sonra geriye, sonra ileri kaydırmak için alternate değerini kullanabiliriz.

```
div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: blue;
    animation-name: example;
    animation-duration: 5s;
    animation-iteration-count: 4;
    animation-direction: alternate;
}
```

**Animasyon için zaman belirlemek - animation-timing-function**

CSS3 animation-timing-function özelliğiyle animasyon için zaman belirleyebiliriz. Alacağı değerler:

- ease – Yavaş bir başlangıç, ardından hızlı, daha sonra yavaş yavaş sona eren geçiş efekti belirtir. (Varsayılan)
- linear – Başlangıç ve bitişi aynı hızda bir geçiş efekti belirtir.
- ease-in – Yavaş bir başlangıç geçiş efekti belirtir.
- ease-out – Yavaş bir bitiş geçiş efekti belirtir.
- ease-in-out – Yavaş başlangıç-bitiş geçiş efekti belirtir.
- cubic-bezier(n,n,n,n) – Bezier yöntemi ile zaman belirlememizi sağlar.

Bu konu için oluşturulmuş [örneğimizi](/CSS-Dersleri/Animations-Scss/animation-timing-function.html) inceleyiniz...

**NOT:**  
Animasyon özelliklerini ayrı ayrı belirleyebiliriz.

```
div {
    animation-name: ornek;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
```

VEya animasyon özelliklerini tek satırda da belirleyebiliriz.

```
div {
    animation: ornek 5s linear 2s infinite alternate;
}
```

Animasyon özelliklerini kullanıldığı sayfa geçiş efektlerinin olduğu basit uygulamamızı [buradan](/CSS-Dersleri/Animations-Scss/Animation-uygulama/index.html) ulaşabilir ve inceleyebilirsiniz.

**NOT:** Daha önceden hazırlanmış değişik animasyonlar için [https://animate.style](https://animate.style) sayfasını ziyaret edebilirsiniz. Buradaki hazır kütüphaneyi kullanmak için linki eklemek yeterlidir. Ayrıca kullanımlar ile ilgili dokümantasyon içermektedir. İnceleyiniz...

### 2.59-Sass Nedir ?

SASS , CSS yazmayı daha dinamik bir hale getirmek için ortaya çıkmıştır. Kısaca CSS ‘e bir programlama dili havası katmaktadır. CSS’ de bulunmayan pek çok özellik barındırır.(Değişken tanımlama, İç içe yapılar kullanma, Fonksiyon tanımlama,...) Birden fazla kullanma yöntemi vardır, Bunlardan biri bilgisayarınıza indirip kurabiliceğiniz dönüştürücülerdir. Dönüştürücüler kısaca yazmış olduğumuz .scss uzantılı dosyaları tarayıcıların anlayabileceği .css formatına dönüştürür. En Popüler SASS-CSS dönüştürücüleri şunlardır;

- Koala
- Scout-App
- SimpLess
- Sassmeister
- TheSassWay
- Compass
- Prepros

Node.js kullanıyorsanız, Sass'ı npm kullanarak da kurabilirsiniz.
SASS’ın yerleşik olduğu dillerden biri Node.js'dir. Bu yüzden ilk önce Node.js'i kurmamız gerekiyor, böylece SASS daha sonra Node.js üzerinden çalışabiliyor.

Node.js kurmak için https://nodejs.org/en/download/ adresinden sisteminize uygun versiyonu indirip kurmanız gerekiyor.

npm install -g sass

### 2.60-SASS Nasıl Yazılır ?, En çok Hangi Özellikleri kullanılır?

**1.Değişkenler (Variables)**

CSS’de değişken kullanımına olanak sağlar, en kullanışlı özelliklerden biridir. Aşağıda göstermiş olduğum şekilde başına $ işareti koymamız değişken olduğunu ifade etmek içindir.
SASS:

```
$general-font: "Helvetica, sans-herif";
$my-color: #a5a5a5;

p {
 font-family: $general-font;
 color: $my-color;
}
```

CSS Çıktısı:

```
p {
 font-family: "Helvetica, sans-herif;
 color: #a5a5a5;
}
```

Bu şekilde ,tanımlamış olduğumuz değişkenleri istediğimiz yerde kullanabiliriz. Değişken tanımladığımız yerde yaptığımız küçük bir değişiklik ile yazılan tüm koda etki edilebilir.

**2.İç İçe Yapılar Oluşturma(Nesting)**

CSS yazmayı hızlandıran, kolaylaştıran ve kod kalabalığını azaltan önemli bir özelliktir.  
SASS:

```
div {
 .aciklama{
   color:blue;
   &:hover{
    color:red
   }
 }
 .resim{
   width: 100%;
 }
}
```

CSS Çıktısı:

```
div .aciklama{
  color:blue;
}
div .aciklama:hover{
  color:red;
}
div .resim{
  width: 100%;
}
```

& sembolü :hover :after :before gibi seçiciler için SASS yazımına özel kullanılan bir yapıdır. İçinde bulunduğu parent'a etki eder.

**3.İçeri Aktarım(Import)**

Kod kalabalığından ve karışıklıktan kurtulmak için çok kullanışlı bir özelliktir. 2 adet .scss uzantılı dosyamız olsun. Birinde genel tanımladığımız değişkenlerimiz bulunsun, bir diğerinde ise still verdiğimiz SASS kodlarımız bulunsun. Bu özellik ile değişkenleri tanımladığımız \_variable.scss dosyasını, still verdiğimiz style.scss dosyası ile birleştirmiş oluyoruz.  
SASS:

```
_variable.scss

$h1-font-size: 50px;
$h1-line-height: $font-weight-extralight;
$h1-color: #444444;
$h1-line-height: 60px;

style.scss

@import "variables";
h1{
 font-size: $h1-font-size;
 line-height: $h1-line-height;
 font-weight: $h1-font-weight;
 color: $h1-color;
}
```

CSS Çıktısı:

```
$h1-font-size: 50px;
$h1-line-height: $font-weight-extralight;
$h1-color: #444444;
$h1-line-height: 60px;

h1{
 font-size: $h1-font-size;
 line-height: $h1-line-height;
 font-weight: $h1-font-weight;
 color: $h1-color;
}
```

**4.Katmanlar(Mixins)**  
Katman yapısı, sürekli aynı parametreleri kullanarak yazdığımız CSS kodlarını tek bir sefer tanımlayarak, her yerde tek bir komut çağırarak kullanmamıza olanak sağlar. Fonksiyon çağırmaya çok benzer fakat burada işlem yaptırmıyoruz.  
SASS:

```
@mixin overlay() {
 left: 0;
 top: 0;
 background: black;
 opacity: 0.2;
}

.my-background{
 @include overlay();
}
```

CSS Çıktısı:

```
.my-background{
 left: 0;
 top: 0;
 background: black;
 opacity: 0.2;
}
```

**5.Kalıtım(Inheritance)**  
Katılım özelliği ortak CSS kodlarını barındıran elementleri bir araya toplamak için kullanılanılır.  
SASS:

```
.mesaj{
 border: 1px solid gray;
 padding: 15px;
 color: black;
}
.basarili{
 @extend .mesaj;
 background: green;
}
.hata{
 @extend .mesaj;
 background: red;
}
.uyari{
 @extend .mesaj;
 background yellow;
}
```

CSS Çıktısı:

```
.mesaj, .basarili, .hata, .uyari{
 border: 1px solid gray;
 padding: 15px;
 color: black;
}
.basarili{
 background: green;
}
.hata{
 background: red;
}
.uyari{
 background yellow;
}
```

**6.Operatörler(Operators)**  
Matematik işlemlerini CSS’de yapmamıza olanak sağlayan çok kullanışlı bir özelliktir. SASS tarafında matematiksel işlemler yaptırabilirsiniz ve CSS tarafına bu işlem sonuçlandırılmış olarak gönderilir.  
SASS:

```
.box{
 width: 1/3 * 100%;
 height: 30px * 2.5;
}
```

CSS Çıktısı:

```
.box{
 width: 33.333333333%
 height: 75px;
}
```

# 3. BOOTSTRAP

Bootstrap, kullanılabilir kod parçalarından oluşan açık kaynaklı ve ücretsiz bir web uygulaması geliştirme araç takımıdır. Sahip olduğu CSS ve JavaScript taslakları, web sitelerinin ve mobil uygulamaların kullanıcılara görünen bileşenleri için kullanılır. HTML, CSS, Less, Sass ve JavaScript ile yazılmış olan Bootstrap, tamamen etkileşimli ve duyarlı web uygulamaları geliştirmek için kullanılabilecek öğrenmesi kolay bir alternatiftir. Bootstrap web uygulaması geliştirme araç takımı, eski Twitter çalışanları Mark Otto ve Jacob Thornton tarafından oluşturulmuştur.  
Bootstrap kullanmanın belli başlı avantajlarını şu şekilde sıralayabiliriz.

- Daha hızlı geliştirme
- Duyarlı tasarım
- Tasarım devamlılığı
- Açık kaynaklı
- Özelleştirme
- Dokümantasyon
- Temalar

Bütün programlama dillerinde, frameworklerde veya hazır kütüphanelerde de olduğu gibi dokümantasyon çok önemlidir. Bilgisayar dünyasında sorularımızın cevapları çoğunlukla Stackoverflow gibi forumlarda ve yeni öğrenmeye çalıştığınız bilgilerde hep dökümantasyonlarda bulunmaktadır.  
Bootstrap dokümantasyonuna [buradan] (https://getbootstrap.com/docs/4.5/getting-started/introduction/) ulaşabilirsiniz.

### 3.1-12'lik Izgara(Grid) Sistemini Anlamak

Bootstrap, sayfa düzeni (layout) oluşturmak için, CSS flexbox ile oluşturulmuş ızgara (grid) sistemini kullanmaktadır.  
**Bootstrap ızgara sistemi 3 ana yapıdan oluşur:**

- Kapsayıcı (.container)
- Satırlar (.row)
- Kolonlar (col-\*) (Örnek: .col-md-8)

Her bir sütun, 12 kolondan meydana gelmekte ve 12'lik Grid sistemi oluşturmaktadır. 12'lik ızgara sisteminde, kolon sayısı varyasyonları ile istenildiği gibi tasarım yapılabilmektedir.

**Eşit Kolonlar**  
Eşit kolonlu tasarım için;

- 12 adet 1'er kolon (.col-&#91;sınıfAdı&#93;-1)
- 6 adet 2'li kolon (.col-&#91;sınıfAdı&#93;-2)
- 4 adet 3'lü kolon (.col-&#91;sınıfAdı&#93;-3)
- 3 adet 4'lü kolon (.col-&#91;sınıfAdı&#93;-4)
- 2 adet 6'lı kolon (.col-&#91;sınıfAdı&#93;-6)
- 1 adet 12'li kolon (.col-&#91;sınıfAdı&#93;-12) oluşturulabilir.

```
<div class="row">
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
    <div class="col">Kolon</div>
</div>

<div class="row">
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
    <div class="col-2">Kolon</div>
</div>

<div class="row">
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
    <div class="col-3">Kolon</div>
</div>

<div class="row">
    <div class="col-4">Kolon</div>
    <div class="col-4">Kolon</div>
    <div class="col-4">Kolon</div>
</div>

<div class="row">
    <div class="col-6">Kolon</div>
    <div class="col-6">Kolon</div>
</div>

<div class="row">
    <div class="col-12">Kolon</div>
</div>
}
```

Ya da col sınıfına sahip element sayısına göre (Örneğin; 3 adet .col sınıfı olan elementler 3 adet kolon oluşturur) otomatik olarak eşit kolonlara bölünebilir.

**Eşit Olmayan Kolonlar**
Kolon sayılarının 12'ye tamamlanma zorunluluğu yoktur. Tasarıma göre istenilen sayıda kolonlar oluşturulabilir ve istenilen yerlerde boşluk bırakılabilir. Bunun için col sınıfının yanına öntanımlı margin ve margin yönünü (ml-auto gibi) belirten bir sınıf adı daha eklenmelidir. Kolonun solunda boşluk bırakmak için margin (m) left (l) yani ml-auto sınıfı eklemeli, aynı şekilde sağ tarfında boşluk bırakılmak istenirse margin (m) right (r) yani mr-auto sınıfı eklemelidir.  
**Örneğin;** col-4 mr-auto sınıfı olan bir kolonun sağ tarafında, col-4 ml-auto sınıfı ise kolonun solunda boşluk bırakır.

```
<div class="row">
    <div class="col-2">2 Kolon</div>
    <div class="col-10">10 Kolon</div>
</div>

<div class="row">
    <div class="col-8">8 Kolon</div>
    <div class="col-4">4 Kolon</div>
</div>

<div class="row">
    <div class="col-8">8 Kolon</div>
    <div class="col-6">6 Kolon</div>
</div>

<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-5">5 Kolon</div>
</div>

<div class="row">
    <div class="col-4 mr-auto">4 Kolon</div>
    <div class="col-5">5 Kolon</div>
</div>

<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-5 ml-auto">5 Kolon</div>
</div>
```

**Kolonların Sıralanması**  
Öntanımlı **order-[sıra numarası]** sınıfını ekleyerek kolonları sıralayabiliriz.

Örneğin; col-3 order-3 üç kolonluk bölümü üçüncü sıraya yerleştirecektir.

```
<div class="row">
    <div class="col-3 order-3">3 Kolon</div>
    <div class="col-4 order-2">4 Kolon</div>
    <div class="col order-1">5 Kolon</div>
</div>
```

**İç İçe Izgara sistemi**  
Bir satırdaki (row) kolonun (col) içine başka bir satır eklenerek yine kolonlara bölünebilir.

**Örneğin;** 4'lük bir kolon (.col-[sınıfAdı]-4) ile 8'lik bir kolondan (.col-[sınıfAdı]-8) oluşan satırdaki 8'lik kolonun içinde yeni bir satır (row) eklenerek 2 adet 6'lık kolon (.col-[sınıfAdı]-6) oluşturulabilir.

```
<div class="row">
    <div class="col-4">4 Kolon</div>
    <div class="col-8">
        8 Kolon

        <div class="row">
            <div class="col-6">6 Kolon</div>
            <div class="col-6">6 Kolon</div>
        </div>
    </div>
</div>
```

Container, row ve column yapısı aslında Bootstrap kullanım mantığının temellerini oluşturuyor diyebiliriz. Bu yapıyı anlamak Bootstrap ile çalışmayı çok çok kolaylaştıracaktır. Bootstrap container yapısı aşağıdaki gibidir.  
![bootstrap container](/CSS-Dersleri/assets/img/bootstrap-grids.jpg)

- **extra small** bir cihazda, yani **576px'den küçük** olan bir cihazda, ekran boyutunun **100%**'ünü kaplamaktadır.
- **small** bir cihazda, yani **576px'den büyük veya eşit** olan bir cihazda, ekran boyutunun **100%**'ünü kaplamaktadır.
- **medium** bir cihazda, yani **768px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **720px** olacaktır.
- **large** bir cihazda, yani **992px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **960px** olacaktır.
- **X-large** bir cihazda, yani **1200px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **1140px** olacaktır.
- **XX-large** bir cihazda, yani **1400px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **1320px** olacaktır.

**Bootstrap Renk Standartları**

Bootstrap tarafından üretilmiş renk şemaları ve örnek kullanımı şu şekilde;

- Primary: tema ana rengi
- Secondary: temada kullanılacak ikincil renk.
- Success: örnek olarak kullanıcıların bütün gereksinimleri sağladıkları bir formu doldurduktan sonra yeşil renk tonlarını içeren bir mesaj gösterirken kullanabileceğimiz sınıf.
- Danger: Success için verdiğimiz örneğin tersi bir durumda kırmızı renk tonlarını içeren bir feedback için kullabileceğimiz sınıf.
- Warning: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
- Info: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
- Light: Tema içinde yazılar ve arkaplan renklendirmesi için kullanabileceğimiz renk şema sınıfı.
- Dark: Tema içinde yazılar ve arkaplan renklendirmesi için kullanabileceğimiz renk şema sınıfı.

```
  <!--
    Primary, Secondary, Success, Danger, Warning, Info, Light, Dark
  -->
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-success">.text-success</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-warning bg-dark">.text-warning</p>
  <p class="text-info bg-dark">.text-info</p>
  <p class="text-light bg-dark">.text-light</p>
  <p class="text-dark">.text-dark</p>
  <p class="text-body">.text-body</p>
  <p class="text-muted">.text-muted</p>
  <p class="text-white bg-dark">.text-white</p>
  <p class="text-black-50">.text-black-50</p>
  <p class="text-white-50 bg-dark">.text-white-50</p>
  <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
  <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
```

**Offset Kullanımı**  
Web sayfamızı tasarlarken sütunlarda yani col sınıfına sahip div elementlerinde boşluk oluşturma amacıyla sütunun sağ ve sol kısımlardan ittirilmesi için offset sınıfı kullanılır. Bir Grid(Izgara) yapısı 12 birimden oluşur, bundan dolayı yapıda taşma oluşmaması için offset sınıfı için verilecek değerde sütunun sahip olduğu grid boyutu da göz önüne alınmalıdır. Offset değer belirleme durumunun daha iyi kavranması açısından aşağıdaki örnekleri inceleyiniz.

**Not:** offset ile push sınıfları birbiri ile karıştırılmamalıdır. Benzer bir kullanıma sahip olan push sınıfın offset'ten farkı sütun yapısında yalnızca soldan bir itme uygulamasıdır.  
**Örneğin:**

```
<div class="container">
    <div class="row bg-dark " style="height: 100px;">
        <div class="col-md-10 offset-md-2 bg-danger font-weight-bold text-center pt-4">.col-md-10 .offset-md-2</div>
    </div>
</div>
```

### 3.2-CSS Kütüphaneleri

Bootstrap tarzı çeşitli css kütüphanaleri de bulunmaktadır. Bu kütüphanele bazı örnekler aşağıdaki gibidir.

- https://get.foundation/
- https://semantic-ui.com/
- https://bulma.io/
- https://getuikit.com/
- https://purecss.io/
- http://getskeleton.com/
- https://milligram.io/
- https://tailwindcss.com/
