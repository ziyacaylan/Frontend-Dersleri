import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Zorunlu alan..."),
  password: yup
    .string()
    .min(6, "En az 6 karakterden oluşmalıdır.")
    .required("Zorunlu alan..."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan..."),
});

export default validations;
