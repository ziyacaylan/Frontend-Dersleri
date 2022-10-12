import { useEffect } from "react";
import { useAnimation } from "../../context/AnimationContext";
import { useWeather } from "../../context/WeatherContext";
function Settings() {
  const { anim, setAnim } = useAnimation();
  const {
    language,
    setLanguage,
    tempType,
    setTempType,
    currentWeather,
    city,
    savedCity,
    setSavedCity,
  } = useWeather();

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("tempType", tempType); // tempType
    localStorage.setItem("savedCity", JSON.stringify(savedCity));
  }, [language, tempType, savedCity]);

  const handleChange = () => {
    setLanguage(language === "tr" ? "eng" : "tr");
  };

  const handleChangeTempType = () => {
    setTempType(tempType === "°C" ? "°F" : "°C");
  };

  const handleSavedCityData = () => {
    if (city) {
      setSavedCity({
        id: 0,
        cityName: currentWeather.name,
        icon: currentWeather.weather[0].icon,
        temp: `${currentWeather.main.temp} ${tempType === "°C" ? "°C" : "°F"}`,
      });
      alert("Kayıt Başarılı...");
    } else {
      alert("Önce bir şehir aramalısın...!");
    }
  };

  return (
    <div className={`settings-page ${anim}`}>
      <div className="container mt-1 pt-1">
        <div className="d-flex flex-column atustify-content-center align-items-center mt-3">
          {/* Geri Butonu */}
          <div>
            <button
              className="btn btn-warning btn-sm mb-3 btn-prev"
              onClick={() =>
                setAnim(anim === "settings-page-up" ? "" : "settings-page-up")
              }
            >
              Geri
            </button>
          </div>
          {/* Dil Bilgisi ve  */}
          <div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="language"
                checked={Boolean(`${language === "tr" ? 1 : ""}`)}
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                ENG / TR
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="tempType"
                checked={Boolean(`${tempType === "°C" ? 1 : ""}`)}
                onChange={handleChangeTempType}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                °F / °C
              </label>
            </div>
            {/* savedCity button */}
            <div className="d-flex justify-content-center align-items-center pt-2 ">
              <button
                className="btn btn-success btn-sm savedCity"
                onClick={handleSavedCityData}
              >
                Şehir Kayıt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
