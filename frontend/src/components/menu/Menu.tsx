import React from "react";
import "./Menu.css";
import MobileMenu from "./MobileMenu";

export const menuItems: {name:string, path:string}[] = [
  { name: "Accueil", path: "/" },
  { name: "Produits", path: "/products" },
];

export const renderMenuItems = () => {
  return menuItems.map((item) => (
    <li key={item.name}>
      <a href={item.path} className="menu-item">
        {item.name}
      </a>
    </li>
  ));
};

const Menu = () => {
  return (
    <>
      <nav className="sidebar desktop">
        <ul className="menu-list">{renderMenuItems()}</ul>
      </nav>
      <MobileMenu />
    </>
  );
};

export default Menu;
