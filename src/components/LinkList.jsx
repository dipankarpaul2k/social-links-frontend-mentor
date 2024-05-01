import React from "react";
import Links from "./Links";

function LinkList({ links }) {
  return (
    <ul className="w-full space-y-4">
      {links.map((link) => (
        <Links href={link.to} label={link.label} />
      ))}
    </ul>
  );
}

export default LinkList;
