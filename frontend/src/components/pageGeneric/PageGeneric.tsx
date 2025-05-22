import React from "react";
import "./PageGeneric.css";

interface IPageGeneric {
  title: string;
  children: React.ReactNode;
}

const PageGeneric = ({ title, children }: IPageGeneric) => {
  return (
    <div className="page-content">
      <h1>{title}</h1>
      {children}
    </div>
  );
};
export default PageGeneric;
