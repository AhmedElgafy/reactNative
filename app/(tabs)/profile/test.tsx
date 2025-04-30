import { View, Text, Modal, Pressable, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Pressable
          onPress={() => setOpen(!open)}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Open Modal</Text>
        </Pressable>
      </View>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={{ color: "white" }}>hi this is a modal</Text>
            <Button
              title="close modal"
              onPress={() => setOpen(!open)}
              color="green"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // dimmed background
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
