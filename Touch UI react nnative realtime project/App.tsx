import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "./signupScreen";
import Login from "./loginscreen";
import Otp from "./otpScreen";
import ForgotPassword from "./forgetpasswordscreen";
//import Test from "./test";
//import Post from "./postScreen";
import MyTabs from "./tabnavigation";
//import Mycomponent from "./permissions";
const Stack=createNativeStackNavigator();
let App=()=>{
    return(
        
      //   <Login/>
      // <SignUp/>
      //  <Test/>
      // <Otp/>
    //<ForgotPassword/>
    <Stack.Navigator >
                  {/* <NavigationContainer>            
                    <MyTabs/>
                  </NavigationContainer> */}
                 {/* <Stack.Screen  name="CHAT BOX" component={Chatt1}/> */}
                 <Stack.Screen  name="Login" component={Login} options={{headerShown: false}}/>
                 <Stack.Screen  name="Sing Up" component={SignUp} options={{headerShown: false}}/>
                 <Stack.Screen  name="OTP" component={Otp} options={{headerShown: false}}/>
                 <Stack.Screen  name="Forget" component={ForgotPassword} options={{headerShown: false}}/>
             </Stack.Navigator>
    //<MyTabs/>
    //<Mycomponent/>
    )
}
     
export default App;