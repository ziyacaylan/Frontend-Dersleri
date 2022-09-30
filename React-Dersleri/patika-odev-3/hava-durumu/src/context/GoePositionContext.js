import { createContext, useContext, useEffect, useState } from "react";

const GeoPositionContext = createContext();

export const GeoPositionProvider = ({ children }) => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = ({ location }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolication not supported" });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const values = { location };
  return (
    <GeoPositionContext.Provider value={{ values }}>
      {" "}
      {children}{" "}
    </GeoPositionContext.Provider>
  );
};

export const useGeoPosition = () => useContext(GeoPositionContext);
