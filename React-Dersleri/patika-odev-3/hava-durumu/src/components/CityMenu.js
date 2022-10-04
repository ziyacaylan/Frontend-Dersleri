import React, { useEffect } from "react";
import { useCity } from "../context/CityContext";
import Form from "react-bootstrap/Form";

function CityMenu() {
  const { city, setCity, JSONCityData } = useCity();
  //console.log(JSONCityData);
  const handleCity = (e) => {
    return JSONCityData.filter(
      (item) => item.name === e.target.value && setCity(item)
    );
    //console.log(e.target.value);
    //console.log(city);
  };

  useEffect(() => {
    setCity(city);
  }, [city, setCity]);
  return (
    <Form.Select
      name="city"
      id="city"
      aria-label="Default select example"
      onChange={handleCity}
    >
      <option>Bir Şehir Seçiniz...</option>
      {JSONCityData.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default CityMenu;
