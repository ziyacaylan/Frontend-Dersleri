import { useEffect } from "react";
import { useAnimation } from "../../context/AnimationContext";
import { useWeather } from "../../context/WeatherContext";
function Settings() {
  const { anim, setAnim } = useAnimation();
  const { language, setLanguage, tempType, setTempType } = useWeather();

  useEffect(() => {
    localStorage.setItem("language", language);
    //localStorage.setItem("tempType", tempType); // tempType
  }, [language]);

  const handleChange = () => {
    setLanguage(language === "tr" ? "eng" : "tr");
  };

  return (
    <div className={`settings-page ${anim}`}>
      <div className="container mt-1 pt-1">
        <div className="d-flex flex-column atustify-content-center align-items-center mt-3">
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
          <div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="language"
                // name="language"
                //value={language}
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
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                °C / °F
              </label>
            </div>
            {/* buranın altına */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
