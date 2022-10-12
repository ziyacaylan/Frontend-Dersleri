import React from "react";
import { useFormik } from "formik";
import { useCity } from "../../context/CityContext";
import { useWeather } from "../../context/WeatherContext";
import validationSchema from "../validations/validation";
function CityForm() {
  const { setCity } = useCity();
  const { language } = useWeather();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        city: "",
      },
      onSubmit: (values) => {
        setCity(values.city);
      },
      validationSchema,
    });
  return (
    <div className="form-container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-center">
          <input
            id="city"
            name="city"
            type="text"
            className="city-text py-1 ps-3 text-gray-100"
            placeholder={`${
              language === "tr" ? "Bir konum giriniz" : "Enter a City..."
            }`}
            onChange={handleChange}
            value={values.city}
            onBlur={handleBlur}
          />
        </div>
        {errors.city && touched.city && (
          <div className="error ps-3 pt-2">{errors.city}</div>
        )}
      </form>
    </div>
  );
}

export default CityForm;
