import React from "react";
import Links from "./Links";

function LinkList({ links }) {
  return (
    <div className="w-full flex flex-col space-y-4">
      {links.map((link) => (
        <Links href={link.to} label={link.label} />
      ))}
    </div>
  );
}

export default LinkList;
