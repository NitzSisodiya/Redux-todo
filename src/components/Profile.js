import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getUserProfile} from "../redux/operations"

function Profile() {
  const user_id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.TodoReducer.user);
  useEffect(() => {
    dispatch(getUserProfile(user_id));
  }, []);
  return (
    <>
      <div>
        {" "}
        {user.name}-Profile
        <div className="image center">
          {console.log("profile", user.profile)}
          <img src={user.profile} height={180} width={150}></img>
        </div>
      </div>
    </>
  );
}

export default Profile;
