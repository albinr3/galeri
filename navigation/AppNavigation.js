import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import AlbumInside from '../screens/AlbumInside';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: "green"},headerTintColor: "white"}}>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="AlbumInside" component={AlbumInside}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  
  export default AppNavigation