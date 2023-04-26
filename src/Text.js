import React from "react";

export default function Text(props){
return(
  <p className={props.className}>
    {props.children}
  </p>
);
}