Form işlemlerinin daha kolay yapıldığı bir kütüphanedir. Duruma göre dinamik oluşturulması, Doğrulama yapılması, Aynı formun bir kaç tane dolduran kontrolü, yetkilendirmesi gibi birçok durumu bulunabilir.  
 Formik veya benzeri çözümleri kullanmamızın bir diğer sebebi de, state kullanarak yaptığınız form kontrollerinde state her değiştiğinde component tekrardan render edilir. Formik kullanarak bunun önüne geçmiş oluyoruz.

İlk olarak kurulumile işe başlayalım. Projemizi oluşturduktan sonra kütüphaneyi kullanabilmek için projemize dahil etmemiz gerekiyor.

- **_npm install formik_** komutu ile kurulumu gerçekleştiriyoruz.
- İlk olarak dokümantasyonun bize verdiği örnekleri kullanarak biraz inceleyelim.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Enter name" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Enter Lastname" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Enter email"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById('root'));

```

Yukarıdaki kod bloğu formik dokümantasyonunun basic exaples kısmında bize verilmektedir. Bu kodu oluşturduğumuz projemizin _src_ klasörü altındaki _App.js_ dosyası içerisine kopyalayıp çalıştıralım. Aşağıdaki ekran görüntüsü bizi karşılayacaktır.

![formik](./React-Dersleri/assets/formik.jpg)

Kodları incelediğimizde formik kütüphanemizden gelen form kullanılmış ve içerisinde _Field_ isimli aslında normalde bizim _input_ yerine kullanılan bir element kullanıldığını görebiliriz. Normal form kullanımından çok farklı bir yapı olmadığını görebiliriz. Şimdi gelelim farklılıklarına; Hemen _Formik_ içerisinde _initialValues_ isimli bir hook içerisinde inputlarımızın default değerlerinin tanımlandığı görülmektedir. Burada dikkat etmemiz gereken husus _Field_ elementlerinin _name_'leri ile buradaki isimlerin aynı yazılmasıdır. Eğer farklı isimler girersek eşleşmeyeceği için value ataması yapılamayacaktır.

Bazı zamanlarda formik'i bu şekilde değilde üzerinde değişiklikler yaparak kullanmak zorunda kalabiliriz. Böyle durumlarda ise nasıl kullanabiliri biraz bunları inceleyelim. Akış sıralamamız aşağıdaki gibi olsun.

- Formiğin bize verdiği form yerine normal bir form kullanalım ve içerisinde input elementleri kullanalım. (Biz örnek olarak firstName,lastName ve mail kullanacağız. Dilerseniz siz değiştirebilir veya inputları çoğaltabilirsiniz.)
- Formiğin bize verdiği Form ve Field elementlerini kullanmamış olduk. Bu durumda formumuz submit olduğunda veri gönderebilmemiz için değişiklikler yapmalıyız.
- formumuz submit olduğunda çalışması için _onSubmit_ fonksiyonumuzun çalışmasını sağlamak için form'umuzu kesip bunun yerine bir arrow fonksiyon ekleyip formu fonksiyon içerisine ekleyerek return edelim.
- formun _onSubmit_ attribütüne ise bir fonksiyon ataması yapacağız. Bu durumda fonksiyonu az önce oluşturduğumuz arrow fonksiyon içerisinde süslü paranterler içerisinde parametre olarak alalım. Çalıştıracağımız fonksiyon yine formiğin bize sağladığı _handleSubmit_ fonksiyonudur.
- formumuza _onSubmit_ kısmına _handleSumbit_ fonksiyonumuzu ekledik ancak sumbit olduğunda inputlarımızın boş olarak gönderildiği gözlemleneektir. Bununda önüne geçebilmek için inputlarımıza, değişikliklerin eklenmesi için _onChange_ özelliklerine bir fonksiyon ekleyeceğiz. Bunun içinde Formik'in bize sağladığı _handleChange_ fonksiyonunu kullanacağız. Gene bunu arrow fonksiyonumuz içerisinde parametre olarak alıyoruz ve inputlarımızın _onChange_ özelliğine atama yapıyoruz. Böylece form submit olduğunda input içerikleride gönderilecektir.

```
import React from "react";
import "./index.css";
import { Formik } from "formik";

