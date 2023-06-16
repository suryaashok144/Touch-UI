import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Screen1, Screen2, Screen3 } from "./postScreen"

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
     <Tab.Navigator>
       <Tab.Screen name="Post" component={Screen1} />
       <Tab.Screen name="Story" component={Screen2} />
       <Tab.Screen name="Flick" component={Screen3} />
     </Tab.Navigator>
  );
}
export default MyTabs;