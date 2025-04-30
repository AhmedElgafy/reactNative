import { View, Text, Modal } from "react-native";
import React from "react";
import { Salmon } from "@/constants/Colors";
interface PropI {
  open: boolean;
  setOpen: (e: boolean) => void;
}
export default function LogoutModal({ open, setOpen }: PropI) {
  return (
    <Modal visible={open} transparent={true} animationType="slide">
      <View style={{ backgroundColor: Salmon }}>
        
      </View>
    </Modal>
  );
}
