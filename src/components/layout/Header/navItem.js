import React from "react";

const navItem = ({ item }) => {
  return (
    <li>
      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default navItem;
