import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
// import Login from '../authscreens/login';
// import Signup from '../authscreens/signup';
import Drawerhome from './DrawerHome';

const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Drawerhome"
          component={Drawerhome}
          options={{title: 'Home',headerShown:false}}
        />
        
      </Drawer.Navigator>
    </>
  );
};
export default Drawernavigator;
