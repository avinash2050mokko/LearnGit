import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import OutLineButton from "../components/OulLineButton";
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
  flex-direction: row;
  flex-wrap: wrap;
`;

const NormalText = styled.Text`
  color: #fff;
  font-size: 20px;
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
    console.log("Navigation", this.props);
    return (
      <ViewArea>
        <NormalText style={{ marginBottom: 10 }}>Select Country</NormalText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Area>
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
          </Area>
        </ScrollView>
      </ViewArea>
    );
  }
}

{
  /*<OutLineButton
                label={data.name}
                key={index}
                code={data.value}
                onPress={() =>
                  this.props.navigation.navigate("NewsHeadLine", {
                    code: data.value,
                    country: data.name
                  })
                }
              />*/
}
