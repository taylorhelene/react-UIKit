import React from "react";

export default function CardHeadertext(props){
return(
  <h1 className="ui-cardHeader">
    {props.children}
  </h1>
);
}