import { View, Text, TextInput } from "react-native";
import React from "react";
import { InputStyle } from "@/styles/input.style";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { OrangeDark, Salmon } from "@/constants/Colors";

export default function PasswordSetting() {
  return (
    <View>
      <View>
        <Text>Password</Text>
        <View>
          <TextInput
            secureTextEntry={true}
            placeholder="* * * * * * * * * * * * * * * * * * *"
            style={[InputStyle.fieldStyle]}
          />
          <View
            style={{
              position: "absolute",
              right: 20,
              transform: [{ translateY: "50%" }],
            }}
          >
            <FontAwesome5 name="eye" size={24} color={Salmon} />
          </View>
        </View>
      </View>
    </View>
  );
}
