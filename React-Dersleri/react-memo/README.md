## 5.11-Memoization

React componenetlerinin gereksiz yere render edilmesini önlemek ve bu komponenetleri daha performanslı hale getirmek için _memoization_ yöntemi kullanılır. Hesaplanması uzun süren işlevlerimizin sonuçlarını saklayarak aynı girdiler için aynı işlev çağrıldığında: işlevin tekrar çalıştırılmadan saklanılan sonucunun dönülmesine Memoization denir.Fakat sonuçların saklanması işlemi ucuz değildir. Bu yüzden sadece maliyetli ve aynı girdilerle aynı çıktıları üreten işlevlerde kullanılması önerilir.
Konuyu pekiştirebilmek için yeni bir proje üzerinde uygulamalı olarak görelim.

- Yeni bir proje oluşturup "App.js" kısmında komponentimize _h1_ elementi ekleyip içerisinde bir _number_ değeri görüntüleyelim.
- _h1_ elemenitimizde tuttuğumuz number değerini arttırmak için hemen altına bir _button_ ekleyelim. Butona her bastığımızda number bir artacak şekilde stateimizi de tanımlayalım.
- Daha sonra bir _Header_ komponenti oluşturup _App.js_ içerisinde sayfanın üst kısmında gösterelim. Ve komponentimiz içerisinde saya arttırıldığında render edildiğini görmek için bir log tanımlayalım.

```
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
```

Header komponeneti :

```
import React from "react";

function Header() {
  console.log("Header Component Re-rendered");
  return <div>Header</div>;
}

export default Header;
```

Butona _number_ değerini her bir arttırdığımızda konsol ekranından **_Header Component Re-rendered_** yazdığını gözlemleyebiliriz. Yani biz her arttırma işleminde üzerinde herhangi bir değişiklikolmayan Header komponenti de gereksiz yere render edilmektedir.  
Bu gereksiz renderin önüne geçmek için Header komponentimizi _React.memo()_ ile sarmalayarak dışa export etmemiz gerekmektedir(_React.memo(Header)_).

```
import React from "react";

function Header() {
  console.log("Header Component Re-rendered");
  return <div>Header</div>;
}

export default React.memo(Header);
```

Peki render ne zaman yeniden render edilir ? sorusunu sorarsak ise; nezaman _Header_ komponentine bir gönderdiğimiz propertilerde değişiklik olur ise ozaman yeniden render edilir.

```
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header number={number <= 5 ? 0 : number} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
```

```
import React from "react";

function Header({ number }) {
  console.log("Header Component Re-rendered");
  return <div>Header - {number}</div>;
}

export default React.memo(Header);
```

Yukarıdaki kod bloğunda _Header_ 5 olana kadar _Header_ render edilmeyecek ancak 5'ten sonra gönderdiğimiz prop değişeceğinden dolayı komponenet re-render edilecektir.

**useMemo**
Daha iyi anlamlandırabilmek için örneğimiz içerisinew aşağıdaki yapıyı ekleyelim.

- _App.js_ komponentimiz içerisine bir obje ekleyelim ve bu objeyi _Header_ komponentimize _prop_ olarak geçelim.
- Daha sonra bu gönderdiğmiiz objeyi Header altında görüntüleyelim.

```
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  const data = { name: "Ziya" };
  return (
    <div className="App">
      <Header number={number <= 5 ? 0 : number} data={data} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
```

```
import React from "react";

function Header({ number, data }) {
  console.log("Header Component Re-rendered");
  return (
    <div>
      <h2>Header - {number}</h2>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default React.memo(Header);
```

Yukarıdaki gibi kodlarımızı düzenlediğimizde _Header_ komponentimizin her seferinde render edildiğini konsoldan da gözlemleyebiliriz. Ama sayaç 5 i geçmeden _Header_ komponentimiz _render_ edilmiyordu ancak şimdi içeriği değişmeyen bir obje gönderdiğimizde de render ediliyor. Bunun sebebi objemizden kaynaklanmaktadır. Şöyle düşünelim. _true_ === _true_ _true_'dur. Ancak _[] === []_ _false_'dir. Veya _{} === {}_ _false_'dur. Yani objenin bellek üzerindeki referansı değişmektedir. Bu nedenlede render edilmektedir. Peki bundan nasıl kurtulacağız :

- **Yöntem 1 :** gönderdiğimiz objemizi fonksiyon dışında tamınlamalıyız.

```
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
const data = { name: "Ziya" };
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header number={number <= 5 ? 0 : number} data={data} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
```

- Eğer bunu yapamıyorsak yani tanımladığımız objemiz illa fonksiyon içerisinde olması gerekiyorsa ve fonksiyon içerisindeki birveriyide kullanarak işlem yapıyorsa bu durumda _useMemo_ hook'umuzu kullanmalıyız.

```
import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return { name: "Ziya" };
  }, []);
  return (
    <div className="App">
      <Header number={number <= 5 ? 0 : number} data={data} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
```

Ekranı gözlemlediğimizde _Header_ her defasında render edilmediğini görebilirsiniz. Ancak biz depandency _array_'imize örnek olarak _number_'ı geçelim. Bu sefer _number_ verisi değiştiğinden komponentin render edildiğini görebiliriz.

**useCallback**
Şimdide örneğimizi aşağıdaki gibi düzenleyelim.

- Header komponentimize number değerini arttırdığımız butonu taşıyalım ve Header komponenti üzerinden tıklandığında App.js komponenti üzerindeki number değeri arttırılacak şekilde düzenleme yapalım.

```
import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return { name: "Ziya" };
  }, []);
  return (
    <div className="App">
      <Header increment={() => setNumber(number + 1)} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
    </div>
  );
}

export default App;
```

```
import React from "react";

function Header({ increment }) {
  console.log("Header Component Re-rendered");
  return (
    <div>
      <h2>Header</h2>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default React.memo(Header);
```

Şimdi number değerini arttırmak için butona her bastığımızda Header'ın yeniden render edildiğini görebiliriz. Bunun sebebi ise Header komponentine gönderdiğimiz fonksiyon her seferinde yeniden hesaplandığı içindir. Aslında fonksiyonumuz her defansıda aynı fonksiyon fonksiyon değişmiyor.Sadece hesapladığı veri değişiyor.  
Bu durmdan kullanmak için _useCallback()_ hook'unu kullanabiliriz. Bu durumda _number_'ı hesaplayıp göndreceğimiz _increment_ fonksiyonunu _return_'den önce tanımlayıp burada _useMemo_ gibi tanımlayıp bunun içerisinde setNumber için fonksiyonumuzu yazarız.

```
import { useState, useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
    </div>
  );
}

export default App;

```

Böylece callback fonksiyonumuz hesaplanır ve değer gönderilir ancak fonksiyon içeriği değişmediğinden Header tekrar tekrar render edilmemiş olur.
