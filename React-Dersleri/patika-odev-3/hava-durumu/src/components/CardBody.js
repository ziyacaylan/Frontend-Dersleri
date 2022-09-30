import Card from "react-bootstrap/Card";
import { useGeoPosition } from "../context/GoePositionContext";
//import useGeoLocation from "./useGeoLocation";

function CardBody() {
  const { location } = useGeoPosition();
  //const location = useGeoLocation();
  console.log(location);
  return (
    <div className="container">
      <Card style={{ width: "800px" }}>
        <Card.Body>
          {/* <p>
            {location.loaded &&
              `latitude: ${location.coordinates.lat} longitude : ${location.coordinates.lng}`}
          </p> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBody;
