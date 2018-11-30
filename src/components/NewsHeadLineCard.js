import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";
import moment from "moment";

const ScreenArea = styled.View`
  margin: 5px 10px;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  padding: 50px 20px 0px 20px;
`;

const Area = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
    console.log("Time is ", time);
    console.log("Time", moment(time).fromNow());
    return (
      <ScreenArea>
        <Area>
          <Image
            style={{
              width: imageUrl === null ? 0 : 75,
              height: imageUrl === null ? 0 : 75,
              marginRight: imageUrl === null ? 0 : 20
              //Some thing has change
            }}
            source={{ uri: `${imageUrl}` }}
          />
          <CategoryLabel>{title ? title : "No Title"}</CategoryLabel>
        </Area>
        <Text
          style={{
            alignSelf: "flex-end",
            paddingTop: 30,
            paddingBottom: 10,
            color: "#aaa"
          }}
        >
          {moment(time).fromNow()}
        </Text>
      </ScreenArea>
    );
  }
}
