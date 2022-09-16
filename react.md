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
npx create-react-app [proje_ismi]  // proje_ismi yazan bölüme projemizin ismini yazarak projenin oluşturulmasına başlanır. Bu işlem kısa bir süre sürecektir.
```

- Kurulum tamalandığında proje klasörümüz içerisine fokus olalım.

```
cd [proje_ismi]  // proje isiminin olduğu klasörün içerisine girdik.
```

- *npm start*komutu ile oluşturduğumuz projemizi çalıştırırız. Çalışma tamamlandığında browserda ilk ekrnımız bizi karşılayacaktır.
  Konsolda proje çalıştığında aşağıdaki çıktıyı alacağız.

```
Compiled successfully!

You can now view hello-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.35:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Projenin klasöy yapısı aşağıdaki gibi olacaktır.

![react-proje-klasor-yapısı](./React-Dersleri/assets/react-klasor-yapisi.jpg)

**Proje Yapımızı biraz tanıyalım**

- _node_modules_ klasörü bizim bağımlılıklarımızın olduğu bir klasördür. İhtiyaç duyduğumuz bağımlılıklarımızı yüklediğimizde bu klasör altında toplanacaktır.Proje _gitHob_' a yüklenirken genelde yüklenmez.
- _public_ klasörümüz ise build edildiğinde çıktının oluşacağı klasördür.
- _src_ klasörü ise işte bizim geliştirme ortamımızda kullanacağımız bolca işlem yapacağımız klasördür. Konular ilerledikçe içerisindeki dosyalara denineceğim.

Diğer dosyalara sırası geldikçe konu içerisinde bağsedeeğim.

## 5.3-Component Nedir?

Companenetler, uygulamamızı tekrar kullanılabilir parçalara ayırmamıza ve her parçayı ayrı ayrı dizayn etmemize izin veren yapılardır. Sitenizi büyük bir puzzle olarak düşünün. React ile önce teker teker puzzle parçalarını oluşturup ardından bunları birleştirerek büyük resmi oluşturacaksınız.

Componentler aslında fonksiyon gibi çalışır. Parametre gönderilebilir (bunları props diye adlandırıyoruz), yapacağı spesifik işlemi yapar ve ekranda neler görüneceğini açıklayan React elementleri return ile döndürürler.

**Component Oluşturmak/Kullanmak**
İlk kompanentimizi oluşturmadan önce projemizi oluşturduğumuzda gelen hazır yapımıza bir bakalım ve inceleyelim. Daha sonra ise kendi components klasörümüzü oluşturarak içerisinde kendi ilk kompanentimizi oluşturalım.

```
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

_App.js_ dosyamızın içeriği yukarıdaki gibidir. Browser'ımız çalıştığında ekranda olan görüntüyü bize sunan yapı şu anda bu fonksiyondur.

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

_index.js_ dosyamız içerisine import edilen _App.js_ ReactDOM ile sayfamızdaki ilgili element seçilip içerisinde metodumuz çalıştırılır. Yukarıdaki _index.js_ kodlarından da görüldüğü üzere _root_ _id_'si yakalanmış ve bu element içerisinde hazırlanan kompanent yerleştirilmiştir. Şimdilik bu kısımda herhangi bir işimiz yoktur.  
Önce _App.js_ içerisindeki bu fonksiyonu silerek kendimiz yeniden yazalım ve browser'ımız üzerinde değişiklikleri gözlemleyelim.

```
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

Browserımızdaki çıktı :  
![hello-react](./React-Dersleri/assets/hello-react-browser.jpg)

**Şimdi ise kendi componentimizi oluşturalım :**

- önce componenetlerimizi tutacağımız bir _components_ isimli klasör ekleyelim ve içerisine örnek olarak _Header.js_ isimli bir dosya ekleyelim. Bu dosya içerisinde kendi fonksiyonumuzu yazalım ve bu fonksiyonu dışarıya export etmeyi unutmayalım.

```
function Header() {
  return (
    <div>
      <h2>Merhaba Ben Header Birleşeniyim.</h2>
    </div>
  );
}

export default Header;
```

Atık komponentimiz hazır ve bunu _App.js_ içerisine import ederek kullanabiliriz.

```
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header></Header>
    </div>
  );
}

export default App;
```

Ekran çıktımız :  
![hello-react](./React-Dersleri/assets/hello-react-header-browser.jpg)

