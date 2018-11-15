import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './app/components/Home';
import { Restaurant } from './app/components/Restaurant';
import { Translator } from './app/components/Translator';

export default createBottomTabNavigator({
  // Home: Home,
  // Restaurant: Restaurant,
  // Translator: Translator,
  Home,
  Restaurant,
  Translator,
},
{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 14,
    },
  },
});

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Home />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
