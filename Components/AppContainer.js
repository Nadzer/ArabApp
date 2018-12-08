import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen'
import ExerciseScreen from './ExerciseScreen'

const appNavigator = createStackNavigator({
    Home: HomeScreen,
    Exercise: ExerciseScreen
  }, {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(appNavigator)
export default AppContainer
