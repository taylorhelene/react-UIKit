import React from "react";

export default function Button(props){
  return (
  <button className={props.className} type={props.type} disabled={props.disabled}>{props.children}</button>
  );
}