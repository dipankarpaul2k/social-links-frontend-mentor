import React from "react";

function Links({ href, label }) {
  return (
    <a
      href={href || "https://github.com/dipankarpaul2k"}
      target="_blank"
      className="h-11 w-full rounded-lg text-white bg-[#333333] flex items-center justify-center hover:bg-[#D1F241] hover:text-black active:bg-[#D1F241] active:text-black hover:transition-all duration-300"
    >
      <span>{label || "GitHub"}</span>
    </a>
  );
}

export default Links;
