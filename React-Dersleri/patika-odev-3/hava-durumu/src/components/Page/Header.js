import React, { useEffect } from "react";
import SettingsBtn from "../IconComponent/SettingsBtn";
import Logo from "../../my-logo.png";
import locationGif from "../../assets/icons/location.gif";
import useGeoLocation from "../../hook/useGeoLocation";
import { useWeather } from "../../context/WeatherContext";
import { useCity } from "../../context/CityContext";
import Form from "react-bootstrap/Form";

function Header() {
  const location = useGeoLocation();
  const { loading, setLoading, weatherData } = useWeather();
  const { city, setCity, JSONCityData } = useCity();

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

  useEffect(() => {
    setLoading(true);
  }, [location.loaded]);

  return (
    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 col-md-1 py-2">
            <img src={Logo} alt="My Logo" className="logo" />
          </div>
          <div className="col-sm-3 col-md-3 d-flex align-items-center location-border ms-2">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <img src={locationGif} alt="" className="icon-location pb-1" />
              </div>
              <div className="ps-1 text-indigo-500">
                <div className="d-flex justify-content-between">
                  <span className="let-lang">Enlem</span>
                  <span className="ps-3 let-lang">
                    {location.loaded ? location.coordinates.lat : "..."}
                  </span>
                </div>
                <div>
                  <span className="let-lang">Boylam</span>
                  <span className="ps-3 let-lang">
                    {location.loaded ? location.coordinates.lng : "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 d-flex align-items-center text-indigo-500">
            <div>
              <div>
                <span>{!loading ? "Yukleniyor..." : weatherData.name}</span>
              </div>
              <div>
                <span>
                  {!loading ? "Yukleniyor..." : weatherData?.main?.temp} °C
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 d-flex align-items-center">
            <div>
              <div>
                <Form.Control
                  type="text"
                  placeholder="Bir yergiriniz..."
                  id="city"
                  name="city"
                />
              </div>
              <div>
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
              </div>
            </div>
          </div>
          <div className="col col-md d-flex align-items-center">
            <button className="settings-button">
              <SettingsBtn />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
