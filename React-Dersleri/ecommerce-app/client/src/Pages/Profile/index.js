import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <Text as="b" fontSize={22} display="block">
        Profile
      </Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <Button colorScheme="pink" variant="solid" my="3" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
