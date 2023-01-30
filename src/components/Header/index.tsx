import {  Container, BackButton } from "./styles";
import { Text, Image} from "react-native";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
   

   { 
        showBackButton &&
        <BackButton>
           
           <Image
  source={require("../../assets/backIconImg.png")}
  style={{ width: 55, height: 55 }}
/>
           
        </BackButton>
      }
<Image
  source={require("../../assets/logoImg.png")}
  style={{ width: 46, height: 55 }}
/>

    </Container>
  )
}