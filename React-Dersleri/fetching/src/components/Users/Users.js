import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <h2>Loading...</h2>}
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default Users;
