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
