import React from "react";

export default function ContainerRow(props){
  return(
    <div className={props.className}>{props.children}</div>
  );
}