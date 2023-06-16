import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image, Alert} from "react-native"
import AntDesignIcon  from "react-native-vector-icons/AntDesign"

import axios from "axios";
let ForgotPassword=({navigation}:any)=>{
const [mobile,setmobile]=useState("");
  let submit=({navigation}:any)=>{
    fetch('https://test.touchapp.in/XXX(confidential API)', {
        method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
        body: JSON.stringify({
            mobile : mobile
        })
      })
      .then(response => {console.log(response)
      if(response.ok===true){
            Alert.alert("otp verificaton success")
           // navigation.navigate("Login")
            console.log(response,"responseee")
      }}).catch((error) => {
        Alert.alert("otp verificaton faild please enter correct otp")
        
      });
    


  }

return(
   
    <ImageBackground source={require("./assets/signupscreen1.webp")} style={styles.container}> 
        <Image source={require("./assets/logo.png")} style={{height:60,width:60,marginBottom:50}}/>
        <Text style={styles.Weltext}>Forgot Password</Text>
        
          
       
    <View style={styles.container1}>
    <Text style={styles.notetext}>Please enter mobile number recieve a</Text>
        <Text style={styles.notetext1}>conformation code to set a new password</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"rgb(255,255,255)",width:250,marginBottom:20}}>
                <AntDesignIcon name="mobile1" size={20} color="rgb(255,255,255)" />
                <TextInput value={mobile} onChangeText={(text)=>{setmobile(text)}} placeholder="Enter Your Mobilenumber" style={{ marginLeft: 10,fontSize:20,width:240}} />
            </View>
       
        <View style={{alignItems:"center",justifyContent:"center",borderRadius:50,borderWidth:2,borderColor:"white",marginLeft:190,marginBottom:20}}>
            <TouchableOpacity onPress={()=>{submit()}} style={{backgroundColor:"rgb(255, 94, 109)",height:50,width:50,alignItems:"center",justifyContent:"center",borderRadius:50,margin:5}}><AntDesignIcon name="arrowright" size={30} color="#000"/></TouchableOpacity>
        </View>
    </View>
   

    <View style={{flexDirection:"row",columnGap:3,marginTop:70}}>
        <Text style={{color:"rgb(255,255, 255)",fontSize:18}}>Do you want to</Text><TouchableOpacity><Text style={{color:"rgb(255, 94, 109)",fontSize:18}}> Cancel ?</Text></TouchableOpacity>
    </View>

    <TouchableOpacity style={{ marginTop:30}}><Text style={{color:"rgb(255, 94, 109)",fontSize:18}}>Data Policy</Text></TouchableOpacity>
   
    </ImageBackground>
)

};

const styles=StyleSheet.create({
container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
},
container1:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
    width:300,
    borderRadius:20
},
Weltext:{
    fontFamily:"Helvetica",
    fontSize:40,
    fontWeight:"bold",
    color:"white",
    marginTop:20,
    marginBottom:30
    
},
notetext:{
    fontFamily:"Helvetica",
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    marginTop:40,
   
},
notetext1:{
    fontFamily:"Helvetica",
    fontSize:20,
    fontWeight:"bold",
    color:"white",  
    marginBottom:40
}
    
})

export default ForgotPassword;