const Basic = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              name="firstName"
              onChange={handleChange}
              placeholder="Enter First Name"
            />
            <br />
            <br />
            <div>
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              name="lastName"
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
            <br />
            <br />
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input
              name="email"
              onChange={handleChange}
              placeholder="Enter Email"
              type="email"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;

```

**Radio / Checkbox / Dropdown**
Formik ile radio/ checkbox ve dropdown nasıl kullanabiliriz birazda bunlara bakalım.

- Formumuza type'ı radio olan bir input ve bunun üstüne bir span tanımlayalım. Span içerisinde cinsiyet belirtelim.
- Aslında yukarıdaki yapıdan bir farkı bulunmadığını göreceksiniz. Şimdi _initialValues_ kısmında yeni eklediğimiz inputların tutulacağı parametreleritanımlayalım.
- Daha sonra eklediğimiz inputlarda değişikliklerialgılayacak _onChange_ özelliğini ve _checked_,_value_,_name_ parametrelerini verelim.
- Formun altına kolaylık olması açısından json formatında formun içerisindeki _values_ yani forma girilen verileri ekleyerek gözlemleyelim.

```
 <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
              Football
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
              Photography
            </div>
            <br />
            <br />
            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="turkey" hidden selected>
                Turkey
              </option>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">Usa</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <code
              style={{
                display: "block",
                width: "400px",
                overflowWrap: "break-word",
                marginBottom: "20px",
              }}
            >
              {JSON.stringify(values)}
            </code>
```

**useFormik**
Yukarıdaki gibi _Formik_ komponentini revize edip normal elementleri kullanarak bir form oluşturduğumuzda işleri dahada kolay kurulabilir bir yapıya getirebiliri. İşte bunun için bize verilmiş olan _useFormik_ hook' unu kullanacağız.

```
import React from "react";
import "./index.css";
import { useFormik } from "formik";

const Basic = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
        </div>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="Enter First Name"
        />
        <br />
        <br />
        <div>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Enter Last Name"
        />
        <br />
        <br />
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          type="email"
        />
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>
        <br />
        <br />
        <select
          name="country"
          defaultValue={values.country}
          onChange={handleChange}
        >
          <option value="turkey">Turkey</option>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">Usa</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code
          style={{
            display: "block",
            width: "400px",
            overflowWrap: "break-word",
            marginBottom: "20px",
          }}
        >
          {JSON.stringify(values)}
        </code>
      </form>
    </div>
  );
};

export default Basic;

