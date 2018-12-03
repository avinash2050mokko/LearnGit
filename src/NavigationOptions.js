import { createStackNavigator } from 'react-navigation'

import IntroScreen from './screen/IntroScreen'
import NewsPreferences from './screen/NewsPreferences'
import NewsHeadLine from './screen/NewsHeadLine'

export default createStackNavigator(
  {
    NewsPreferences: {
      screen: NewsPreferences,
      navigationOptions: {
        title: 'New Preferences'
      }
    },
    NewsHeadLine: {
      screen: NewsHeadLine
    }
  },
  {
    initialRouteName: 'NewsPreferences'
  }
)
