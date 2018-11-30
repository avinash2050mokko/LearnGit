import React from "react";
import styled from "styled-components";

const BG = styled.TouchableOpacity`
  padding: 12px 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.secondary};
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
`;

export default props => {
  const { label, weight, ...rest } = props;
  console.log(
    `Props is ${label} weight ${weight} and the rest is ${JSON.stringify(rest)}`
  );
  let content;
  content = (
    <Label style={{ fontWeight: weight ? weight : "normal" }}>{label}</Label>
  );
  return <BG>{content}</BG>;
};
