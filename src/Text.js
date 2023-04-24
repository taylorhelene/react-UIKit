import React from "react";

export default function Text(props){
return(
  <p className="ui-text">
    {props.children}
  </p>
);
}