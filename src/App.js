import React from "react";
import Link from "./Link.js";
import Button from "./Button.js";
import Card from "./Card.js";
import ContainerRow from "./ContainerRow.js";
import Image from "./Image.js";
import "./style.css";

export default function App() {
  return (
    <div>
      <Link href="https://react-tutorial.app">This</Link>
      <Button disabled={false} type="button">This</Button>
      <ContainerRow>
      <Card>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      </Card>
      <Card>
      <Image src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listlogo.png" alt="you"/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      </Card>
      </ContainerRow>
    </div>
  );
}
