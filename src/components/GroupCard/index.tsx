import { TouchableOpacityProps, Image } from "react-native";
import { Container, Title, Plus  } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  plus: string;
}

export function GroupCard({ title, plus, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Image
  source={require("../../assets/groupCardImg.png")}
  style={{ width: 50, height: 35 }}
/>
      <Title style={{ marginRight: 25, }}>
        {title }
      </Title>
      <Plus>
        {plus}
      </Plus>
      
    </Container>
  )
}