**ANAHTAR NOTLAR:**

- Kompanenet içerisinde fonksiyon yazarken dikkat etmemiz gereken fonksiyon isminin büyük harf ile başlayarak yazılmasıdır. Bunun sebebi ise biz daha sonra _render_ ederken bazen yazmış olduğumuz kompaneneti render edeceğiz bazen ise bir html elementini render edeceğiz. Bunların karışmaması gerekmektedir. Bu kod yazım standartlarına uymamız gerekmektedir.
- Kompanenetimizin _render_ edilebilmesi için birde kapsayıcı bir elemana ihtiyacımız vardır.

```
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header></Header>
    </div>
  );
}

export default App;
```

Yukarıdaki kod satırında kapsayıcı eleman _div_ elementimizdir. Şayet kullanmak istemezsek alternatifleri de mevcuttur. İstersek boş bir element olarak (_<> </>_)
da kullanabiliriz. Ya da *React.Fragment*kullanabiliriz.

```
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Header></Header>
    </>
  );
}

```

- Elemntlerimizi oluşturuken Javascriptin özel tanımlı keyword'lerini kullanmamamız gerekir. Aşağıdaki kod bloğunda label'ın for attribut' ü yazılmıştır. html sayfası üzerinde _Name_'e tıkladığımızda _input_'a fokus oluyoruz ancak konsol ekranını incelediğimizde hata alırız.

```
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header></Header>
      <label for="my-input">
        Name
        <input id="my-input"></input>
      </label>
    </div>
  );
}

export default App;
```

![hello-react](./React-Dersleri/assets/react-attribute-hata.jpg)

Bu elemen içerisinde _for_ yerine _htmlFor_ attribute'ünün kullanmalıyız.

```
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Header></Header>
      <label htmlFor="my-input">
        Name
        <input id="my-input"></input>
      </label>
    </div>
  );
}

export default App;
```

**Componentlerde Değişken Render Etmek**
Bunu örnek kodlarımız üzerinde inceleyelim ve uygulayalım. _App.js_ içerisnde tanımladığımız değişkenleri süslü parantezler içerisinde yada **Template literals**'ler içerisinde aşağıdaki gibi tnımlayarak kullanabiliriz.

```
import "./App.css";

import Header from "./components/Header";
const myName = "Ziya";
const mySurname = "Çaylan";
function App() {
  return (
    <>
      <h1>
        Merhaba, Benim Adım {myName} {mySurname}
      </h1>
      <hr />
      <h1>{`Merhaba, Benim Adım ${myName} ${mySurname}`}</h1>
    </>
  );
}

export default App;
```

**Koşullu Render İşlemi**

```
import "./App.css";

import Header from "./components/Header";
const myName = "Ziya";
const mySurname = "Çaylan";
const isLoggedIn = false;  // true olursa Merhaba, Benim Adım Ziya Çaylan, false olursa 'Giriş yapmadızın...' yazacaktır.
function App() {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Merhaba, Benim Adım ${myName} ${mySurname}`
          : "Giriş yapmadızın..."}
      </h1>
    </>
  );
}

export default App;
```

## 5.4-Props Nedir? Nasıl Kullanılır?

Oluşturacağımız komponenetlerde parametre geçmek isteyebiliriz.Props’lar , bir componentten başka bir componente veri aktarımı yapmamızı sağlar. Props’lar salt okunur (read-only) dir. Değiştirilemezler. Data; ana componentten alt componentlere geçerken alt componentler tarafından herhangi bir değişime uğramaz.

İlk oluşturduğumuz projemize **components** klasörüne bir _User_ componenti ekleyerek bunun üzerinde _props_'ları inceleyelim.  
**User.js** içeriğine fonksiyonumuzu yazalım ve dışarıdan göndereceğimiz _props_'ları alarak kullanalım.

```
const User = (props) => {
  return (
    <>
      <h1>
        {props.isLoggedIn
          ? `${props.name} ${props.surname}`
          : "Giriş yapmadınız..."}
      </h1>
    </>
  );
};

export default User;
```

Daha sonra ise bu componeneti App.js içerisine import ederek komponentimize props'ları gönderelim.

```
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <User name="Ziya" surname={"ÇAYLAN"} isLoggedIn={true} />
    </>
  );
}

export default App;

