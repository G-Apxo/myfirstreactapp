import React from "react";

const Footer = ({ navigation }) => {
  return (
    <footer>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
