import React from "react";
import Link from "./Link.js";
import Button from "./Button.js";
import Card from "./Card.js";
import ContainerRow from "./ContainerRow.js";
import Image from "./Image.js";
import Text from "./Text.js";
import CardHeadertext from "./CardHeadertext.js";
import ImageCupContainer from "./ImageCupContainer";
import "./style.css";

export default function App() {
  return (
    <div >
      <ContainerRow className="imageRow">
      <ImageCupContainer src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/cupimage.png" className="containerimage">
        <Button className="ui-button-right" disabled={false} type="button">Sign Up</Button> 
      </ImageCupContainer>
      <ImageCupContainer  className="extensionimage">
      <ContainerRow className="logo-row">
        <Image className="logo-image" src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/logo.png" alt="logo"/>
        <Text className="logo-header">Sanaa__Vijanaa</Text>
      </ContainerRow>
      <ContainerRow className="header-row">
        <Text className="header-text">Features</Text>
        <Text className="header-text">Accessories</Text>
        <Text className="header-text">Outdoor</Text>
        <Text className="header-text">Indoor</Text>
      </ContainerRow>
      <Text className="title-text">Need to showcase those great crafts <br/>you’ve made? </Text>
      <Text className="subtitle">We feature handi-crafts for fair trade <br/><br/>and provide a wide market of unique products. </Text>
      <Button className="button" disabled={false} type="button">Get Started</Button>
      </ImageCupContainer>
      </ContainerRow>
     
      <ContainerRow className="containerRow">
      
      <Card>
      <ContainerRow className="cardRow">
      <Image className="ui-image" src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 1:</CardHeadertext>
      </ContainerRow>
      <Text className="ui-text">Ensure you register your correct details to ensure trust and reliance to your clients</Text>
      </Card>

      <Card>
      <ContainerRow className="cardRow">
      <Image className="ui-image" src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 2:</CardHeadertext>
      </ContainerRow>
      <Text className="ui-text">Ensure you fill in your product information including the photos and the price.</Text>
      </Card>
      
      <Card>
      <ContainerRow className="cardRow">
      <Image className="ui-image" src="https://cdn.jsdelivr.net/gh/taylorhelene/react-UIKit@main/src/Images/listicon.png" alt="you"/>
      <CardHeadertext>Step 3:</CardHeadertext>
      </ContainerRow>
      <Text className="ui-text">Follow up on all clients who notify you of their interest in the product. Keep the communication clear and professional.</Text>
      </Card>
      </ContainerRow>
    </div>
  );
}
