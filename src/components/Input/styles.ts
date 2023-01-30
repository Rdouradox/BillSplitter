import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLUE};
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  
  border-radius: 6px;
  padding: 16px;
`;