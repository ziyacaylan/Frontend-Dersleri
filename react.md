# <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

# İÇİNDEKİLER

**---> Bu kısım, daha sonra güncellenecektir\_**

---

# 5. REACT JS DERSLERİ

## 5.1- React Nedir ve React Geliştirme Ortamının Hazırlanması

**React Js Nedir ?**
React _facebook_ ekibi tarafından geliştirilmiş ve kullanıma sunulmuş bir javascript kütüphanesidir. Oldukça popüler bir kütüphane olmasından dolayı kullanımı çok yaygındır. Açık kaynak kodlu, bileşen bazlı ve front-end bir kütüphane olan React, sadece uygulamanın görünüm katmanından sorumludur.  
React resmi web sitesi : **https://reactjs.org**

**React Geliştirme Ortamının Hazırlanması**  
React kullanmaya başlamadan önce bazı kurulumları tamamlamamız gerekir.

- Öncelikle _Node.js_ kurulumunu yapmalıyız. **https://nodejs.org/en/** sitesinden bize uygun olan kurulumu seçerek bilgisayarımıza kuralım.
  Yükleme işlemi tamalandıktan sonra bilgisayarımızda **"command"** (komut satırı) yada **PowerShell** gibi bir terminal ekranından yada vs code üzerinde termanlden kurulumun tamamlanıp tamalanmadığını kontrol edebiliriz.
- Olmazsa olmaz editörümüz ise _visual studio code_ editörüdür. Bu editörüde **https://code.visualstudio.com** adresinden indirerek bilgisayarımıza kuralım.

**Real Dom / Virtual DOM**

Öncelikle DOM nedir? Bundan biraz bahsedelim. **DOM (Document Object Model);** **HTML,XML** gibi gibi belgelerin programlama dilleri ve script dilleriyle iletişim kurabilmesi için geliştirilmiştir.  
**Virtual DOM,** real (gerçek) DOM'un bellekteki kopyasıdır.Bellekte aynı anda hem real DOM hem de Virtual DOM bulunur. React her component’in state değişikliğinde real DOM’u render etmek yerine, Virtual DOM’a yansıtır. Virtual DOM ile güncellenmesi gereken kısınlar sadece render edilerek değişiklikler real DOM'a yansıtılır. Böylece gereksiz yere tüm sayfanın render edilmesinin de önüne geçilmiş olur.

## 5.1- Bir Node.js Projesi oluşturma

İşlem basamaklarıaşağıdaki gibidir. Visual Studio Code terminal ekranımızdan aşağıdaki komut adımlarını uygulayarak projemizi oluşturalım.

- Öncelikle projemizi oluşturacağımız klasöre terminlimizde konumlanmamız gerekiyor.
  ```
  cd [konumlanılacak_klasor_yolu]  // şeklinde yolumuzu belirtiyoruz.
  ```
- _npm init_ ile proje oluşturma işlemi başlatılır.
- Sırası ile bizden istediği bilgileri rirerek projenin oluştuulması aşaması tamamlanır.

  ```
  packace name: [istenilen_isim]
  decription:  // tanımlama girmek istersek yazalım ismemezsek 'enter' a basarak geçelim
  entry point : (index.js) // başlangış dosyasını belirtiyoruz.
  git repository :  // bir repomuz var ise burada belirtiyoruz, yoksa boş geçiyoruz
  keywords:  // proje arandığında hangi keyword lerle erişilebilsin diye burada istersek belirtiyoruz.
  licanse: (ISC)  // lisans seçimi yapabiliriz.
  {
    "name": "learning-node",
    "version": "1.0.0",
    "description": "patika.dev",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "start": "node index"
    },
    "author": "ziyacaylan",
    "license": "ISC"
    }
    Is this OK ? (Yes)   // yukarıdaki json dosyasını bize lisans seçiminden sonra üretir ve sonunda herşey yolundamı gibi bir soru ile işlem tamamlanır.
  ```

## 5.2- React Uygulaması Oluşturma

Öncelikle _react_ ile proje oluşturmadan önce yukarıda da değindiğimiz gibi node.js bilgisayarımızda yüklü (react geliştirme ortamının hazır olması) olması gerekmektedir. React baştan sona aşamalı olarak kullanılabilecek şekilde tasarlanmıştır. Yani ihtiyacımıza göre kullanmak mümkündür.(İstediğimiz kısımları kurup çalıştırabiliriz.)

- create-react-app komutu ile hızlı bir şekilde bir proje oluşturmak mümkündür.
  Terminal ekranında projeyi oluşturacağımız dizine fokus olduktan sonra aşağıdaki komutu çalıştırıp bizim için projenin oluşturulmasını bekleriz.

```

```
