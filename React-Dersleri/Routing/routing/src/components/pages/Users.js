import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

let activeStyle = {
  color: "red",
};

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div
      style={{
        marginLeft: "20px",
        paddingRight: "20px",
        display: "flex",
      }}
    >
      <div style={{ borderRight: "solid 2px" }}>
        <h1>Users</h1>
        {isLoading && <h3>Loading...</h3>}
        <ul>
          {users.map(
            (user) =>
              !isLoading && (
                <li>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                      };
                    }}
                    key={user.id}
                    to={`/users/${user.id}`}
                  >
                    {user.id}-{user.name}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