```

Browserda projemizi çalıştırdığımızda _isLoggedIn=true_ gönderdiğimizde ekranda ismimizin yazdığını gözlemleyebilirsiniz. _Eğer isLoggedIn=false_ gönderir isek ekranda bu sefer _"Giriş yapmadınız..."_ yazacaktır. Komponente props göndermenin diğer bir şekli de aşağıda verilmiştir.

```
const User = ({ name, surname, isLoggedIn }) => {
  return <h1>{isLoggedIn ? `${name} ${surname}` : "Giriş yapmadınız..."}</h1>;
};

export default User;
```

Her defasında _props_ yazacağımıza süslü parantezler içerisinde gönderdiğimiz parametreleri yazabiliriz. Yazdığımız bu parametrelerin sıralı olmasına gerek yoktur. Karmaşık sıra ilede yazılabilir.

**Props olarak Bir Array Geçmek**  
Komponentimize prop olarakbir array geçmek istediğimizde bizden benzersiz bir _key_ bekleyecektir. Şimdi bunu aşağıdaki kodlarda inceleyelim.

```
import "./App.css";
import User from "./components/User";

//const friends =
function App() {
  return (
    <>
      <User
        name="Ziya"
        surname="ÇAYLAN"
        isLoggedIn={true}
        age={39}
        friends={[
          "Ali",
          "Veli",
          "Hasan",
          "Hüseyin",
          "Eda",
          "Seda",
          "Meda",
          "Canan",
        ]}
      />
    </>
  );
}

export default App;
```

Yukarıda _App.js_ dosyamozda _array_'imizi _prop_ olarak **User.js** komponenetimize geçtik. bizden beklediği keydeğerinide _index_ olarak verdik ve elementimizde kullandık. İnceleyiniz: Bu _key_ değeri mutlaka en dıştakı elemana verilmesi gereklidir.

```
const User = ({ name, surname, isLoggedIn, age, friends }) => {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${name} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend, index) => (
        <h3 key={index}>
          {" "}
          {index} - {friend}
        </h3>
      ))}
    </>
  );
};

export default User;
```

Yukarıda kullandığımız ve komponenetin bizden beklediği _key_ değeri illa _index_ olmak zorunda değildir. Bunun yerine benzersiz bir parametrede verebiliriz.

```
import "./App.css";
import User from "./components/User";

const friends = [
  { id: 1, fname: "Metin" },
  { id: 2, fname: "Ali" },
  { id: 3, fname: "Veli" },
  { id: 4, fname: "Emel" },
  { id: 5, fname: "Temel" },
  { id: 6, fname: "Kazım" },
];

function App() {
  return (
    <>
      <User
        name="Ziya"
        surname="ÇAYLAN"
        isLoggedIn={true}
        age={39}
        friends={friends}
      />
    </>
  );
}

export default App;
```

Yukarıdaki kod satırından da görüleceği üzere bu sefer _props_ olarak komponentimize _object_'ten oluaş bir _array_ gönderdik. Nu object içerisinde _id_ bizim kullanabileceğimiz benzersiz bir parametredir. Doylayısı ile index yerine bunu kullanabiliriz.

```
const User = ({ name, surname, isLoggedIn, age, friends }) => {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${name} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
};

export default User;
```

**Prop Types**  
Gönderdiğimiz _props_'ların tiplerini belirleyebileceğimiz araç _propTypes_'dır. Yazmış olduğumuz komponenti sadece biz kullanmayacağımızı düşünürsek; örneğin bir grup çalışması yapıyoruz ve bazı kısımları biz baılarınıise arkadaşlarımız geliştiriyor varsayalım. Gönderilecek props'ların tiplerini eğer baştan belirtir isek geliştirme aşamasında farklı bir geliştirici komponentimizi kullanırken yanlış tipte bir parametre kullanır ise hata vereektir. Böylece hatayı düzeltmek zorunda kalacağından hatalarınönüne de geçilmiş olur. Aşağıdaki kodları inceleyiniz.

```
import "./App.css";
import User from "./components/User";

const friends = [
  { id: 1, fname: "Metin" },
  { id: 2, fname: "Ali" },
  { id: 3, fname: "Veli" },
  { id: 4, fname: "Emel" },
  { id: 5, fname: "Temel" },
  { id: 6, fname: "Kazım" },
];

function App() {
  return (
    <>
      <User
        fname={123}
        surname="ÇAYLAN"
        isLoggedIn={true}
        age={39}
        friends={friends}
      />
    </>
  );
}

