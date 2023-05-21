

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../authenticationScreens/loginUser';
import Signup from '../authenticationScreens/signUp';
import HomeScreen from '../screens/Home';
import Splash from '../screens/Splash';
import Apphome from '../screens/AppHome';
import ForgetPass from '../authenticationScreens/forgetPwd';
import SQuiPHome from '../SQuiP/SQuiPHome';
import Policedetails from '../SQuiP/Police/PoliceDetails';
import Firebrigadedetails from '../SQuiP/FireBrigade/FireBrigadeDetails';
import Detailsambulance from '../SQuiP/Ambulance/AmbulanceDetails';
import Policeconfirm from '../SQuiP/Police/PoliceConfirm';

const Stack = createNativeStackNavigator();

function Appnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Login" component={Login}  options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Apphome"
          component={Apphome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SQuiPHome"
          component={SQuiPHome}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Policedetails"
          component={Policedetails}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Firebrigadedetails"
          component={Firebrigadedetails}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Detailsambulance"
          component={Detailsambulance}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Policeconfirm"
          component={Policeconfirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Appnavigation;
