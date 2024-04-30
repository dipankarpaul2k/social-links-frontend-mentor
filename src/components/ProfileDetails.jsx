import React from "react";

function ProfileDetails({ name, location, text }) {
  return (
    <div>
      <p className="text-white font-semibold text-2xl mt-4 mb-2">
        {name || "Jessica Randall"}
      </p>
      <p className="text-[#D1F241] font-medium text-base">{location || "London, United Kingdom"}</p>
      <p className="text-gray-300 mt-6 mb-5">
        {text || '"Front-end developer and avid reader."'}
      </p>
    </div>
  );
}

export default ProfileDetails;