export default App;
```

Yukarıdaki kod satırında _fname_ **Number** olarak gönderilmiştir.

```
import PropTypes from "prop-types";

function User({ fname, surname, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
};
export default User;
```

Yanlış yani _invalid_ gelen parametreden dolayı konsol ekranında görüntülenecek hata mesajı aşağıdaki gibi olacaktır.  
![react-propsTypes-error](./React-Dersleri/assets/react-props-types-err.jpg)

**Prop Types: isRequired**

Proptypes lerini belirtirken gönderilmesi zorunlu alanları da işaretleyebiliriz. Böylece paramatre olarak mutlaka gönderilmesi gerekecektir. Bu işlem için propsTypes'lar belirtilirken tipten sonra nokta koyarak _isRequired_ yazmamız yeterli olacaktır.

```
function User({ fname, surname, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
};
export default User;
```

**Prop Types: oneOfType**
Gönderilen parametreler içerisinde bazılarını yada duruma göre istenilen bazı parametreleri bir veri tipinde değilde birden fazla veri tipinde kabul edilebilir. Böyle bir durumda ise _oneOfType_ keyword'ünü kullanırız.

```
function User({ fname, surname, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
};
export default User;
```

**Prop Types: shape**
Obje olarak gönderdiğimiz porps'larda shape adında bir özelliğimiz daha vardır. Örneğin obje olarak bir adres bilgisi props' u gönderelim. Objemizin _title_ ve _zicode_ isimli iki adet _key_ değeri olsun bait olarak. Bunlarında tiplerinin belirtilmesi gerektiğinde _shape_ özelliğini kullanırız.

```
import "./App.css";
import User from "./components/User";

const friends = [
  { id: 1, fname: "Metin" },
  { id: 2, fname: "Ali" },
  { id: 3, fname: "Veli" },
  { id: 4, fname: "Emel" },
  { id: 5, fname: "Temel" },
  { id: 6, fname: "Kazım" },
];

function App() {
  return (
    <>
      <User
        fname={1231}
        surname="ÇAYLAN"
        isLoggedIn={true}
        age={39}
        friends={friends}
        address={{ title: "Çekmeköy/İSTABUL", zipcode: 34660 }}
      />
    </>
  );
}

export default App;
```

```
import PropTypes from "prop-types";

function User({ fname, surname, isLoggedIn, age, friends, adress }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zipcode: PropTypes.number,
  }),
};
export default User;
```

**Default Props**
Herhangi bir tanım yapılmamışbir prop'a default bir değer atanabilir.

```
import "./App.css";
import User from "./components/User";

const friends = [
  { id: 1, fname: "Metin" },
  { id: 2, fname: "Ali" },
  { id: 3, fname: "Veli" },
  { id: 4, fname: "Emel" },
  { id: 5, fname: "Temel" },
  { id: 6, fname: "Kazım" },
];

function App() {
  return (
    <>
      <User
        fname={1231}
        surname="ÇAYLAN"
        age={39}
        friends={friends}
        address={{ title: "Çekmeköy/İSTABUL", zipcode: 34660 }}
      />
    </>
  );
}

export default App;
```

Yukarıdaki kod satırlarında _isLoggedIn_ değerinin gönderilmediğine dikkat ediniz. Aşağıdaki komponenet içeriğimizde default değer olarak bu parametreye _false_ atanmış ve yapılan kontroller ile erken _render_ işlemi gerçekleştirimiştir.

```
import PropTypes from "prop-types";

function User({ fname, surname, isLoggedIn, age, friends, adress }) {
  if (!isLoggedIn) {
    return <h2>Giriş yapmadınız...</h2>;
  }
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zipcode: PropTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
};
export default User;
```

## 5.5-State Nedir? Nasıl Oluşturulur?

_State_, kabaca komponenetlerimiz değerinin değişip değişmediği tutan bir javascript objesidir diyebiliriz. Komponenetin herhangi bir anında değerinin değişme potansiyeli olan bir veri bir state olarak tanımlanır ve değeri değiştiği anda bu komponente yansıtılır.  
Bu tanımı daha iyi anlayabilmek için uygulama üzerinde görmeye çalışalım. Bir proje oluşturup bunun üzerinde anlatacağım.
Repo içerisinde _state-nedir_ adlı klasörün içerisine terminalden fokus olalım.  
Terminal Ekranına:

```
npx create-react-app .  // proje ismi kısmına nokta koyarsan yeni bir klasör içerisinde değilde fokus olduğu klasörün içerisine proje oluşturulacaktır.
```

Yukarıdaki komut ile projemizi oluşturduk. _App.js_ içerisinde _state_ kavramını inceleyeceğiz, bu nedenle komponentimizin default olarak içerisinde gelen verileri temizleyelim.

- Sayfamıza bir tane _h1_ etiketi ekleyelim içerisinde _"Benim adım : Ziya, Yaşım : 39"_ yazdıralım. Ve stateleri kullanarak isim ve yaş kısımlarını değiştirelim.
- Değiştirlem işlemi h1 elementimizin altına koyacağımız iki butona (buton-1: İsmi Değiştir, Buton-2: Yaşı Değiştir) tıklandığında gerçekleşecek.

```
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ziya");
  const [age, setAge] = useState(35);

  return (
    <div className="App">
      <h1>
        Merhaba {name} Yaşım : {age}
      </h1>
      <button onClick={() => setName("Rüya")}>İsmi Değiştir</button>
      <button onClick={() => setAge(39)}>Yaşı Değiştir</button>
    </div>
  );
}

