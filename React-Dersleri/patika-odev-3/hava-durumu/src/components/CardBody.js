import Card from "react-bootstrap/Card";
import useGeoLocation from "../hook/useGeoLocation";
import CityMenu from "./CityMenu";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function CardBody() {
  const location = useGeoLocation();

  //console.log(url);
  //console.log(location);
  return (
    <div className="container">
      <Card style={{ width: "800px" }} className="weather-card">
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="d-flex col-12 col-md-6 flex-wrap">
              <div className="d-flex col-12 col-md-6">
                <strong>Enlem</strong>
                {location.loaded && ` : ${location.coordinates.lat} `}
              </div>

              <div className="d-flex col-12 col-md-6">
                <strong>Boylam</strong>
                {` : ${location.coordinates.lng}`}
              </div>
            </div>
            <div className="d-flex justify-content-end col-12 col-md-6 mb-3">
              <BootstrapSwitchButton
                checked={true}
                onlabel={"Konum"}
                offlabel="Şehir"
                onChange={(checked = true) => {
                  this.setState({ isUserAdmin: checked });
                }}
                width={95}
                height={30}
                className="d-inline-block"
              />
            </div>
          </div>
          <CityMenu />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBody;
