import React, { Component } from "react";
import {StatusBar} from "react-native";
import styled from "styled-components/native";

import Ultra from "../assets/fonts/ultra.ttf";
import Button from "../components/Button";

const ViewArea = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  justify-content: space-between;
`;

const Area = styled.View`
  margin-top: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  /*  font-family: Ultra;*/
`;

const NormalText = styled.Text`
  color: #787878;
  font-size: 18px;
`;

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ViewArea>
          <StatusBar
              backgroundColor="red"
              barStyle="light-content" />
        <Area>
          <Title>{`NEWS \nDECK`}</Title>
          <NormalText>A sublime mobile news experience</NormalText>
        </Area>

        <Area>
          <Button
            label={"Get Started"}
            weight={"bold"}
            onPress={this.props.navigation.navigate("NewsPreferences")}
          />
          <NormalText style={{ alignSelf: "center", fontSize: 14, margin: 10 }}>
            Powered by NewsAPI.org
          </NormalText>
        </Area>
      </ViewArea>
    );
  }g
}
