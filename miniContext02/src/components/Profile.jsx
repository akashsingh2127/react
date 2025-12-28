import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); 

  if (!user) return <div className="text-center mt-4 text-gray-600">Please Login</div>;

  return (
    <div className="text-center mt-4 text-green-600 text-xl">
      Welcome, {user.username}! 🎉
    </div>
  );
}

export default Profile;