export default App;
```

**_useState_** kavramını öncelikle sayfamıza import ediyoruz.

```
import { useState } from "react";
```

fonksiyonumuz içerisine return işleminden öncesine state'imizi tanımlamamız gerekiyor. Bu kısımda köşeli parantezler içerisine ilk olarak parametre ismi verilir daha sonra ise bu parametreyi değiştirecek olan callback fonksiyon ismi yazılır. Burada fonksiyon ismi yazılırken genel yazım standardı dikkate alınarak yazılmaya özen gösterilmelidir. Yani değeri değşecek parametremiz bizim burada _name_ olduğundan _setName_ şeklinde **_camelCase_** kullanılarak isim yazılır. Bu bir kural değil genel yazım standartlarından gelen yazım şeklidir.  
[Projeyi linkten inceleyiniz.](./React-Dersleri/state-nedir/)

\***\*ANAHTAR NOT : \*\***
_State_' lerde veri tipi ne ise o veri tipinde atamayapmamız gerekmektedir. Yapılan en büyük hataların başında değiştirilecek veri tipine dikkat etmeden değişikliğe gitmeye çalışmak gelir.
İkinci en büyük hatalardan biri de state ile değişiklik yaparken mevcut verinin korunması gerektiği kısmıdır. Yani state ile durum güncellemesi yaparken şayet eski veri üzerine ilave yapılıyorsa bu verinin varlığı unutulmamalıdır. Aşağıdaki örnekte bu konuya değinilmiştir.

**Array States**
Bir array'i state ile değerlerini değiştirmek istersek bunu nasıl yapılacağını program üzerinde görelim.

```
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ziya");
  const [age, setAge] = useState(35);
  const [friends, setFriends] = useState(["Emel", "Temel"]);

  return (
    <div className="App">
      <h1>
        Merhaba {name} Yaşım : {age}
      </h1>
      <button onClick={() => setName("Rüya")}>İsmi Değiştir</button>
      <button onClick={() => setAge(39)}>Yaşı Değiştir</button>
      <hr />
      <br />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe", "Fatma"])}> // ... ile eski veri silinmeden eklemeler yapılmıştırk. ****DİKKAT****
        Yeni Arkadaşları Ekle
      </button>
    </div>
  );
}

export default App;
```

Yukarıdaki örnekte _friends_ arrayi için bir state oluşturulmuş ve içerisindeki array verisi üzerine eklemeler yapılmıştır. Ekleme yapılırken eski verinin kaybolmadığına dikkat ediniz.  
[Projeyi linkten inceleyiniz.](./React-Dersleri/state-nedir/)

**Object States**
Şimdide bir state'i object olarak belirleyip nasıl güncelleyebiliriz, nanüple edebiliriz ona bakalım.

```
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ziya");
  const [age, setAge] = useState(35);
  const [friends, setFriends] = useState(["Emel", "Temel"]);
  const [address, setAddress] = useState({ city: "İstanbul", zipcode: 34660 });

  return (
    <div className="App">
      <h1>
        Merhaba {name} Yaşım : {age}
      </h1>
      <button onClick={() => setName("Rüya")}>İsmi Değiştir</button>
      <button onClick={() => setAge(39)}>Yaşı Değiştir</button>
      <hr />
      <br />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe", "Fatma"])}>
        Yeni Arkadaşları Ekle
      </button>
      <hr />
      <br />
      <br />
      <h2>Address</h2>
      <h3>
        Adress : {address.city} / {address.zipcode}
      </h3>
      <button onClick={() => setAddress({ ...address, city: "Kastamonu" })}>
        Değişiklik Yap
      </button>
    </div>
  );
}

