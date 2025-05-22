import React from "react";
import "./Card.css";

interface ICard {
  children: React.ReactNode;
}

const Card = ({ children }: ICard) => (
  <div className="card-content">{children}</div>
);

export default Card;
