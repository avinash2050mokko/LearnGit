import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import * as data from "../data/data";
import { ScrollView } from "react-native";

const ViewArea = styled.View`
  flex: 1;
  padding: 16px 10px;
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  justify-content: space-between;
`;

const Area = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Section = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;

const HorizontalLine = styled.View`
  border-bottom-width: 1;
  border-color: #aaa;
  padding-top: 35px;
`;

const NormalText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
`;

export default class NewsPreferences extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#482952",
      elevation: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <ViewArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Area>
            <NormalText>Select Country</NormalText>
            <Section>
              {data.country.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#fff",
                    margin: 5
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("NewsHeadLine", {
                      source: `country=${data.value}`,
                      code: data.value,
                      country: data.name
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff"
                    }}
                  >
                    {data.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </Section>

            <HorizontalLine />
            <NormalText>Sources</NormalText>

            <Section>
              {data.sources.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#fff",
                    margin: 5
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("NewsHeadLine", {
                      source: `sources=${data.value}`,
                      country: data.name
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff"
                    }}
                  >
                    {data.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </Section>
          </Area>
        </ScrollView>
      </ViewArea>
    );
  }
}
