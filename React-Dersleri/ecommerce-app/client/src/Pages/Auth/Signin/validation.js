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
});

export default validations;
