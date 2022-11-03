import * as yup from "yup";

const editSchema = yup.object().shape({
  title: yup.string().required("Zorunlu Alan..."),
  description: yup
    .string()
    .required("Zorunlu alan...")
    .min(5, "Minimum 5 karakterden oluşan bir açıklama yazınız..."),
  price: yup.string().required("Zorunlu alan..."),
});

export default editSchema;