export default App;
```

Yukarıdaki kod satırında _object_ olarak tanımlanan _state_ içerisinde address _property_' si değiştirilmiştir. Değişiklik aynı kurallar çerçevesinde yapılmıştır.  
[Projeyi linkten inceleyiniz.](./React-Dersleri/state-nedir/)  
Şimdide bir sayaç uygulaması yaparak state kavramını pekiştirmeye çalışalım. Mevcut projemiz üzerine yeni bir komponenet ekleyerek bu komponenti düzenleyelim.

```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
```

Yukarıdaki kod satırlarında da görüldüğü gibi arttırma butonuna tıklandığında sayaç artmakta ve state sayacı yanı _<h1>_ etiketimizin içeriğini güncellemektedir. Azaltma butonuna basıldığında ise state'imiz değeri azaltmaktadır.

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Counter from "./components/Counter";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Hazırladığımız counter componentini bu sefer i*ndex.js* dosyası içerinde çalıştırdık. _App.js_ komponentini burada çağırma işlemini iptal ettiğimize dikkat ediniz.

State işlemini yapan fonksiyonumuzu herzaman element içerisinde yazmamıza gerek yoktur. İstersek bu fonksiyonu dışarıda da yazabilriz. Öyleki ilerleyen zamanlarda büyük projelerde çok fazla data ile çalışmak gerektiğinde işimizi kolaylaştırak yöntem tercih edilecektir.

```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
```

Yukarıda fonksiyonlar element içerisinde değilde dışarıda yazılmıştır. increase ve decrease fonksiyonlar elementin onClick özelliğine verilmiştir.

**Input için State Tanımı Yapmak**
Bu kısımda ise inputlar ile çalışırken state kavramını nasıl kullanabiliriz bunu ele alalım. Bunun için projemize _InputExample.js_ isimli bir komponent ekleyin _index.js_ altında bu komponentimizi çağıralım.

```
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Ziya");
  const [surname, setSurname] = useState("ÇAYLAN");
  return (
    <div>
      <br />
      <br />
      Please enter your name
      <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      Please enter your surname
      <br />
      <input
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
      />
      <br />
      <br />
      <br />
      {name} {surname}
    </div>
  );
}

export default InputExample;
```

Alıştırma olması açısından state işlemini yapanbu fonksiyonlarımızı bir de dışarıda yazalım.

```
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Ziya");
  const [surname, setSurname] = useState("ÇAYLAN");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeSurname = (event) => setSurname(event.target.value);
  return (
    <div>
      <br />
      <br />
      Please enter your name
      <br />
      <input value={name} onChange={onChangeName} />
      <br />
      Please enter your surname
      <br />
      <input value={surname} onChange={onChangeSurname} />
      <br />
      <br />
      <br />
      {name} {surname}
    </div>
  );
}

export default InputExample;

```

Yukarıdaki kodları biraz daha kısaltalım. Yazacağımız state fonksiyonu iki tane ve diyelimki bizim birçokinput v.s. form elementimiz olsun. Herbiri için fonksiyon yazmak maliyetli bir iş olacaktır. Bu durumda bir fonksiyon yazıp bu fonksiyon üzerinden state işlemini gerçekleştirmek mantıklı olacaktır.

```
import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      [event.target.surname]: event.target.value,
    });
  };
  return (
    <div>
      <br />
      <br />
      Please enter your name
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      Please enter your surname
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
```

Bir fonksiyon ile işi böylece tamamladık. Bu tarz kullanımda dikkat etmemiz gereken kısım inputların _name_'leri de atanmıştır. İlerleyen derslerimizde bu form işlemlerini daha kolay gerçekleştiren kütüphaneler anlatılacaktır. Ancak arka planın nasıl işlediğinin bilinmesi adına bu uygulamalar öen marz etmektedir.

## 5.6-Lifecycle

**useEffect**
React komponenetlerinin yaşam döngülerini ele alacağız. Yani bir komponenet güncellendiğinde, oluşturulduğunda yada kaldırıldığında durumlarını yakalayıp istersek işlem yapacağız. Proje üzerinde inceleyelim.

```
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ziya");

  useEffect(() => {
    console.log("Component mount edildi.");
  }, []);

  useEffect(() => {
    console.log("Component mount edildi.");
  }, [number]);

  useEffect(() => {
    console.log("Component mount edildi.");
  }, [name]);

  return (
    <div className="App">
      <h1>increase number</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
      <h2>{name}</h2>
      <button onClick={() => setName("Ziya ÇAYLAN")}>Change the name</button>
    </div>
  );
}

