**Context Nedir?**
Context Api bir state yönetim aracıdır ve global state'i yönetmek için kullanabileceğimiz öğrenmesi en kolay state yönetim aracıdır.  
React uygulamalarında state'ler prop'lar yardımıyla parent (üst) componentlardan child (alt) componentlara aktarılır. Uygulama genelinde state'nin aktarıldığı component seviyesi fazla ise yani state birden fazla iç içe componenta aktarılmak isteniyorsa uygulamamız yönetilemez hale gelebilir. React Context'ler component ağacında istediğimiz veriyi prop'lar üzerinden taşımadan componentlar arasında taşımayı sağlar.

**Context Provider**
Context Provider oluşturduğumuz context'i kullanacak componentların erişebilmesini sağlayan, context güncellemelerinde bu componentların yeniden render olmasını sağlayan ve oluşturduğumuz context'ten türeyen bir component'tır. Bu component value isminde bir prop alır ve bu prop ile context değerleri child componentlara aktarılır. Burada Context Provider componentının context'i kullanacak componentların parent'ı olmasına dikkat edilmesi gerekir. Aksi takdirde componentlar context'e erişemezler.

Daha iyi anlayabilmek adına bir proje üzerinde uygulayalım. Projemizin içeriği aşağıdaki gibi olacaktır.

- Butona tıklandığında sayfamızın rengini değiştiren bir Theme uygulaması yapalım.
- Bu projemizde butona tıklandığında sayfanın rengini değiştirecek olan props ları componenetlere iletmekiçin Context yapımızı kullanacağız.
- Sayfamıza birde Header komponenti ekleyip aynı butonu buraya da ekleyerek iki komponent üzerinden de benzer butonlara tıklandığında o anki theme rengi ne ise değiştirelim.
- _src_ dizinimiz altında _context_ klasörü altına _ThemeContext.js_ dosyamızı oluşturp context'imizi oluşturalım.
- Daha sonra bu contet'imizi kullanacağımız komponentlere import edeceğiz.

_ThemeContext.js_

```
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
```

**App.js**

```
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;

```

Yukarıda _<ThemeProvider></ThemeProvider>_ içerisinde gelen bütün komponenetler children olarak gelecektir.

_Container.js_

```
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import Button from "./Button";
import Header from "./Header";

function Container() {
  const { theme } = useContext(ThemeContext);
  //console.log(theme);
  return (
    // <div className={`app ${theme === "dark" ? theme : ""}`}>
    <div className={`app ${theme}`}>
      <Header />
      <hr />
      <Button />
    </div>
  );
}

export default Container;
```

_`Button.js_

```
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Theme : {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
```

_`Header.js_

```
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme : {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
```

Header ve Button içerisinde yani her iki komponenette de ThemeContext kullandığımızı görebilirsiniz. Yaptığımız bu contex'i import edip _value_' prop'unda gelen _theme_ ve _setTheme_ parametrelerini alarak komponentimiz içerisinde kullandık.

**Context Provider Side Effects**
Bu bölümdede projemize useEfect ekleyelim. Amacımız thema değişiklikliğini locaStorage'imizde saklamak.

- Context'imiz içerisinde useEffect ikullanarak theme değişikliğini localStorage' aktaralım.

```
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
```

useEffect aynı şekilde kullandık. Buradaki Provider aslında bir komponentten bir farkı yoktur. Bir komponent içerisinde ne yapabiliyorsak burada da yapabiliyoruz.

**Multi Context**
Bu bölümde ise projemizde birden fazla context yapısı kullanalım. Çünkü normal projelerimizde birden fazla context yapısı her zaman kullanacağız.

- Projemize örnek olarak bir user komponenti ekleyelim ve login veya logout simülasyonu yapalım. Şimdilik sadece oluşturacağımız contex ile bir user objesi gönderelim.

_UserContext.js_

```
import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;

```

_Container.js_

```
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

function Container() {
  const { theme } = useContext(ThemeContext);
  //console.log(theme);
  return (
    // <div className={`app ${theme === "dark" ? theme : ""}`}>
    <div className={`app ${theme}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
```

_Profile.js_

```
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "ziyac", bio: "frontend developer" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };
  //console.log(data);
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      )}
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
```

**Custom Context Hook**
_Context_'lerimiz çoğaldıkça kod fazlalığı oluşacaktır. Bu kısımda ise _Context_ kodlarımızı biraz daha nasıl yalınlaştırabiliriz buna bi bakalım.

- Komponenetlerimiz içerisinde oluşturduğumuz _Context_'i her komponentte import ediyor ve birde _useContext_ hook'unu import ediyoruz. Aslında bu işlemi de oluşturduğumuz context altında yapabiliriz. Böylece kodlarımız biraz daha yalın hale gelecektir.
  _ThemeContext.js_

```
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

_UserContext.js_

```
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
```

_Profile.js_

```
import { useState } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "ziyac", bio: "frontend developer" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };
  //console.log(data);
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      )}
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
```

_Header.js_

```
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme : {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
```
