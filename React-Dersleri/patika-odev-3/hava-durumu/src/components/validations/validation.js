import * as yup from "yup";

let validations = yup.object().shape({
  city: yup
    .string()
    .min(3, "Minimum üç karakterden oluşan bir şehir giriniz..."),
});

export default validations;
