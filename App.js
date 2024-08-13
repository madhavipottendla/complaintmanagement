
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Scanner from './Screens/Scanner'
import Complaint from './Screens/Complaint';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formm from './Forms/Formm';
import Scannerform from './Forms/Scannerform';

import Page2 from './Forms/Page2';
import Page3 from './Forms/Page3';
import Page4 from './Forms/Page4';
import Page5 from './Forms/Page5';
import { AppProvider } from './Forms/AppContext';
import Submit from './Forms/Submit';
import Track from './Screens/Track';
import Page1 from './Forms/Page1';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

   <NavigationContainer>
   <AppProvider>
    <Stack.Navigator>
    <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='complaint' component={Complaint} options={{headerShown:false}}/>
    <Stack.Screen name='scan' component={Scanner} options={{headerShown:false}}/>
   <Stack.Screen name='form' component={Formm} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='sform' component={Scannerform} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='form2' component={Page2} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='form3' component={Page3} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='form4' component={Page4} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='form5' component={Page5} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='last' component={Submit} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='track' component={Track} options={{headerShown:false}}></Stack.Screen>
   <Stack.Screen name='form1' component={Page1} options={{headerShown:false}}></Stack.Screen>

    </Stack.Navigator>
    </AppProvider>
   </NavigationContainer>

  );
}