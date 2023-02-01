import { useNavigation } from "@react-navigation/native";

import { Container, BackButton } from "./styles";
import { Text, Image } from "react-native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <Image
            source={require("../../assets/backIconImg.png")}
            style={{ width: 55, height: 55 }}
          />
        </BackButton>
      )}
      <Image
        source={require("../../assets/logoImg.png")}
        style={{ width: 46, height: 55 }}
      />
    </Container>
  );
}
