import Card from "react-bootstrap/Card";

function CardBody() {
  //const { latitude, longitude } = useLocation();
  // const componentDidMount = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   });
  // };
  // componentDidMount();
  return (
    <div className="container">
      <Card style={{ width: "800px" }}>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quisquam, beatae quasi id molestiae cum! Quasi repudiandae numquam
            aliquid error quaerat aut eveniet suscipit aspernatur ipsam,
            pariatur eligendi architecto in! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Autem eveniet ipsam perferendis
            nesciunt id. Maiores earum explicabo illum reprehenderit enim
            aperiam quos ex quia veniam, dolore dolor soluta laborum vel.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBody;
