import React from "react";
import { useFormik } from "formik";
import { useCity } from "../../context/CityContext";
import { useWeather } from "../../context/WeatherContext";
import Form from "react-bootstrap/Form";

function CityForm() {
  const { setCity } = useCity();
  const { language } = useWeather();

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      setCity(values.city);
    },
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
          />
        </div>
      </form>
    </div>
  );
}

export default CityForm;
