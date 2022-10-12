import React from "react";
import SettingsBtn from "../IconComponent/SettingsBtn";
import Logo from "../../my-logo.png";
import locationGif from "../../assets/icons/location.gif";
import useGeoLocation from "../../hook/useGeoLocation";
import { useWeather } from "../../context/WeatherContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegMinusSquare } from "react-icons/fa";

function Header() {
  const location = useGeoLocation();
  const { language, savedCity, setSavedCity } = useWeather();

  const handleDeleteCityData = () => {
    localStorage.removeItem("savedCity");
    setSavedCity({});
  };

  return (
    <div className="header-container container-fluid">
      <div className="row my-auto">
        {/* Burası Logo */}
        <div className="col-md-1 d-flex align-items-center justify-content-center py-2">
          <img src={Logo} alt="My Logo" className="logo" />
        </div>
        {/* Burası Location */}
        <div className="col-md-3 d-flex align-items-center justify-content-center mb-3">
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            <div className="d-flex justify-content-center align-items-center-important flex-wrap">
              <img src={locationGif} alt="" className="icon-location pb-1" />
            </div>
            <div className="ps-1 color-orange-400  text-weight-1">
              {/* Burası Enlem */}
              <div className="d-flex justify-content-between pt-3 ps-2 location-lat">
                <div className="pe-4 ">
                  <span className="geo-text">{`${
                    language === "tr" ? "Enlem: " : "Latitude: "
                  }`}</span>
                </div>
                <div>
                  <span>
                    {location.loaded
                      ? location.coordinates.lat
                      : `${language === "tr" ? "İzin YOK" : "No Permission"}`}
                  </span>
                </div>
              </div>
              {/* Burası Boylam */}
              <div className="d-flex justify-content-between flex-wrap py-2 ps-2">
                <div className="pe-2">
                  <span className="geo-text">{`${
                    language === "tr" ? "Boylam: " : "Longitude: "
                  }`}</span>
                </div>
                <div>
                  <span>
                    {location.loaded
                      ? location.coordinates.lng
                      : `${language === "tr" ? "İzin YOK" : "No Permission"}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BurasıKayıtlı Weather */}
        <div className="col-md-7 d-flex justify-content-between align-items-center">
          {savedCity.cityName && (
            <div className="pb-3 ms-5">
              <span className="color-orange-500 text-size-1 text-weight-1 pe-2">
                {`${savedCity.cityName}: `}
              </span>
              <span>
                <img
                  src={`icons/${savedCity.icon}.png`}
                  alt="weather"
                  className="weth-icon p-2"
                />
              </span>
              <span className="px-2 color-cyan-500 text-size-1 text-weight-1">{`${savedCity.temp} `}</span>
              <span>
                <button className="btn-minus">
                  <FaRegMinusSquare
                    className="minus-icon"
                    onClick={handleDeleteCityData}
                  />
                </button>
              </span>
            </div>
          )}
        </div>
        {/* Burası Settings Button */}
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
