import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  // deixa os icones dinamicos
  icon: keyof typeof MaterialIcons.glyphMap;
  // deixa type condicional
  type?: ButtonIconTypeStyleProps;
};
// se type n for explicito, sera primary
export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
