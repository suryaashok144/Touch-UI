import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image} from "react-native"
import  Icon from "react-native-vector-icons/MaterialCommunityIcons"
import  OcticonsIcon from "react-native-vector-icons/Octicons"
import FeatherIcon  from "react-native-vector-icons/Feather"
import MaterialIcon  from "react-native-vector-icons/MaterialIcons"
import AntDesignIcon  from "react-native-vector-icons/AntDesign"
import DeviceInfo from 'react-native-device-info';
import axios from "react-native-axios"
import messaging from '@react-native-firebase/messaging';
import * as ImagePicker from "react-native-image-picker"

let SignUp=({navigation}:any)=>{
    let [image,setImage]=useState("");
    let [phone,setphone]=useState("");
    let [Password,setpassword]=useState("");
    let [name,setname]=useState("");
    let [username,setusername]=useState("");
    let [birth,setbirth]=useState("");
    let [gender,setgender]=useState("");
    let [token,settoken]=useState("");
    let [udid,setudid]=useState("");

let pickimage=()=>{

    const options = {
                maxWidth: 2000,
                maxHeight: 2000,
                storageOptions: {
                  skipBackup: true,
                  path: 'images'
                }
              }
            ImagePicker.launchImageLibrary(options, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.assets[0].uri };
                console.log(source);
                setImage(source);
              }
            });
}
    let gett=()=>{
      const ud = DeviceInfo.getUniqueId();
    setudid(ud._j);
    console.log("udid=",ud._j);

   messaging().getToken().then((token) => {
     if (token) {      
       console.log("Fcmtoken=", token);
       settoken(token)
     } else {
       console.log('No registration token available');
     }
   }).catch((err) => {console.log('Error getting FCM registration token:', err)});
    }
let submit=()=>{

   gett();

            const formData = new FormData();
            formData.append('full_name', name);
            formData.append('mobile', phone);
            formData.append('image', {
                uri: image.uri,
                type: 'image/jpeg',
                name: 'image.jpg',
              })
            formData.append("gender",gender);
            formData.append('udid', udid);
            formData.append("password",Password);
            formData.append('fcm_token', token);
            formData.append('dob', birth);
            formData.append('user_name', username);
        
            fetch('https://test.touchapp.in/XXX(confidential api)', {
              headers: {
                     'Content-Type': 'multipart/form-data',
                   },
              method: 'POST',
              body: formData,
              })
            .then(response => response.json())
            .then(data => {console.log(data);
                // if(data.status===422){
                //   for(let i=0;i<=data.errors.length;i++){
                //     console.log(data.errors[i]["msg"])
                //   }

                if(data.status===200){
                  navigation.navigate("OTP")
                }
            

            console.log(data.errors[1]["msg"])})
            .catch(error => console.log(error));
   
    
return(
   
    <ImageBackground source={require("./assets/signupscreen1.webp")} style={styles.container}> 
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text1}>Account</Text>
    <View style={styles.container1}>
        <TouchableOpacity onPress={()=>{pickimage()}}><Icon name="camera-plus" size={30} color="white" style={styles.icon1}/>
        </TouchableOpacity>
        
        <Text style={styles.profiletext}>Upload profile photo</Text>
        
            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:20}}>
                <Icon name="email-outline" size={20} color="rgb(255,255,255)" />
                <TextInput value={phone} onChangeText={(text)=>{setphone(text)}} placeholder="Mobile number" style={{ marginLeft: 10,fontSize:20,width:200}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:20}}>
                <OcticonsIcon name="key" size={20} color="rgb(255,255,255)" />
                <TextInput value={Password} onChangeText={(text)=>{setpassword(text)}} placeholder="Password" style={{ marginLeft: 10,fontSize:20 ,width:200}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:20}}>
                <FeatherIcon name="user" size={20} color="rgb(255,255,255)" />
                <TextInput value={name} onChangeText={(text)=>{setname(text)}} placeholder="Full Name" style={{ marginLeft: 10 ,fontSize:20,width:200}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:20}}>
                <FeatherIcon name="user" size={20} color="rgb(255,255,255)" />
                <TextInput value={username} onChangeText={(text)=>{setusername(text)}} placeholder="User Name " style={{ marginLeft: 10,fontSize:20,width:200 }} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:20}}>
                <MaterialIcon name="date-range" size={20} color="rgb(255,255,255)" />
                <TextInput value={birth} onChangeText={(text)=>{setbirth(text)}} placeholder="Select D.O.B" style={{ marginLeft: 10 ,fontSize:20,width:200}} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,borderBottomWidth:1,borderColor:"white",width:250,marginBottom:30}}>
                <FeatherIcon name="user" size={20} color="rgb(255,255,255)" />
                <TextInput value={gender} onChangeText={(text)=>{setgender(text)}} placeholder="Gender" style={{ marginLeft: 10,fontSize:20,width:200 }} />
            </View>

        <View style={{alignItems:"center",justifyContent:"center",borderRadius:50,borderWidth:2,borderColor:"white",marginLeft:190,marginBottom:20}}>
            <TouchableOpacity onPress={submit} style={{backgroundColor:"rgb(255, 94, 109)",height:50,width:50,alignItems:"center",justifyContent:"center",borderRadius:50,margin:5}}><AntDesignIcon name="arrowright" size={30} color="white"/></TouchableOpacity>
        </View>
    </View>
     
    </ImageBackground>

    // <Text>ashok</Text>
)

};

const styles=StyleSheet.create({
container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
},
text:{
    fontFamily:"Helvetica",
    fontSize:35,
    fontWeight:"900",
    color:"rgba(255,255,255,0.8)",
    marginLeft:205,
    padding:0,
    marginBottom:0,
    
},

text1:{
    fontFamily:"Helvetica",
    fontSize:35,
    fontWeight:"bold",
    color:"rgb(255,255,255)",
    marginLeft:190,
    padding:0,
    marginBottom:5,
    marginTop:0
},
container1:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
    width:300,
    borderRadius:20
},
icon1:{
    marginTop:30,
    borderColor:"rgb(255, 94, 109)",
    borderWidth:2,
    borderRadius:10,
    padding:15
},
profiletext:{
    fontFamily:"Helvetica",
    fontSize:18,
    fontWeight:"bold",
    color:"white",
    padding:10,
    
}
    
})

export default SignUp;