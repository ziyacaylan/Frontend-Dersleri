import React, { useEffect } from "react";
import SettingsBtn from "../IconComponent/SettingsBtn";
import Logo from "../../my-logo.png";
import locationGif from "../../assets/icons/location.gif";
import useGeoLocation from "../../hook/useGeoLocation";
import { useWeather } from "../../context/WeatherContext";
import CityForm from "./CityForm";

function Header() {
  const location = useGeoLocation();
  const { loading, setLoading, weatherData } = useWeather();

  //console.log(e.target.value);
  //console.log(city);

  // useEffect(() => {
  //   setLoading(true);
  // }, [location.loaded]);

  return (
    <div className="header-container">
      <div className="row my-auto">
        <div className="col-md-1 d-flex align-items-center justify-content-center py-2">
          <img src={Logo} alt="My Logo" className="logo" />
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            <div className="d-flex justify-content-center align-items-center-important flex-wrap">
              <img src={locationGif} alt="" className="icon-location pb-1" />
            </div>
            <div className="ps-1 text-indigo-500">
              <div className="d-flex justify-content-start flex-wrap py-2 ps-3">
                <div>
                  <span className="geo-text">Enlem</span>
                </div>
                <div>
                  <span>
                    : {location.loaded ? location.coordinates.lat : "..."}
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-start flex-wrap py-2 ps-3">
                <div>
                  <span className="geo-text">Boylam</span>
                </div>
                <div>
                  <span>
                    : {location.loaded ? location.coordinates.lng : "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h4>Burada Hava Durumu</h4>
        </div>
        <div className="col-md-1 d-flex justify-content-center align-items-center">
          <button className="settings-button">
            <SettingsBtn />
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
