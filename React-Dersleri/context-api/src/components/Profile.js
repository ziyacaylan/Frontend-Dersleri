import { useState } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "ziyac", bio: "frontend developer" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };
  //console.log(data);
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      )}
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
