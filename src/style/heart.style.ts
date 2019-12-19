import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    addButton: {
      position: "absolute",
      bottom: 32,
      left: 32,
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#378AD9",
      borderRadius: 30,
    },
    heartContainer: {
      position: "absolute",
      bottom: 30,
      backgroundColor: "transparent"
    },
    heart: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 300,
      fontWeight: '200'
    }
  });