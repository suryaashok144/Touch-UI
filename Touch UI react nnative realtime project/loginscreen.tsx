import React,{useState} from "react";
import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image,Alert} from "react-native"
import  OcticonsIcon from "react-native-vector-icons/Octicons"
import FeatherIcon  from "react-native-vector-icons/Feather"
import AntDesignIcon  from "react-native-vector-icons/AntDesign"

let Login=({navigation}:any)=>{
    const [mobile,setmobile]=useState("");
    const [password,setpasword]=useState("");
        let submit=()=>{
            
            fetch('https://test.touchapp.in/XXX(confidential Api)', {
                method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json'
                 },
                body: JSON.stringify({
                    
                        mobile :mobile,
                        password : password,
                        fcm_token : "dzKVb93jSGKSo6CPcMxL-x:APA91bHCdFvKgcJDF3vm5SqIyXP0cV16VRsHcjEMpv0IM--UuKKhOQixixHecxJAJEd0JWa1ipS_Bscb68Zw0VNaPoTgmguHHamV2EYQXyLKBC_oMb5NLPDH7fw2uTlNW45rqZGGHHeb",
                        udid : "250e38da7a9421e6"
                     
                })
              })
              .then(response => {console.log(response,"ashok1")
               if(response.status===200){
                Alert.alert(" you are successful loged in")
               }else{ Alert.alert("you are entered wrong detailes ,please entered valid detailes")

               }
                })
              //.then((data)=>{console.log(data,"ashok2")})
              .catch((error) => {
                console.log(error,"ashok3");
                
              });
           
        }
return(
   
    <ImageBackground source={require("./assets/signupscreen1.webp")} style={styles.container}> 
        <Image source={require("./assets/logo.png")} style={{height:60,width:60,marginBottom:50}}/>
    <View style={styles.container1}>
        <Text style={styles.Weltext}>Welcome</Text>
        
            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"rgb(255,255,255)",width:250,marginBottom:20}}>
                <FeatherIcon name="user" size={20} color="rgb(255,255,255)" />
                <TextInput value={mobile} onChangeText={(text)=>{setmobile(text)}} placeholder="Mobile number" style={{ marginLeft: 10,fontSize:20,width:240}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"rgb(255,255,255)",width:250,marginBottom:20}}>
                <OcticonsIcon name="key" size={20} color="rgb(255,255,255)" />
                <TextInput value={password} onChangeText={(text)=>{setpasword(text)}} placeholder="Password" style={{ marginLeft: 10,fontSize:20 ,width:200}} />
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate("Forget")}} style={{margin:5,marginBottom:20,marginLeft:165}}><Text style={{color:"rgb(255, 94, 109)",fontSize:18}}>Forgot Password</Text></TouchableOpacity>
       
        <View style={{alignItems:"center",justifyContent:"center",borderRadius:50,borderWidth:2,borderColor:"white",marginLeft:190,marginBottom:20}}>
            <TouchableOpacity onPress={submit} style={{backgroundColor:"rgb(255, 94, 109)",height:50,width:50,alignItems:"center",justifyContent:"center",borderRadius:50,margin:5}}><AntDesignIcon name="arrowright" size={30} color="#000"/></TouchableOpacity>
        </View>
    </View>
   

    <View style={{flexDirection:"row",columnGap:3,marginTop:70}}>
        <Text style={{color:"rgb(255,255, 255)",fontSize:18}}>Don't have an account?</Text><TouchableOpacity onPress={()=>{navigation.navigate("Sing Up")}}><Text style={{color:"rgb(255, 94, 109)",fontSize:18}}>Sing Up</Text></TouchableOpacity>
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
    marginLeft:140,
    marginTop:20,
    marginBottom:30
    
}
    
})

export default Login;