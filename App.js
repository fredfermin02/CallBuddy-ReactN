import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from './App/Utils/Colors';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';




export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'TitilliumWeb-Black': require('./assets/fonts/TitilliumWeb-Black.ttf'),
    'TitilliumWeb-Italic': require('./assets/fonts/TitilliumWeb-Italic.ttf'),
    'TitilliumWeb': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      background:Colors.PrimaryBrown
    },
  };

  return (
    

    
      <NavigationContainer theme={MyTheme}>
        
          <TabNavigation />
        
          

        
      </NavigationContainer>
    
  );
}

