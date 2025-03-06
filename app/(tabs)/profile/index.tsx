import { View, Text, Image } from "react-native";
import ProfileImage from "@assets/images/profileImage.png"
import React from "react";

export default function Profile() {
  return (
    <View style={{flex:1 ,flexDirection:"column", alignItems:"center"}}>
      <Image source={ProfileImage} height={148} width={148} style={{borderRadius:"100%",marginBottom:8}}/>
      <Text style={{fontSize:20,fontWeight:700}}>Madison Smith</Text>
      <Text style={{fontSize:13}}><Text style={{fontWeight:"600"}}>ID</Text>:25030024</Text>
    </View>
  );
}
