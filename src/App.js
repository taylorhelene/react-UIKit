import React from "react";
import Link from "./Link.js";
import Button from "./Button.js";
import Card from "./Card.js";
import CardContainer from "./CardContainer.js";
import "./style.css";

export default function App() {
  return (
    <div>
      <Link href="https://react-tutorial.app">This</Link>
      <Button disabled={false} type="button">This</Button>
      <CardContainer>
      <Card>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      </Card>
      <Card>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      </Card>
      </CardContainer>
    </div>
  );
}
