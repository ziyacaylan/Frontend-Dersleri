import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <div style={{ paddingLeft: "20px" }}>
      <h1>User Details</h1>
      {isLoading && <h4>Loading...</h4>}
      <ul>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <li> Name: {JSON.stringify(user.username)}</li>}
        {!isLoading && <li> E-Mail: {JSON.stringify(user.email)}</li>}
        {!isLoading && <li> Street: {JSON.stringify(user.address.street)}</li>}
        {!isLoading && <li> Company: {JSON.stringify(user.company.name)}</li>}
        {/* Loading halindeyken boş obje göstermeyi engeller. (Loading yoksa objecti göster, varsa gösterme) */}
      </ul>
      <br />

      <Link
        style={{ padding: "0 1rem" }}
        to={`/users/${
          parseInt(id) === 10 ? parseInt((id = 1)) : parseInt(id) + 1
        }`}
      >
        Next User- ({parseInt(id) + 1})
      </Link>
    </div>
  );
}
