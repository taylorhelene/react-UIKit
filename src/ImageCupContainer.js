import React from "react";

export default function ImageCupContainer(props){
  return(<div className={props.className}><img  src={props.src} alt={props.alt}/></div>);
}