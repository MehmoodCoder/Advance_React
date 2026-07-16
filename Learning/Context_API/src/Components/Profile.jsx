import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { User } = useContext(UserContext);

  if (!User) {
    return <div>Please Login</div>;
  } else {
    return (
      <>
        <div>
          <h3>Welcome, {User.username}</h3>
        </div>
      </>
    );
  }
}

export default Profile;
