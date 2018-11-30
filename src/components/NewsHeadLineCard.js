import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";
import moment from "moment";

import { Ionicons } from "@expo/vector-icons";

const ScreenArea = styled.View`
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  padding: 50px 20px 0px 20px;
`;

const Area = styled.View`
  flex-direction: row;
`;

const TimeArea = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const CategoryLabel = styled.Text`
  color: #04000b;
  font-size: 16px;
  flex: 1;
  flex-wrap: wrap;
  font-weight: bold;
`;

export default class NewsHeadLineCard extends React.Component {
  render() {
    const { title, imageUrl, time } = this.props;

    return (
      <ScreenArea>
        <Area>
          <Image
            style={{
              width: imageUrl === null ? 0 : 100,
              height: imageUrl === null ? 0 : 100,
              marginRight: imageUrl === null ? 0 : 20
            }}
            source={{ uri: `${imageUrl}` }}
          />
          <CategoryLabel>{title ? title : "No Title"}</CategoryLabel>
        </Area>
        <TimeArea>
          <Ionicons name={"md-time"} size={16} color={"#aaa"} />

          <Text
            style={{
              color: "#aaa",
              marginLeft: 5
            }}
          >
            {moment(time).fromNow()}
          </Text>
        </TimeArea>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#efefef",
            width: "100%"
          }}
        />
      </ScreenArea>
    );
  }
}
