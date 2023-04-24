import React from "react";
import Link from "./Link.js";
import Button from "./Button.js";
import Card from "./Card.js";
import ContainerRow from "./ContainerRow.js";
import Image from "./Image.js";
import Text from "./Text.js";
import CardHeadertext from "./CardHeadertext.js";
import "./style.css";

export default function App() {
  return (
    <div>
      <Link href="https://react-tutorial.app">This</Link>
      <Button disabled={false} type="button">This</Button>
      <ContainerRow>
      
      <Card>
      <ContainerRow>
      <Image src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 1:</CardHeadertext>
      </ContainerRow>
      <Text>Ensure you register your correct details to ensure trust and reliance to your clients</Text>
      </Card>

      <Card>
      <ContainerRow>
      <Image src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 1:</CardHeadertext>
      </ContainerRow>
      <Text>Ensure you register your correct details to ensure trust and reliance to your clients</Text>
      </Card>
      
      <Card>
      <ContainerRow>
      <Image src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 1:</CardHeadertext>
      </ContainerRow>
      <Text>Ensure you register your correct details to ensure trust and reliance to your clients</Text>
      </Card>
      </ContainerRow>
    </div>
  );
}