```

Yukarıdaki kod bloğumuzdan da görüldüğü üzere bu hhok'u kullandığımızda formumuzu bir arrow foksiyon içerisinde oluşturmaya gerek kalmayacaktır. _useFormik_ hook'u içerisinde _initialValues_ değerlerimiz ve _onSubmit_ foknsiyonum tanımlarız. Böylece formumuz daha yalın bir hale bürünmüş olur.

**Form Validation**
Olmazsa olmazımız validasyon işlemleridir. Validasyon işlemleri için yup kütüphanesini kullanacağız. Bu iki kütüphane birlikte kullanarak işlemleri nasıl yapabiliriz bu kısmada bir bakalım. İşlem aşamalarımız aşağıdaki gibi olacak.

- Validasyon işlemleri için yup kütüphanesini kullanacağız.
- yup kütüphanesini yükleyelim.
  ```
  npm install -S yup // yup kütüphanesini yüklüyoruz.
  ```
- Daha sonra _components_ dizinimiz altına _validation_ dizini altına _validation.js_ dosyamızı oluşturuyoruz ve bu dosyamıza validasyonlarımızı ekleyeceğiz.
- oluşturduğumuz bu validasyon dosyamızı sonda export etmeyi unutmuyoruz.
- Oluşturduğumuz validasyon dosyamızı kullanacağımız dosya içerisine import etmeyi unutmuyoruz.
- Formumuz içerisinde kullandığımız komponentler için validasyon işlemlerimizi dokümantasyondan da yararlanarak hazırlıyoruz. (Örneğin: inputların doldurulması zorunluluğu (required), minimum karakter uzunluğu (min()), email olması (email()) v.s.)
- Validasyonları yazarken dikkat etmemiz gereken en önemli husus validasyon için kullandığımız parametre ismi ile values parametre isimleri mutlaka aynı olmalıdır. Aksi takdirde validasyon işlemi çalışmayacaktır.
- Validasyon işlemini kullanabilmek için _useFormik_ içerisinde _handleBlur_, _errors_, _touched_ proplarını almalıyız. Daha sonrainput'un _onBlur_ özelliğine _handleBlur_ atamasını yapmalıyız.
- Gelen error mesajları için inputumuzun altına bir div içerisinde mesajımızı yayımlayabiliriz. Ancak yayımlamadan önce bir error mesajı varmı, varsa göster ve inputa fokus olma işleminden sonra göstermesi için gerekli olan touched prop'umuzu kullanalım.
- Yukarıda yaptıklarımız ile validasyon tanımlama işlemlerini gerçekleştiriyoruz. Böylece belirlediğimiz validasyon işlemleri gerçekleşmeden formumuz submit olmayacaktır.

```
import * as yup from "yup";

let validations = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Adınız minimum 3 karakterden oluşmalıdır.")
    .required("Zorunlu alan, Adınızı boş geçemezsiniz..."),
  lastName: yup
    .string()
    .min(2, "Soyadınız minimum 2 karakterden oluşmalıdır...")
    .required("Zorunlu alan... Soyadınızı boş geçemezsiniz."),
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz...!")
    .required("Zorunlu alan...Email adresinizi boş geçemezsiniz."),
  password: yup
    .string()
    .min(5, "Parola minimum 5 karakterden oluşmalıdır.")
    .required("Zorunlu alan, parola boş geçilemez"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Palolalar uyuşmuyor...!")
    .required("Zorunlu alan...Yukarıdaki girilen parolayı tekrar giriniz."),
  hobies: yup.array().length(2, "En az iki seçim yapmalısınız...!"),
  country: yup.string().required("Zorunlu alan...Şehir seçimi yapmalısınız"),
});

export default validations;

```

formumuz ise aşağıdaki gibi kodlanacaktır.

```
import React from "react";
import "./App.css";
import { useFormik, validateYupSchema } from "formik";

import validationSchema from "./components/validations";

const App = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "male",
        hobies: [],
        country: "",
      },
      onSubmit: (values) => {
        //alert(JSON.stringify(values, null, 2));
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
        </div>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="Enter First Name"
          value={values.firstName}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && (
          <div className="error">{errors.firstName}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Enter Last Name"
          value={values.lastName}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <div className="error">{errors.lastName}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          type="email"
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          type="password"
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="passwordConfirm">Password Confirm</label>
        </div>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          placeholder="Enter Password"
          type="password"
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Photography
        </div>
        {errors.hobies && touched.hobies && (
          <div className="error">{errors.hobies}</div>
        )}
        <br />
        <br />
        <span style={{ paddingRight: "10px" }}>Ülke</span>
        <select
          name="country"
          defaultValue={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option disabled value="">
            {" "}
            -- select an option --{" "}
          </option>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">Usa</option>
        </select>
        {errors.country && touched.country && (
          <div className="error">{errors.country}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code
          style={{
            display: "block",
            width: "400px",
            overflowWrap: "break-word",
            marginBottom: "20px",
          }}
        >
          {JSON.stringify(values)}
        </code>
      </form>
    </div>
  );
};

export default App;
```
