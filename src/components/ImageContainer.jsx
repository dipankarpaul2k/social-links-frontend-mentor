import React from "react";

// import image
import Avatar from "../assets/avatar-jessica.jpeg";

function ImageContainer({ src }) {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden mt-1 mb-4">
      <img src={src || Avatar} alt="profile picture" className="object-cover" />
    </div>
  );
}

export default ImageContainer;
