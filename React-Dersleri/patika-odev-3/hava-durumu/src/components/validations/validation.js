import * as yup from "yup";

let validations = yup.object().shape({
  city: yup
    .string()
    .min(3, "Minimum üç karakterden oluşan bir şehir giriniz...")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Şehir ismi harflerden oluşmalıdır...!"
    ),
});

export default validations;
