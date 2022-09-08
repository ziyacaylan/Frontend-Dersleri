# <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" /> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

# İÇİNDEKİLER

**---> Bu kısım, daha sonra güncellenecektir\_**

---

# 5. REACT JS DERSLERİ

## React Nedir ve React Geliştirme Ortamının Hazırlanması

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
