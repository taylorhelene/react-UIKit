import React from "react";

export default function Image(props){
  
  return (
    <div className="ui-image"><img src={props.src} alt={props.alt}/></div>
  );
}