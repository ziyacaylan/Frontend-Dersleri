import { useEffect } from "react";
import { useFormik } from "formik";
import { useCity } from "../../context/CityContext";
import { useWeather } from "../../context/WeatherContext";
import Form from "react-bootstrap/Form";

function CityForm() {
  const { city, setCity } = useWeather();
  const { handleSubmit, values, handleChange, handleBlur } = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      setCity((city) => values.city);
    },
  });
  useEffect(() => {
    setCity(city);
  }, [city, setCity]);
  return (
    <div className="form-container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-center">
          <input
            id="city"
            name="city"
            type="text"
            className="city-text py-1 ps-3 text-gray-100"
            placeholder="Bir konum giriniz"
            onChange={handleChange}
            value={values.city}
          />
        </div>
      </form>
    </div>
  );
}

export default CityForm;
