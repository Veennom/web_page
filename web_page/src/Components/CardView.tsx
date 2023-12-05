import React from "react";
import "./CardView.css";
interface Props {
  title: string;
  description: any;
  image: any;
  onClick: any;
}

export const CardView = ({ image, title, description, onClick }: Props) => {
  return (
    <div className="card">
      <img src={image}></img>
      <div className="main">
        <p className="title" onClick={onClick}>
          {title}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
