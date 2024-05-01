import React from "react";
// import image
import Avatar from "./assets/avatar-jessica.jpeg";
// import components
import ImageContainer from "./components/ImageContainer";
import ProfileDetails from "./components/ProfileDetails";
import LinkList from "./components/LinkList";

function App() {

  const profile = {
    name: "Dipankar Paul",
    location: "West Bengal, India",
    text: '"Front-end developer and avid reader."',
    image: "https://www.github.com/dipankarpaul2k.png",
    links: [
      {
        to: "https://www.frontendmentor.io/profile/dipankarpaul2k",
        label: "Frontend Mentor",
      },
      {
        to: "https://github.com/dipankarpaul2k",
        label: "GitHub",
      },
      {
        to: "https://www.linkedin.com/in/iamdipankarpaul/",
        label: "LinkedIn",
      },
      {
        to: "https://codepen.io/dipankarpaul2k",
        label: "CodePen",
      },
      {
        to: "https://dev.to/dipankarpaul",
        label: "Dev.to",
      },
    ],
  };

  return (
    <>
      {/* body */}
      <div className="max-w-[1536px] mx-auto px-5 bg-[#141414] min-h-screen font-Inter grid place-items-center">
        {/* card container */}
        <div className="card p-5 pb-6 bg-[#1F1F1F] rounded-xl max-w-[350px] flex flex-col items-center text-center">
          {/* profile image */}
          <ImageContainer src={profile.image} />
          {/* profile details */}
          <ProfileDetails
            name={profile.name}
            location={profile.location}
            text={profile.text}
          />
          {/* profilelinks */}
          <LinkList links={profile.links} />
        </div>
      </div>
    </>
  );
}

export default App;
