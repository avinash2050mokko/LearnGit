import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { API_KEY } from '../../all'
import NewsHeadLineCard from '../components/NewsHeadLineCard'

const ViewArea = styled.View`
  flex: 1;
  background-color: #fff;
`

export default class NewsHeadLine extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('country'),
      headerStyle: {
        backgroundColor: '#482952',
        elevation: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }

  state = { countryCode: undefined, data: undefined }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?${this.props.navigation.getParam(
        'source'
      )}&apiKey=${API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ViewArea>
          {this.state.data !== undefined &&
            this.state.data.articles.map((data, index) => (
              <NewsHeadLineCard
                source={data.author}
                key={index}
                title={data.title}
                imageUrl={data.urlToImage}
                time={data.publishedAt}
              />
            ))}
        </ViewArea>
      </ScrollView>
    )
  }
}
