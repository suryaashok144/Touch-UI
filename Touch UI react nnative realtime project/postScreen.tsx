 import React,{useState  } from "react";
 //import * as ImagePicker from 'react-native-image-picker';
 import { View,TouchableOpacity ,Text,StyleSheet,Image} from "react-native";

const Screen1 = () => {
  const [image,setimage]=useState("")
  const openGallery = () => {
      const options = {
        mediaType: 'mixed', // Set mediaType to 'photo' or 'video' depending on your requirement
        quality: 1,
      };
    
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
              setimage(source);
            }
          });}
  
      return(
          <View style={styles.container}>
        {image && (<Image source={{ uri:image.uri }} style={styles.image} />)}
        <TouchableOpacity onPress={openGallery}>
          <Text style={{color :"orange",fontSize:30}}>Select Image/Video</Text>
        </TouchableOpacity>
      </View>
  
      
        )
 
      }

const Screen2 = () => (
  <View>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View>
    <Text>Screen 3</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    backgroundColor:"red"
  },
});

export { Screen1, Screen2, Screen3 };
