import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getUserProfile, uploadProfile } from "../redux/operations";

function Profile() {
  const user_id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.TodoReducer.user);
  useEffect(() => {
    dispatch(getUserProfile(user_id));
  }, []);

  const [profile, setProfile] = useState(user.profile);

  const selectProfile = (e) => {
    setProfile(e.target.files[0]);
  };

  const changeProfile = (user_id) => {
    if (profile !== user.profile) {
      var formData = new FormData();
      formData.append("profile", profile);
      dispatch(uploadProfile(user_id, formData));
    }
  };

  return (
    <>
      <div className="image my-2 text-center   bg-light shadow">
        {" "}
        {user.name}-Profile
        <div className="image ">
          <img
            className="border border-dark rounded"
            src={user.profile}
            height={180}
            width={150}
          ></img>
        </div>
        <div className=" text-center m-2">
          {" "}
          <input
            type="file"
            className=""
            name="profile"
            filename="profile"
            onChange={selectProfile}
          />
        </div>
        <div className="">
          {" "}
          <button
            className="btn btn-success m-2"
            type="button "
            onClick={() => changeProfile(user_id)}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