export default App;
```

Yukarıdaki kodlarda da görüldüğü üzere yeni projemizin _App.js_ komponenti altında elementlerimizi ekleyip yaşam döngülerini inceleyelim.Burada elementin mount olduğu anda yani DOM üzerinde oluşturulduğu anı yine react altındaki bir _hook_ ile yakalayıp işlem yapabiliyoruz. _useState_' de olduğu gibi bu seferde _useEffect_ keywor'ünü kullanacağız.

```
useEffect(() => {
    console.log("Component mount edildi.");
  }, []);
```

Yukarıdaki kod satırı fonksiyonumuzda return işleminden önce yazılmalıdır. Bir üstteki kod penceresinden de gözlemleyiniz. Burada _useEffect_'leri oluştururken dikkat etmemiz gereken başka bir husus ise bir kontrole sokmamamızdır. Yani _if_ veya farklı bir kontrol içerisinde _useEffect_' i belirtemeyiz.  
useEffect içerisinde fonksiyonumuz yazıldıktan sonra, süslü parantezlerden sonra bir virgül konularak köşeli parantez yazılır. Köşeli parantez içerisinde bir değer belirtilmez ise bu sefer rayfa yüklendiğinde, elementler oluştuğunda fonksiyonumuz çalışacaktır. Yani her element mount olduğunda fonksiyonumuz bir kere çalışacaktır.

```
useEffect(() => {
    console.log("Component mount edildi.");
  }, [number]);
```

useEffect içerisinde bir değer belirtir isek bu defa sadece o elementi takip edecek ve staeinin durumunu yakalayacaktır.

**Component Unmount**
Komponenetlerin yaşam döngüsü bittiğindede aynewn mount edildiği andaki gibi yakalayabilir ve bu bilgiyi programımız içerisinde kullanabiliriz. Şimdi bu işlemi naıl yapıyoruz bir örnek program üzerinde incelemeye çalışalım.

- Projemize components dizini altına yeni bir Counter.js komponenti ekleyelim.
- _App.js_ içerisindeki counter elementimii buraya taşıyalım ve App componentimize sadece bir button ekleyelim.
  _App.js_ aşağıdaki gibi olacaktır.

```
import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.js";

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      {isVisible && <Counter />}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
```

_Counter.js_ komponentimizi ise aşağıdaki gibi düzenleyelim.

```
import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component mount edildi.");
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Component state güncellendi.");
  }, [number]);

  return (
    <div>
      <h1>increase number</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default Counter;
```

Olayımızı şu şekilde kurguladık. _setInterval_ metodumuzu kullanarak counter değerini her bir saniyede bir arttırıyoruz. Bu işlem için konsol ekranından elementin her seferinde render edilme işlemi takip edebiliriz. Aynı zamanda _App.js_ dosyamızdaki buton vasıtası ile visible/inVisible olayını takip edip elementin unmount olduğu anı gene konsol ekranından gözlemleyebiliriz.  
Aklımıza şu aşamada gelen soru şu _"Neden bir elementin unMount yani DOMdan kaldırılması işlemine ihtiyacımız olsun ?"_ Bu sorunun cevabını ise örnek olarak şu şekilde vermeye çalışalım. Diyelim ki bir butonumuz var ve mount olduğu anda bir data çekiyor ve biz bu datayı biyerlerde depoluyoruz. Ancak elementiunmount ettiğimizde bu işlemin yani data çekme işleminin de sonlandırılması gerekiyor olabilir. Tabi senaryoları çoğaltabiliriz. Bu veya benzeri durumlarda ihtiyaç duyabiliriz. Bunun için nasıl çalıştığını bilmemiz gerekmetedir.
