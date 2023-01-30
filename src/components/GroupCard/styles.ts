import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;

  align-items: baseline;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

`;

export const Plus = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  top: -8px;
  
`;