import React from "react";
import SettingsBtn from "../IconComponent/SettingsBtn";
import Logo from "../../my-logo.png";
import locationGif from "../../assets/icons/location.gif";
import useGeoLocation from "../../hook/useGeoLocation";
import { useWeather } from "../../context/WeatherContext";
import CityForm from "./CityForm";

function Header() {
  const location = useGeoLocation();
  const { language } = useWeather();

  //console.log(e.target.value);
  //console.log(city);

  // useEffect(() => {
  //   setLoading(true);
  // }, [location.loaded]);

  return (
    <div className="header-container container-fluid">
      <div className="row my-auto">
        <div className="col-md-1 d-flex align-items-center justify-content-center py-2">
          <img src={Logo} alt="My Logo" className="logo" />
        </div>
        <div className="col-md-3">
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
        <div className="col-md-7 d-flex justify-content-start align-items-center">
          <h4 className="text-weight-3 color-orange-500 text-size-5">
            Hava Durumu
          </h4>
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
