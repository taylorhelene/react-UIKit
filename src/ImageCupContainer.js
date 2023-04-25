import React from "react";

export default function ImageCupContainer(props){
  return(<div className={props.className}>{props.children}<img  src={props.src} alt={props.alt}></img></div>);
}