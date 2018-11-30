import React from "react";
import styled from "styled-components";

const BG = styled.TouchableOpacity`
  padding: 8px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.colors["text"]};
  margin: 5px 5px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors["text"]};
`;

export default class OulLineButton extends React.Component {
  render() {
    const { label, code } = this.props;
    return (
      <BG>
        <Label>{label}</Label>
      </BG>
    );
  }
}
