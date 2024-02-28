import { useFonts } from 'expo-font';
import Colors from './App/Utils/Colors';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';

// import {withAuthenticator,useAuthenticator} from '@aws-amplify/ui-react-native';


import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
Amplify.configure(amplifyconfig);

// const userSelector = (context) => [context.user];

// const SignOutButton = () => {
//   const { user, signOut } = useAuthenticator(userSelector);
//   return (
//     <Pressable onPress={signOut} style={styles.buttonContainer}>
//       <Text style={styles.buttonText}>
//         Hello, {user.username}! Click here to sign out!
//       </Text>
//     </Pressable>
//   );
// };


const App = ()=> {
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

export default App;
