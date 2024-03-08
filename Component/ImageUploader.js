import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection from device
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log({
      result,
    });
    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  console.log({
    selectedImage,
  });
  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.previewImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  previewImage: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default ImageUploader;
