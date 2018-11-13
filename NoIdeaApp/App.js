import { createBottomTabNavigator } from 'react-navigation';

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
